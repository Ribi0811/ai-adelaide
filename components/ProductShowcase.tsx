"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    badge: "AI RECEPTIONIST",
    headline: "Every Missed Call, Handled.",
    subheadline:
      "Your AI receptionist answers every missed call, finds out what the customer needs, and sends you a full summary — all within 60 seconds.",
    stats: [
      {
        label: "Response Time",
        value: "< 60s",
        detail: "for missed call follow-up",
      },
      {
        label: "Setup Time",
        value: "2-5 days",
        detail: "for most clients",
      },
      {
        label: "Contract Terms",
        value: "No lock-in",
        detail: "month to month",
      },
    ],
    card: {
      label: "Missed call system",
      title: "What happens after a customer calls",
      badge: "Live in days",
      timeline: [
        ["Call comes in while you're on the tools", "0s"],
        ["AI receptionist answers and finds out what they need", "12s"],
        ["Caller is told a callback is coming", "35s"],
        ["You get a full summary by SMS or email", "< 60s"],
      ],
      notes: [
        {
          label: "Caller hears",
          text: '\u201cNo worries \u2014 I\u2019ll pass this on and someone will call you back shortly.\u201d',
        },
        {
          label: "You receive",
          text: "Name, suburb, job type, urgency, and exactly what they were told.",
        },
      ],
    },
  },
  {
    badge: "AUTOMATED QUOTE FOLLOW-UP",
    headline: "Win More Quotes Without Chasing.",
    subheadline:
      "Sent a quote and heard nothing? We follow up automatically — polite, timely nudges that keep your business front of mind without lifting a finger.",
    stats: [
      { label: "Win Rate", value: "+30%", detail: "more quotes turning into jobs" },
      { label: "Setup Time", value: "2-5 days", detail: "for most clients" },
      { label: "Contract", value: "No lock-in", detail: "month to month" },
    ],
    card: {
      label: "Quote follow-up system",
      title: "What happens after a quote goes out",
      badge: "Runs automatically",
      timeline: [
        ["Quote sent to customer", "Day 0"],
        ["Automated follow-up SMS sent", "Day 2"],
        ["Second follow-up if no reply", "Day 5"],
        ["You get notified when they respond", "Instant"],
      ],
      notes: [
        {
          label: "Customer gets",
          text: "A polite nudge that keeps your business front of mind without you chasing manually.",
        },
        {
          label: "You receive",
          text: "A notification as soon as they reply, so you can jump back in when the lead is hot.",
        },
      ],
    },
  },
  {
    badge: "REVIEW AUTOMATION",
    headline: "Turn Every Job Into a 5-Star Review.",
    subheadline:
      "Job done? We automatically send a thank-you and review request while the experience is still fresh — building your Google reputation on autopilot.",
    stats: [
      { label: "Avg Reviews/Month", value: "+8", detail: "more fresh Google reviews" },
      { label: "Setup Time", value: "2-5 days", detail: "for most clients" },
      { label: "Contract", value: "No lock-in", detail: "month to month" },
    ],
    card: {
      label: "Review request system",
      title: "What happens once the job is finished",
      badge: "Fresh reviews faster",
      timeline: [
        ["Job completed", "Day 0"],
        ["Automated thank-you + review request sent", "2hrs later"],
        ["Reminder if no review left", "Day 3"],
        ["New Google review live", "Day 3-7"],
      ],
      notes: [
        {
          label: "Customer gets",
          text: "A simple thank-you message with an easy review link while the job is still fresh in their head.",
        },
        {
          label: "You build",
          text: "More trust, more social proof, and more reasons for the next customer to choose you.",
        },
      ],
    },
  },
] as const;

const slideIntervalMs = 5500;

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, slideIntervalMs);

    return () => clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">WHAT WE BUILD FOR YOU</p>
          <h2 className="text-h2-mobile text-textPrimary md:text-h2">
            Three Systems, One Goal: More Jobs Won
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-mobile text-textSecondary md:text-body">
            Every AI Adelaide client gets at least one of these running within days — most run all three.
          </p>
        </div>

        {/* Tab nav */}
        <div className="mb-6 flex justify-center gap-2 flex-wrap">
          {products.map((product, index) => (
            <button
              key={product.badge}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeIndex === index
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-textSecondary hover:border-slate-300 hover:text-textPrimary"
              }`}
            >
              {index === 0 ? "AI Receptionist" : index === 1 ? "Quote Follow-Up" : "Review Automation"}
            </button>
          ))}
        </div>

        {/* Carousel panel */}
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
              {/* Left: text + stats */}
              <div className="relative">
                <div className="eyebrow mb-5">{activeProduct.badge}</div>

                <h3 className="mb-5 text-h2-mobile text-textPrimary md:text-h2">
                  {activeProduct.headline}
                </h3>

                <p className="max-w-2xl text-body-mobile text-textSecondary md:text-body">
                  {activeProduct.subheadline}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {activeProduct.stats.map((stat) => (
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

              {/* Right: timeline card */}
              <div className="relative">
                <div className="panel-light grid-overlay relative overflow-hidden p-5 md:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/8 via-transparent to-accent/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-textSecondary">
                          {activeProduct.card.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-textPrimary">
                          {activeProduct.card.title}
                        </p>
                      </div>
                      <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                        {activeProduct.card.badge}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {activeProduct.card.timeline.map(([label, time], index) => (
                        <div
                          key={label}
                          className="panel-soft flex items-center justify-between gap-3 px-4 py-3"
                        >
                          <div className="min-w-0 flex items-center gap-3">
                            <span
                              className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                                index % 2 === 0 ? "bg-electric/70" : "bg-accent/80"
                              }`}
                            />
                            <span className="text-sm text-textPrimary">{label}</span>
                          </div>
                          <span className="font-mono text-xs text-textSecondary whitespace-nowrap">{time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeProduct.card.notes.map((note) => (
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

          {/* Dot nav */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {products.map((product, index) => (
              <button
                key={product.badge}
                type="button"
                aria-label={`Show product ${index + 1}`}
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
