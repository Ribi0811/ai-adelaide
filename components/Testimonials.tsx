import { testimonials } from "@/lib/constants";

type TestimonialsProps = {
  /** Filter by industry. If omitted, shows the first 3. */
  industry?: string;
  /** Show 2 or 3 testimonials (default 3). */
  count?: number;
  /** Optional heading override. */
  heading?: string;
  /** Optional eyebrow text. */
  eyebrow?: string;
  /** Optional subheadline. */
  subheadline?: string;
};

export default function Testimonials({
  industry,
  count = 3,
  heading = "What Adelaide businesses say",
  eyebrow = "Real results",
  subheadline = "From tradies to clinics to cafes — see what our clients say about their new website, SEO, and automation.",
}: TestimonialsProps) {
  const filtered = industry
    ? testimonials.filter((t) => t.industry === industry)
    : testimonials;

  const items = filtered.length > 0 ? filtered.slice(0, count) : testimonials.slice(0, count);

  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          {heading}
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
          {subheadline}
        </p>

        <div className={`grid gap-6 ${count === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {items.map((t, index) => (
            <figure
              key={`${t.name}-${index}`}
              className="brand-card flex h-full flex-col p-6 md:p-8"
            >
              <div className="mb-4 text-3xl text-accent" aria-hidden>
                &ldquo;
              </div>
              <blockquote
                className="flex-1 text-body-mobile text-textPrimary md:text-body"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <figcaption className="mt-6 border-t border-slate-200/80 pt-4">
                <p className="font-semibold text-textPrimary">{t.name}</p>
                <p className="text-sm text-textSecondary">
                  {t.role} &middot; {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-textSecondary">
          Testimonials shown are samples illustrating typical results. Individual outcomes vary based on business, industry, and local market.
        </p>
      </div>
    </section>
  );
}
