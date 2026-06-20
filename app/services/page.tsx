import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Websites, SEO & AI Automation for Adelaide Businesses",
  description:
    "Website design from $699, local SEO, and AI automation for Adelaide small businesses. Three services that actually grow your bottom line. Book a free chat.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Websites, SEO & AI Automation for Adelaide Businesses",
    description:
      "Website design, SEO, and automation for Adelaide small businesses. Start with a free chat.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Adelaide Services",
      },
    ],
  },
};

// Lead product — Websites (hero treatment)
const leadService = {
  id: "website-design",
  icon: "💻",
  heading: "Website Design",
  tagline: "What We Lead With",
  body: "A proper website built for Adelaide small businesses — not a generic template that looks like 50 others. Fast, mobile-first, Google-ready from day one. Click-to-call buttons, service pages, suburb targeting, and online booking. Live in 48 hours for Starter, or fully built out in 10-14 days for Growth. You own it. No lock-in.",
  features: [
    "3-10+ page custom website",
    "Mobile-first, loads in under 2 seconds",
    "Google-ready: schema, sitemap, meta tags",
    "Suburb targeting pages built in",
    "Click-to-call, quote forms, booking integration",
    "Professional copywriting (not AI-generated junk)",
    "No lock-in contracts — you own everything",
  ],
  perfectFor:
    "Tradies, cafes, clinics, beauty salons, retail shops — any Adelaide small business that needs to be found on Google.",
  pricing: "from $699",
  cta: {
    primary: { label: "See Pricing →", href: "/website-pricing" },
    secondary: { label: "Send a Message →", href: "/contact#send-message" },
  },
  note: "Start with: a free 15-minute chat. We'll tell you which tier fits.",
};

const supportingServices = [
  {
    id: "local-seo",
    icon: "📍",
    heading: "Local SEO",
    tagline: "Get Found on Google",
    body: "Keyword research, service pages, suburb pages, blog content, Google Business Profile optimisation, citation building, and rank tracking. We do the technical work so you rank for searches like 'plumber Norwood' or 'cafe Glenelg' — the searches that actually bring customers.",
    features: [
      "Keyword research tied to your services and suburbs",
      "Service pages that target buying intent",
      "Suburb page creation",
      "Blog content (2-4 posts/month)",
      "Google Business Profile optimisation",
      "Citation building (10+ directories)",
      "Monthly rank tracking and reporting",
    ],
    perfectFor:
      "Businesses that want to dominate local search and get consistent enquiries from Google.",
    pricing: "from $399/mo",
    cta: {
      primary: { label: "Learn More →", href: "/seo" },
      secondary: { label: "Send a Message →", href: "/contact#send-message" },
    },
    note: "Results start in 2-4 months for low-competition keywords. Most clients see clear improvement within 90 days.",
  },
  {
    id: "ai-automation",
    icon: "🤖",
    heading: "AI Automation",
    tagline: "Capture Every Lead",
    body: "Missed call text-back, AI receptionist, quote follow-up sequences, appointment reminders, review requests, and Google review automation. Systems that work while you sleep. Integrates with ServiceM8, Tradify, Xero, Google Calendar, Calendly, and most CRMs.",
    features: [
      "Missed call text-back (within 30 seconds)",
      "AI receptionist (24/7, Australian accent)",
      "Quote follow-up sequences (3 touchpoints)",
      "Appointment reminders (SMS + email)",
      "Google review request automation",
      "Integrates with 50+ tools",
      "No lock-in contracts",
    ],
    perfectFor:
      "Tradies, clinics, and busy businesses that miss calls and lose leads while on the job.",
    pricing: "from $199/mo",
    cta: {
      primary: { label: "Learn More →", href: "/ai-automation-adelaide" },
      secondary: { label: "Send a Message →", href: "/contact#send-message" },
    },
    note: "Most businesses recover 3-5 extra jobs per week. Setup takes 2-5 business days.",
  },
];

export default function ServicesPage() {
  const allServices = [leadService, ...supportingServices];
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": allServices.map((service) => ({
      "@type": "Service",
      "@id": `${siteConfig.url}/services#${service.id}`,
      name: service.heading,
      serviceType: "Digital Services",
      description: service.body,
      provider: {
        "@type": "Organization",
        name: "AI Adelaide",
        url: siteConfig.url,
      },
      areaServed: {
        "@type": "City",
        name: "Adelaide",
      },
      offers: {
        "@type": "Offer",
        price: service.pricing.replace(/[^0-9.]/g, ""),
        priceCurrency: "AUD",
      },
    })),
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Page header */}
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Services</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Websites, SEO &amp; AI Automation for Adelaide Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Three things, done properly. Start with a free chat and we&apos;ll show you exactly
            where you&apos;re losing money — and which of these makes the biggest difference for
            your business first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+61871009788"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-700 hover:border-accent/40 hover:bg-accent/5 transition-colors"
            >
              <span className="text-accent">📞</span>
              <span>08 7100 9788</span>
            </a>
          </div>
        </div>
      </section>

      {/* LEAD SERVICE — Website Design, large prominent card */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <article
          id={leadService.id}
          className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-white p-8 shadow-xl md:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-accent to-teal-400" />

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="text-4xl">{leadService.icon}</span>
            <span className="rounded-full border border-accent bg-accent px-4 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white shadow">
              {leadService.tagline}
            </span>
          </div>

          <h2 className="mb-4 text-h1-mobile text-slate-950 md:text-h1">
            {leadService.heading}
          </h2>
          <p className="mb-8 max-w-3xl text-body-mobile text-slate-600 md:text-body">
            {leadService.body}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-[#f6fffe] p-5 md:col-span-2 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                What you get
              </p>
              <ul className="mt-3 space-y-2">
                {leadService.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-[#f6fffe] p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Pricing
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">{leadService.pricing}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href={leadService.cta.primary.href}
                  className="btn-primary justify-center px-5 py-4 text-center text-base"
                >
                  {leadService.cta.primary.label}
                </Link>
                <Link
                  href={leadService.cta.secondary.href}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 hover:border-accent/40 hover:bg-accent/5 transition-colors"
                >
                  {leadService.cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Supporting services — SEO & Automation */}
      <section className="max-w-container mx-auto space-y-6 px-6 pt-8 md:space-y-8 md:pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Also available
        </p>
        {supportingServices.map((service) => (
          <article key={service.id} className="panel-light p-6 md:p-8">
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{service.icon}</span>
                <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {service.tagline}
                </span>
              </div>
              <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">{service.heading}</h2>
              <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
                {service.body}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="panel-light-soft p-5 md:col-span-2 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  What you get
                </p>
                <ul className="mt-3 space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 text-accent">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="panel-light-soft p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Pricing
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{service.pricing}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href={service.cta.primary.href}
                    className="btn-primary justify-center px-5 py-3 text-center"
                  >
                    {service.cta.primary.label}
                  </Link>
                  <Link
                    href={service.cta.secondary.href}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-accent/40 hover:bg-accent/5 transition-colors"
                  >
                    {service.cta.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pricing comparison */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            What the Stack Looks Like
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Starter Stack",
                desc: "Just need a website fast",
                total: "$719 first year",
                breakdown: "Starter website $699 + domain $20",
                includes: "3-page site, mobile-ready, basic SEO, contact form",
              },
              {
                name: "Business Stack",
                desc: "Most popular for small businesses",
                total: "$2,740 first year",
                breakdown: "Business site $1,299 + domain/hosting $260 + SEO $399/mo × 3 months",
                includes: "7-page site, blog, SEO foundation, suburb page, automation-ready",
              },
              {
                name: "Growth Stack",
                desc: "For businesses that want to dominate",
                total: "$7,140 first year",
                breakdown: "Growth site $2,499 + domain/hosting $260 + SEO $699/mo × 12 months",
                includes: "10+ pages, 3 suburb pages, 12 SEO blog posts, automation integrations",
              },
            ].map((stack) => (
              <div key={stack.name} className="panel-light-soft p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-2">
                  {stack.name}
                </p>
                <p className="text-2xl font-bold text-slate-950">{stack.total}</p>
                <p className="mt-1 text-sm text-slate-500">{stack.desc}</p>
                <p className="mt-3 text-sm text-slate-700">{stack.breakdown}</p>
                <p className="mt-2 text-sm text-slate-600">{stack.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-6">
          Helpful guides
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { href: "/website-pricing", title: "Website Pricing", desc: "Transparent pricing for Adelaide businesses — $699, $1,299, $2,499. No hidden fees." },
            { href: "/website-cost-adelaide", title: "How Much Does a Website Cost?", desc: "Full breakdown: DIY vs budget vs us vs agency vs premium. Real numbers." },
            { href: "/seo-vs-google-ads-adelaide", title: "SEO vs Google Ads", desc: "Which is better for Adelaide small businesses? Costs, timelines, and ROI compared." },
            { href: "/ai-automation-vs-hiring-staff-adelaide", title: "AI Automation vs Hiring Staff", desc: "The real cost comparison for Adelaide small businesses." },
            { href: "/missed-call-answering-service-adelaide", title: "Missed Call Answering Service", desc: "Never lose a lead to voicemail again — how it works." },
            { href: "/seo", title: "Local SEO Services", desc: "How we get Adelaide businesses ranking on Google. Keyword research, content, citations." },
          ].map((guide) => (
            <div key={guide.href} className="rounded-2xl border border-slate-100 bg-white shadow-light-card p-6 flex flex-col">
              <p className="font-semibold text-slate-950 mb-2">{guide.title}</p>
              <p className="text-sm text-slate-600 flex-1">{guide.desc}</p>
              <Link href={guide.href} className="inline-block mt-4 text-accent text-sm font-semibold hover:underline">
                Read guide →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Not sure where to start?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at what you need, where you&apos;re losing money,
            and tell you honestly which service makes sense first.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+61871009788"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 hover:border-accent/30 hover:bg-accent/5 transition-colors"
            >
              <span className="text-accent">📞</span>
              <span>Call 08 7100 9788</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
