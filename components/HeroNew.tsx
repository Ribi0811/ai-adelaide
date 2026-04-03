"use client";

import Link from "next/link";

const trustBadges = [
  { icon: "✅", label: "South Australian Owned", sub: "We're locals, not a call centre in Manila" },
  { icon: "✅", label: "24/7 Coverage", sub: "Nights, weekends, public holidays. All covered." },
  { icon: "✅", label: "No Lock-In Contracts", sub: "Month-to-month. No surprises." },
];

export default function HeroNew() {
  return (
    <section className="section-shell relative overflow-hidden pt-24 md:pt-28">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-12 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-container mx-auto px-6 pb-10 md:pb-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/60 p-6 shadow-card backdrop-blur-xl md:p-10">
          {/* Badge */}
          <div className="eyebrow mb-5">AI RECEPTIONIST FOR ADELAIDE TRADIES &amp; HEALTH PRACTICES</div>

          {/* Headline */}
          <h1 className="mb-4 max-w-3xl text-h1-mobile text-textPrimary md:text-h1">
            Missed Calls Are Costing You Jobs
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-2xl text-body-mobile text-textSecondary md:text-body">
            Your AI receptionist answers every call, captures every lead, books every job — 24
            hours a day, 7 days a week. Built for Adelaide tradies and health practices.
          </p>

          {/* Trust badges */}
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3"
              >
                <span className="mt-0.5 text-base">{badge.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-textPrimary">{badge.label}</p>
                  <p className="mt-0.5 text-xs text-textSecondary">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book Your Free Audit <span aria-hidden>→</span>
            </Link>
            <Link href="#how-it-works" className="btn-secondary px-8 py-4">
              See How It Works
            </Link>
            <a
              href="tel:+61871009788"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-4 text-sm font-semibold text-textPrimary transition-colors hover:border-accent/40 hover:bg-accent/5"
            >
              <span className="text-accent">📞</span>
              <span>Call us: 08 7100 9788</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
