import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import suburbs from "@/data/suburbs.json";
import { siteConfig } from "@/lib/constants";

type Suburb = (typeof suburbs)[number];

interface SuburbPageProps {
  params: { suburb: string };
}

function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((suburb) => suburb.slug === slug);
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: suburb.slug }));
}

export function generateMetadata({ params }: SuburbPageProps): Metadata {
  const suburb = getSuburb(params.suburb);

  if (!suburb) {
    return {};
  }

  return {
    title: `AI Automation in ${suburb.name}, Adelaide | AI Adelaide`,
    description: suburb.intro,
    alternates: {
      canonical: `${siteConfig.url}/${suburb.slug}`,
    },
  };
}

export default function SuburbPage({ params }: SuburbPageProps) {
  const suburb = getSuburb(params.suburb);

  if (!suburb) {
    notFound();
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.url}/${suburb.slug}`,
    description: suburb.intro,
    areaServed: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      postalCode: suburb.postcode,
      addressRegion: "SA",
      addressCountry: "AU",
    },
    serviceType: ["Business Automation", "AI Consulting"],
  };

  return (
    <div className="section-shell pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow">Adelaide suburb focus</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-textPrimary md:text-h1">
            AI Automation in {suburb.name}
          </h1>
          <p className="mb-4 max-w-3xl text-lg font-medium text-accent md:text-xl">
            {suburb.heroLine}
          </p>
          <p className="max-w-3xl text-body-mobile text-textSecondary md:text-body">
            {suburb.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book Free 15-Min Chat <span aria-hidden>→</span>
            </Link>
            <Link href="/services" className="btn-secondary px-8 py-4">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-4">
          <span className="eyebrow">Pain points</span>
        </div>
        <h2 className="mb-8 text-h2-mobile text-textPrimary md:text-h2">
          Common bottlenecks for {suburb.name} businesses
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {suburb.painPoints.map((painPoint, index) => (
            <article key={painPoint} className="panel-light p-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-textSecondary">
                Pain point {index + 1}
              </p>
              <p className="text-body-mobile text-textPrimary md:text-body">{painPoint}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-4">
          <span className="eyebrow">Why now?</span>
        </div>
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-textPrimary md:text-h2">Why now in {suburb.name}</h2>
          <p className="max-w-4xl text-body-mobile text-textSecondary md:text-body">{suburb.whyNow}</p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-4">
          <span className="eyebrow">Industries</span>
        </div>
        <h2 className="mb-8 text-h2-mobile text-textPrimary md:text-h2">
          Industries we support in {suburb.name}
        </h2>
        <div className="flex flex-wrap gap-3">
          {suburb.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-8 text-center md:p-12">
          <h2 className="mb-4 text-h2-mobile text-textPrimary md:text-h2">
            Ready to automate your {suburb.name} business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-textSecondary md:text-body">
            Let&apos;s map the fastest path to fewer admin bottlenecks and better lead follow-up.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4">
            Get Started <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
