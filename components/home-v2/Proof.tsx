"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "I used to lose 2-3 leads a week to missed calls. Now everything comes through automatically. Paid for itself in the first month.",
    name: "Dave S.",
    role: "Plumber, Adelaide",
  },
  {
    quote:
      "Since the new site went live, my online bookings are up 40%. I barely touch the phone for new clients anymore. Best $1,299 I've ever spent.",
    name: "Chloe M.",
    role: "Salon Owner, Adelaide",
  },
  {
    quote:
      "We were paying an agency $800 a month for SEO that wasn't moving the needle. AI Adelaide got us ranking on page 1 for our suburb in three months.",
    name: "Tom W.",
    role: "Cafe Owner, Adelaide",
  },
  {
    quote:
      "Clients used to cancel last-minute all the time. Now the reminder system drops no-shows to almost zero. My front desk spends less time on the phone.",
    name: "James L.",
    role: "Health Clinic, Adelaide",
  },
  {
    quote:
      "I was invisible on Google. Within 6 weeks of the new site + SEO, I was getting 4-5 new client enquiries a week from search. Wish I'd done it sooner.",
    name: "Megan R.",
    role: "Beauty Salon, Adelaide",
  },
  {
    quote:
      "The site paid for itself in the first weekend. One customer found us on Google and spent $1,200. The SEO keeps working even when I'm not marketing.",
    name: "Josh K.",
    role: "Retail Shop, Adelaide",
  },
];

export default function Proof() {
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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">
            Real results
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            What Adelaide businesses say
          </h2>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 grid gap-4 md:grid-cols-3"
        >
          {[
            { value: "47%", label: "More booked jobs in 90 days", context: "Plumbing business, Adelaide" },
            { value: "Page 1", label: "Ranking for local searches in 90 days", context: "Cafe, Adelaide" },
            { value: "65%", label: "Drop in no-shows after automation", context: "Health clinic, Adelaide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-4xl font-bold text-[#FF6B35] md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.context}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5 text-[#FF6B35]">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx} className="text-lg">{star}</span>
                ))}
              </div>

              <p className="mb-5 text-base leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-950">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}