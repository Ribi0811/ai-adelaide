"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  __aiAdelaideGaLoaded?: boolean;
};

function loadGoogleAnalytics(measurementId: string) {
  const analyticsWindow = window as AnalyticsWindow;
  if (analyticsWindow.__aiAdelaideGaLoaded) return;

  analyticsWindow.__aiAdelaideGaLoaded = true;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = (...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args);
  };
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("config", measurementId);

  const script = document.createElement("script");
  script.id = "google-analytics-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export default function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  // 2026-07-17: cookie-consent banner removed (Australia has no consent-banner
  // mandate — that's an EU/UK requirement). GA now loads whenever a measurement
  // ID is configured. Disclosure remains in the privacy + cookie policies, which
  // is what Australian law and Google's own terms actually require.
  useEffect(() => {
    if (!measurementId) return;
    loadGoogleAnalytics(measurementId);
  }, [measurementId]);

  return null;
}
