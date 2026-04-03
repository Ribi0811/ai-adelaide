import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "From $99/month",
    description: "AI receptionist answers calls, sends you a summary",
  },
  {
    name: "Growth",
    price: "From $299/month",
    description: "Receptionist + follow-up automation + review requests",
    featured: true,
  },
  {
    name: "Managed",
    price: "From $699/month",
    description: "Full AI admin employee (quote follow-ups, scheduling, reminders)",
  },
];

export default function PricingSection() {
  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Starting from pricing</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Clear pricing so you know the ballpark
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          Most tradies just want to know if this is a few hundred a month or a five-figure project. It&apos;s not.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`brand-card flex h-full flex-col p-6 md:p-7 ${plan.featured ? "ring-1 ring-accent/30 shadow-glow" : ""}`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-h3-mobile text-textPrimary md:text-h3">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Most common
                  </span>
                )}
              </div>
              <p className="text-2xl font-semibold text-textPrimary">{plan.price}</p>
              <p className="mt-4 flex-1 text-body-mobile text-textSecondary md:text-body">{plan.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="panel-soft p-4 text-sm text-textPrimary">No lock-in contracts</div>
          <div className="panel-soft p-4 text-sm text-textPrimary">Live in days, not months</div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/audit" className="btn-primary px-8 py-4">
            Get Free Missed Call Audit <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
