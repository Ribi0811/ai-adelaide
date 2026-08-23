import Link from "next/link";

type CaseStudiesProps = {
  industry?: string;
  count?: number;
  heading?: string;
  eyebrow?: string;
};

const measures = [
  {
    title: "Qualified enquiries",
    body: "Track calls and forms from the website so traffic is connected to real sales opportunities.",
  },
  {
    title: "Search visibility",
    body: "Record the starting position, clicks and relevant Adelaide queries before judging movement over time.",
  },
  {
    title: "Commercial outcome",
    body: "Use your own lead quality, close rate and revenue—not an invented industry average—to decide whether the work paid off.",
  },
];

/** Replaces the site's former illustrative case studies with an evidence model. */
export default function CaseStudies(_props: CaseStudiesProps) {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Measured outcomes</span>
          <h2 className="mt-4 text-h2-mobile text-textPrimary md:text-h2">
            What we measure after launch
          </h2>
          <p className="mt-4 text-body-mobile text-textSecondary md:text-body">
            Results depend on the business, offer, competition and follow-up.
            We establish a baseline and report what actually changes.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {measures.map((measure) => (
            <article key={measure.title} className="brand-card p-6 md:p-8">
              <h3 className="text-h3-mobile text-textPrimary md:text-h3">{measure.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">{measure.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/audit" className="btn-secondary inline-flex px-6 py-3">
            Establish Your Baseline <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
