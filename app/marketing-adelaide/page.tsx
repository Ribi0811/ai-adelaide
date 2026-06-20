import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Marketing Adelaide | Affordable Marketing for Adelaide Small Businesses",
  description:
    "Marketing for Adelaide small businesses. Websites, SEO, and AI automation that actually move the needle. From $699. Fixed pricing, no lock-in, Adelaide-based.",
  alternates: {
    canonical: "/marketing-adelaide",
  },
  openGraph: {
    title: "Marketing Adelaide | Affordable Marketing for Adelaide Small Businesses",
    description: "Marketing for Adelaide small businesses. Websites, SEO, AI automation. From $699, fixed pricing, no lock-in.",
    url: "https://aiadelaide.com.au/marketing-adelaide",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Marketing Adelaide" }],
    type: "website",
  },
};

const buildItems = [
  {
    title: "Website design from $699",
    body:
      "A proper website for your Adelaide business \u2014 mobile-first, Google-ready, live in 48 hours. One-off setup, you own the site, monthly hosting from $29. No lock-in.",
  },
  {
    title: "Local SEO from $399/mo",
    body:
      "Get found on Google for your main services and suburbs. Suburb pages, content, Google Business Profile, citations, rank tracking. Month to month, no contract.",
  },
  {
    title: "AI automation from $199/mo",
    body:
      "Missed call text-back, AI receptionist, quote follow-ups, review requests. Capture every lead and stop the manual admin drain. Live in 2-5 days.",
  },
  {
    title: "Content &amp; copywriting",
    body:
      "AI-powered, human-reviewed content for your blog, service pages, and suburb pages. Written to rank on Google and read like a human, not a robot.",
  },
  {
    title: "Google Business Profile management",
    body:
      "Posts, photos, Q&amp;A, service updates \u2014 all kept fresh monthly. Active profiles rank higher in Google&apos;s local map pack.",
  },
  {
    title: "Monthly reporting &amp; insights",
    body:
      "Plain English monthly reports \u2014 what changed, what&apos;s working, what we&apos;re doing next. No agency jargon, no vanity metrics.",
  },
];

const steps = [
  {
    title: "Step 1 \u2014 Free Digital Health Check",
    body:
      "5-minute audit. We score your website, SEO, lead capture, and automation across 5 categories. You see exactly where you&apos;re losing customers.",
  },
  {
    title: "Step 2 \u2014 Free Strategy Chat",
    body:
      "We look at your business, your industry, your competitors. We recommend the right combination of services \u2014 not the biggest package we can sell you.",
  },
  {
    title: "Step 3 \u2014 We Build It",
    body:
      "Website, SEO setup, lead capture, automations. We do everything. You review once. We go live in days, not months.",
  },
  {
    title: "Step 4 \u2014 Ongoing Optimisation",
    body:
      "Monthly improvements. New content, new automations, new tactics. The marketing stack keeps getting smarter and better as we learn what works for your business.",
  },
];

const whoItsFor = [
  "Adelaide small businesses who want a real website, not a Facebook page",
  "Tradies, clinics, and retailers who want to be found on Google",
  "Business owners losing leads to missed calls and slow follow-up",
  "Anyone who&apos;s been burned by a marketing agency",
  "Companies who want to be able to see what their marketing is doing",
  "Founders who want to compete with bigger competitors online",
];

const faqs = [
  {
    question: "What marketing services do you offer?",
    answer:
      "We focus on three things that drive customers: website design ($699+), local SEO ($399+/mo), and AI automation ($199+/mo). Plus content, Google Business Profile management, and monthly reporting. We don&apos;t do paid ads, social media management, or PR \u2014 we refer those to partners.",
  },
  {
    question: "How much does marketing cost in Adelaide?",
    answer:
      "We&apos;re not the cheapest and we&apos;re not the most expensive. Most Adelaide marketing agencies charge $2,000-5,000/month. We charge from $199/mo (automation) and most clients spend $400-700/mo total. The result is comparable to what an agency delivers, at a fraction of the cost.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Great. We&apos;ll audit it and tell you honestly if it&apos;s holding you back. If it&apos;s good, we work with it. If it&apos;s not, we&apos;ll tell you what we&apos;d build. No upsell pressure.",
  },
  {
    question: "Do you do Google Ads?",
    answer:
      "Not at the moment. We focus on organic SEO and AI automation \u2014 they give much better long-term ROI than paid ads for small businesses. If you need Google Ads, we can refer you to a partner.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Website: live in 48 hours. SEO: first movement in 2-4 weeks for niche suburbs, 2-3 months for competitive areas. AI automation: first recovered leads within days. We&apos;ll give you an honest timeline on the free chat.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month to month on SEO and automation. One-off on websites. We earn the work every month.",
  },
  {
    question: "Do you do social media?",
    answer:
      "Not as a service. We focus on the channels that drive measurable leads: website, SEO, Google Business Profile, automation. If you need social media management, we can refer you to a partner.",
  },
  {
    question: "Can I pick just one service?",
    answer:
      "Absolutely. Most clients start with one \u2014 usually the website, since it&apos;s the foundation. They add SEO or automation later. We design the stack so you can start small and grow.",
  },
];

export default function MarketingAdelaidePage() {
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
          { label: "Marketing Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Marketing Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Marketing for Adelaide Small Businesses That Actually Works
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Marketing for Adelaide small businesses shouldn&apos;t cost $5,000/month and take 6 months to show results. We do three things well \u2014 websites ($699+), local SEO ($399+/mo), and AI automation ($199+/mo) \u2014 and we charge fixed prices with no lock-in. The same outcomes as an agency, at a fraction of the cost.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/website-pricing" className="btn-primary px-8 py-4">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Our Marketing Services</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How It Works</h2>
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

      <CaseStudies count={3} heading="What changed for these Adelaide businesses" />

      <Testimonials
        count={3}
        heading="What Adelaide business owners say"
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Get Your Marketing Actually Working?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your competitors, and tell you which combination of website + SEO + automation would move the needle first.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
