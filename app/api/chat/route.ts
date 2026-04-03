import { NextRequest, NextResponse } from "next/server";
import { saveLeadFromTranscript } from "@/lib/chat-leads";

export const runtime = "nodejs";

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

    const transcript: IncomingMessage[] = [...messages, { role: "assistant", content: reply }];
    const lead = await saveLeadFromTranscript({
      sessionId: body.sessionId || "unknown-session",
      transcript,
    });

    return NextResponse.json({ reply, leadCaptured: Boolean(lead), lead });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected chat error." },
      { status: 500 }
    );
  }
}
