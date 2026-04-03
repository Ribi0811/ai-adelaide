const reasons = [
  {
    title: "Instant response",
    description: "Every enquiry gets a reply within 60 seconds, day or night",
  },
  {
    title: "Built for your business",
    description:
      "Not a generic tool. Built around how YOUR business actually works",
  },
  {
    title: "Adelaide-based",
    description:
      "We understand local business hours, local clients, local competition",
  },
  {
    title: "Results in days, not months",
    description: "Most clients see results within the first week",
  },
];

export default function WhyUs() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Why clients choose us</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Why it works
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          We focus on response speed, local context, and systems that actually
          fit how small businesses operate day-to-day.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["<60s", "Typical auto-reply after missed calls"],
            ["2-5 days", "Common implementation window"],
            ["2 hrs", "Priority support response target"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="brand-card h-full p-5"
            >
              <p className="font-display text-3xl font-semibold text-textPrimary">
                {value}
              </p>
              <p className="mt-2 text-sm text-textSecondary">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="brand-card flex h-full flex-col p-6 text-center"
            >
              <h3 className="mb-2 text-h3-mobile text-textPrimary md:text-h3">
                {reason.title}
              </h3>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {reason.description}
              </p>
              <div className="mt-5 h-1.5 rounded-full bg-slate-200">
                <div
                  className="h-1.5 rounded-full bg-gradient-to-r from-accent to-electric"
                  style={{ width: reason.title === "Instant response" ? "70%" : reason.title === "Built for your business" ? "77%" : reason.title === "Adelaide-based" ? "84%" : "91%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
