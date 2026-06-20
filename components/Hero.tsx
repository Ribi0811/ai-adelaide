"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    badge: "WEBSITES FOR ADELAIDE SMALL BUSINESSES",
    headline: "Get a Professional Website from $699 — Live in 48 Hours",
    subheadline:
      "Mobile-first, Google-ready, built to turn visitors into calls. No templates, no agency bloat, no lock-in. You own everything.",
    stats: [
      {
        label: "Starting price",
        value: "$699",
        detail: "one-off setup, you own it",
      },
      {
        label: "Live in",
        value: "48 hrs",
        detail: "from brief to live site",
      },
      {
        label: "Lock-in",
        value: "None",
        detail: "month to month, your site",
      },
    ],
    card: {
      label: "Starter website",
      title: "What's included from $699",
      badge: "Most affordable tier",
      timeline: [
        ["3-page custom site (Home, Services, Contact)", "Built"],
        ["Mobile-first, click-to-call, fast load", "Built"],
        ["Title tags, meta, sitemap, schema", "Built"],
        ["Contact form + Google Business Profile setup", "Built"],
      ],
      notes: [
        {
          label: "Best for",
          text: "Sole traders, new businesses, anyone with no website or one they're embarrassed by.",
        },
        {
          label: "Upgrade later",
          text: "Add SEO or automation anytime. No penalty, no migration headaches.",
        },
      ],
    },
  },
  {
    badge: "LOCAL SEO FOR ADELAIDE BUSINESSES",
    headline: "Get Found on Google When Adelaide Customers Search",
    subheadline:
      "We get your business ranking for searches like 'plumber Norwood' or 'cafe Glenelg' — the searches that actually bring customers. Local SEO from $399/month.",
    stats: [
      { label: "Local SEO", value: "from $399/mo", detail: "no lock-in" },
      { label: "First movement", value: "30-60 days", detail: "for niche suburbs" },
      { label: "Sustainable rank", value: "3-6 mo", detail: "for competitive areas" },
    ],
    card: {
      label: "SEO setup",
      title: "What we do each month",
      badge: "No long contracts",
      timeline: [
        ["Keyword research + suburb targeting", "Month 1"],
        ["Service + suburb pages built", "Month 1-2"],
        ["Google Business Profile + citations", "Ongoing"],
        ["Blog content + rank tracking", "Ongoing"],
      ],
      notes: [
        {
          label: "You get",
          text: "A clear monthly report — where you're ranking, what's improving, and what we're working on next.",
        },
        {
          label: "We focus on",
          text: "Searches with buying intent. Not vanity keywords. Real customers in your service area.",
        },
      ],
    },
  },
  {
    badge: "AI AUTOMATION FOR ADELAIDE BUSINESSES",
    headline: "Capture Every Lead — Even When You're on the Job or Asleep",
    subheadline:
      "Missed call text-back, AI receptionist, quote follow-ups, and review requests. The boring (and expensive) stuff handled automatically, from $199/month.",
    stats: [
      { label: "Automation", value: "from $199/mo", detail: "setup in 2-5 days" },
      { label: "Missed call reply", value: "< 30s", detail: "instant text back" },
      { label: "Coverage", value: "24/7", detail: "while you sleep" },
    ],
    card: {
      label: "Automation stack",
      title: "What runs in the background",
      badge: "Live in days",
      timeline: [
        ["Missed call triggers instant SMS reply", "Auto"],
        ["AI receptionist answers 24/7", "Auto"],
        ["Quote follow-ups sent Day 2 + Day 5", "Auto"],
        ["Review request after every job", "Auto"],
      ],
      notes: [
        {
          label: "Best for",
          text: "Tradies, clinics, and busy businesses losing leads to missed calls and slow follow-up.",
        },
        {
          label: "Connects with",
          text: "ServiceM8, Tradify, Xero, Google Calendar, Calendly, and most CRMs.",
        },
      ],
    },
  },
] as const;

const slideIntervalMs = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, slideIntervalMs);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="section-shell relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-12 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-container mx-auto px-6 pb-10 md:pb-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/60 p-6 shadow-card backdrop-blur-xl md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center"
            >
              <div className="relative">
                <div className="eyebrow mb-5">{activeSlide.badge}</div>

                <h1 className="mb-5 max-w-3xl text-h1-mobile text-textPrimary md:text-h1">
                  {activeSlide.headline}
                </h1>

                <p className="max-w-2xl text-body-mobile text-textSecondary md:text-body">
                  {activeSlide.subheadline}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="/contact#send-message" className="btn-primary px-8 py-4">
                    Send a Message <span aria-hidden>→</span>
                  </a>
                  <a href="/website-pricing" className="btn-primary px-8 py-4">
                    See Pricing <span aria-hidden>→</span>
                  </a>
                </div>
                <p className="mt-3 text-xs text-textSecondary">
                  We reply within 2 business hours. No phone call required.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label} className="metric-card">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-textPrimary">{stat.value}</p>
                      <p className="mt-1 text-sm text-textSecondary">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="panel-light grid-overlay relative overflow-hidden p-5 md:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/8 via-transparent to-accent/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-textSecondary">
                          {activeSlide.card.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-textPrimary">
                          {activeSlide.card.title}
                        </p>
                      </div>
                      <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                        {activeSlide.card.badge}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {activeSlide.card.timeline.map(([label, time], index) => (
                        <div
                          key={label}
                          className="panel-soft flex items-center justify-between gap-3 px-4 py-3"
                        >
                          <div className="min-w-0 flex items-center gap-3">
                            <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? "bg-electric/70" : "bg-accent/80"}`} />
                            <span className="text-sm text-textPrimary">{label}</span>
                          </div>
                          <span className="font-mono text-xs text-textSecondary">{time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeSlide.card.notes.map((note) => (
                        <div key={note.label} className="panel-soft p-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                            {note.label}
                          </p>
                          <p className="mt-2 text-sm text-textPrimary">{note.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.headline}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
