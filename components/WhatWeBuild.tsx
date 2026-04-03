"use client";

const builds = [
  {
    title: "AI Receptionist",
    href: "/ai-receptionist-adelaide",
    description:
      "Answers calls, captures job details, and tells the caller a callback is coming while you stay focused on the job.",
    metric: "Phone coverage",
    flow: ["Call comes in", "AI answers", "Details captured", "Summary sent to you"],
  },
  {
    title: "Automated Admin System",
    href: "/ai-office-worker-adelaide",
    description:
      "Handles quote follow-ups, reminders, and routine admin tasks so fewer leads slip through the cracks.",
    metric: "Back-office support",
    flow: ["Task triggered", "Reminder sent", "Status tracked", "Owner updated"],
  },
  {
    title: "Review + Follow-up System",
    href: "/ai-automation-for-tradies-adelaide",
    description:
      "Requests reviews, chases follow-ups, and keeps your pipeline moving without more manual admin.",
    metric: "Growth support",
    flow: ["Job completed", "Review request sent", "Follow-up runs", "More jobs booked"],
  },
];

export default function WhatWeBuild() {
  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">What we set up</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Practical systems Adelaide tradies actually use
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          No buzzwords. Just phone answering, follow-up, and admin systems that stop leads going cold.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {builds.map((build) => (
            <div key={build.title} className="brand-card relative flex h-full flex-col overflow-hidden p-6 md:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" />

              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  {build.metric}
                </span>
              </div>

              <h3 className="mb-4 min-h-[3.4rem] text-h3-mobile text-textPrimary md:min-h-[4.2rem] md:text-h3">
                {build.title}
              </h3>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {build.description}
              </p>

              <a href={build.href} className="mt-4 inline-block text-sm font-semibold text-accent underline">
                View service page →
              </a>

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
