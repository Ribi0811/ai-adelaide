import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TELEGRAM_TOKEN=process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_HOME_CHAT_ID  || "1140438132";

const SYSTEM_PROMPT = `You are the AI assistant for AI Adelaide — an AI consulting company helping Adelaide small businesses automate and grow.

YOUR ONLY TOPICS: AI voice receptionists, AI chatbots, websites, local SEO, business automation, and how these help Adelaide small businesses (tradies, allied health, retail).

YOUR GOAL: Have a friendly conversation, understand their business challenges, and collect their name, business name, and phone number so our team can follow up with a free consultation.

LEAD CAPTURE: When the conversation is going well, naturally ask: "What's the best number to reach you on? I can have Ivan give you a call to chat through how we can help."

STAY ON TOPIC: If asked about ANYTHING unrelated (recipes, sport, politics, other businesses, coding help, etc.) respond: "Ha, I wish I could help with that! I'm really only here to chat about AI solutions for your business. What's your biggest challenge with getting new customers right now?"

TONE: Friendly, local, plain English. No corporate jargon. You're having a chat, not giving a presentation. Short responses — 2-3 sentences max per message.

NEVER: Make up pricing, promise specific results, or claim to be human if directly asked.`;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

// ─── contact-info extraction ────────────────────────────────────────────────
function extractPhone(text: string): string | null {
  const m = text.match(/(?:\+?61\s?4\d{2}|04\d{2}|\(?0?8\)?\s?\d{4})[\s-]?\d{3}[\s-]?\d{3,4}/);
  return m?.[0]?.replace(/\s+/g, " ") || null;
}

function extractEmail(text: string): string | null {
  const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return m?.[0] || null;
}

function extractName(text: string): string | null {
  const patterns = [
    /(?:i am|i'm|im|my name is|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)(?=\s+(?:and|from|with|,|\.|$))/i,
    /name[:\s]+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
  ];
  for (const p of patterns) {
    const m = text.match(p);
    if (m) return m[1].trim();
  }
  return null;
}

function extractBusiness(text: string): string | null {
  const patterns = [
    /(?:i run|we run|i own|we own)\s+([A-Za-z0-9 '&’.-]{2,60}?)(?:\s+(?:in|at|and|with|,|\.|$))/i,
    /(?:business|company|clinic|shop|store|cafe|restaurant)\s+(?:is|called|name is)\s+([A-Za-z0-9 '&’.-]{2,60})/i,
  ];
  for (const p of patterns) {
    const m = text.match(p);
    if (m) {
      const cleaned = m[1].trim().replace(/\s+(in|at|and|with)$/i, "");
      if (cleaned.length >= 2) return cleaned;
    }
  }
  return null;
}

// ─── channels ──────────────────────────────────────────────────────────────
async function getSmtpConfig() {
  if (process.env.AIADELAIDE_SMTP_HOST && process.env.AIADELAIDE_SMTP_PASS) {
    return {
      email: process.env.AIADELAIDE_SMTP_USER || "hello@aiadelaide.com.au",
      password: process.env.AIADELAIDE_SMTP_PASS,
      smtp_host: process.env.AIADELAIDE_SMTP_HOST,
      smtp_port: Number(process.env.AIADELAIDE_SMTP_PORT || 465),
      ssl: (process.env.AIADELAIDE_SMTP_SECURE || "true") !== "false",
    };
  }
  const credsPath = "/Users/ivanribicic/.openclaw/workspace/.credentials/aiadelaide-email.json";
  const raw = await fs.readFile(credsPath, "utf8");
  return JSON.parse(raw);
}

async function notifyTelegram(text: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, error: data?.description || `HTTP ${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Telegram call failed" };
  }
}

async function sendTranscriptEmail(opts: {
  sessionId: string;
  transcript: IncomingMessage[];
  phone: string | null;
  email: string | null;
  name: string | null;
  business: string | null;
  hasContact: boolean;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const smtp = await getSmtpConfig();
    const transporter = nodemailer.createTransport({
      host: smtp.smtp_host,
      port: smtp.smtp_port,
      secure: smtp.ssl,
      auth: { user: smtp.email, pass: smtp.password },
    });

    const transcriptText = opts.transcript
      .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n\n");

    const subject = opts.hasContact
      ? `💬 Chat lead — ${opts.name || opts.business || opts.phone || "New contact"}`
      : `💬 Chat session (no contact info yet)`;

    const text = [
      `Time: ${new Date().toISOString()}`,
      `Session: ${opts.sessionId}`,
      `Name: ${opts.name || "—"}`,
      `Email: ${opts.email || "—"}`,
      `Phone: ${opts.phone || "—"}`,
      `Business: ${opts.business || "—"}`,
      `Contact info captured: ${opts.hasContact ? "YES" : "no"}`,
      "",
      "--- Transcript ---",
      transcriptText,
    ].join("\n");

    await transporter.sendMail({
      from: `AI Adelaide Chat <${smtp.email}>`,
      to: "hello@aiadelaide.com.au",
      subject,
      text,
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "SMTP send failed" };
  }
}

// ─── Ollama call ────────────────────────────────────────────────────────────
function getOllamaConfig() {
  const baseUrl = (process.env.OLLAMA_BASE_URL || "https://ollama.com").trim();
  const apiKey = process.env.OLLAMA_API_KEY?.trim();
  const model = (process.env.OLLAMA_MODEL || "glm-5:cloud").trim();

  if (!apiKey) {
    throw new Error("Missing OLLAMA_API_KEY env var.");
  }

  return { baseUrl, apiKey, model };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      sessionId?: string;
      messages?: IncomingMessage[];
    };

    const messages = Array.isArray(body.messages) ? body.messages : [];
    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    const sessionId = body.sessionId || "unknown-session";
    const { baseUrl, apiKey, model } = getOllamaConfig();

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        stream: false,
        options: {
          temperature: 0.4,
          num_predict: 320,
        },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Ollama request failed: ${errorText}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data?.message?.content?.trim() || data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ error: "Model returned an empty reply." }, { status: 502 });
    }

    // ─── build transcript + extract contact info ─────────────────────────
    const transcript: IncomingMessage[] = [...messages, { role: "assistant", content: reply }];
    const userText = transcript.filter((m) => m.role === "user").map((m) => m.content).join("\n");

    const phone = extractPhone(userText);
    const email = extractEmail(userText);
    const name = extractName(userText);
    const business = extractBusiness(userText);
    const hasContact = Boolean(phone || email);

    // ─── fire channels (parallel, never block the response) ──────────────
    // Email always fires (full transcript).
    // Telegram fires only when contact info is captured.
    const channelPromises: Promise<unknown>[] = [
      sendTranscriptEmail({
        sessionId,
        transcript,
        phone,
        email,
        name,
        business,
        hasContact,
      }),
    ];

    if (hasContact) {
      const tgText = [
        `💬 *New Chat Lead — AI Adelaide*`,
        ``,
        `*Name:* ${name || "—"}`,
        `*Business:* ${business || "—"}`,
        `*Phone:* ${phone || "—"}`,
        `*Email:* ${email || "—"}`,
        ``,
        `*Latest message:*`,
        userText.slice(-400),
        ``,
        `Reply in Mission Control or hit them up directly →`,
      ].join("\n");
      channelPromises.push(notifyTelegram(tgText));
    }

    // Fire-and-forget — don't make the visitor wait for SMTP/Telegram
    void Promise.allSettled(channelPromises).catch(() => {});

    return NextResponse.json({
      reply,
      leadCaptured: hasContact,
      contact: { phone, email, name, business },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected chat error." },
      { status: 500 }
    );
  }
}
