"use client";

const steps = [
  {
    number: "01",
    title: "We run your missed call audit",
    subtitle: "Quick review",
    description:
      "We look at how calls are currently handled, where leads are being lost, and what the first win should be.",
  },
  {
    number: "02",
    title: "We set up your AI receptionist",
    subtitle: "2-5 days",
    description:
      "We connect the number, write the call handling script, and make sure the right summaries land back with you.",
  },
  {
    number: "03",
    title: "You get the leads back",
    subtitle: "Simple handoff",
    description:
      "Customers get a proper response, you get the details, and you call back without starting cold.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">How it works</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Simple. Fast. Built for busy tradies.
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          No drawn-out consulting project. We find the leak, set up the system, and get it working.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="panel-light relative flex h-full flex-col overflow-hidden p-8 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white font-display text-xl font-bold text-accent shadow-glow">
                {step.number}
              </div>
              <h3 className="mb-1 min-h-[3.2rem] text-h3-mobile text-textPrimary md:text-h3">
                {step.title}
              </h3>
              <div className="mb-4 min-h-[2rem]">
                <p className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-button text-accent">
                  {step.subtitle}
                </p>
              </div>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
