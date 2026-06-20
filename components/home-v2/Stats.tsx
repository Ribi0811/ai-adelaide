"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$699", label: "Websites from", detail: "One-off, you own it" },
  { value: "48 hrs", label: "Live in", detail: "Brief to live site" },
  { value: "$399/mo", label: "SEO from", detail: "No lock-in contracts" },
  { value: "$199/mo", label: "Automation from", detail: "Setup in 2-5 days" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = true;

  return (
    <section className="bg-white pb-16 pt-4 md:pb-20 md:pt-8">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-center"
            >
              <p className="text-4xl font-bold text-slate-950 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}