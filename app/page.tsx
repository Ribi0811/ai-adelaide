import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/Hero";
import ResultsStrip from "@/components/ResultsStrip";
import LostLeadsCalculator from "@/components/LostLeadsCalculator";
import Problem from "@/components/Problem";
import BeforeAfterCase from "@/components/BeforeAfterCase";
import OfferPath from "@/components/OfferPath";

import WhatWeBuild from "@/components/WhatWeBuild";
import WhyUs from "@/components/WhyUs";

import FooterCTA from "@/components/FooterCTA";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Adelaide — AI Receptionist & Automation Services for Adelaide Businesses",
  description:
    "AI Adelaide helps Adelaide businesses never miss a call. AI receptionist, missed call text-back, and workflow automation. 24/7 coverage, Adelaide-based support. Call (08) 7100 9788.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        areaServed: "Adelaide",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "en-AU",
        publisher: {
          "@id": `${siteConfig.url}#organization`,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}#localbusiness`,
        name: siteConfig.name,
        description: "AI receptionist for Adelaide tradies.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adelaide",
          addressRegion: "SA",
          postalCode: "5000",
          streetAddress: "Adelaide SA",
          addressCountry: "AU",
        },
        areaServed: "Adelaide",
        url: siteConfig.url,
        telephone: "+61871009788",
        serviceType: ["AI Receptionist", "Missed Call Handling"],
      },
    ],
  };

  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — carousel with 3 slides */}
      <Hero />

      {/* AI Readiness CTA */}
      <section className="section-shell bg-[linear-gradient(180deg,#f8fcff_0%,#eef8f7_100%)] py-8 md:py-12">
        <div className="max-w-container mx-auto px-6">
          <div className="rounded-[32px] border border-[#cdebe4] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,29,43,0.08)] md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-center">
              <div>
                <span className="inline-flex rounded-full border border-[#bfeee6] bg-[#ecfffb] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#00b899]">
                  Free AI Readiness Quiz
                </span>
                <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
                  Not sure where to start?
                </h2>
                <p className="mt-4 max-w-2xl text-body-mobile leading-7 text-slate-700 md:text-body">
                  Take our free AI Readiness Quiz in 5 minutes and get your personalised score. It’s a simple way to see where your business stands before investing in automation or an AI receptionist.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/tools/ai-readiness-calculator"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-[#0B1929] transition hover:bg-accent-hover"
                >
                  Take the Free AI Readiness Quiz <span aria-hidden className="ml-2">→</span>
                </Link>
                <p className="text-sm text-slate-600 md:max-w-xs md:text-right">
                  Get a clear score, instant tier result, and tailored next-step guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results strip — stats bar */}
      <ResultsStrip />

      {/* Lost Leads Calculator */}
      <LostLeadsCalculator compact />

      {/* Problem — pain points */}
      <Problem />

      {/* Before/After case study */}
      <BeforeAfterCase />

      {/* Offer Path — audit → strategy → build → support */}
      <OfferPath />

      {/* What We Build — practical systems */}
      <WhatWeBuild />

      {/* Why Us — trust signals */}
      <WhyUs />

      {/* Footer CTA */}
      <FooterCTA />

      {/* Demo CTA */}
      <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="panel-light p-8 md:p-10 text-center">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Hear it yourself — call our demo line
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-700 md:text-body">
              Want to hear how the AI receptionist sounds? Call <strong>(08) 7100 9788</strong> anytime — it&apos;s live 24/7. Ask about pricing, booking a job, or anything else. See how it handles real conversations.
            </p>
            <a href="tel:+61871009788" className="btn-primary inline-flex px-8 py-4">
              Call Demo Line Now <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
