import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Affordable Web Design Adelaide",
  description:
    `Affordable web design Adelaide for small businesses. Mobile-first, Google-ready websites built to turn visitors into enquiries. ${PRICING.website.fromLabel} one-off, no lock-in.`,
  alternates: {
    canonical: "/affordable-web-design-adelaide",
  },
};

const buildItems = [
  {
    title: "Conversion-focused design",
    body: "Every page is built to do one thing — get the visitor to call or enquire. Clear headlines, real trust signals, one obvious call to action. No clutter, no confusion.",
  },
  {
    title: "Mobile-first",
    body: "Many small business website visits happen on a phone. We design mobile first, with tap-to-call actions, fast pages and thumb-friendly layouts.",
  },
  {
    title: "Google-ready from day one",
    body: "Proper title tags, meta descriptions, clean URL structure, and local schema markup. Your site is set up for Google to understand it from the moment it goes live.",
  },
  {
    title: "Suburb targeting built in",
    body: "Where the business genuinely serves an area and the content is useful, we add suburb service pages so Google and customers have a relevant page to consider for searches such as 'plumber Glenelg'.",
  },
  {
    title: "Contact form + AI call capture ready",
    body: "Enquiry form wired up, and ready to connect with our AI missed call system if you want 24/7 lead capture.",
  },
  {
    title: "You own everything",
    body: "No platform lock-in, no ongoing hosting ransom. The website is yours. We can hand over the code, or keep managing it for a small monthly fee if you prefer.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body: "Tell us what you do, where you work, and who your customers are. That's all we need to get started.",
  },
  {
    title: "Step 2 — We build",
    body: "We write the copy, design the layout, and build the full site. You don't write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body: "One review round. Tell us what to change, we update it same day.",
  },
  {
    title: "Step 4 — Live",
    body: "We push it live, set up your domain, and hand you the keys. Starter builds can take 48 hours once content and access are ready.",
  },
];

const whoItsFor = [
  "Adelaide small businesses with no website, or one that's embarrassing",
  "Businesses using a Facebook page as a website (it's not the same)",
  "Anyone who got quoted thousands by an agency and walked away",
  "Tradies, cafes, clinics, salons — anyone who needs to be found on Google",
];

const faqs = [
  {
    question: "What makes your web design affordable?",
    answer:
      "We use AI-assisted production to speed up copywriting and layout, but every site is reviewed and tuned by a human before it goes live. That lets us charge $699 for a Starter build instead of the $3,000-5,000 most agencies quote for a basic small business site. The trade-off is speed and focus: we know what works for Adelaide tradies and clinics, and we don't waste time on features you'll never use.",
  },
  {
    question: "Do I really need a website if I already have Facebook or Instagram?",
    answer:
      "Yes — social profiles rent attention, a small business website owns it. When someone Googles your trade plus their suburb, Facebook pages rarely rank; a proper website with local SEO does. Your socials should feed the website, not replace it.",
  },
  {
    question: "Do I need to write my own content?",
    answer:
      "No. We handle all the copywriting using AI trained on your industry. You tell us about your business in a 15-minute call, we write it. You review and request changes — we don't publish until you're happy.",
  },
  {
    question: "What platform is it built on?",
    answer:
      "For new builds, we typically recommend Next.js — fast, modern, and designed for strong technical performance. We can also improve an existing WordPress site when its content, booking setup or editing workflow makes that the sensible choice. Either way, we test the finished site on mobile and address performance issues before launch.",
  },
  {
    question: "Can I update it myself?",
    answer:
      "For basic text changes and image swaps, yes. For structural changes, most clients just ask us — it's usually done same day. We include 30 days of free changes after launch, then a small monthly maintenance fee if you want ongoing support.",
  },
  {
    question: "What does affordable web design cost in Adelaide?",
    answer:
      `Our Starter tier is ${PRICING.website.tiers[0].price} one-off, Business is ${PRICING.website.tiers[1].price}, and Growth is ${PRICING.website.tiers[2].price}. The exact page count and inclusions are set out on our pricing page. Every build includes mobile-first design, core search setup and clear enquiry actions. The build fee is one-off and you own the finished website.`,
  },
  {
    question: "How long until my website is live?",
    answer:
      "Starter builds can be ready in 48 hours after we confirm the brief, content and access. Business builds usually take 5–7 days; Growth builds 10–14 days. Your feedback, approvals, domain setup and integrations can affect the final launch date.",
  },
  {
    question: "Do you write the SEO content too?",
    answer:
      "Yes. Every page is built with the core search foundations included: keyword research tied to your services and genuine service areas, proper title tags, meta descriptions, heading structure, internal linking, and appropriate structured data. Ongoing rankings still depend on competition, useful content and authority after launch.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes — every site we build is mobile-first by default. We design the phone experience first, then scale it to tablet and desktop. Tap-to-call buttons, fast load times and thumb-friendly layouts are standard.",
  },
  {
    question: "Can I add the AI receptionist later?",
    answer:
      `Absolutely. The website can connect with our missed-call and follow-up systems whenever the need is clear. Automation starts from ${PRICING.automation.from}; we recommend adding it when there is a real lead-handling bottleneck to solve.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function ServiceJsonLd() {
  const startingPrice = PRICING.website.tiers[0].price.replace(/[^\d.]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Affordable Web Design Adelaide",
    serviceType: "Website Design",
    provider: {
      "@id": "https://aiadelaide.com.au/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      `Affordable web design for Adelaide small businesses. Mobile-first, Google-ready and built for enquiries. ${PRICING.website.fromLabel} one-off.`,
    offers: {
      "@type": "Offer",
      price: startingPrice,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: startingPrice,
        priceCurrency: "AUD",
        unitText: "ONE_OFF",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AffordableWebDesignAdelaidePage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Affordable Web Design Adelaide" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Affordable Web Design</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Affordable Web Design Adelaide — Websites That Actually Work
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Not a template you have to figure out yourself. Not a big agency build that costs five grand. A clean, fast, mobile-first website built for Adelaide small businesses — designed to turn visitors into enquiries, bookings, and sales. Done for you, live in two days, from {PRICING.website.fromLabel}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?service=website#send-message"
              data-track="quote_affordable_design_hero"
              className="btn-primary px-8 py-4"
            >
              Book Free Brief <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            What You Get
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, i) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">
                  {item.title}
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What "affordable" actually means here
          </h2>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            Most Adelaide agencies charge $3,000–$8,000 for a basic small business website. We charge less because we use AI-assisted production for speed, not because we cut corners on quality. Here's how it breaks down.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-950">What you get</th>
                  <th className="py-3 pr-4 font-semibold text-slate-950">Typical agency</th>
                  <th className="py-3 font-semibold text-emerald-700">AI Adelaide</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">5-page small business site</td>
                  <td className="py-3 pr-4">$3,000 – $5,000</td>
                  <td className="py-3 font-semibold text-emerald-700">{PRICING.website.tiers[0].price}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Copywriting</td>
                  <td className="py-3 pr-4">Extra $500 – $1,500</td>
                  <td className="py-3 font-semibold text-emerald-700">Included</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Mobile-first design</td>
                  <td className="py-3 pr-4">Sometimes extra</td>
                  <td className="py-3 font-semibold text-emerald-700">Standard</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Google-ready SEO setup</td>
                  <td className="py-3 pr-4">Extra $500 – $2,000</td>
                  <td className="py-3 font-semibold text-emerald-700">Included</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Turnaround time</td>
                  <td className="py-3 pr-4">4 – 8 weeks</td>
                  <td className="py-3 font-semibold text-emerald-700">48 hours – 2 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">Ongoing lock-in</td>
                  <td className="py-3 pr-4 font-semibold text-red-600">Often required</td>
                  <td className="py-3 font-semibold text-emerald-700">None — you own it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            The difference isn't quality — it's efficiency. We know what works for Adelaide small businesses because we build for them every day.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            From Brief to Live in 4 Steps
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-h3-mobile text-slate-950 md:text-h3">
                  {step.title}
                </h3>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Built For
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-5 text-body-mobile text-slate-700 md:text-body"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        names={["Chloe M.", "Sarah P.", "Aisha N."]}
        count={3}
        heading="What Adelaide businesses say"
        eyebrow="Real results"
        subheadline="Customer comments about website work. Names shortened for privacy; individual results vary."
      />

      {/* FAQs */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Common Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
                  {faq.question}
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Explore More
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/website-design-adelaide"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              Website Design Adelaide →
            </Link>
            <Link
              href="/website-pricing"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              Website Pricing →
            </Link>
            <Link
              href="/website-cost-adelaide"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              Website Cost Adelaide →
            </Link>
            <Link
              href="/local-seo-adelaide"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              Local SEO Adelaide →
            </Link>
            <Link
              href="/seo"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              SEO Services →
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready for a website that actually works?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Start with a free 15-minute brief. We'll tell you which tier fits your business, what it would cost, and how long it would take.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?service=website#send-message"
              data-track="quote_affordable_design_bottom"
              className="btn-primary px-8 py-4"
            >
              Book Free Brief <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
