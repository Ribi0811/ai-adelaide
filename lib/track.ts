// Consent-gated GA4 event helper (T1 / handoff Q1).
// GA itself is not loaded until the visitor accepts (Basic Consent Mode; see
// components/GoogleAnalytics.tsx). This helper also prevents custom events
// from being queued before that explicit choice.

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
