"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "💻",
    title: "AI-Powered Websites",
    tagline: "What we lead with",
    description:
      "AI-accelerated build: copywriting, design, SEO setup all powered by AI. Mobile-first, fast, Google-ready from day one. Click-to-call, suburb targeting, AI-call-ready. Live in 48 hours.",
    features: [
      "3-10+ page custom website",
      "Mobile-first, loads in under 2 seconds",
      "Google-ready: schema, sitemap, meta tags",
      "Suburb targeting pages built in",
      "Click-to-call, quote forms, booking integration",
      "Professional copywriting — not AI junk",
    ],
    price: "from $699",
    href: "/website-design-adelaide",
    accent: "#FF6B35",
    featured: true,
  },
  {
    icon: "📍",
    title: "AI-Driven Local SEO",
    tagline: "Get found on Google",
    description:
      "AI-powered keyword research, AI content generation, suburb pages, Google Business Profile, citation building, and AI rank tracking. We do the work so you rank for searches that bring customers.",
    features: [
      "Keyword research tied to your services",
      "Service pages that target buying intent",
      "Suburb page creation",
      "Blog content (2-4 posts/month)",
      "Google Business Profile optimisation",
      "Monthly rank tracking and reporting",
    ],
    price: "from $399/mo",
    href: "/seo",
    accent: "#3B82F6",
    featured: false,
  },
  {
    icon: "🤖",
    title: "AI Automation",
    tagline: "Capture every lead",
    description:
      "Missed call text-back, AI receptionist, quote follow-ups, appointment reminders, review requests. Systems that work while you sleep. Integrates with 50+ tools.",
    features: [
      "Missed call text-back (within 30 seconds)",
      "AI receptionist (24/7, Australian accent)",
      "Quote follow-up sequences (3 touchpoints)",
      "Appointment reminders (SMS + email)",
      "Google review request automation",
      "Integrates with 50+ tools",
    ],
    price: "from $199/mo",
    href: "/ai-automation-adelaide",
    accent: "#8B5CF6",
    featured: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = true;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Three AI-powered services that grow Adelaide businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Websites, SEO, and AI automation. Pick one, two, or all three. No lock-in, no agency bloat.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-7 md:p-8 ${
                service.featured
                  ? "border-[#FF6B35]/30 bg-gradient-to-b from-[#FFF8F3] to-white shadow-lg"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {/* Top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: service.accent }}
              />

              {service.featured && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35]/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF6B35]">
                    Lead service
                  </span>
                </div>
              )}

              <div className="mb-4 text-4xl">{service.icon}</div>

              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {service.tagline}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mb-5 text-base text-slate-600">
                {service.description}
              </p>

              <div className="mb-5 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-950">{service.price}</span>
              </div>

              <ul className="mb-6 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]"
                      style={{ background: `${service.accent}15`, color: service.accent }}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
          >
            See All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}