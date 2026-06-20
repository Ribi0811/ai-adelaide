"use client";

const problems = [
  {
    title: "You've got no website — or one that embarrasses you",
    description:
      "Customers Google you before they call. If nothing shows up, or what shows up is slow and ugly, they call the next result. You're losing jobs you should be winning.",
    impact: "Invisible online",
  },
  {
    title: "You're not ranking on Google for your services",
    description:
      "Your competitors show up on page one for 'plumber Norwood' and 'cafe Glenelg'. You don't. Every day that doesn't change, those customers go to them — not you.",
    impact: "Lost enquiries",
  },
  {
    title: "Leads fall through the cracks after they enquire",
    description:
      "Someone calls while you're on a job. They don't leave a voicemail. They try the next business. The lead is gone, and you never even knew it existed.",
    impact: "Wasted ad spend",
  },
];

export default function Problem() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Where Adelaide businesses lose customers</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Sound familiar?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          These are the gaps we fix first because they directly affect how many customers find you, contact you, and book.
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
