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
  useEffect(() => {
    if (!measurementId) return;

    const enableIfAccepted = () => {
      try {
        if (window.localStorage.getItem("cookie-consent") === "accepted") {
          loadGoogleAnalytics(measurementId);
        }
      } catch {
        // Storage unavailable: keep analytics disabled.
      }
    };

    enableIfAccepted();
    window.addEventListener("aiadelaide:analytics-accepted", enableIfAccepted);
    return () => window.removeEventListener("aiadelaide:analytics-accepted", enableIfAccepted);
  }, [measurementId]);

  return null;
}
