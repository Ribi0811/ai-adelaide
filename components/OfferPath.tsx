"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    step: "01",
    title: "Free AI Readiness Audit",
    label: "3-min quiz",
    description:
      "Answer a few quick questions so we can spot the best place to start your first AI hire.",
    outcome: "A clear score and next-step recommendation",
  },
  {
    step: "02",
    title: "Strategy Call",
    label: "Scope your role",
    description:
      "We review your bottlenecks and scope the first AI employee role that will create the fastest impact.",
    outcome: "A practical plan for your first AI hire",
    highlight: true,
  },
  {
    step: "03",
    title: "We Build Your AI Employee",
    label: "2-5 day build",
    description:
      "We build and connect your AI employee so it can start handling calls, follow-ups, and admin tasks.",
    outcome: "Your AI employee live in days",
  },
  {
    step: "04",
    title: "Ongoing Support",
    label: "Continuous improvement",
    description:
      "We monitor performance and improve prompts, workflows, and routing as your business evolves.",
    outcome: "Smarter outcomes over time",
  },
];

export default function OfferPath() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Your path to an AI employee</span>
        </div>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55 }}
          className="mb-4 text-center text-h2-mobile md:text-h2 text-textPrimary"
        >
          Audit. Strategy. Build. Ongoing support.
        </motion.h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-body-mobile md:text-body text-textSecondary">
          We keep this simple: validate where AI will help, scope the right role,
          launch quickly, then keep improving it as your business grows.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex h-full flex-col overflow-hidden p-6 md:p-7 ${
                stage.highlight
                  ? "brand-card ring-1 ring-accent/30 shadow-glow"
                  : "brand-card"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white font-display text-sm font-bold text-accent">
                  {stage.step}
                </div>
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  {stage.label}
                </span>
                {stage.highlight && (
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Recommended step
                  </span>
                )}
              </div>

              <h3 className="text-h3-mobile md:text-h3 text-textPrimary mb-3">{stage.title}</h3>
              <p className="text-body-mobile md:text-body text-textSecondary">{stage.description}</p>

              <div className="panel-soft mt-5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  You get
                </p>
                <p className="mt-2 text-sm font-semibold text-textPrimary">{stage.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/audit" className="btn-primary px-8 py-4">
            See What AI Could Do For You <span aria-hidden>→</span>
          </a>
          <a href="/contact" className="btn-secondary px-8 py-4">
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
