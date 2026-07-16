import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";
import PricingLab from "./parts";

export const metadata: Metadata = {
  title: "Website Pricing Adelaide | From $699",
  description:
    "AI-powered website pricing for Adelaide small businesses — Starter from $699, Business $1,299, Growth $2,499. One-off cost, no lock-in, you own it outright.",
  alternates: {
    canonical: "/website-pricing",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "$699",
    tagline: "Get online fast",
    description:
      "A clean, professional 3-page website for small businesses that need to look legit and get found. Perfect for sole traders and new businesses.",
    features: [
      "3-page custom website (Home, Services, Contact)",
      "Mobile-first responsive design",
      "Click-to-call button",
      "Contact form with email notifications",
      "Basic SEO setup (title tags, meta descriptions)",
      "Google Business Profile setup",
      "Live in 48 hours",
    ],
    notIncluded: [
      "Blog setup",
      "Suburb targeting pages",
      "AI automation integrations",
    ],
    bestFor: "Sole traders, new businesses, anyone with no website",
    cta: "Book Starter Site",
    popular: false,
  },
  {
    name: "Business",
    price: "$1,299",
    tagline: "Most popular",
    description:
      "A complete 5-7 page website built to generate leads. Includes blog setup, SEO foundation, and everything you need to start ranking on Google.",
    features: [
      "5-7 page custom website",
      "Blog setup with CMS",
      "SEO foundation (schema, sitemap, canonical tags)",
      "Suburb service page (1 suburb included)",
      "Google Business Profile optimisation",
      "Lead capture form + AI automation-ready",
      "1 month of SEO setup included",
      "Live in 5-7 days",
    ],
    notIncluded: ["Multiple suburb pages", "Full SEO retainer"],
    bestFor: "Established businesses ready to grow online",
    cta: "Book Business Site",
    popular: true,
  },
  {
    name: "Growth",
    price: "$2,499",
    tagline: "Full growth engine",
    description:
      "A 10+ page website with suburb targeting, full SEO setup, and automation integrations. Built for businesses serious about dominating local search.",
    features: [
      "10+ page custom website",
      "Blog with 3 starter articles",
      "Full SEO setup (schema, internal links, keyword targeting)",
      "3 suburb service pages included",
      "Google Business Profile + Bing Places setup",
      "AI automation integrations (missed call, booking, reviews)",
      "1 month SEO retainer included",
      "Live in 10-14 days",
    ],
    notIncluded: [],
    bestFor: "Businesses wanting to dominate their local area",
    cta: "Book Growth Site",
    popular: false,
  },
];

const addons = [
  {
    name: "Local SEO Retainer",
    price: "$399/mo",
    description:
      "2 blog posts per month, Google Search Console monitoring, Google Business Profile updates, basic citation building.",
    features: [
      "2 SEO blog posts per month",
      "GSC monitoring & reporting",
      "Google Business Profile updates",
      "Basic local citation building",
      "Keyword rank tracking",
    ],
  },
  {
    name: "Growth SEO Retainer",
    price: "$699/mo",
    description:
      "4 blog posts per month, suburb page creation, internal linking, full citation building, competitor tracking.",
    features: [
      "4 SEO blog posts per month",
      "Suburb page creation (2/month)",
      "Internal linking strategy",
      "Full citation building (10/month)",
      "Competitor rank tracking",
      "Monthly SEO report",
    ],
  },
  {
    name: "Automation Starter",
    price: "$199/mo",
    description:
      "Missed call text back system + basic SMS reminders for appointments and quotes.",
    features: [
      "Missed call text back (instant SMS)",
      "SMS appointment reminders",
      "Quote follow-up sequence (3 touchpoints)",
      "Monthly automation review",
    ],
  },
  {
    name: "Automation Business",
    price: "$399/mo",
    description:
      "AI receptionist + quote follow-up + review automation. Full lead capture and nurture system.",
    features: [
      "AI receptionist (24/7 call answering)",
      "Automated quote follow-up sequences",
      "Google review request automation",
      "Lead capture + CRM integration",
      "Monthly automation review & optimisation",
    ],
  },
];

const included = [
  {
    title: "Mobile-first design",
    body: "80%+ of your visitors are on phones. Every site we build works perfectly on mobile.",
  },
  {
    title: "Fast loading",
    body: "Our sites load in under 2 seconds. Google rewards fast sites with better rankings.",
  },
  {
    title: "Google-ready",
    body: "Title tags, meta descriptions, sitemap, schema — all set up correctly from day one.",
  },
  {
    title: "No lock-in",
    body: "You own your site. You own your domain. You can leave anytime — no contracts.",
  },
  {
    title: "Local Adelaide support",
    body: "We're in Adelaide. Call us, text us, or book a meeting. Real local support.",
  },
  {
    title: "AI automation-ready",
    body: "Every site can connect to our AI receptionist and automation systems when you're ready.",
  },
];

const faqs = [
  {
    question: "What's not included in the website price?",
    answer:
      "Domain name registration (~$20/year) and hosting (~$15-30/month) are separate. We help you set these up but you own them. No hidden fees, no lock-in contracts.",
  },
  {
    question: "Can I upgrade from Starter to Business later?",
    answer:
      "Yes, anytime. You only pay the difference between the tiers. No penalty for upgrading.",
  },
  {
    question: "Do you build e-commerce stores?",
    answer:
      "Not at these price points. E-commerce is a different beast — we can quote you separately if you need an online store.",
  },
  {
    question: "What platform do you build on?",
    answer:
      "Next.js — the same framework used by major companies. It's fast, Google loves it, and it's not bloated like WordPress. No plugin nightmares, no security updates every week.",
  },
  {
    question: "Can I edit the website myself?",
    answer:
      "For basic text changes, yes. For structural or design changes, most clients just message us — it's usually done same day at no extra cost.",
  },
  {
    question: "Do you only work with Adelaide businesses?",
    answer:
      "We're Adelaide-based and our SEO targets Adelaide specifically. We can build for businesses anywhere, but our SEO expertise is strongest in the Adelaide market.",
  },
  {
    question: "Can I pay monthly instead of upfront?",
    answer:
      `Yes. The Monthly Website Plan is ${PRICING.website.monthly.setup} setup and then ${PRICING.website.monthly.price} — a Business-level website with hosting, unlimited small content edits, and ongoing updates all included. It's month-to-month with no lock-in: cancel anytime, or buy your site out whenever you want to own it outright.`,
  },
];

const monthlyFeatures = [
  "Everything in the Business tier — 5-7 page custom website",
  "Hosting included — no separate hosting bill",
  "Unlimited small content edits, handled for you",
  "Ongoing updates, security and monitoring",
  "Priority support from a real Adelaide human",
  "Buy your site out anytime — own it outright whenever you like",
];

const INK = "#1D1D1F";
const TEAL = "#0E8C74";

export default function WebsitePricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design & Build",
    serviceType: "Web Design",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://aiadelaide.com.au/#organization",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
      telephone: process.env.NEXT_PUBLIC_PHONE || "+618****9788",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 Peel St",
        addressLocality: "Adelaide",
        addressRegion: "SA",
        postalCode: "5000",
        addressCountry: "AU",
      },
    },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Website design and build for Adelaide small businesses. Three tiers: Starter $699, Business $1,299, Growth $2,499. Live in 48 hours, mobile-first, Google-ready.",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Website",
        price: "699",
        priceCurrency: "AUD",
        description: "3-5 pages, mobile-first, click-to-call, basic SEO",
      },
      {
        "@type": "Offer",
        name: "Business Website",
        price: "1299",
        priceCurrency: "AUD",
        description: "5-10 pages, copywriting, SEO setup, suburb targeting",
      },
      {
        "@type": "Offer",
        name: "Growth Website",
        price: "2499",
        priceCurrency: "AUD",
        description: "10+ pages, full SEO stack, booking system, integrations",
      },
      {
        "@type": "Offer",
        name: "Monthly Website Plan",
        price: "99",
        priceCurrency: "AUD",
        description:
          "$199 setup then $99/month: Business-level website with hosting, content edits and ongoing care included. Month-to-month, buy-out anytime.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
    ],
  };
  return (
    <div className="bg-[#FBFBFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — same words, v4 clothes */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Website Pricing" },
            ]}
          />
          <p className="v3-rise mt-8 font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
            Website Design Pricing
          </p>
          <h1
            className="v3-rise mt-4 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[64px]"
            style={{ color: INK }}
          >
            Affordable Websites for Adelaide Small Businesses
          </h1>
          <p className="v3-rise mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-lg">
            Transparent pricing. No hidden fees. No lock-in contracts. Pick the
            tier that fits your business today — upgrade whenever you&apos;re
            ready. Websites from $699, live in days, not months.
          </p>
        </div>
      </section>

      {/* The Pricing Lab — selectable tiers, add-on toggles, live receipt */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <PricingLab
              tiers={tiers}
              addons={addons}
              addonsHeading={
                <div className="mt-14">
                  <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
                  <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[#1D1D1F] md:text-[40px]">
                    Add-Ons: SEO &amp; Automation
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
                    Your website is the foundation. Add SEO to get found on Google,
                    or automation to capture every lead. Mix and match — no lock-in.
                  </p>
                </div>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* Monthly Website Plan — approved by Ivan 2026-07-16 */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="v3-shimmer-border relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-8 text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)] md:p-12">
              <div
                className="pointer-events-none absolute right-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#5EF2D6]/[0.12] blur-[100px]"
                aria-hidden
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <span className="inline-block rounded-full bg-[#0E8C74] px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    New — pay monthly
                  </span>
                  <h2 className="mt-5 text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[38px]">
                    Prefer to Pay Monthly?
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-[16px]">
                    Get a Business-level website without the upfront cost. We
                    build it, host it, and look after it — you pay{" "}
                    {PRICING.website.monthly.setup} setup today, then{" "}
                    {PRICING.website.monthly.price}. Month-to-month, no lock-in
                    contract, cancel anytime.
                  </p>
                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {monthlyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-white/80">
                        <span className="mt-[2px] font-semibold text-[#5EF2D6]">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-[22px] bg-white/[0.05] p-7 text-center">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
                      Setup today
                    </p>
                    <p className="mt-1.5 text-[34px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
                      {PRICING.website.monthly.setup}
                    </p>
                    <div className="mx-auto my-5 h-px w-16 bg-white/15" aria-hidden />
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
                      Then
                    </p>
                    <p className="mt-1.5 text-[34px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
                      {PRICING.website.monthly.price}
                    </p>
                  </div>
                  <Link
                    href="/contact?service=website#send-message"
                    data-track="quote_monthly_plan"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]"
                  >
                    Start the Monthly Plan
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <p className="text-center text-[12.5px] leading-relaxed text-white/45">
                    Cancel anytime. Want to own it outright later? Buy your
                    site out whenever you like — just ask.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Always Included */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              What&apos;s Always Included
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs — accordion, same words */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Website Pricing FAQs
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
              {faqs.map((faq, i) => (
                <details key={faq.question} className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[16px] font-semibold text-[#1D1D1F] transition hover:bg-black/[0.02] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 text-xl font-normal text-[#0E8C74] transition-transform duration-300 group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="px-7 pb-6 text-[15px] leading-relaxed text-[#6E6E73]">{faq.answer}</p>
                  {i < faqs.length - 1 && <div className="mx-7 border-t border-black/[0.06]" />}
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case studies + Testimonials — same components, same headings */}
      <CaseStudies count={3} heading="What changed for these Adelaide businesses" />
      <Testimonials count={3} heading="More from our Adelaide clients" />

      {/* CTA — same words */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Not Sure Which Tier You Need?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free 15-minute chat. We&apos;ll look at what you do, what
              you need, and tell you exactly which tier fits — or if you need
              something custom.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#send-message"
                data-track="quote_pricing_cta"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Send a Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/website-design-adelaide"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                Learn More About Our Websites <span aria-hidden>→</span>
              </Link>
              <Link
                href="/seo"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                See Our SEO Services <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
