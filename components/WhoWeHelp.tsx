import Link from "next/link";

const industries = [
  {
    icon: "🔧",
    title: "Trades",
    description:
      "Plumbers, electricians, HVAC techs, gas fitters, builders. You're on a ladder or under a sink when the phone rings. Missed call = missed job. We fix that.",
  },
  {
    icon: "🏥",
    title: "Allied Health",
    description:
      "Physios, dentists, chiropractors, massage therapists. Appointments are your revenue. Every missed call is a patient going somewhere else.",
  },
  {
    icon: "🏪",
    title: "Small Retail & Hospitality",
    description:
      "Cafes, restaurants, local shops. People call for hours, bookings, questions. If you can't answer, they Google your competitor.",
  },
  {
    icon: "📞",
    title: "Anyone Who Can't Afford to Miss a Call",
    description:
      "If your phone ringing means money and you can't always pick up — that's who we help.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">Who we help</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Built for Adelaide Businesses That Rely on the Phone
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          If your phone ringing means money, you can't afford to miss calls. Here's who we work
          with.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="panel-light relative flex flex-col overflow-hidden p-6 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="mb-4 text-4xl">{industry.icon}</div>
              <h3 className="mb-3 text-h3-mobile text-textPrimary md:text-h3">{industry.title}</h3>
              <p className="text-body-mobile text-textSecondary md:text-body">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
