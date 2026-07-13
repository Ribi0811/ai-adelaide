import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// T1 fix (2026-07-13): the audit / AI-readiness form used to ONLY write
// data/leads.json. On Vercel the deployment filesystem is read-only, so that
// write threw and the whole POST 500'd — every audit lead was lost AND the
// user saw an error. Now: notify Telegram first (durable delivery, same
// channel as the contact form), attach first-touch attribution, and treat the
// JSON write as a best-effort local-dev convenience that can never fail the
// response. Durable CRM/DB/Sheet storage remains Ivan's decision (handoff Q1).

type Attribution = {
  landing?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  ts?: string;
};

type LeadPayload = {
  name?: string;
  email?: string;
  businessName?: string;
  phone?: string;
  tool?: string;
  answers?: Record<string, string>;
  score?: number;
  rawScore?: number;
  tier?: string;
  attribution?: Attribution | null;
};

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_HOME_CHAT_ID || '1140438132';

const dataDir = path.join(process.cwd(), 'data');
const leadsFile = path.join(dataDir, 'leads.json');

function clean(value: string | undefined) {
  return value?.trim() || '';
}

function attributionLine(a: Attribution | null | undefined): string {
  if (!a) return '—';
  const bits = [
    a.landing ? `landing ${a.landing}` : '',
    a.referrer && a.referrer !== 'direct' ? `ref ${a.referrer}` : a.referrer === 'direct' ? 'direct' : '',
    a.utm_source ? `utm_source ${a.utm_source}` : '',
    a.utm_medium ? `utm_medium ${a.utm_medium}` : '',
    a.utm_campaign ? `utm_campaign ${a.utm_campaign}` : '',
  ].filter(Boolean);
  return bits.length ? bits.join(' · ') : '—';
}

async function notifyTelegram(entry: {
  name: string;
  email: string;
  businessName: string;
  phone: string;
  tool: string;
  score: number | null;
  tier: string | null;
  attribution: Attribution | null;
}): Promise<{ ok: boolean; error?: string }> {
  if (!TELEGRAM_TOKEN) return { ok: false, error: 'Telegram token not configured' };
  const text = [
    '🧮 *New Audit / AI-Readiness Lead — AI Adelaide*',
    '',
    `*Name:* ${entry.name || '—'}`,
    `*Email:* ${entry.email || '—'}`,
    `*Phone:* ${entry.phone || '—'}`,
    `*Business:* ${entry.businessName || '—'}`,
    `*Tool:* ${entry.tool}`,
    `*Score:* ${entry.score ?? '—'}${entry.tier ? ` (${entry.tier})` : ''}`,
    `*Attribution:* ${attributionLine(entry.attribution)}`,
  ].join('\n');
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, error: data?.description || `HTTP ${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Telegram call failed' };
  }
}

async function appendLeadBestEffort(entry: Record<string, unknown>): Promise<boolean> {
  // Local-dev convenience only. Read-only FS on Vercel makes this throw; we
  // swallow it so the response never depends on a filesystem write.
  try {
    await fs.mkdir(dataDir, { recursive: true });
    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(leadsFile, 'utf8');
      const parsed = JSON.parse(raw);
      existing = Array.isArray(parsed) ? parsed : [];
    } catch {
      existing = [];
    }
    existing.push(entry);
    await fs.writeFile(leadsFile, `${JSON.stringify(existing, null, 2)}\n`, 'utf8');
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const businessName = clean(payload.businessName);
  const phone = clean(payload.phone);

  if (!name || !email || !businessName) {
    return NextResponse.json(
      { ok: false, error: 'Please provide your name, business name, and email.' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    tool: clean(payload.tool) || 'ai-readiness-calculator',
    name,
    email,
    businessName,
    phone,
    score: typeof payload.score === 'number' ? payload.score : null,
    rawScore: typeof payload.rawScore === 'number' ? payload.rawScore : null,
    tier: clean(payload.tier) || null,
    answers: payload.answers && typeof payload.answers === 'object' ? payload.answers : {},
    attribution: payload.attribution ?? null,
  };

  // Durable delivery first, storage best-effort second.
  const telegram = await notifyTelegram(entry);
  const persisted = await appendLeadBestEffort(entry);

  // Succeed as long as the lead was delivered somewhere. In production that's
  // Telegram; in local dev the file write also works.
  if (!telegram.ok && !persisted) {
    return NextResponse.json(
      { ok: false, error: 'Could not deliver your details. Please email hello@aiadelaide.com.au.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, leadId: entry.id, telegram, persisted });
}
