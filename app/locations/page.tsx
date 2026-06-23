import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import suburbs from "@/data/suburbs.json";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Adelaide Locations | Web Design, SEO & AI",
  description:
    "We build websites, do local SEO, and set up AI automation for Adelaide small businesses across 13 metro suburbs and the Adelaide Hills. Find your local page.",
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  openGraph: {
    title: "Adelaide Locations ",
    description: "Websites, SEO, and AI automation for Adelaide small businesses across 13 metro suburbs and the Adelaide Hills. Find your local page.",
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
    serviceType: ["Website Design", "Local SEO", "AI Automation"],
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-electric/10 to-accent/10" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Adelaide locations</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              Websites, SEO &amp; AI Automation Across Adelaide
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              We help Adelaide small businesses get found on Google, capture every enquiry, and stop wasting time on admin. Pick your suburb to see what we&apos;d build for your business — websites from $699, local SEO from $399/month, AI automation from $199/month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book Free Chat <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn-secondary px-8 py-4">
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-6">
          <span className="eyebrow-light">Suburbs we serve</span>
        </div>
        <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
          Find your suburb — see what we&apos;d build for you
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suburbs.map((suburb) => (
            <article
              key={suburb.slug}
              className="panel-light relative overflow-hidden p-6"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${suburb.heroColor || "from-accent/10 to-accent/5"} opacity-60`} />
              <div className="relative">
                <p className="mb-2 text-sm font-medium text-slate-500">Postcode {suburb.postcode}</p>
                <h3 className="mb-3 text-2xl font-semibold text-slate-950">{suburb.name}</h3>
                <p className="mb-6 text-body-mobile text-slate-700 md:text-body">{suburb.heroLine}</p>
                <Link
                  href={`/${suburb.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  See {suburb.name} services <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-8 md:p-10 text-center">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Don&apos;t see your suburb?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            We work with Adelaide small businesses across all of metro Adelaide and the Hills. If you&apos;re not on the list above, we still help — book a free chat and we&apos;ll confirm.
          </p>
          <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
