import { NextResponse } from "next/server";
import { appendLeadToGoogleSheet } from "@/lib/lead-sheet";
import { calculatorSheetLead, deliverCalculatorLead, type CalculatorAttribution, type CalculatorLead } from "@/lib/calculator-delivery";

type LeadPayload = Partial<Record<"name" | "email" | "businessName" | "phone" | "score" | "tier" | "attribution", unknown>>;
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_HOME_CHAT_ID || "1140438132";

function clean(value: unknown): string { return typeof value === "string" ? value.trim() : ""; }
const READINESS_TIERS = new Set(["AI Novice", "AI Explorer", "AI Ready", "AI Leader"]);
function safeTier(value: unknown): string | null {
  const tier = clean(value);
  return READINESS_TIERS.has(tier) ? tier : null;
}
function attribution(value: unknown): CalculatorAttribution | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  return { landing: clean(input.landing) || undefined, referrer: clean(input.referrer) || undefined, utm_source: clean(input.utm_source) || undefined, utm_medium: clean(input.utm_medium) || undefined, utm_campaign: clean(input.utm_campaign) || undefined };
}
function attributionLine(value: CalculatorAttribution | null): string {
  if (!value) return "—";
  const bits = [value.landing ? `landing ${value.landing}` : "", value.referrer === "direct" ? "direct" : value.referrer ? `ref ${value.referrer}` : "", value.utm_source ? `utm_source ${value.utm_source}` : "", value.utm_medium ? `utm_medium ${value.utm_medium}` : "", value.utm_campaign ? `utm_campaign ${value.utm_campaign}` : ""].filter(Boolean);
  return bits.length ? bits.join(" · ") : "—";
}
async function notifyTelegram(lead: CalculatorLead): Promise<{ ok: boolean; error?: string }> {
  if (!TELEGRAM_TOKEN) return { ok: false, error: "Telegram token not configured" };
  const text = ["🧮 New AI Readiness Calculator Lead — AI Adelaide", "", `Name: ${lead.name || "—"}`, `Email: ${lead.email || "—"}`, `Phone: ${lead.phone || "—"}`, `Business: ${lead.businessName || "—"}`, `Score: ${lead.score ?? "—"}${lead.tier ? ` (${lead.tier})` : ""}`, `Attribution: ${attributionLine(lead.attribution)}`].join("\n");
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }), signal: AbortSignal.timeout(7000) });
    const data = await response.json().catch(() => ({}));
    return response.ok ? { ok: true } : { ok: false, error: data?.description || `HTTP ${response.status}` };
  } catch (error) { return { ok: false, error: error instanceof Error ? error.message : "Telegram call failed" }; }
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
    payload = parsed as LeadPayload;
  } catch { return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 }); }
  const name = clean(payload.name), email = clean(payload.email), businessName = clean(payload.businessName), phone = clean(payload.phone);
  if (!name || !email || !businessName) return NextResponse.json({ ok: false, error: "Please provide your name, business name, and email." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  const score = typeof payload.score === "number" && Number.isFinite(payload.score) && payload.score >= 0 && payload.score <= 100 ? payload.score : null;
  const lead: CalculatorLead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    tool: "ai-readiness-calculator",
    name,
    email,
    businessName,
    phone,
    score,
    tier: safeTier(payload.tier),
    attribution: attribution(payload.attribution),
  };
  const delivery = await deliverCalculatorLead({ telegram: () => notifyTelegram(lead), sheet: () => appendLeadToGoogleSheet(calculatorSheetLead(lead)) });
  const result = { leadId: lead.id, telegram: delivery.telegram, persisted: delivery.persisted, sheet: delivery.sheet };
  if (!delivery.ok) return NextResponse.json({ ok: false, error: "Could not deliver your details. Please call (08) 7100 9788.", ...result }, { status: 502 });
  return NextResponse.json({ ok: true, ...result });
}
