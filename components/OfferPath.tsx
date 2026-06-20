"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    step: "01",
    title: "Free Digital Health Check",
    label: "3-min quiz",
    description:
      "Tell us about your website, your Google ranking, and how leads find you. We&apos;ll show you where you&apos;re losing customers and what to fix first.",
    outcome: "A clear score and next-step recommendation",
  },
  {
    step: "02",
    title: "Free Strategy Chat",
    label: "Scope the work",
    description:
      "We look at your business, your services, and your service area. We recommend the website, SEO, or automation build that will move the needle first.",
    outcome: "A practical plan with a fixed quote",
    highlight: true,
  },
  {
    step: "03",
    title: "We Build It",
    label: "48 hrs to 14 days",
    description:
      "We design, write, and build — website, SEO setup, or automation system. You review once. We push it live. You own everything.",
    outcome: "Live, ranking, and capturing leads",
  },
  {
    step: "04",
    title: "Ongoing Support",
    label: "Month to month",
    description:
      "Monthly SEO content, automation improvements, and ad-hoc fixes. No lock-in contracts — we earn the work each month.",
    outcome: "Compounding results over time",
  },
];

export default function OfferPath() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">How it works</span>
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
          We keep this simple: figure out what&apos;s leaking, scope the right fix, build it properly, then keep it working.
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
          <a href="/contact" className="btn-primary px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </a>
          <a href="/website-pricing" className="btn-secondary px-8 py-4">
            See Website Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
