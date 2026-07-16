import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/home-v3/Reveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Websites, SEO & AI for Adelaide",
  description:
    "Websites from $699, local SEO from $399/mo, and AI automation from $199/mo for Adelaide small businesses. Free chat, fixed pricing, no lock-in contracts.",
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

const stacks = [
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
];

const guides = [
  { href: "/website-pricing", title: "Website Pricing", desc: "Transparent pricing for Adelaide businesses — $699, $1,299, $2,499. No hidden fees." },
  { href: "/website-cost-adelaide", title: "How Much Does a Website Cost?", desc: "Full breakdown: DIY vs budget vs us vs agency vs premium. Real numbers." },
  { href: "/seo-vs-google-ads-adelaide", title: "SEO vs Google Ads", desc: "Which is better for Adelaide small businesses? Costs, timelines, and ROI compared." },
  { href: "/ai-automation-vs-hiring-staff-adelaide", title: "AI Automation vs Hiring Staff", desc: "The real cost comparison for Adelaide small businesses." },
  { href: "/missed-call-answering-service-adelaide", title: "Missed Call Answering Service", desc: "Never lose a lead to voicemail again — how it works." },
  { href: "/seo", title: "Local SEO Services", desc: "How we get Adelaide businesses ranking on Google. Keyword research, content, citations." },
  { href: "/seo-for-tradies-adelaide", title: "SEO for Tradies Adelaide", desc: "Tradie-specific SEO playbook. GBP, reviews, suburb pages, schema, and pricing from $399/mo." },
];

const INK = "#1D1D1F";

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
    <div className="bg-[#FBFBFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-14 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
            Services
          </p>
          <h1
            className="v3-rise mt-4 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[60px]"
            style={{ color: INK }}
          >
            Websites, SEO &amp; AI Automation for Adelaide Businesses
          </h1>
          <p className="v3-rise mt-6 max-w-2xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
            Three things, done properly. Start with a free chat and we&apos;ll
            show you exactly where you&apos;re losing money — and which of
            these makes the biggest difference for your business first.
          </p>
          <div className="v3-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.36s]">
            <Link
              href="/contact#send-message"
              data-track="quote_services_hero"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
            >
              Send a Message
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="tel:+61871009788"
              data-track="tel_services_hero"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 font-mono text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
            >
              08 7100 9788
            </a>
          </div>
        </div>
      </section>

      {/* LEAD SERVICE — Website Design, the dark moment */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-container">
          <Reveal>
            <article
              id={leadService.id}
              className="v3-shimmer-border relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-8 text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)] md:p-12"
            >
              <div
                className="pointer-events-none absolute right-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#5EF2D6]/[0.12] blur-[100px]"
                aria-hidden
              />
              <span className="relative inline-block rounded-full bg-[#0E8C74] px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {leadService.tagline}
              </span>
              <h2 className="relative mt-5 text-[32px] font-semibold leading-tight tracking-[-0.02em] md:text-[44px]">
                {leadService.heading}
              </h2>
              <p className="relative mt-4 max-w-3xl text-[15px] leading-relaxed text-white/65 md:text-[16px]">
                {leadService.body}
              </p>

              <div className="relative mt-9 grid gap-6 md:grid-cols-3">
                <div className="rounded-[22px] bg-white/[0.05] p-6 md:col-span-2 md:p-7">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
                    What you get
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {leadService.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-white/80">
                        <span className="mt-[2px] font-semibold text-[#5EF2D6]">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[22px] bg-white/[0.05] p-6">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
                      Pricing
                    </p>
                    <p className="mt-2 text-[30px] font-semibold tracking-[-0.02em] text-white">
                      {leadService.pricing}
                    </p>
                  </div>
                  <Link
                    href={leadService.cta.primary.href}
                    data-track="pricing_services_lead"
                    className="inline-flex items-center justify-center rounded-full bg-[#0E8C74] px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]"
                  >
                    {leadService.cta.primary.label}
                  </Link>
                  <Link
                    href={leadService.cta.secondary.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:border-white/45 hover:bg-white/[0.05]"
                  >
                    {leadService.cta.secondary.label}
                  </Link>
                </div>
              </div>
              <p className="relative mt-7 text-[13px] text-white/45">{leadService.note}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Supporting services */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#98989D]">
              Also available
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {supportingServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] md:p-9">
                  <span className="inline-block w-fit rounded-full border border-[#0E8C74]/25 bg-[#0E8C74]/[0.06] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">
                    {service.tagline}
                  </span>
                  <h2 className="mt-4 text-[26px] font-semibold leading-tight tracking-[-0.02em] md:text-[30px]" style={{ color: INK }}>
                    {service.heading}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#6E6E73]">
                    {service.body}
                  </p>

                  <div className="mt-6 rounded-[20px] bg-[#F5F5F7] p-6">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                      What you get
                    </p>
                    <ul className="mt-3.5 space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-[#424245]">
                          <span className="mt-[2px] font-semibold text-[#0E8C74]">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                        Pricing
                      </p>
                      <p className="mt-1 text-[26px] font-semibold tracking-[-0.02em]" style={{ color: INK }}>
                        {service.pricing}
                      </p>
                    </div>
                    <div className="ml-auto flex flex-col gap-2.5 sm:flex-row">
                      <Link
                        href={service.cta.primary.href}
                        className="inline-flex items-center justify-center rounded-full bg-[#0E8C74] px-5 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
                      >
                        {service.cta.primary.label}
                      </Link>
                      <Link
                        href={service.cta.secondary.href}
                        className="inline-flex items-center justify-center rounded-full border border-black/[0.12] px-5 py-3 text-[14px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
                      >
                        {service.cta.secondary.label}
                      </Link>
                    </div>
                  </div>
                  <p className="mt-5 text-[13px] leading-relaxed text-[#98989D]">{service.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-[#F5F5F7] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              What the Stack Looks Like
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {stacks.map((stack, i) => (
              <Reveal key={stack.name} delay={i * 0.08}>
                <div
                  className={`h-full rounded-[24px] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)] ${
                    i === 1 ? "ring-2 ring-[#0E8C74]" : "border border-black/[0.06]"
                  }`}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">
                    {stack.name}
                  </p>
                  <p className="mt-3 text-[26px] font-semibold tracking-[-0.02em] tabular-nums" style={{ color: INK }}>
                    {stack.total}
                  </p>
                  <p className="mt-1 text-[13px] text-[#98989D]">{stack.desc}</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-[#424245]">{stack.breakdown}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#6E6E73]">{stack.includes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#98989D]">
              Helpful guides
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, i) => (
              <Reveal key={guide.href} delay={(i % 3) * 0.06}>
                <Link
                  href={guide.href}
                  className="group flex h-full flex-col rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8C74]/50 hover:shadow-[0_16px_40px_rgba(14,140,116,0.12)]"
                >
                  <p className="text-[15px] font-semibold tracking-tight text-[#1D1D1F] transition-colors group-hover:text-[#0E8C74]">
                    {guide.title}
                  </p>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#6E6E73]">{guide.desc}</p>
                  <span className="mt-4 text-[13.5px] font-semibold text-[#0E8C74]">
                    Read guide{" "}
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-4 md:pb-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free 15-minute chat. We&apos;ll look at what you need,
              where you&apos;re losing money, and tell you honestly which
              service makes sense first.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#send-message"
                data-track="quote_services_cta"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Send a Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="tel:+61871009788"
                data-track="tel_services_cta"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                Call 08 7100 9788
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
