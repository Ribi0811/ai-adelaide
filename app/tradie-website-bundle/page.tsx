import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Tradie Website Bundle Adelaide | Website + AI + SEO",
  description:
    "Website built in 48hrs, 24/7 AI call capture, and local SEO — everything Adelaide tradies need to stop losing jobs online. No lock-in. Book a free chat.",
  alternates: { canonical: "/tradie-website-bundle" },
};

const includes = [
  {
    title: "Conversion-focused tradie website",
    body:
      "Mobile-first, fast-loading, click-to-call. Built in 48 hours from a 15-minute brief. You don't write a word.",
  },
  {
    title: "24/7 AI call capture",
    body:
      "Missed-call text-back + AI receptionist answering live calls after hours. Books jobs, escalates emergencies, sends you a clean summary.",
  },
  {
    title: "Local SEO setup",
    body:
      "Suburb targeting pages, Google Business Profile optimisation, on-page SEO. Show up for 'plumber Glenelg' before your competitors do.",
  },
  {
    title: "Quote follow-up automation",
    body:
      "Day 1 thank-you, Day 3 check-in, Day 7 final touch — all sent automatically. Lifts quote-to-job conversion by 35-50%.",
  },
  {
    title: "Review request automation",
    body:
      "Auto-sends Google review link after job completion. Builds your reputation while you sleep.",
  },
  {
    title: "Ongoing tuning and support",
    body:
      "Monthly reporting, no-lock-in support, scripts updated within 24 hours when you ask. We're Adelaide-based, same timezone.",
  },
];

const notIncludes = [
  "Stock photography (we use industry-appropriate imagery from your services)",
  "Custom CRM builds (we integrate with what you have — ServiceM8, Tradify, Jobber, etc.)",
  "Paid ad management (we set up the foundation; you or your media buyer runs the ads)",
  "Logo design (use what you have; we can recommend Adelaide designers if needed)",
];

const faqs = [
  {
    question: "What is the tradie website bundle?",
    answer:
      "It's a done-for-you package for Adelaide tradies: a conversion-focused website built in 48 hours, 24/7 AI call capture (text-back + live answering), and local SEO setup — all managed by one Adelaide team on one flat monthly fee.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Website from $699 (one-off) plus AI automation from $199/month. Most tradies spend $199-$497/month on the AI side. SEO setup is included free when you take the bundle. No lock-in, fixed pricing.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "No. We handle the copywriting using AI trained on your industry. You do a 15-minute brief, we write everything. You review and request changes before anything goes live.",
  },
  {
    question: "How long until the website is live?",
    answer:
      "48 hours from kickoff. We brief, build overnight, you review next day, we push changes live the following morning. If we need a custom domain, add 24 hours for DNS.",
  },
  {
    question: "Can I add the AI receptionist later?",
    answer:
      "Absolutely. Most tradies start with the website (so it ranks and converts), then add AI call capture 1-3 months later once the enquiry volume justifies it. The website is built to plug in whenever you're ready.",
  },
  {
    question: "Will it work on phones?",
    answer:
      "Yes — every site is mobile-first. 80%+ of your visitors will be on a phone, so we design for that screen first, then scale up. Tap-to-call buttons, fast load times, thumb-friendly layouts — all standard.",
  },
  {
    question: "What about Google Business Profile?",
    answer:
      "We optimise your GBP as part of the local SEO setup — categories, services, photos, posts. We also configure it to feed your review-request automation so good jobs turn into five-star reviews automatically.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes. One-off fee for the website build, you own it. We can hand over the codebase or keep hosting it for you. The AI automation is a separate monthly subscription with no lock-in.",
  },
];

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tradie Website Bundle Adelaide",
    serviceType: "Tradie Marketing Bundle",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Tradie website bundle for Adelaide: conversion website built in 48hrs, 24/7 AI call capture, and local SEO. From $699 + $199/mo. No lock-in.",
    offers: {
      "@type": "Offer",
      price: "699",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "699", priceCurrency: "AUD", unitText: "ONE_OFF" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3", bestRating: "5", worstRating: "1" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function TradieWebsiteBundlePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Tradie Website Bundle" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Tradie Website Bundle</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Tradie Website Bundle Adelaide — Website, AI Call Capture, Local SEO
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most Adelaide tradies have the same three problems: a website that doesn&apos;t convert, missed calls going to voicemail, and zero Google visibility. We fix all three with one done-for-you bundle — website built in 48 hours, AI answering every call, and SEO setup from day one. One flat fee, no lock-in, one Adelaide team handling it all.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/website-design-adelaide" className="btn-primary px-8 py-4">
              See Website Pricing <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-automation-adelaide" className="btn-secondary px-8 py-4">
              See AI Automation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What&apos;s included</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {includes.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What&apos;s NOT included (no surprises)</h2>
          <p className="mb-6 text-sm text-slate-600">
            <strong>New to tradie SEO?</strong> Read our free <Link href="/blog/adelaide-seo-for-tradies" className="text-accent underline">SEO for Tradies Adelaide guide</Link> before you buy anything — it covers GBP, reviews, suburb pages and a 15-step checklist. The bundle above is the &quot;done-for-you&quot; path for tradies who don&apos;t want to DIY.
          </p>
          <ul className="space-y-3">
            {notIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body-mobile text-slate-700 md:text-body">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-xs text-slate-500">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide tradies say about the bundle"
        eyebrow="Real results"
        subheadline="These are the kinds of outcomes our tradie clients see after the bundle goes live."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a website that actually works?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what your tradie website would look like, what the AI would say, and what the SEO would target. Fixed quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/website-design-adelaide" className="btn-primary px-8 py-4">
              See Website Pricing <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}