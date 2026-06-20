"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Free Digital Health Check",
    label: "3-min quiz",
    description:
      "Tell us about your website, your Google ranking, and how leads find you. We'll show you where you're losing customers and what to fix first.",
    outcome: "A clear score and next-step recommendation",
  },
  {
    num: "02",
    title: "Free Strategy Chat",
    label: "Scope the work",
    description:
      "We look at your business, your services, and your service area. We recommend the website, SEO, or automation build that will move the needle first.",
    outcome: "A practical plan with a fixed quote",
    highlight: true,
  },
  {
    num: "03",
    title: "We Build It",
    label: "48 hrs to 14 days",
    description:
      "We design, write, and build — website, SEO setup, or automation system. You review once. We push it live. You own everything.",
    outcome: "Live, ranking, and capturing leads",
  },
  {
    num: "04",
    title: "Ongoing Support",
    label: "Month to month",
    description:
      "Monthly SEO content, automation improvements, and ad-hoc fixes. No lock-in contracts — we earn the work each month.",
    outcome: "Compounding results over time",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = true;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Audit. Strategy. Build. Support.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            We keep this simple: figure out what's leaking, scope the right fix, build it properly, then keep it working.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border p-6 md:p-7 ${
                step.highlight
                  ? "border-[#FF6B35]/30 bg-gradient-to-b from-[#FFF8F3] to-white shadow-lg"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 font-bold text-white text-sm">
                  {step.num}
                </div>
                {step.highlight && (
                  <span className="rounded-full bg-[#FF6B35]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF6B35]">
                    Recommended
                  </span>
                )}
              </div>

              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                {step.label}
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mb-5 text-sm text-slate-600">{step.description}</p>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  You get
                </p>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">{step.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/contact#send-message"
            className="inline-flex items-center justify-center rounded-xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#E55A2B] active:scale-[0.98]"
          >
            Send a Message →
          </a>
          <Link
            href="/website-pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            See Website Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}