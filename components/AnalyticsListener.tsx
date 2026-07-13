"use client";

// One mounted listener for the whole site (T1 / handoff Q1). Renders nothing.
// 1. Captures first-touch attribution on mount.
// 2. Delegates clicks: any element with [data-track="event_name"] fires that
//    GA event (consent-gated in lib/track). This lets SERVER components
//    (Navbar, Footer, DuskCatch, NewDawn, StackCTA, etc.) emit events by just
//    adding an attribute — no "use client" conversion needed.
import { useEffect } from "react";
import { track } from "@/lib/track";
import { captureAttribution } from "@/lib/attribution";

export default function AnalyticsListener() {
  useEffect(() => {
    captureAttribution();

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const el = target?.closest?.("[data-track]") as HTMLElement | null;
      if (!el) return;
      const event = el.dataset.track;
      if (!event) return;
      track(event, { href: el.getAttribute("href") ?? "" });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
