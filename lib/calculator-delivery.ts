import type { SheetLead } from "./lead-sheet";

export type CalculatorAttribution = {
  landing?: string; referrer?: string; utm_source?: string; utm_medium?: string; utm_campaign?: string; ts?: string;
};
export type CalculatorLead = {
  id: string; createdAt: string; tool: "ai-readiness-calculator"; name: string; email: string;
  businessName: string; phone: string; score: number | null; tier: string | null; attribution: CalculatorAttribution | null;
};
export type CalculatorChannelResult = { ok: boolean; error?: string };

export function calculatorSheetLead(lead: CalculatorLead): SheetLead {
  const score = lead.score === null ? "unknown" : `${lead.score}/100`;
  const tier = lead.tier || "unknown tier";
  return {
    id: lead.id, timestamp: lead.createdAt, name: lead.name, business: lead.businessName,
    email: lead.email,
    phone: lead.phone,
    service: "AI readiness",
    message: `AI readiness follow-up requested. Score: ${score}. Tier: ${tier}.`,
    source: "ai-readiness-calculator",
    attribution: lead.attribution,
  };
}

export async function deliverCalculatorLead(channels: {
  telegram: () => Promise<CalculatorChannelResult>;
  sheet: () => Promise<{ ok: boolean; status: string }>;
}) {
  const [telegramResult, sheetResult] = await Promise.allSettled([
    Promise.resolve().then(channels.telegram), Promise.resolve().then(channels.sheet),
  ]);
  const telegram = telegramResult.status === "fulfilled" ? telegramResult.value : { ok: false, error: "Telegram delivery failed" };
  const sheet = sheetResult.status === "fulfilled" ? sheetResult.value : { ok: false, status: "write_failed" };
  return { ok: telegram.ok || sheet.ok, telegram, sheet, persisted: sheet.ok };
}
