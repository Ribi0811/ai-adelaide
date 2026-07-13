// Consent-gated GA4 event helper (T1 / handoff Q1).
// GA is loaded via Google Consent Mode with analytics_storage denied by
// default (see app/layout.tsx). This helper adds a second, stricter gate:
// no custom event is even queued unless the visitor has explicitly accepted
// the cookie banner. So Decline => zero analytics calls; Accept => events fire.

export function analyticsAllowed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("cookie-consent") === "accepted";
  } catch {
    return false;
  }
}

export function track(
  event: string,
  params: Record<string, string | number> = {},
): void {
  if (!analyticsAllowed()) return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, params);
  }
}
