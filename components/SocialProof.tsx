"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { name: "Trades & Construction", code: "TRD" },
  { name: "Allied Health", code: "HLT" },
  { name: "Professional Services", code: "PRO" },
  { name: "Real Estate", code: "REA" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell bg-bgSecondary py-12 md:py-16">
      <div className="max-w-container mx-auto px-6">
        <div className="brand-card p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
            <motion.p
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[22ch] text-body-mobile text-textSecondary md:text-body"
            >
              Trusted by Adelaide service businesses in:
            </motion.p>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="panel-soft flex min-h-[56px] items-center gap-3 px-4 py-3"
                >
                  <span className="rounded-md border border-slate-200/80 bg-white/90 px-2 py-1 font-mono text-[11px] tracking-[0.14em] text-accent">
                    {industry.code}
                  </span>
                  <span className="text-sm text-textPrimary">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              ["Missed-call recovery", "Primary use case", "Live in days"],
              ["Reminders + follow-up", "Reduce no-shows", "Automated"],
              ["Lead routing + reviews", "More bookings", "Always-on"],
            ].map(([title, sub, status]) => (
              <div key={title} className="metric-card min-h-[96px]">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  {status}
                </p>
                <p className="mt-2 text-sm font-semibold text-textPrimary">{title}</p>
                <p className="mt-1 text-xs text-textSecondary">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
