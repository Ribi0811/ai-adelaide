"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BeforeAfterCase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">What this feels like in practice</span>
        </div>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55 }}
          className="mb-4 text-center text-h2-mobile md:text-h2 text-textPrimary"
        >
          Before vs After: missed-call follow-up
        </motion.h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-body-mobile md:text-body text-textSecondary">
          Most owners don&apos;t need &ldquo;AI&rdquo;. They need the phone ringing less painfully. This is the kind of practical workflow we build first.
        </p>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="brand-card p-6 md:p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rose-700">
                Before
              </span>
            </div>
            <h3 className="text-h3-mobile md:text-h3 text-textPrimary mb-4">
              Leads leak while you&apos;re on the job
            </h3>
            <ul className="space-y-3 text-body-mobile md:text-body text-textSecondary">
              <li className="panel-soft px-4 py-3">Customer calls. You miss it.</li>
              <li className="panel-soft px-4 py-3">No voicemail. They try the next business.</li>
              <li className="panel-soft px-4 py-3">You call back later. Lead is already gone.</li>
              <li className="panel-soft px-4 py-3">End result: wasted ad spend and an empty booking slot.</li>
            </ul>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-glow">
              <span className="text-xl" aria-hidden>
                →
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="brand-card p-6 md:p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700">
                After
              </span>
            </div>
            <h3 className="text-h3-mobile md:text-h3 text-textPrimary mb-4">
              AI answers the call — you get the full story
            </h3>
            <ul className="space-y-3 text-body-mobile md:text-body text-textSecondary">
              <li className="panel-soft px-4 py-3">AI receptionist picks up and has a real conversation with the caller.</li>
              <li className="panel-soft px-4 py-3">Gets their name, number, and exactly what they need.</li>
              <li className="panel-soft px-4 py-3">Lets them know someone will call back shortly — no dead end.</li>
              <li className="panel-soft px-4 py-3">You get an SMS/email with the full summary and their number — ready to call back.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
