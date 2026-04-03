import fs from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

export type TranscriptMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatLead = {
  id: string;
  sessionId: string;
  timestamp: string;
  name: string | null;
  phone: string | null;
  business: string | null;
  summary: string;
  transcript: TranscriptMessage[];
};

const baseDataPath = process.env.CHAT_LEADS_DATA_DIR || path.join(process.cwd(), "data");
const leadsPath = path.join(baseDataPath, "chat-leads.json");
const csvPath = path.join(baseDataPath, "chat-leads.csv");
const smtpCredsPath = "/Users/ivanribicic/.openclaw/workspace/.credentials/aiadelaide-email.json";

function extractPhone(text: string) {
  const match = text.match(/(?:\+?61\s?4\d{2}|04\d{2}|\(?0?8\)?\s?\d{4})[\s-]?\d{3}[\s-]?\d{3,4}/);
  return match?.[0]?.replace(/\s+/g, " ") || null;
}

function extractName(text: string) {
  const patterns = [
    /(?:i am|i'm|im|my name is|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)(?=\s+(?:and|from|with|,|\.|$))/i,
    /name[:\s]+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)(?=\s+(?:and|from|with|,|\.|$))/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].trim();
  }

  return null;
}

function extractBusiness(text: string) {
  const patterns = [
    /(?:business|company|clinic|shop)\s+(?:is|called|name is)\s+([A-Za-z0-9 '&’.-]{2,60})/i,
    /i run\s+([A-Za-z0-9 '&’.-]{2,60}?)(?=\s+(?:in|at|and|with|need|looking|,|\.|$))/i,
    /we run\s+([A-Za-z0-9 '&’.-]{2,60}?)(?=\s+(?:in|at|and|with|need|looking|,|\.|$))/i,
    /(?:from|at)\s+([A-Z][A-Za-z0-9 '&’.-]{2,60})(?=\s+(?:in|and|with|,|\.|$))/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].trim();
  }

  return null;
}

function buildSummary(transcript: TranscriptMessage[]) {
  const userLines = transcript
    .filter((message) => message.role === "user")
    .map((message) => message.content.trim())
    .filter(Boolean)
    .slice(-3);

  if (!userLines.length) {
    return "Chat lead captured from widget.";
  }

  return userLines.join(" ").slice(0, 280);
}

async function ensureFiles() {
  await fs.mkdir(path.dirname(leadsPath), { recursive: true });

  try {
    await fs.access(leadsPath);
  } catch {
    await fs.writeFile(leadsPath, "[]\n", "utf8");
  }

  try {
    await fs.access(csvPath);
  } catch {
    await fs.writeFile(csvPath, "timestamp,name,phone,business,summary\n", "utf8");
  }
}

async function readLeads(): Promise<ChatLead[]> {
  await ensureFiles();
  const raw = await fs.readFile(leadsPath, "utf8");
  try {
    return JSON.parse(raw) as ChatLead[];
  } catch {
    return [];
  }
}

async function getSmtpConfig() {
  const envConfig = process.env.AIADELAIDE_SMTP_HOST
    ? {
        email: process.env.AIADELAIDE_SMTP_USER || "hello@aiadelaide.com.au",
        password: process.env.AIADELAIDE_SMTP_PASS || "",
        smtp_host: process.env.AIADELAIDE_SMTP_HOST,
        smtp_port: Number(process.env.AIADELAIDE_SMTP_PORT || 465),
        ssl: (process.env.AIADELAIDE_SMTP_SECURE || "true") !== "false",
      }
    : null;

  if (envConfig?.password) return envConfig;

  const raw = await fs.readFile(smtpCredsPath, "utf8");
  return JSON.parse(raw) as {
    email: string;
    password: string;
    smtp_host: string;
    smtp_port: number;
    ssl: boolean;
  };
}

async function sendLeadEmail(lead: ChatLead) {
  const smtp = await getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.smtp_host,
    port: smtp.smtp_port,
    secure: smtp.ssl,
    auth: {
      user: smtp.email,
      pass: smtp.password,
    },
  });

  const transcriptText = lead.transcript
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join("\n\n");

  await transporter.sendMail({
    from: `AI Adelaide Chat <${smtp.email}>`,
    to: "hello@aiadelaide.com.au",
    subject: `New chat lead — ${lead.business || lead.name || "Unknown"}`,
    text: [
      `Time: ${lead.timestamp}`,
      `Name: ${lead.name || "Unknown"}`,
      `Phone: ${lead.phone || "Unknown"}`,
      `Business: ${lead.business || "Unknown"}`,
      `Summary: ${lead.summary}`,
      `Session ID: ${lead.sessionId}`,
      "",
      "Transcript:",
      transcriptText,
    ].join("\n"),
  });
}

export async function saveLead(input: Partial<ChatLead>) {
  await ensureFiles();
  const leads = await readLeads();

  const lead: ChatLead = {
    id: input.id || crypto.randomUUID(),
    sessionId: input.sessionId || "unknown-session",
    timestamp: input.timestamp || new Date().toISOString(),
    name: input.name || null,
    phone: input.phone || null,
    business: input.business || null,
    summary: input.summary || "Chat lead captured from widget.",
    transcript: input.transcript || [],
  };

  leads.unshift(lead);
  await fs.writeFile(leadsPath, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
  await fs.appendFile(
    csvPath,
    `${JSON.stringify(lead.timestamp).slice(1, -1)},${JSON.stringify(lead.name || "") .slice(1, -1)},${JSON.stringify(lead.phone || "").slice(1, -1)},${JSON.stringify(lead.business || "").slice(1, -1)},${JSON.stringify(lead.summary).slice(1, -1)}\n`,
    "utf8"
  );

  await sendLeadEmail(lead);
  return lead;
}

export async function saveLeadFromTranscript({
  sessionId,
  transcript,
}: {
  sessionId: string;
  transcript: TranscriptMessage[];
}) {
  const combinedText = transcript.map((message) => message.content).join("\n");
  const phone = extractPhone(combinedText);
  if (!phone) {
    return null;
  }

  const existingLeads = await readLeads();
  const duplicate = existingLeads.find((lead) => lead.sessionId === sessionId || lead.phone === phone);
  if (duplicate) {
    return duplicate;
  }

  const userOnlyText = transcript
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join("\n");

  return saveLead({
    sessionId,
    name: extractName(userOnlyText),
    phone,
    business: extractBusiness(userOnlyText),
    summary: buildSummary(transcript),
    transcript,
  });
}
