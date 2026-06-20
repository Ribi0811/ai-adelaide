import Link from "next/link";

const roiItems = [
  {
    icon: "🔧",
    label: "One missed plumbing callout",
    value: "$300+ gone",
  },
  {
    icon: "🏥",
    label: "One lost physio booking",
    value: "$120 walking out the door",
  },
  {
    icon: "🤖",
    label: "One month of AI receptionist",
    value: "Less than any of that",
    highlight: true,
  },
];

export default function InvestmentSection() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">What&apos;s the investment?</span>
        </div>

        <h2 className="mb-6 text-center text-h2-mobile text-textPrimary md:text-h2">
          Every Business Is Different — Here&apos;s What You Need to Know
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="panel-light p-6 md:p-10">
            <p className="mb-6 text-body-mobile text-textSecondary md:text-body">
              We don&apos;t do one-size-fits-all pricing. Your business has different call volumes,
              different hours, different needs than the bloke next door.
            </p>
            <p className="mb-8 text-body-mobile font-semibold text-textPrimary md:text-body">
              Most Adelaide businesses invest $99–$247 per month — that&apos;s less than one missed job.
            </p>

            {/* ROI comparison */}
            <div className="mb-8 space-y-3">
              {roiItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 ${
                    item.highlight
                      ? "border-accent/30 bg-accent/10"
                      : "border-slate-200/80 bg-bgSecondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span
                      className={`text-sm md:text-base ${
                        item.highlight ? "font-semibold text-textPrimary" : "text-textSecondary"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`whitespace-nowrap text-sm font-bold md:text-base ${
                      item.highlight ? "text-accent" : "text-textPrimary"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA copy */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 md:p-6">
              <p className="mb-4 text-body-mobile text-textSecondary md:text-body">
                Start with a{" "}
                <span className="font-bold text-textPrimary">free audit</span>. We&apos;ll show
                you exactly what you&apos;re losing, what you could be gaining, and whether this
                makes sense for your business. No pressure. No hard sell. Just numbers.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary px-6 py-3">
                  Book Free Chat <span aria-hidden>→</span>
                </Link>
                <a
                  href="tel:+61871009788"
                  className="flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accent"
                >
                  <span className="text-accent">📞</span>
                  <span>08 7100 9788</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
