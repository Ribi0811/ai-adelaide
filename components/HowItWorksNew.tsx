const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "We Audit Your Missed Calls",
    description:
      "You show us your phone log. We count what you're losing — missed calls after hours, during jobs, when you're driving. One missed plumbing job is $300+. You do the maths.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "We Build Your AI Receptionist",
    description:
      "A real AI voice agent that knows your business, answers common questions, captures lead details, and books jobs directly into your calendar. Sounds natural. Handles the tricky stuff.",
  },
  {
    number: "03",
    icon: "📅",
    title: "You Stop Losing Jobs",
    description:
      "Every call gets answered. Every lead gets captured. You wake up to a calendar full of booked jobs instead of a voicemail full of \"sorry I missed you.\"",
  },
];

export default function HowItWorksNew() {
  return (
    <section
      id="how-it-works"
      className="section-shell bg-bgPrimary py-section-mobile md:py-section"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">How it works</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Simple. Fast. Built for busy tradies.
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          No drawn-out consulting project. We find the leak, plug it fast, and you start winning
          back jobs immediately.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="panel-light relative flex h-full flex-col overflow-hidden p-8 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
              {/* Step number */}
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white font-display text-xl font-bold text-accent shadow-glow">
                {step.number}
              </div>
              {/* Icon */}
              <div className="mb-4 text-3xl">{step.icon}</div>
              <h3 className="mb-4 text-h3-mobile text-textPrimary md:text-h3">{step.title}</h3>
              <p className="flex-1 text-body-mobile text-textSecondary md:text-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="btn-primary px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
