"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Client outcomes</span>
        </div>
        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Real businesses. Real admin pain gone.
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          Small business owners don&apos;t care about AI buzzwords. They care
          about fewer missed leads, less admin, and calmer evenings.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              ref={index === 0 ? ref : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="brand-card relative flex h-full flex-col overflow-hidden p-7 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  Customer note
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  Verified outcome
                </span>
              </div>
              <p className="mb-6 flex-1 text-body-mobile italic text-textPrimary md:text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-body font-semibold text-textPrimary">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-textSecondary">
                {testimonial.role}, {testimonial.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
