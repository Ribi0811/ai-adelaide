"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!calendlyUrl) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [calendlyUrl]);

  if (!calendlyUrl) {
    return (
      <div className="grid min-h-[420px] place-items-center rounded-2xl border border-slate-200/80 bg-white p-8 text-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
            Calendly not configured
          </p>
          <p className="mt-3 text-body-mobile text-textPrimary md:text-body">
            Add <code>NEXT_PUBLIC_CALENDLY_URL</code> in your environment to show
            the booking widget here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget min-w-[320px] h-[700px] rounded-2xl bg-white"
      data-url={calendlyUrl}
    />
  );
}
