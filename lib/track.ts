// GA4 event helper (T1 / handoff Q1).
// 2026-07-17: the cookie-consent gate was removed alongside the banner
// (Australia has no consent-banner mandate). Events fire whenever GA has
// loaded; if it hasn't (no measurement ID, or gtag unavailable), track() is a
// safe no-op. Use is disclosed in the privacy + cookie policies.

export function track(
  event: string,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, params);
  }
}
