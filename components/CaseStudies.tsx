const studies = [
  {
    title: "Adelaide plumber, 8 employees",
    result: "Was missing 12+ calls/week. Now recovers 9 of them automatically.",
  },
  {
    title: "Adelaide electrician, sole trader",
    result: "Stopped losing weekend enquiries. Books 3-4 extra jobs per month.",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Results from clients</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          The kind of wins tradies care about
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          Not vanity metrics. More calls recovered, more enquiries handled, more jobs booked.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <div key={study.title} className="brand-card p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Results from clients</p>
              <h3 className="mt-4 text-h3-mobile text-textPrimary md:text-h3">{study.title}</h3>
              <p className="mt-4 text-body-mobile text-textSecondary md:text-body">{study.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
