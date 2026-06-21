import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Beauty Salons Adelaide | Salon Website Design",
  description:
    "Beauty salon websites for Adelaide. Online booking, service menus, transformation galleries, retail integration. From $699, live in 48 hours.",
  alternates: {
    canonical: "/websites-for-beauty-salons-adelaide",
  },
};

const buildItems = [
  {
    title: "Online booking integration",
    body:
      "Clients book facials, brows, lashes, waxing, and packages directly from your site. We connect with Fresha, Timely, Phorest, Square Appointments, or your existing system.",
  },
  {
    title: "Service menu with pricing",
    body:
      "Browsable menu of services, packages, and pricing tiers. Clients see exactly what you offer before they walk in — no awkward pricing conversations.",
  },
  {
    title: "Transformation gallery",
    body:
      "Before/after shots, treatment results, the salon vibe. Beauty is visual — your site should sell the experience. We set it up so you can add photos weekly.",
  },
  {
    title: "Retail product showcase",
    body:
      "If you sell retail (skincare, home care products), we add a clean shop section. Display products, link to purchase, capture extra revenue between appointments.",
  },
  {
    title: "Mobile-first design",
    body:
      "80%+ of beauty searches happen on a phone. Your site loads in under 2 seconds, looks beautiful on every screen, and makes booking effortless.",
  },
  {
    title: "Google reviews + local SEO",
    body:
      "Your Google reviews prominently displayed. Local SEO optimised for &lsquo;beauty salon [suburb]&rsquo;, &lsquo;facials [suburb]&rsquo;, &lsquo;lash extensions [suburb]&rsquo;. Get found by new clients in your service area.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your salon, your services, your vibe, and your ideal clients. We need photos, your booking platform, and any retail products you want to feature.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, build the service pages, set up booking, and integrate your reviews. You don&apos;t write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tweak the wording, swap photos, adjust pricing. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live on your domain, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Beauty salons with no website, or one that hasn't been updated in years",
  "Brow bars, lash studios, and skin clinics wanting a strong online presence",
  "Day spas offering multiple treatment types and packages",
  "Beauty therapists going solo and need a professional booking site",
  "Salons using Instagram as their only web presence (it's not enough)",
  "Established salons wanting to outrank competitors on Google",
];

const localAdelaide = [
  "Unley & Malvern — premium beauty clientele, design + reviews matter most",
  "Burnside & Glen Osmond — established clientele, trust + transformation galleries convert",
  "Norwood & The Parade — high foot traffic, mobile-first is critical",
  "Mitcham & Cumberland Park — family suburbs, Google reviews win new clients",
  "Glenelg & Brighton — coastal lifestyle, brows + lashes + tanning popular",
];

const faqs = [
  {
    question: "Can you integrate with my existing booking platform?",
    answer:
      "Yes. We work with Fresha, Timely, Phorest, Square Appointments, Vagaro, and most other beauty booking systems. If you don&apos;t have one, we&apos;ll recommend a free or low-cost option.",
  },
  {
    question: "Can clients book specific services or packages?",
    answer:
      "Yes. The booking integration lets clients pick the service, the practitioner, and the time slot. Packages and add-ons can be configured too. The whole flow takes under 30 seconds on mobile.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete, custom-built beauty site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month for sustained page-1 rankings.",
  },
  {
    question: "Can I sell retail products on the site?",
    answer:
      "Yes. We add a retail section that displays your products with descriptions, prices, and purchase links (linking to your existing e-commerce platform — Shopify, WooCommerce, or Square Online).",
  },
  {
    question: "Can I add before/after photos?",
    answer:
      "Absolutely. The transformation gallery is built to be easy to update. You can add new photos yourself, or send them to us and we&apos;ll add them same-day. With proper consent forms, of course.",
  },
  {
    question: "Will it rank on Google for beauty salons in my area?",
    answer:
      "Yes — the site is set up with local SEO from day one. For competitive suburbs (&lsquo;beauty salon Norwood&rsquo;), we recommend the SEO retainer for sustained page-1 rankings. Most beauty searches have strong buying intent — high commercial value keywords.",
  },
  {
    question: "Can I offer gift vouchers online?",
    answer:
      "Yes. We can integrate with your existing gift voucher system (e.g. SalonIQ, Treatwell, or your own setup). Customers buy a voucher, receive it by email, and book their appointment using the code.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Your site is live in 48 hours. Google movement depends on competition — niche suburbs in 2-4 weeks, competitive suburbs in 2-3 months. The SEO retainer accelerates this significantly.",
  },
];

export default function WebsitesForBeautySalonsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Beauty Salons Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Beauty Salons</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Beauty Salon Website That Books Treatments Around the Clock
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Your clients are on Instagram and TikTok — but they book treatments through Google. If your salon doesn&apos;t have a beautiful, fast, mobile-first website with online booking, they&apos;re booking the salon down the road. We build beauty salon websites for Adelaide — with online booking, transformation galleries, and retail integration. From $699, live in 48 hours.
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
                <h3
                  className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
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
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
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

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Suburbs we build beauty salon websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build beauty salon websites right across Adelaide. Here are the suburbs we work in most:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

            <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Related Resources for Adelaide Beauty Salons
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build websites for Adelaide beauty and wellness businesses. Browse related guides:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <Link
              href="/websites-for-hairdressers-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Hairdresser Websites Adelaide</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/blog/website-design-for-hairdressers-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Website Design for Hairdressers Guide</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/blog/best-website-builder-adelaide-small-business"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Best Website Builder for Adelaide SMBs</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/ai-automation-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">AI Automation Adelaide</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials
        industry="beauty"
        count={2}
        heading="What Adelaide beauty salon owners say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Beauty Website That Books Around the Clock?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your salon site, show you examples, and give you a fixed quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
