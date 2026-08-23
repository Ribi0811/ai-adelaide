import Link from "next/link";
import { testimonials } from "@/lib/constants";

type TestimonialsProps = {
  industry?: string;
  count?: number;
  heading?: string;
  eyebrow?: string;
  subheadline?: string;
};

export default function Testimonials({
  industry,
  count = 3,
  heading = "What Adelaide customers say",
  eyebrow = "Customer feedback",
  subheadline = "Genuine customer comments. Names are shortened for privacy.",
}: TestimonialsProps) {
  const filtered = industry
    ? testimonials.filter((testimonial) => testimonial.industry === industry)
    : testimonials;
  const items = (filtered.length > 0 ? filtered : testimonials).slice(0, count);

  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-light">{eyebrow}</span>
          <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">{heading}</h2>
          <p className="mt-4 text-body-mobile text-slate-600 md:text-body">{subheadline}</p>
        </div>
        <div className={`mt-10 grid gap-6 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {items.map((testimonial) => (
            <figure key={`${testimonial.name}-${testimonial.industry}`} className="brand-card flex h-full flex-col p-6 md:p-8">
              <blockquote className="flex-1 text-body-mobile text-textPrimary md:text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200/80 pt-4">
                <p className="font-semibold text-textPrimary">{testimonial.name}</p>
                <p className="text-sm text-textSecondary">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/testimonials" className="text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4">
            View live work and our proof standard <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
