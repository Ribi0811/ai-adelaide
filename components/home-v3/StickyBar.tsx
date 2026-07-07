"use client";

// Conversion net: after the visitor scrolls past the hero, a quiet glass bar
// keeps the offer and CTA one thumb-tap away. Dismissible, session-scoped.
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/85 py-2 pl-5 pr-2 shadow-[0_16px_48px_rgba(29,29,31,0.18)] backdrop-blur-xl md:gap-5">
        <p className="hidden text-[14px] font-medium text-[#1D1D1F] sm:block">
          Websites from <span className="font-semibold">$699</span> · live in 48 hrs
        </p>
        <p className="text-[14px] font-medium text-[#1D1D1F] sm:hidden">From $699</p>
        <Link
          href="/contact#send-message"
          className="rounded-full bg-[#0E8C74] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#0C7A65]"
        >
          Get a quote
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#98989D] transition hover:bg-black/[0.05] hover:text-[#1D1D1F]"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
