import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, testimonials, caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Testimonials & Case Studies",
  description:
    "Real reviews from Adelaide tradies, clinics, cafes and retail shops. See what AI Adelaide clients say about their new website, SEO, and AI automation.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials & Case Studies",
    description:
      "Real reviews from Adelaide tradies, clinics, cafes and retail shops. See what AI Adelaide clients say.",
    url: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/testimonials#webpage`,
        url: `${siteConfig.url}/testimonials`,
        name: "AI Adelaide Client Testimonials & Case Studies",
        inLanguage: "en-AU",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}#localbusiness`,
        name: "AI Adelaide",
        url: siteConfig.url,
                review: testimonials.map((t) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: t.name },
          reviewBody: t.quote.replace(/&apos;/g, "'").replace(/&rsquo;/g, "'"),
          itemReviewed: {
            "@type": "Service",
            name:
              t.industry === "health"
                ? "AI Clinic Automation Adelaide"
                : t.industry === "cafe" || t.industry === "retail"
                ? "AI Marketing Adelaide"
                : "AI Website & SEO Adelaide",
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="testimonials-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-shell bg-bgSecondary pb-section-mobile pt-28 md:pb-section md:pt-32">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />
          <div className="panel-light grid-overlay-light mt-6 p-8 md:p-12">
            <span className="eyebrow-light">Real Results</span>
            <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
              What Adelaide businesses say about AI Adelaide
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              From tradies in Norwood to cafes in Glenelg to clinics in Burnside — here&apos;s what our clients say after switching to AI-powered websites, SEO, and automation. No agency spin. Just honest reviews from local business owners.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies — measurable outcomes */}
      <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-8 text-center">
            <span className="eyebrow">Outcomes</span>
            <h2 className="mt-3 text-h2-mobile text-textPrimary md:text-h2">
              Real case studies, real numbers
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-body-mobile text-textSecondary md:text-body">
              Three Adelaide businesses. Three measurable wins — more bookings, better rankings, fewer no-shows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <article
                key={cs.business}
                className="brand-card flex h-full flex-col p-6 md:p-8"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {cs.industry}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-textPrimary">{cs.business}</h3>
                <p className="mb-4 text-sm text-textSecondary">{cs.plan}</p>
                <div className="mb-4 rounded-xl border border-accent/20 bg-accent/5 p-4">
                  <p className="text-2xl font-semibold text-accent">{cs.result}</p>
                </div>
                <blockquote className="mb-4 flex-1 border-l-2 border-accent/40 pl-4 text-sm text-textPrimary">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-semibold text-textPrimary">— {cs.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All client reviews */}
      <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-8 text-center">
            <span className="eyebrow">Reviews</span>
            <h2 className="mt-3 text-h2-mobile text-textPrimary md:text-h2">
              All client reviews
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-body-mobile text-textSecondary md:text-body">
              {testimonials.length} verified reviews from Adelaide small businesses.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="brand-card flex h-full flex-col p-6 md:p-8"
              >
                <div className="mb-3 flex items-center gap-1 text-accent" aria-label="5 star rating">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} aria-hidden>★</span>
                  ))}
                </div>
                <blockquote className="mb-5 flex-1 text-base text-textPrimary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-slate-200/60 pt-4">
                  <p className="font-semibold text-textPrimary">{t.name}</p>
                  <p className="text-sm text-textSecondary">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="panel-elevated mx-auto max-w-3xl p-8 text-center md:p-12">
            <h2 className="mb-4 text-h2-mobile text-textPrimary md:text-h2">
              Ready to be the next Adelaide case study?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-mobile text-textSecondary md:text-body">
              Free 15-minute chat. We&apos;ll tell you honestly which service (if any) would help your business — no pitch deck, no pressure.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary inline-flex px-6 py-3 text-base">
                Book a Free Chat <span aria-hidden>→</span>
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center rounded-xl border border-accent/40 bg-white px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent/5"
              >
                Run Free AI Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
