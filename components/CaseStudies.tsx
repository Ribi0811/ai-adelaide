import { caseStudies } from "@/lib/constants";

type CaseStudiesProps = {
  /** Filter by industry. If omitted, shows the first 3. */
  industry?: string;
  /** Show 2 or 3 case studies (default 3). */
  count?: number;
  /** Optional heading override. */
  heading?: string;
  /** Optional eyebrow text. */
  eyebrow?: string;
};

export default function CaseStudies({
  industry,
  count = 3,
  heading = "Real Adelaide case studies",
  eyebrow = "Case studies",
}: CaseStudiesProps) {
  const filtered = industry
    ? caseStudies.filter((c) => c.industry === industry)
    : caseStudies;

  const items = filtered.length > 0 ? filtered.slice(0, count) : caseStudies.slice(0, count);

  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          {heading}
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          Here&apos;s the kind of change a proper website and SEO makes for an
          Adelaide small business.
        </p>

        <div className={`grid gap-6 ${count === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {items.map((c, index) => (
            <article
              key={`${c.business}-${index}`}
              className="brand-card flex h-full flex-col p-6 md:p-8"
            >
              <div className="mb-4">
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {c.industry}
                </span>
              </div>

              <h3 className="mb-2 text-h3-mobile text-textPrimary md:text-h3">
                {c.business}
              </h3>

              <div className="panel-soft mb-5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  Plan
                </p>
                <p className="mt-1 text-sm font-semibold text-textPrimary">
                  {c.plan}
                </p>
              </div>

              <div className="panel-soft mb-5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-textSecondary">
                  Result
                </p>
                <p className="mt-1 text-sm font-semibold text-textPrimary">
                  {c.result}
                </p>
              </div>

              <blockquote
                className="flex-1 border-l-4 border-accent/30 pl-4 text-sm italic text-textPrimary"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${c.quote}&rdquo;` }}
              />

              <p className="mt-4 text-xs text-textSecondary">— {c.name}</p>
            </article>
          ))}
        </div>

        {/* Honesty disclaimer (Ivan-approved 2026-07-17). Keep this whenever
            the caseStudies array is displayed — the figures are indicative,
            not audited client results. */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-textSecondary">
          Illustrative examples based on typical results. Individual outcomes
          vary by business, service area, competition and offer.
        </p>
      </div>
    </section>
  );
}
