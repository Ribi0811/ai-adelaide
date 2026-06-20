"use client";

const results = [
  {
    value: "from $699",
    title: "Starter website",
    description: "One-off setup, you own the site, no lock-in. Live in 48 hours.",
  },
  {
    value: "48 hrs",
    title: "Brief to live",
    description: "From your first 15-minute call to a live, Google-ready site.",
  },
  {
    value: "from $399/mo",
    title: "Local SEO",
    description: "Rank for '[your trade] [suburb]' and stop paying for every click.",
  },
  {
    value: "30-90 days",
    title: "First SEO movement",
    description: "Depends on your niche and suburb — we'll be honest about timing.",
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
