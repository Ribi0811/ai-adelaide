import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Website Pricing Adelaide | From $699",
  description:
    "AI-powered website pricing for Adelaide small businesses. Starter from $699, Business $1,299, Growth $2,499. One-off, you own it.",
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
    notIncluded: [
      "Multiple suburb pages",
      "Full SEO retainer",
    ],
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
];

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
    ],
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Website Pricing" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design Pricing</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Affordable Websites for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Transparent pricing. No hidden fees. No lock-in contracts. Pick the tier that fits your business today — upgrade whenever you're ready. Websites from $699, live in days, not months.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`panel-light p-6 md:p-8 ${
                tier.popular ? "ring-2 ring-accent shadow-glow" : ""
              }`}
            >
              {tier.popular && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Most Popular
                  </span>
                </div>
              )}
              <h2 className="text-h2-mobile text-slate-950 md:text-h2">{tier.name}</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">{tier.tagline}</p>
              <p className="mt-4 text-4xl font-bold text-slate-950">{tier.price}</p>
              <p className="mt-3 text-body-mobile text-slate-600 md:text-body">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-400">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Best for
                </p>
                <p className="text-sm text-slate-600">{tier.bestFor}</p>
              </div>
              <Link
                href="/contact"
                className={`mt-6 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.popular
                    ? "btn-primary"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-accent/40 hover:bg-accent/5"
                }`}
              >
                {tier.cta} <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-2 text-h2-mobile text-slate-950 md:text-h2">
            Add-Ons: SEO & Automation
          </h2>
          <p className="mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Your website is the foundation. Add SEO to get found on Google, or automation to capture every lead. Mix and match — no lock-in.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {addons.map((addon) => (
              <div key={addon.name} className="panel-light-soft p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-h3-mobile text-slate-950 md:text-h3">{addon.name}</h3>
                  <p className="text-2xl font-bold text-accent">{addon.price}</p>
                </div>
                <p className="mt-3 text-sm text-slate-600">{addon.description}</p>
                <ul className="mt-4 space-y-2">
                  {addon.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-[10px] text-accent">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            What's Always Included
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
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
            ].map((item) => (
              <div key={item.title} className="panel-light-soft p-5">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Website Pricing FAQs
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <CaseStudies count={3} heading="What changed for these Adelaide businesses" />

      {/* Testimonials */}
      <Testimonials count={3} heading="More from our Adelaide clients" />

      {/* CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Not Sure Which Tier You Need?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We'll look at what you do, what you need, and tell you exactly which tier fits — or if you need something custom.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-design-adelaide" className="btn-secondary px-8 py-4">
              Learn More About Our Websites <span aria-hidden>→</span>
            </Link>
            <Link href="/seo" className="btn-secondary px-8 py-4">
              See Our SEO Services <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}