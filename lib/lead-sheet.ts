import { JWT } from "google-auth-library";
import headers from "./lead-sheet-columns.json";

export type SheetLead = {
  id: string;
  timestamp: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  plan?: string;
  message: string;
  source: string;
  attribution?: {
    landing?: string;
    referrer?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  } | null;
};

export type SheetSaveResult = {
  ok: boolean;
  status: "saved" | "not_configured" | "configuration_error" | "auth_error" | "header_mismatch" | "write_failed" | "unconfirmed" | "timeout";
};

type SheetTransport = (url: string, init: RequestInit) => Promise<Response>;
type SheetDependencies = {
  spreadsheetId?: string;
  getAccessToken?: () => Promise<string>;
  transport?: SheetTransport;
  timeoutMs?: number;
};

const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const HEADER_RANGE = "Enquiries!A5:W5";
const APPEND_RANGE = "Enquiries!A5:W";
let cachedAuth: { credentials: string; client: JWT } | undefined;

function authClient(credentials: string): JWT {
  if (cachedAuth?.credentials === credentials) return cachedAuth.client;
  const parsed: unknown = JSON.parse(credentials);
  if (!parsed || typeof parsed !== "object") throw new Error("Invalid service account");
  const config = parsed as Record<string, unknown>;
  if (config.type !== "service_account" || typeof config.client_email !== "string" || typeof config.private_key !== "string") {
    throw new Error("Invalid service account");
  }
  // Only these explicit fields are accepted. No credential-file URLs or broad
  // Drive scopes are passed through from configuration.
  const client = new JWT({ email: config.client_email, key: config.private_key, scopes: [SCOPE] });
  cachedAuth = { credentials, client };
  return client;
}

function text(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function leadSheetRow(lead: SheetLead): Array<string | number> {
  const received = Date.parse(lead.timestamp);
  if (!Number.isFinite(received) || !lead.id) throw new Error("Invalid lead record");
  const service = [lead.service, lead.plan].filter(Boolean).join(" — ");
  return [
    received / 86400000 + 25569, // Sheets/Excel date serial; header explicitly says UTC.
    text(lead.business), text(lead.name), service, text(lead.email), text(lead.phone), text(lead.message),
    "New", "", "", "", "", "", "", "", text(lead.id), text(lead.source),
    text(lead.attribution?.landing), text(lead.attribution?.referrer),
    text(lead.attribution?.utm_source), text(lead.attribution?.utm_medium), text(lead.attribution?.utm_campaign), "No",
  ];
}

/** Append one enquiry without editing any earlier row or sales-outcome fields. */
export async function appendLeadToGoogleSheet(lead: SheetLead, dependencies: SheetDependencies = {}): Promise<SheetSaveResult> {
  const spreadsheetId = dependencies.spreadsheetId ?? process.env.AIADELAIDE_LEAD_SHEET_ID;
  const credentials = process.env.AIADELAIDE_LEAD_SHEET_SERVICE_ACCOUNT;
  if (!spreadsheetId && !credentials && !dependencies.getAccessToken) return { ok: false, status: "not_configured" };
  if (!spreadsheetId || !/^[a-zA-Z0-9_-]+$/.test(spreadsheetId) || (!credentials && !dependencies.getAccessToken)) {
    return { ok: false, status: "configuration_error" };
  }

  let getAccessToken: () => Promise<string>;
  let row: Array<string | number>;
  try {
    row = leadSheetRow(lead);
    const client = dependencies.getAccessToken ? undefined : authClient(credentials!);
    getAccessToken = dependencies.getAccessToken ?? (async () => {
      const token = (await client!.getAccessToken()).token;
      if (!token) throw new Error("No access token");
      return token;
    });
  } catch {
    return { ok: false, status: "configuration_error" };
  }

  const transport = dependencies.transport ?? fetch;
  const controller = new AbortController();
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/`;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<SheetSaveResult>((resolve) => {
    timer = setTimeout(() => {
      controller.abort();
      resolve({ ok: false, status: "timeout" });
    }, dependencies.timeoutMs ?? 7000);
  });

  const save = async (): Promise<SheetSaveResult> => {
    let token: string;
    try {
      token = await getAccessToken();
    } catch {
      return { ok: false, status: "auth_error" };
    }
    // Token acquisition can finish after our deadline. Never start a late write.
    if (controller.signal.aborted) return { ok: false, status: "timeout" };
    const options = { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, signal: controller.signal, cache: "no-store" as const };
    try {
      const headerResponse = await transport(`${base}${encodeURIComponent(HEADER_RANGE)}`, options);
      if (!headerResponse.ok) return { ok: false, status: "write_failed" };
      const headerData = await headerResponse.json();
      if (JSON.stringify(headerData.values?.[0]) !== JSON.stringify(headers)) return { ok: false, status: "header_mismatch" };
      if (controller.signal.aborted) return { ok: false, status: "timeout" };

      // RAW preserves phone numbers and treats formula-like customer input as
      // literal text. INSERT_ROWS preserves every existing enquiry and outcome.
      // Do not retry an ambiguous append: it may already have reached Google.
      const query = "valueInputOption=RAW&insertDataOption=INSERT_ROWS&includeValuesInResponse=true&responseValueRenderOption=UNFORMATTED_VALUE";
      const response = await transport(`${base}${encodeURIComponent(APPEND_RANGE)}:append?${query}`, {
        ...options, method: "POST", body: JSON.stringify({ majorDimension: "ROWS", values: [row] }),
      });
      if (!response.ok) return { ok: false, status: "write_failed" };
      const result = await response.json();
      if (result.updates?.updatedRows !== 1 || result.updates?.updatedData?.values?.[0]?.[15] !== lead.id) {
        return { ok: false, status: "unconfirmed" };
      }
      return { ok: true, status: "saved" };
    } catch {
      // Never log Google responses, access tokens, private keys or lead contents.
      return { ok: false, status: controller.signal.aborted ? "timeout" : "write_failed" };
    }
  };
  try {
    return await Promise.race([save(), timeout]);
  } finally {
    clearTimeout(timer);
  }
}
