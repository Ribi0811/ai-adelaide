import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Marketing Consulting Adelaide | Strategy + Implementation",
  description:
    "Marketing consulting for Adelaide small businesses. We do the strategy AND the implementation, not just a deck. From $399/month. Fixed pricing, no lock-in.",
  alternates: {
    canonical: "/marketing-consulting-adelaide",
  },
  openGraph: {
    title: "Marketing Consulting Adelaide | Strategy + Implementation",
    description: "Marketing consulting for Adelaide small businesses. Strategy AND implementation, not just a deck. From $399/mo.",
    url: "https://aiadelaide.com.au/marketing-consulting-adelaide",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Marketing Consulting Adelaide" }],
    type: "website",
  },
};

const buildItems = [
  {
    title: "Marketing audit &amp; strategy",
    body:
      "We review your current website, SEO, lead capture, automation, content, and competitors. You get a clear score across 5 categories and a prioritised action plan.",
  },
  {
    title: "Channel strategy",
    body:
      "Which channels should you focus on? We map the channels to your business, your customers, and your budget. No &lsquo;do everything&rsquo; advice \u2014 just the right channels.",
  },
  {
    title: "Implementation, not just a deck",
    body:
      "Most consultants hand you a strategy deck and disappear. We implement the strategy \u2014 website, SEO, content, automation. You see results, not just a PDF.",
  },
  {
    title: "Monthly strategy reviews",
    body:
      "Once a month we sit down (or video call) and review what&apos;s working, what&apos;s not, and what to do next. You get a written summary after each call.",
  },
  {
    title: "Competitor benchmarking",
    body:
      "Quarterly, we benchmark you against your top 3 competitors \u2014 their website, their SEO, their content, their reviews. You see exactly where you stand.",
  },
  {
    title: "Budget &amp; ROI guidance",
    body:
      "Where should you spend your next marketing dollar? We help you allocate budget across channels and projects for the highest return.",
  },
];

const steps = [
  {
    title: "Step 1 \u2014 Marketing audit",
    body:
      "We review your current marketing across 5 categories \u2014 website, SEO, lead capture, automation, content. You get a clear score and prioritised action plan.",
  },
  {
    title: "Step 2 \u2014 Strategy session",
    body:
      "60-minute strategy session. We walk through the audit, agree on priorities, and map out the next 90 days.",
  },
  {
    title: "Step 3 \u2014 Implementation",
    body:
      "We do the work \u2014 website, SEO, content, automation. Most clients see first results within 30 days.",
  },
  {
    title: "Step 4 \u2014 Ongoing review",
    body:
      "Monthly strategy reviews. We adjust the plan as the market changes, competitors move, and new opportunities emerge.",
  },
];

const faqs = [
  {
    question: "What is marketing consulting?",
    answer:
      "Marketing consulting is having a senior marketing expert look at your business, identify the gaps, and recommend a strategy \u2014 then help you implement it. The difference between us and most consultants: we do the work, not just the strategy. We don&apos;t hand you a deck and disappear. We build the website, run the SEO, set up the automations, and report on what&apos;s working.",
  },
  {
    question: "How much does marketing consulting cost in Adelaide?",
    answer:
      "Strategy-only consultants in Adelaide typically charge $2,000-10,000 for a marketing plan. We charge from $399/month which includes both the strategy AND the implementation. Most clients see ROI within 60-90 days.",
  },
  {
    question: "Do you just do strategy, or do you implement?",
    answer:
      "Both. Most consultants only do strategy and hand you a deck. We do the strategy AND we implement it. We build the website, run the SEO, write the content, set up the automations. You see results, not just a PDF.",
  },
  {
    question: "What if I already have a marketing person?",
    answer:
      "We work alongside them. We handle the heavy lifting \u2014 website builds, SEO research, content writing, automation setup. Your marketing person focuses on the strategy, the campaigns, and the customer relationships.",
  },
  {
    question: "What size business is this for?",
    answer:
      "We focus on Adelaide small businesses \u2014 typically 1-20 staff. If you&apos;re a larger business with an in-house marketing team, we can still help with specific projects (new website, SEO audit, automation rollout), but the retainer model is built for small business.",
  },
  {
    question: "How long is the engagement?",
    answer:
      "Month to month. We earn the work every month. Most clients stay 6-12 months because the strategy compounds \u2014 each month builds on the last.",
  },
  {
    question: "Do you do branding or rebranding?",
    answer:
      "Not directly. We focus on the marketing that drives customers \u2014 website, SEO, lead capture, automation. If you need branding, we can refer you to a designer we work with.",
  },
  {
    question: "Can you just do a one-off strategy audit?",
    answer:
      "Yes \u2014 we offer a one-off marketing audit and strategy session for $497. You get a written 10-15 page report with prioritised recommendations. If you want help implementing, we can move to a monthly retainer.",
  },
];

export default function MarketingConsultingAdelaidePage() {
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
          { label: "Marketing", href: "/marketing-adelaide" },
          { label: "Marketing Consulting Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Marketing Consulting Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Marketing Consulting for Adelaide Small Businesses \u2014 Strategy AND Implementation
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most marketing consultants hand you a strategy deck and disappear. We&apos;re different. We do the strategy AND the implementation \u2014 website, SEO, content, automation. You get a senior marketing expert, the work done, and results that show up in your bank account. From $399/month.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/audit" className="btn-primary px-8 py-4">
              Take Free Digital Health Check
            </Link>
          </div>
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

      <CaseStudies count={2} heading="What changed for these Adelaide businesses" />

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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Marketing Partner That Actually Implements?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your current marketing, and tell you whether consulting + implementation would help.
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
