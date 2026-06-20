"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    badge: "AI-POWERED WEBSITES · ADELAIDE",
    headline: "AI-Powered Websites from $699 — Live in 48 Hours",
    sub: "AI Adelaide builds mobile-first, Google-ready websites using AI for copywriting, SEO setup, and design optimisation. Faster builds, better content, lower prices. No templates, no agency bloat.",
    stats: [
      { value: "$699", label: "Starting price", detail: "one-off, you own it" },
      { value: "48 hrs", label: "Go live", detail: "AI-accelerated build" },
      { value: "Zero", label: "Lock-in", detail: "month to month" },
    ],
  },
  {
    badge: "AI-DRIVEN LOCAL SEO · ADELAIDE",
    headline: "AI-Driven Local SEO — Get Found on Google",
    sub: "AI Adelaide uses AI-powered keyword research, content generation, and rank tracking to get your business ranking for local searches. From $399/month. No lock-in, real results in 30-90 days.",
    stats: [
      { value: "$399/mo", label: "AI SEO", detail: "no lock-in" },
      { value: "30-60", label: "Days to movement", detail: "AI content + citations" },
      { value: "3-6", label: "Months to rank", detail: "competitive keywords" },
    ],
  },
  {
    badge: "AI AUTOMATION · ADELAIDE",
    headline: "AI Receptionist & Automation — Capture Every Lead",
    sub: "AI Adelaide's AI receptionist answers 24/7, sends instant missed-call text-backs, follows up quotes automatically, and requests Google reviews. From $199/month. Live in 2-5 days.",
    stats: [
      { value: "$199/mo", label: "AI automation", detail: "setup in 2-5 days" },
      { value: "<30s", label: "Missed call reply", detail: "instant AI SMS back" },
      { value: "24/7", label: "AI coverage", detail: "while you sleep" },
    ],
  },
  {
    badge: "WHY AI ADELAIDE",
    headline: "We Build Faster, Cheaper, and Smarter — Because AI Does the Heavy Lifting",
    sub: "A traditional agency takes 6 weeks and $5,000 for a website. AI Adelaide does it in 48 hours and $699 — because AI handles the copywriting, SEO setup, and design optimisation. Same quality, fraction of the cost.",
    stats: [
      { value: "48 hrs", label: "vs 6 weeks", detail: "at a traditional agency" },
      { value: "$699", label: "vs $5,000+", detail: "typical agency pricing" },
      { value: "3-in-1", label: "AI stack", detail: "websites + SEO + automation" },
    ],
  },
] as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#0A0F1C] text-white">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-[#FF6B35]/20 blur-[120px]" />
        <div className="absolute right-[-5%] top-20 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/15 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-container px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact#send-message"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#E55A2B] active:scale-[0.98]"
              >
                Send a Message <span aria-hidden>→</span>
              </a>
              <a
                href="/website-pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                See Pricing
              </a>
            </div>
            <p className="mt-3 text-sm text-white/50">
              We reply within 2 business hours. No phone call required.
            </p>

            {/* Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {slide.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.headline}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-pressed={activeIndex === i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-10 bg-[#FF6B35]" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}