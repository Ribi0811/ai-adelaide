"use client";

const problems = [
  {
    title: "You miss calls when you're on a job",
    description:
      "Every missed call is a lost customer. They don't leave voicemails. They call the next number.",
    impact: "Revenue leak",
  },
  {
    title: "Quotes disappear into the void",
    description:
      "You send the quote. They never reply. You forget to follow up. They book someone else.",
    impact: "Lost jobs",
  },
  {
    title: "You never get around to asking for reviews",
    description:
      "Every happy customer would leave a review, but you never ask. Your competitors have 50 reviews. You have 3.",
    impact: "Trust gap",
  },
];

export default function Problem() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Where businesses leak time</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Sound familiar?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          These are the gaps we typically automate first because they directly
          affect bookings, cash flow, and owner sanity.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="brand-card relative flex h-full flex-col overflow-hidden p-8 md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300/60 to-transparent" />
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-rose-700">
                  {problem.impact}
                </span>
              </div>
              <h3 className="mb-4 min-h-[3.6rem] text-h3-mobile text-textPrimary md:min-h-[4.4rem] md:text-h3">
                {problem.title}
              </h3>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {problem.description}
              </p>
              <div className="mt-6 h-1.5 rounded-full bg-slate-200">
                <div
                  className={`h-1.5 rounded-full ${
                    index === 0
                      ? "w-[88%] bg-gradient-to-r from-red-300/60 to-orange-200/70"
                      : index === 1
                        ? "w-[76%] bg-gradient-to-r from-amber-300/55 to-orange-200/60"
                        : "w-[82%] bg-gradient-to-r from-red-300/55 to-pink-200/55"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
