import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import HomeV2Hero from "@/components/home-v2/Hero";
import HomeV2Stats from "@/components/home-v2/Stats";
import HomeV2Services from "@/components/home-v2/Services";
import HomeV2Problem from "@/components/home-v2/Problem";
import HomeV2Process from "@/components/home-v2/Process";
import HomeV2Proof from "@/components/home-v2/Proof";
import HomeV2Pricing from "@/components/home-v2/Pricing";
import HomeV2CTA from "@/components/home-v2/CTA";

export const metadata: Metadata = {
  title: "AI Adelaide | AI-Powered Websites, SEO & AI Automation for Adelaide Businesses",
  description:
    "AI Adelaide builds AI-powered websites from $699, AI-driven local SEO from $399/mo, and AI automation (receptionist, missed call text-back, quote follow-ups) from $199/mo. Faster builds, smarter SEO, 24/7 lead capture. Book a free chat.",
  keywords: [
    "AI Adelaide",
    "AI websites Adelaide",
    "AI SEO Adelaide",
    "AI automation Adelaide",
    "AI receptionist Adelaide",
    "website design Adelaide",
    "affordable websites Adelaide",
    "small business websites Adelaide",
    "local SEO Adelaide",
    "AI-powered websites",
    "AI-driven SEO",
    "small business automation Adelaide",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomeV2() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description:
          "AI Adelaide builds AI-powered websites, AI-driven local SEO, and AI automation for Adelaide small businesses. Websites from $699, SEO from $399/month, AI automation from $199/month.",
        email: siteConfig.email,
        areaServed: "Adelaide",
        knowsAbout: [
          "AI-powered website design",
          "AI-driven local SEO",
          "AI automation",
          "AI receptionist",
          "missed call text-back",
          "quote follow-up automation",
          "Google Business Profile optimisation",
          "local search marketing",
        ],
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
        name: "AI Adelaide",
        description:
          "AI Adelaide builds AI-powered websites from $699, AI-driven local SEO from $399/month, and AI automation (AI receptionist, missed call text-back, quote follow-ups) from $199/month for Adelaide small businesses.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adelaide",
          addressRegion: "SA",
          postalCode: "5000",
          streetAddress: "5 Peel St",
          addressCountry: "AU",
        },
        areaServed: "Adelaide",
        url: siteConfig.url,
        telephone: "+61871009788",
        priceRange: "$$",
        serviceType: [
          "AI-Powered Website Design",
          "AI-Driven Local SEO",
          "AI Automation",
          "AI Receptionist",
        ],
        knowsAbout: [
          "AI-powered website design",
          "AI-driven local SEO",
          "AI automation",
          "AI receptionist",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="home-v2-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — bold dark section with gradient */}
      <HomeV2Hero />

      {/* Stats bar — full-bleed dark continuation */}
      <HomeV2Stats />

      {/* Services — three pillars with visual cards */}
      <HomeV2Services />

      {/* Problem — pain points with bold contrast */}
      <HomeV2Problem />

      {/* Process — how it works, numbered steps */}
      <HomeV2Process />

      {/* Proof — testimonials + case studies */}
      <HomeV2Proof />

      {/* Pricing — quick glance */}
      <HomeV2Pricing />

      {/* Contact form section */}
      <section id="send-message" className="bg-white py-20 md:py-28">
        <div className="max-w-container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">
                Send us a message
              </span>
              <h2 className="mb-4 mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                Prefer to message instead of call?
              </h2>
              <p className="mb-4 text-lg text-slate-600">
                Fill in the form and we&apos;ll get back to you within <strong>2 business hours</strong>. No phone call required, no pressure, no spam. Tell us about your business and what you&apos;re trying to figure out — we&apos;ll send a useful reply.
              </p>
              <p className="mb-6 text-lg text-slate-600">
                Browsing at 11pm? Send a message now and we&apos;ll reply in the morning.
              </p>
              <div className="space-y-3">
                {[
                  ["Reply within 2 business hours", "usually faster"],
                  ["No phone call required", "reply by email"],
                  ["No pressure", "useful reply whether you book or not"],
                  ["Fixed quote on the spot", "no back-and-forth"],
                ].map(([title, sub]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B35]/10 text-sm text-[#FF6B35]">
                      ✓
                    </span>
                    <p className="text-base text-slate-900">
                      <strong>{title}</strong> — {sub}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
                <p>
                  Or if you&apos;d rather call:{" "}
                  <a href={siteConfig.phoneHref} className="font-semibold text-slate-900 underline hover:text-[#FF6B35]">
                    {siteConfig.phone}
                  </a>{" "}
                  (Adelaide hours, Mon-Fri)
                </p>
                <p className="mt-1">
                  Or email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold text-slate-900 underline hover:text-[#FF6B35]">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <HomeV2CTA />
    </>
  );
}