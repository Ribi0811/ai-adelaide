import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

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
};

const dataDir = path.join(process.cwd(), 'data');
const leadsFile = path.join(dataDir, 'leads.json');

function clean(value: string | undefined) {
  return value?.trim() || '';
}

async function ensureLeadsFile() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(leadsFile);
  } catch {
    await fs.writeFile(leadsFile, '[]\n', 'utf8');
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

  await ensureLeadsFile();

  let existing: unknown[] = [];

  try {
    const raw = await fs.readFile(leadsFile, 'utf8');
    const parsed = JSON.parse(raw);
    existing = Array.isArray(parsed) ? parsed : [];
  } catch {
    existing = [];
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
  };

  existing.push(entry);
  await fs.writeFile(leadsFile, `${JSON.stringify(existing, null, 2)}\n`, 'utf8');

  return NextResponse.json({ ok: true, leadId: entry.id });
}
