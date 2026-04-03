import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type LostLeadsPayload = {
  name?: string;
  email?: string;
  missed_calls?: number;
  job_value?: number;
  annual_leakage?: number;
};

type LeadEntry = {
  name: string;
  email: string;
  missed_calls: number;
  job_value: number;
  annual_leakage: number;
  timestamp: string;
};

const TELEGRAM_TOKEN = "8323105052:AAGAQRXykHrpLjd4JBns561_YPrvLDVLdWE";
const TELEGRAM_CHAT_ID = "1140438132";
const LEADS_FILE_PATH =
  "/Users/ivanribicic/.openclaw/workspace/projects/ai-adelaide/lost-leads-submissions.json";

function clean(value: string | undefined) {
  return value?.trim() || "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function asNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : Number.NaN;
}

async function appendLead(entry: LeadEntry) {
  const dir = path.dirname(LEADS_FILE_PATH);
  await mkdir(dir, { recursive: true });

  let existing: LeadEntry[] = [];

  try {
    const content = await readFile(LEADS_FILE_PATH, "utf-8");
    const parsed = JSON.parse(content) as unknown;
    if (Array.isArray(parsed)) {
      existing = parsed as LeadEntry[];
    }
  } catch {
    existing = [];
  }

  existing.push(entry);
  await writeFile(LEADS_FILE_PATH, JSON.stringify(existing, null, 2), "utf-8");
}

async function notifyTelegram(entry: LeadEntry) {
  const message = [
    "🔥 New Lost Leads lead!",
    "",
    `Name: ${entry.name}`,
    `Email: ${entry.email}`,
    `Missed calls/week: ${entry.missed_calls}`,
    `Job value: $${entry.job_value}`,
    `Annual leakage: $${entry.annual_leakage}`,
    "",
    "Book them in → https://aiadelaide.com.au/contact",
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  });
}

export async function POST(request: Request) {
  let payload: LostLeadsPayload;

  try {
    payload = (await request.json()) as LostLeadsPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const missedCalls = asNumber(payload.missed_calls);
  const jobValue = asNumber(payload.job_value);
  const annualLeakage = asNumber(payload.annual_leakage);

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Please enter your first name and email." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(missedCalls) || missedCalls < 1 || missedCalls > 30) {
    return NextResponse.json(
      { ok: false, error: "Missed calls must be between 1 and 30." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(jobValue) || jobValue < 100 || jobValue > 2000) {
    return NextResponse.json(
      { ok: false, error: "Job value must be between $100 and $2000." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(annualLeakage) || annualLeakage < 0) {
    return NextResponse.json(
      { ok: false, error: "Annual leakage value is invalid." },
      { status: 400 },
    );
  }

  const entry: LeadEntry = {
    name,
    email,
    missed_calls: Math.round(missedCalls),
    job_value: Math.round(jobValue),
    annual_leakage: Math.round(annualLeakage),
    timestamp: new Date().toISOString(),
  };

  try {
    await Promise.all([appendLead(entry), notifyTelegram(entry)]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lost leads submission failed", error);
    return NextResponse.json(
      { ok: false, error: "Could not submit right now. Please try again." },
      { status: 500 },
    );
  }
}
