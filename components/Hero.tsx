"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    badge: "AI RECEPTIONIST FOR ADELAIDE TRADIES",
    headline: "AI Adelaide — AI Receptionist & Automation Services for Adelaide Businesses",
    subheadline:
      "Stop losing jobs to missed calls and slow follow-ups. We build AI systems that answer, follow up, and book — so you don't have to.",
    stats: [
      {
        label: "Response Time",
        value: "< 60s",
        detail: "for missed call follow-up",
        accent: "scan-line",
      },
      {
        label: "Setup Time",
        value: "2-5 days",
        detail: "for most tradie clients",
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
          text: "“No worries — I'll pass this on and someone will call you back shortly.”",
        },
        {
          label: "You receive",
          text: "Name, suburb, job type, urgency, and exactly what they were told.",
        },
      ],
    },
  },
  {
    badge: "AUTOMATED FOLLOW-UP FOR ADELAIDE TRADIES",
    headline: "Stop Losing Quotes You Never Followed Up.",
    subheadline:
      "We automate quote follow-ups for Adelaide tradies. Sent a quote and heard nothing? We follow up automatically — so you win more jobs without lifting a finger.",
    stats: [
      { label: "Win Rate", value: "+30%", detail: "more quotes turning into jobs" },
      { label: "Setup Time", value: "2-5 days", detail: "for most tradie clients" },
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
    badge: "REVIEW AUTOMATION FOR ADELAIDE TRADIES",
    headline: "Turn Every Finished Job Into a 5-Star Review.",
    subheadline:
      "We automate Google review requests for Adelaide tradies. Job done? We send a polite follow-up asking for a review — while the experience is still fresh.",
    stats: [
      { label: "Avg Reviews/Month", value: "+8", detail: "more fresh Google reviews" },
      { label: "Setup Time", value: "2-5 days", detail: "for most tradie clients" },
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
                  <a href="/audit" className="btn-primary px-8 py-4">
                    Get Free Missed Call Audit <span aria-hidden>→</span>
                  </a>
                  <a href="/contact" className="btn-primary px-8 py-4">
                    Book Free Audit <span aria-hidden>→</span>
                  </a>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {activeSlide.stats.map((stat) => (
                    <div key={stat.label} className={`metric-card ${"accent" in stat ? stat.accent : ""}`}>
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
