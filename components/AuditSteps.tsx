const steps = [
  {
    icon: "📱",
    title: "We review your missed calls",
    detail:
      "Show us your phone log. We count what's slipping through.",
  },
  {
    icon: "💰",
    title: "We calculate your lost revenue",
    detail: "Real numbers, not guesses. Most tradies are shocked.",
  },
  {
    icon: "🎧",
    title: "We demo the AI on your business",
    detail:
      "Hear it handle YOUR type of calls, with YOUR business details.",
  },
  {
    icon: "📋",
    title: "You get a custom action plan",
    detail:
      "Whether you work with us or not. No hard sell. Just the facts.",
  },
];

export default function AuditSteps() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="eyebrow-light">Free 30-minute session</span>
          <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
            What Happens on Your Audit?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="panel-light flex flex-col gap-3 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl">
                  {step.icon}
                </span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-h3-mobile font-semibold text-slate-900 md:text-h3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Subtext + CTA */}
        <div className="mt-10 text-center">
          <p className="mb-6 text-body-mobile text-slate-500 md:text-body">
            The whole thing takes 30 minutes. You&apos;ll know exactly what you&apos;re
            losing and how to fix it.
          </p>
          <a
            href="tel:0871009788"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4"
          >
            <span>📞</span>
            <span>Book Your Audit — 08 7100 9788</span>
          </a>
        </div>
      </div>
    </section>
  );
}
