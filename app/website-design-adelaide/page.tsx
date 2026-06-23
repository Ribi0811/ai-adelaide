import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Website Design Adelaide | From $699",
  description:
    "AI-powered website design for Adelaide small businesses. Built in 48 hours, mobile-first, Google-ready. From $699 one-off. No lock-in. Live in 2 days.",
  alternates: {
    canonical: "/website-design-adelaide",
  },
};

const buildItems = [
  {
    title: "Conversion-focused design",
    body:
      "Every page is built to do one thing — get the visitor to call or enquire. Clear headlines, real trust signals, one obvious call to action. No clutter, no confusion.",
  },
  {
    title: "Mobile-first",
    body:
      "80%+ of tradie website visitors are on a phone. We design for mobile first, always. Tap-to-call button, fast load time, thumb-friendly layout.",
  },
  {
    title: "Google-ready from day one",
    body:
      "Proper title tags, meta descriptions, clean URL structure, and local schema markup. Your site is set up for Google to understand it from the moment it goes live.",
  },
  {
    title: "Suburb targeting built in",
    body:
      "We include suburb service pages — so when someone in Glenelg searches \"plumber Glenelg\", you have a page Google can rank for that.",
  },
  {
    title: "Contact form + AI call capture ready",
    body:
      "Enquiry form wired up, and ready to connect with our AI missed call system if you want 24/7 lead capture.",
  },
];

const portfolio = [
  {
    name: "Plumbing",
    label: "Adelaide Plumbing Co. — sample website design",
    caption:
      "Sample design (concept layout, not a live client site). Click-to-call, Google-ready, mobile-first, suburb targeting.",
    img: "/portfolio/plumbing-website.jpg",
  },
  {
    name: "Electrician",
    label: "Electrician Business Website",
    caption: "Bold, trustworthy layout built for trades. Fast load, suburb targeting, ready for AI call capture.",
    img: "/portfolio/electrician-website.jpg",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us what you do, where you work, and who your customers are. That's all we need to get started.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, and build the full site. You don't write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tell us what to change, we update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live, set up your domain, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Adelaide small businesses with no website, or one that's embarrassing",
  "Businesses using a Facebook page as a website (it's not the same)",
  "Anyone who got quoted thousands by an agency and walked away",
  "Existing clients who want to add website design to their AI package",
];

const faqs = [
  {
    question: "Do I need to write my own content?",
    answer: "No. We handle all the copywriting using AI trained on your industry. You tell us about your business in a 15-minute call, we write it. You review and request changes — we don't publish until you're happy.",
  },
  {
    question: "What platform is it built on?",
    answer:
      "We build on Next.js — fast, modern, and optimised for Google. No WordPress bloat, no page builders, no plugin updates to worry about. Your site loads in under 2 seconds on mobile, which is faster than 90% of Adelaide small business websites.",
  },
  {
    question: "Can I update it myself?",
    answer:
      "For basic text changes and image swaps, yes. For structural changes, most clients just ask us — it's usually done same day. We include 30 days of free changes after launch, then a small monthly maintenance fee if you want ongoing support.",
  },
  {
    question: "What does website design cost in Adelaide?",
    answer:
      "Our Starter tier is $699 one-off (3-5 pages), Business is $1,499 (5-10 pages with copywriting and SEO setup), Growth is $2,499+ (10+ pages with full SEO integration). All include mobile-first design, Google-ready setup, suburb targeting pages, and click-to-call integration. One-off, you own it. Compare to typical Adelaide agencies quoting $3,000-$10,000+ for the same scope.",
  },
  {
    question: "How long until my website is live?",
    answer:
      "48 hours from our kickoff call. We do a 15-minute brief, build the site overnight using AI-assisted workflows, you review the next day, we make your changes, and it's live the following morning. If we need a custom domain, add 24 hours for DNS setup.",
  },
  {
    question: "Do you write the SEO content too?",
    answer:
      "Yes. Every page is built with SEO best practices baked in: keyword research tied to your services and Adelaide suburbs, proper title tags, meta descriptions, header structure, internal linking, and local business schema. Most Adelaide websites we audit are missing half of this — we include it as standard.",
  },
  {
    question: "Can I add the AI receptionist later?",
    answer:
      "Absolutely. The website is built to connect with our AI missed call system whenever you're ready. Most clients add it 1-3 months after launch once they've seen the enquiry volume from the new site. From $199/month as part of the AI automation stack.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes — every site we build is mobile-first by default. 80%+ of your visitors will be on a phone, so we design for that screen first, then scale up to tablet and desktop. Tap-to-call buttons, fast load times, thumb-friendly layouts — all standard.",
  },
];

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design Adelaide",
    serviceType: "Website Design",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "AI-powered website design for Adelaide small businesses. Built in 48 hours, mobile-first, Google-ready. From $699 one-off.",
    offers: {
      "@type": "Offer",
      price: "699",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "699",
        priceCurrency: "AUD",
        unitText: "ONE_OFF",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function WebsiteDesignAdelaidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Website Design Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Small Businesses</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Professional Website, Live in 48 Hours
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Not a template you have to figure out yourself. Not a big agency build. A clean, fast, mobile-first website built for Adelaide small businesses — designed to turn visitors into enquiries, bookings, and sales. Done for you, live in two days.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What We Build Looks Like This</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map((item) => (
              <div key={item.name} className="panel-light-soft overflow-hidden p-5 md:p-6">
                <div className="relative mb-5 aspect-[2/3] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50">
                  <Image
                    src={item.img}
                    alt={`${item.label} — example website design (concept layout)`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{item.label}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in 48 Hours</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{step.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        count={3}
        heading="What Adelaide businesses say"
        eyebrow="Real results"
        subheadline="These are the kinds of results that happen when the website is finally fast, clear, and built to convert."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
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

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Get a Website That Actually Works?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit — no obligation. We'll scope your site, tell you exactly what we'd build, and give you a quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/services" className="btn-secondary px-8 py-4">
              See Our Services <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
