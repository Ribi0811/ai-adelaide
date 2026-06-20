"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Starter",
    price: "$699",
    tagline: "Get online fast",
    features: [
      "3-page custom website",
      "Mobile-first, click-to-call",
      "Basic SEO setup",
      "Google Business Profile setup",
      "Live in 48 hours",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$1,299",
    tagline: "Most popular",
    features: [
      "5-7 page custom website",
      "Blog setup with CMS",
      "SEO foundation (schema, sitemap)",
      "1 suburb service page",
      "AI automation-ready",
      "Live in 5-7 days",
    ],
    popular: true,
  },
  {
    name: "Growth",
    price: "$2,499",
    tagline: "Full growth engine",
    features: [
      "10+ page custom website",
      "3 suburb service pages",
      "Full SEO setup + 3 blog articles",
      "AI automation integrations",
      "Google Business + Bing Places",
      "Live in 10-14 days",
    ],
    popular: false,
  },
];

const addons = [
  { name: "Local SEO", price: "$399/mo", desc: "2 blog posts, GSC monitoring, citations" },
  { name: "Growth SEO", price: "$699/mo", desc: "4 blog posts, suburb pages, competitor tracking" },
  { name: "Automation Starter", price: "$199/mo", desc: "Missed call text-back + SMS reminders" },
  { name: "Automation Business", price: "$399/mo", desc: "AI receptionist + quote follow-up + reviews" },
];

export default function Pricing() {
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
            Pricing
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Transparent pricing. No hidden fees.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Pick the tier that fits your business today. Upgrade whenever you're ready.
          </p>
        </motion.div>

        {/* Website tiers */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-7 ${
                tier.popular
                  ? "border-[#FF6B35]/40 bg-gradient-to-b from-[#FFF8F3] to-white shadow-xl ring-2 ring-[#FF6B35]/20"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-950">{tier.name}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-400">{tier.tagline}</p>
              <p className="mt-4 text-4xl font-bold text-slate-950">{tier.price}</p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[10px] text-[#FF6B35]">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-6 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.popular
                    ? "bg-[#FF6B35] text-white hover:bg-[#E55A2B]"
                    : "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                Book {tier.name} →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
        >
          <h3 className="mb-6 text-xl font-bold text-slate-950">Add-ons: SEO & Automation</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {addons.map((addon) => (
              <div key={addon.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-950">{addon.name}</h4>
                  <p className="text-lg font-bold text-[#FF6B35]">{addon.price}</p>
                </div>
                <p className="mt-2 text-xs text-slate-500">{addon.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/website-pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            See Full Pricing Details →
          </Link>
        </div>
      </div>
    </section>
  );
}