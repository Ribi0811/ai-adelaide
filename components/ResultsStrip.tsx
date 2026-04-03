"use client";

const results = [
  {
    value: "12+ calls/wk",
    title: "Often missed before setup",
    description: "Common for busy tradies once site work, quoting, and after-hours calls stack up.",
  },
  {
    value: "<60 sec",
    title: "Summary back to you",
    description: "Fast handoff so you know who called, what they need, and what they were told.",
  },
  {
    value: "2-5 days",
    title: "Typical setup",
    description: "We keep it simple and get the system live fast.",
  },
  {
    value: "24/7",
    title: "Coverage",
    description: "While you&apos;re on the tools, we handle your missed calls.",
  },
];

export default function ResultsStrip() {
  return (
    <section className="section-shell bg-bgPrimary py-10 md:py-12">
      <div className="max-w-container mx-auto px-6">
        <div className="brand-card grid gap-4 p-6 md:grid-cols-4 md:p-8">
          {results.map((item) => (
            <div key={item.title} className="brand-card h-full p-5">
              <p className="font-display text-3xl font-semibold text-textPrimary md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-textPrimary">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-textSecondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
