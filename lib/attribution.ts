// First-touch attribution (T1 / handoff Q1).
// Prepared in memory on first page load, then persisted only after analytics
// consent. Declined visitors never store or submit attribution metadata.
// This is delivery metadata attached to Telegram/email notifications — it is
// NOT durable CRM storage (Vercel's filesystem is read-only; see the API
// routes). Picking a durable store remains Ivan's decision.

export type Attribution = {
  landing: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  ts: string;
};

const KEY = "aia_attr";
let pendingAttribution: Attribution | null = null;

function currentAttribution(): Attribution {
  const p = new URLSearchParams(window.location.search);
  return {
    landing: window.location.pathname,
    referrer: document.referrer || "direct",
    utm_source: p.get("utm_source") ?? "",
    utm_medium: p.get("utm_medium") ?? "",
    utm_campaign: p.get("utm_campaign") ?? "",
    ts: new Date().toISOString(),
  };
}

export function prepareAttribution(): void {
  if (typeof window === "undefined" || pendingAttribution) return;
  pendingAttribution = currentAttribution();
}

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem("cookie-consent") !== "accepted") return;
    if (window.localStorage.getItem(KEY)) return;
    const data = pendingAttribution ?? currentAttribution();
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (private mode etc.) — attribution is best-effort.
  }
}

export function clearAttribution(): void {
  pendingAttribution = null;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // Storage unavailable — nothing else to clear.
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    if (window.localStorage.getItem("cookie-consent") !== "accepted") return null;
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
