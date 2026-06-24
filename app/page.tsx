import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import SuburbNav from "@/components/SuburbNav";
import HomeV2Hero from "@/components/home-v2/Hero";
import HomeV2Stats from "@/components/home-v2/Stats";
import HomeV2Services from "@/components/home-v2/Services";
import HomeV2Problem from "@/components/home-v2/Problem";
import HomeV2Process from "@/components/home-v2/Process";
import HomeV2Proof from "@/components/home-v2/Proof";
import HomeV2Pricing from "@/components/home-v2/Pricing";
import HomeV2CTA from "@/components/home-v2/CTA";

export const metadata: Metadata = {
  title: "AI Adelaide | AI Websites, SEO & Automation",
  description:
    "AI Adelaide builds AI websites from $699, AI SEO from $399/mo, AI automation from $199/mo for Adelaide small businesses. Book a free chat.",
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
        name: "AI Adelaide",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        description:
          "AI Adelaide builds AI-powered websites, AI-driven local SEO, and AI automation for Adelaide small businesses. Websites from $699, SEO from $399/month, AI automation from $199/month.",
        email: siteConfig.email,
        telephone: siteConfig.phoneHref?.replace("tel:", "") || "+61871009788",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5 Peel St",
          addressLocality: "Adelaide",
          addressRegion: "SA",
          postalCode: "5000",
          addressCountry: "AU",
        },
        areaServed: "Adelaide",
        foundingDate: "2023",
        priceRange: "$$",
        sameAs: [
          "https://www.linkedin.com/company/ai-adelaide",
          "https://share.google/cpcxmI66WmeoHWMwu",
        ],
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
        "@type": "FAQPage",
        "@id": `${siteConfig.url}#faq`,
        url: siteConfig.url,
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a website cost in Adelaide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI Adelaide websites start at $699 one-off for a Starter site (3-5 pages, live in 48 hours), $1,299 for a Business site (5-10 pages, blog setup, suburb targeting), and $2,499 for a Growth site (10+ pages, full SEO stack, booking system). You own the site — no monthly fees, no lock-in.",
            },
          },
          {
            "@type": "Question",
            name: "How long does SEO take to rank in Adelaide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For local Adelaide keywords (e.g. 'plumber Norwood', 'café Glenelg'), most clients see first-page rankings within 60-90 days. National keywords take 4-6 months. We track rankings weekly and report progress monthly — no guessing, no 6-month silent periods.",
            },
          },
          {
            "@type": "Question",
            name: "What does AI automation actually do for a small business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The three highest-ROI automations for Adelaide small businesses: (1) missed-call text-back (recovers 30-60% of lost leads), (2) AI receptionist (answers 24/7 for $199/mo vs $4,000/mo hire), (3) quote follow-up sequences (doubles close rate on warm leads). Most clients recover $2,000-$5,000/week in week one.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a website take to build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Starter websites are live in 48 hours. Business websites take 5-7 days. Growth websites take 10-14 days. We handle everything — design, copy, SEO setup, integrations — so you can keep running your business. No tech skills required on your end.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help if I already have a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Most of our clients come to us with an existing website that isn't working. We'll audit it for free, tell you what to fix vs scrap, and either improve it or rebuild it. No upsell if the existing site is fine.",
            },
          },
          {
            "@type": "Question",
            name: "Do you only work with Adelaide businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we're Adelaide-based and built for South Australian small businesses. Tradies, allied health, retail, hospitality, professional services. We're local, we know the market, and we don't pretend to be a global agency.",
            },
          },
          {
            "@type": "Question",
            name: "Do I have to sign a long-term contract?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Websites are one-off, you own them outright. SEO and automation are month-to-month. You own your content, your data, your domain. If you want to leave, you take everything with you — no lock-in, no exit fees.",
            },
          },
          {
            "@type": "Question",
            name: "How much does an AI receptionist cost in Adelaide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI receptionist pricing for Adelaide businesses starts at $199/month setup + $99/month ongoing. Compare that to a virtual receptionist at $300-$800/month or a full-time hire at $4,000+/month. You get 24/7 call answering, instant text-back, and calendar booking — and you only pay for what you use.",
            },
          },
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "10",
          bestRating: "5",
          worstRating: "1",
        },
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

      {/* Adelaide suburb grid — all 34 by region, boosts internal linking + crawl */}
      <SuburbNav variant="homepage" />

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

      {/* More from AI Adelaide — internal linking + sibling discovery */}
      <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="eyebrow">More from AI Adelaide</span>
            <h2 className="mt-3 text-h2-mobile text-textPrimary md:text-h2">
              Industries we serve & tools you can use
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-mobile text-textSecondary md:text-body">
              We build conversion-ready websites and run SEO for Adelaide small businesses across every trade. Pick your industry to see exactly what we&apos;d build for you.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/websites-for-plumbers-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Plumbers</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Plumbing websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Tap-to-call, suburb targeting, click-to-call built in. Live in 48 hours.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See plumber sites →</span>
            </Link>

            <Link href="/websites-for-electricians-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Electricians</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Electrician websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Trust-first design for emergency callouts. Booking, suburb pages, and reviews ready.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See electrician sites →</span>
            </Link>

            <Link href="/websites-for-clinics-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Clinics</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Clinic websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Online bookings, no-show reminders, privacy-first design. Health-compliant copy.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See clinic sites →</span>
            </Link>

            <Link href="/websites-for-cafes-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Cafes</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Cafe websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Menu display, online reservations, location maps. Drives weekend foot traffic.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See cafe sites →</span>
            </Link>

            <Link href="/websites-for-hairdressers-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Hairdressers</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Salon websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Online booking, service menus, transformation galleries. Books clients 24/7.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See salon sites →</span>
            </Link>

            <Link href="/websites-for-retail-shops-adelaide" className="brand-card group flex h-full flex-col p-6 transition hover:border-accent/60 hover:shadow-lg md:p-7">
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Retail</span>
              <h3 className="text-h4-mobile text-textPrimary md:text-h4">Retail shop websites Adelaide</h3>
              <p className="mt-2 flex-1 text-sm text-textSecondary">Product showcase, hours, location, and reviews. E-commerce integration ready.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">See retail sites →</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            <Link href="/ai-automation-adelaide" className="brand-card group p-5 transition hover:border-accent/60 hover:shadow-lg">
              <h3 className="text-sm font-semibold text-textPrimary">AI Automation</h3>
              <p className="mt-1 text-xs text-textSecondary">From $199/mo</p>
              <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent group-hover:underline">Explore →</span>
            </Link>
            <Link href="/ai-receptionist-adelaide" className="brand-card group p-5 transition hover:border-accent/60 hover:shadow-lg">
              <h3 className="text-sm font-semibold text-textPrimary">AI Receptionist</h3>
              <p className="mt-1 text-xs text-textSecondary">From $199/mo</p>
              <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent group-hover:underline">Explore →</span>
            </Link>
            <Link href="/ai-marketing-adelaide" className="brand-card group p-5 transition hover:border-accent/60 hover:shadow-lg">
              <h3 className="text-sm font-semibold text-textPrimary">AI Marketing</h3>
              <p className="mt-1 text-xs text-textSecondary">From $497/mo</p>
              <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent group-hover:underline">Explore →</span>
            </Link>
            <Link href="/tools/ai-readiness-calculator" className="brand-card group p-5 transition hover:border-accent/60 hover:shadow-lg">
              <h3 className="text-sm font-semibold text-textPrimary">AI Readiness Score</h3>
              <p className="mt-1 text-xs text-textSecondary">Free tool</p>
              <span className="mt-3 inline-flex items-center text-xs font-semibold text-accent group-hover:underline">Take the test →</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/about" className="btn-secondary px-6 py-3">About AI Adelaide</Link>
            <Link href="/testimonials" className="btn-secondary px-6 py-3">Client Reviews</Link>
            <Link href="/bookkeeping-adelaide" className="btn-secondary px-6 py-3">AI Bookkeeping Adelaide</Link>
            <Link href="/virtual-receptionist-adelaide" className="btn-secondary px-6 py-3">Virtual Receptionist</Link>
            <Link href="/blog/adelaide-seo-for-tradies" className="btn-secondary px-6 py-3">Tradie SEO Guide (free)</Link>
          </div>
        </div>
      </section>
    </>
  );
}