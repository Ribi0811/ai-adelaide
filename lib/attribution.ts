// First-touch attribution (T1 / handoff Q1).
// Captured once on first page load and preserved in localStorage, so every
// lead can carry where it originally came from (landing page, referrer, UTMs).
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

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(KEY)) return;
    const p = new URLSearchParams(window.location.search);
    const data: Attribution = {
      landing: window.location.pathname,
      referrer: document.referrer || "direct",
      utm_source: p.get("utm_source") ?? "",
      utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
      ts: new Date().toISOString(),
    };
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (private mode etc.) — attribution is best-effort.
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
