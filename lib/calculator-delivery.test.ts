import assert from "node:assert/strict";
import test from "node:test";
// @ts-expect-error Node's strip-types runner loads the source file directly.
import { calculatorSheetLead, deliverCalculatorLead, type CalculatorLead } from "./calculator-delivery.ts";

const lead: CalculatorLead = { id: "calc-1", createdAt: "2026-09-09T00:00:00.000Z", tool: "ai-readiness-calculator", name: "Jane", email: "jane@example.com", businessName: "Example Co", phone: "0400 000 000", score: 72, tier: "AI Ready", attribution: { landing: "/tools/ai-readiness-calculator" } };

test("maps identity and fixed score tier summary without raw answers", () => {
  const row = calculatorSheetLead(lead);
  assert.equal(row.service, "AI readiness");
  assert.equal(row.plan, undefined);
  assert.equal(row.source, "ai-readiness-calculator");
  assert.equal(row.message, "AI readiness follow-up requested. Score: 72/100. Tier: AI Ready.");
  assert.equal("answers" in row, false);
});

test("starts Telegram and Sheet independently and succeeds when either works", async () => {
  const started: string[] = [];
  const result = await deliverCalculatorLead({ telegram: async () => { started.push("telegram"); throw new Error("down"); }, sheet: async () => { started.push("sheet"); return { ok: true, status: "saved" }; } });
  assert.deepEqual(started.sort(), ["sheet", "telegram"]);
  assert.equal(result.ok, true);
  assert.equal(result.persisted, true);
});

test("reports both channel failure without retrying ambiguous writes", async () => {
  let calls = 0;
  const result = await deliverCalculatorLead({ telegram: async () => { calls += 1; return { ok: false, error: "down" }; }, sheet: async () => { calls += 1; return { ok: false, status: "unconfirmed" }; } });
  assert.equal(calls, 2);
  assert.equal(result.ok, false);
  assert.equal(result.persisted, false);
});
