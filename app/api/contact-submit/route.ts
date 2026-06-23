import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_HOME_CHAT_ID || "1140438132";

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "contact-leads.json");

// SMTP creds: env vars (production/Vercel) win, else fall back to local file (dev)
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

async function sendContactEmail(lead: {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
  source: string;
}): Promise<{ ok: boolean; error?: string }> {
  let smtp;
  try {
    smtp = await getSmtpConfig();
  } catch (e) {
    return { ok: false, error: `SMTP config not available: ${e instanceof Error ? e.message : "?"}` };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.smtp_host,
      port: smtp.smtp_port,
      secure: smtp.ssl,
      auth: { user: smtp.email, pass: smtp.password },
    });

    const text = [
      `Time: ${new Date().toISOString()}`,
      `Name: ${lead.name || "—"}`,
      `Email: ${lead.email || "—"}`,
      `Phone: ${lead.phone || "—"}`,
      `Business: ${lead.business || "—"}`,
      `Service: ${lead.service || "—"}`,
      `Source: ${lead.source || "contact form"}`,
      "",
      "Message:",
      lead.message || "(no message)",
    ].join("\n");

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #5ef2d6; padding-bottom: 8px;">
          New Contact Form Lead — AI Adelaide
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Name</td><td style="padding: 8px;">${lead.name || "—"}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px;"><a href="mailto:${lead.email}">${lead.email || "—"}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Phone</td><td style="padding: 8px;"><a href="tel:${lead.phone}">${lead.phone || "—"}</a></td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Business</td><td style="padding: 8px;">${lead.business || "—"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #475569;">Service</td><td style="padding: 8px;">${lead.service || "—"}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; color: #475569;">Source</td><td style="padding: 8px;">${lead.source || "contact form"}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569;">Message:</p>
          <p style="margin: 0; white-space: pre-wrap; color: #0f172a;">${lead.message || "(no message)"}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          Reply directly to this email to respond to ${lead.name || "the lead"}.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `AI Adelaide Contact Form <${smtp.email}>`,
      to: "hello@aiadelaide.com.au",
      replyTo: lead.email || smtp.email,
      subject: `New enquiry from ${lead.name || "Unknown"} — ${lead.service || "AI Adelaide"}`,
      text,
      html,
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "SMTP send failed" };
  }
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  service?: string;
  message?: string;
  source?: string;
};

function clean(v: string | undefined) {
  return v?.trim() || "";
}

async function notifyTelegram(lead: {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
  source: string;
}): Promise<{ ok: boolean; error?: string }> {
  const text = [
    "🔔 *New Contact Form Lead — AI Adelaide*",
    "",
    `*Name:* ${lead.name || "—"}`,
    `*Email:* ${lead.email || "—"}`,
    `*Phone:* ${lead.phone || "—"}`,
    `*Business:* ${lead.business || "—"}`,
    `*Service:* ${lead.service || "—"}`,
    `*Source:* ${lead.source || "contact form"}`,
    "",
    `*Message:*`,
    lead.message || "(no message)",
  ].join("\n");

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
    if (!res.ok) {
      return { ok: false, error: data?.description || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Telegram call failed" };
  }
}

async function appendLead(entry: Record<string, unknown>) {
  await fs.mkdir(dataDir, { recursive: true });
  let existing: unknown[] = [];
  try {
    const txt = await fs.readFile(leadsFile, "utf8");
    existing = JSON.parse(txt);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(entry);
  await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2));
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    business: clean(body.business),
    service: clean(body.service),
    message: clean(body.message),
    source: clean(body.source) || "contact form",
  };

  if (!lead.email && !lead.phone) {
    return NextResponse.json(
      { error: "Need at least an email or phone" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const entry = { id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, timestamp, ...lead };

  const telegram = await notifyTelegram(lead);
  const email = await sendContactEmail(lead);

  try {
    await appendLead(entry);
  } catch (e) {
    console.error("contact-submit: failed to persist lead", e);
  }

  return NextResponse.json({
    ok: true,
    lead: entry,
    telegram,
    email,
  });
}

export async function GET() {
  return NextResponse.json({
    error: "POST a JSON body { name, email, phone, business, message } to submit a lead.",
  });
}
