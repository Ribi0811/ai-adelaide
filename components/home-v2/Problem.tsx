"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "No website — or one that embarrasses you",
    description:
      "Customers Google you before they call. If nothing shows up, or what shows up is slow and ugly, they call the next result.",
    impact: "Invisible online",
  },
  {
    title: "Not ranking on Google for your services",
    description:
      "Your competitors show up on page one for 'plumber Norwood' and 'cafe Glenelg'. You don't. Every day those customers go to them.",
    impact: "Lost enquiries",
  },
  {
    title: "Leads fall through the cracks",
    description:
      "Someone calls while you're on a job. They don't leave a voicemail. They try the next business. The lead is gone — and you never knew.",
    impact: "Wasted spend",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = true;

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-rose-500">
            Where businesses lose customers
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Sound familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            These are the gaps we fix first because they directly affect how many customers find you, contact you, and book.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-rose-100 bg-white p-7 shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400/50 to-orange-300/50" />
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-rose-600">
                  {problem.impact}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-950">
                {problem.title}
              </h3>
              <p className="text-base text-slate-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}