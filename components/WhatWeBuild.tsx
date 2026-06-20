"use client";

import Link from "next/link";

const builds = [
  {
    title: "Website Design",
    href: "/website-design-adelaide",
    description:
      "A proper website built for Adelaide small businesses — not a generic template. Mobile-first, fast, Google-ready, and live in 48 hours. From $699.",
    metric: "Lead service",
    price: "from $699",
    flow: ["15-min call", "We design + write", "You review once", "Live in 48 hours"],
  },
  {
    title: "Local SEO",
    href: "/seo",
    description:
      "Get your business ranking on Google for the searches your customers actually type. Suburb pages, content, citations, Google Business Profile — done for you.",
    metric: "Get found",
    price: "from $399/mo",
    flow: ["Keyword research", "Suburb + service pages", "Content + citations", "Rank tracking monthly"],
  },
  {
    title: "AI Automation",
    href: "/ai-automation-adelaide",
    description:
      "Missed call text-back, AI receptionist, quote follow-ups, review requests. Capture every lead and stop the manual admin drain. From $199/month.",
    metric: "Capture leads",
    price: "from $199/mo",
    flow: ["Map your workflow", "We set up the system", "Goes live in days", "Improves every month"],
  },
];

export default function WhatWeBuild() {
  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">What we build</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Three things Adelaide small businesses need to grow
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          Websites, SEO, and AI automation. Pick one, two, or all three — no lock-in, no agency bloat.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {builds.map((build) => (
            <div key={build.title} className="brand-card relative flex h-full flex-col overflow-hidden p-6 md:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" />

              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  {build.metric}
                </span>
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {build.price}
                </span>
              </div>

              <h3 className="mb-4 min-h-[3.4rem] text-h3-mobile text-textPrimary md:min-h-[4.2rem] md:text-h3">
                {build.title}
              </h3>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {build.description}
              </p>

              <Link href={build.href} className="mt-4 inline-block text-sm font-semibold text-accent underline">
                View service page →
              </Link>

              <div className="panel-soft mt-6 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  Process
                </p>
                <div className="mt-3 space-y-2">
                  {build.flow.map((node, nodeIndex) => (
                    <div key={node} className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${nodeIndex % 2 === 0 ? "bg-electric/80" : "bg-accent/80"}`} />
                      <div className="flex-1 rounded-lg border border-slate-200/80 bg-white/90 px-3 py-2 text-sm text-textPrimary">
                        {node}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
