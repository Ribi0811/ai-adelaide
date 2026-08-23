import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Portfolio from "@/components/Portfolio";
import { siteConfig } from "@/lib/constants";
import { selectedWork } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Website Portfolio & Verified Work",
  description:
    "View permission-backed website examples from AI Adelaide, including live Next.js and WordPress work, clear scope details and honest proof standards.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Website Portfolio & Verified Work",
    description:
      "Permission-backed live website examples and the proof standard AI Adelaide applies to public client work.",
    url: `${siteConfig.url}/testimonials`,
  },
};

const proofStandards = [
  {
    title: "Permission-backed examples",
    body: "A site owner has approved each public screenshot and live link. We describe the work without claiming ownership of the underlying business.",
  },
  {
    title: "No invented outcomes",
    body: "Ranking, traffic and revenue figures only belong here when the baseline, timeframe, measurement and permission can be verified.",
  },
  {
    title: "Scope you can inspect",
    body: "Each example identifies the platform and visible work so you can assess the design, content and customer journey directly.",
  },
];

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/testimonials#webpage`,
    url: `${siteConfig.url}/testimonials`,
    name: "AI Adelaide Website Portfolio & Verified Work",
    inLanguage: "en-AU",
  };

  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-shell bg-bgSecondary pb-section-mobile pt-28 md:pb-section md:pt-32">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs items={[{ label: "Work" }]} />
          <div className="panel-light grid-overlay-light mt-6 p-8 md:p-12">
            <span className="eyebrow-light">Work you can inspect</span>
            <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
              Live website examples and honest proof
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              These are live websites we have permission to feature. Open them,
              test the booking journey and compare the different platforms. We
              only publish a client review or measured outcome when it can be
              properly attributed and verified.
            </p>
          </div>
        </div>
      </section>

      <Portfolio
        items={selectedWork}
        eyebrow="Selected work"
        heading="Two live platforms, built for real customers"
        subheadline="A Next.js / React booking platform and a WordPress car-hire site, each shaped around a clear customer journey and search-ready content."
      />

      <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-light">Our evidence standard</span>
            <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
              Proof should survive a closer look
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {proofStandards.map((item) => (
              <article key={item.title} className="brand-card p-6 md:p-8">
                <h3 className="text-h3-mobile text-textPrimary md:text-h3">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="panel-elevated mx-auto max-w-3xl p-8 text-center md:p-12">
            <h2 className="text-h2-mobile text-textPrimary md:text-h2">
              Want to see what your website needs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body-mobile text-textSecondary md:text-body">
              We&apos;ll review the current site, local search opportunity and
              enquiry path, then tell you which fixes deserve priority.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/audit" className="btn-primary inline-flex px-6 py-3">
                Get a Free Audit <span aria-hidden>→</span>
              </Link>
              <Link href="/contact?service=website" className="btn-secondary inline-flex px-6 py-3">
                Discuss a Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
