import type { Metadata } from "next";
import Link from "next/link";
import suburbs from "@/data/suburbs.json";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Automation Adelaide Suburbs | Local Service Coverage",
  description:
    "AI Adelaide delivers AI automation services across metro Adelaide and the Adelaide Hills, helping local businesses capture more leads and save admin time.",
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  openGraph: {
    title: "AI Automation Locations Across Adelaide",
    description:
      "Explore all Adelaide suburbs where AI Adelaide provides practical automation systems for local businesses.",
    url: `${siteConfig.url}/locations`,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function LocationsPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.url}/locations`,
    areaServed: suburbs.map((suburb) => ({
      "@type": "City",
      name: `${suburb.name} ${suburb.postcode}`,
    })),
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
            <span className="eyebrow">Locations</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-textPrimary md:text-h1">
            AI Automation Services Across Adelaide
          </h1>
          <p className="max-w-3xl text-body-mobile text-textSecondary md:text-body">
            We support business owners across metro Adelaide and the Adelaide Hills with practical AI
            automation systems that capture leads, reduce admin, and keep bookings moving.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-4">
          <span className="eyebrow">Suburbs we serve</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suburbs.map((suburb) => (
            <article key={suburb.slug} className="panel-light p-6">
              <p className="mb-2 text-sm font-medium text-textSecondary">Postcode {suburb.postcode}</p>
              <h2 className="mb-3 text-2xl font-semibold text-textPrimary">{suburb.name}</h2>
              <p className="mb-6 text-body-mobile text-textSecondary md:text-body">{suburb.heroLine}</p>
              <Link href={`/${suburb.slug}`} className="btn-primary inline-block px-5 py-3">
                Learn more <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
