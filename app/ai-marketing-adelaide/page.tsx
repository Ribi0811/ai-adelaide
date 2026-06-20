import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "AI Marketing Adelaide | AI-Powered Marketing for Small Businesses",
  description:
    "AI marketing for Adelaide small businesses. AI-powered SEO, content, lead capture, and follow-up at a fraction of the cost of a traditional agency. Fixed pricing, no lock-in. From $699.",
  alternates: {
    canonical: "/ai-marketing-adelaide",
  },
  openGraph: {
    title: "AI Marketing Adelaide | AI-Powered Marketing for Small Businesses",
    description: "AI marketing for Adelaide small businesses. AI-powered SEO, content, lead capture, and follow-up. From $699.",
    url: "https://aiadelaide.com.au/ai-marketing-adelaide",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Marketing Adelaide" }],
    type: "website",
  },
};

const buildItems = [
  {
    title: "AI-powered SEO",
    body:
      "We use AI to research keywords, build suburb pages, and write content that ranks. Faster than a junior, more consistent than a freelancer, cheaper than an agency.",
  },
  {
    title: "AI content creation",
    body:
      "Blog posts, service pages, location pages \u2014 all written by AI trained on your business, your voice, your customers. Reviewed by humans, optimised for Google.",
  },
  {
    title: "AI lead capture",
    body:
      "Forms, booking, missed call text-back, AI receptionist \u2014 every lead gets a fast first response. No more leads falling through the cracks while you&apos;re on a job.",
  },
  {
    title: "AI follow-up sequences",
    body:
      "Quote follow-ups, review requests, appointment reminders \u2014 all automated. Day 1, Day 3, Day 7 touchpoints that close more leads without you touching your phone.",
  },
  {
    title: "AI reporting and insights",
    body:
      "Monthly reports show exactly what&apos;s ranking, what&apos;s converting, where the next opportunity is. Plain English, not agency jargon.",
  },
  {
    title: "AI-powered Google Business Profile",
    body:
      "Posts, photos, Q&amp;A, service updates \u2014 all kept fresh with AI. Google rewards active profiles with higher local rankings.",
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
      "We look at your business, your industry, your competitors. We recommend the right AI marketing stack \u2014 not the biggest one we can sell you.",
  },
  {
    title: "Step 3 \u2014 We Build Your AI Stack",
    body:
      "Website, SEO setup, lead capture, automations. We do everything. You review once. We go live in days, not months.",
  },
  {
    title: "Step 4 \u2014 We Optimise Monthly",
    body:
      "Monthly improvements. New content, new automations, new tactics. The AI stack keeps getting smarter and better as we learn what works for your business.",
  },
];

const whoItsFor = [
  "Adelaide small businesses tired of paying agencies thousands with no results",
  "Tradies, clinics, and retailers who want to compete with bigger competitors online",
  "Anyone who&apos;s been quoted $3,000+/month by an agency and walked away",
  "Business owners who want marketing that works 24/7 \u2014 not just when someone&apos;s at a desk",
  "Companies already spending on ads or SEO but not seeing the return",
  "Founders who want to be able to see exactly what their marketing is doing \u2014 not trust a vague monthly report",
];

const faqs = [
  {
    question: "What is AI marketing?",
    answer:
      "AI marketing is using AI tools to research, create, optimise, and automate marketing tasks. For a small business, that means AI helps with SEO research, content writing, lead capture, follow-up sequences, and reporting \u2014 tasks that would normally take a team. The output is the same as a human team&apos;s work, but at 10-20% of the cost and 5-10x faster.",
  },
  {
    question: "How much does AI marketing cost?",
    answer:
      "We don&apos;t charge like an agency. Fixed pricing, no surprises. Websites from $699, SEO from $399/month, AI automation from $199/month. Most clients spend $400-700/month total. Compare that to $2,000-5,000/month at a typical Adelaide marketing agency.",
  },
  {
    question: "How is this different from a marketing agency?",
    answer:
      "Three things. First, we&apos;re AI-first \u2014 not a junior team doing manual work. Second, we&apos;re fixed-pricing \u2014 not hourly billing. Third, we&apos;re Adelaide-based and small-business focused \u2014 not a Sydney agency with a local landing page. We&apos;re also no lock-in. We earn the work every month.",
  },
  {
    question: "Do I still need a human marketing person?",
    answer:
      "For most Adelaide small businesses, no. Our AI stack covers the strategy, the execution, and the reporting. You bring the business knowledge; we bring the marketing expertise. If you have a marketing person, we complement them \u2014 we handle the heavy lifting, they handle the strategy.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Website: live in 48 hours. SEO: first movement in 2-4 weeks for niche suburbs, 2-3 months for competitive areas. Lead capture: working from day one. AI follow-up sequences: first conversions in 1-2 weeks. We&apos;ll give you an honest timeline on the free chat.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Great. We&apos;ll audit it and tell you honestly if it&apos;s holding you back. If it&apos;s good, we&apos;ll work with it. If it&apos;s not, we&apos;ll tell you what we&apos;d build. No upsell pressure. We&apos;d rather keep you as a long-term SEO/automation client than sell you a new site you don&apos;t need.",
  },
  {
    question: "Do you do Google Ads?",
    answer:
      "Not at the moment \u2014 we focus on organic SEO and AI automation, which gives a much better return long-term. If you need Google Ads management, we can refer you to a partner we trust.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month to month on SEO and automation. One-off on websites. We earn the work every month. If you&apos;re not happy with the progress, you can walk away \u2014 we&apos;d rather keep you because the results are good.",
  },
];

export default function AIMarketingAdelaidePage() {
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
          { label: "Services", href: "/services" },
          { label: "AI Marketing Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI Marketing Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Marketing That Actually Moves the Needle for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            AI marketing uses artificial intelligence to do the work of a marketing team \u2014 SEO, content, lead capture, follow-up, reporting \u2014 at a fraction of the cost. We build AI marketing stacks for Adelaide small businesses that are cheaper than agencies, faster than freelancers, and don&apos;t lock you in. From $699 setup.
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to See What AI Marketing Can Do for Your Business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your competitors, and tell you exactly which AI marketing stack would move the needle first \u2014 with a fixed quote on the spot.
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
            Curious about the services behind the marketing?{" "}
            <Link href="/services" className="underline hover:text-accent">See all our services</Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">SEO</Link>{" "}
            and{" "}
            <Link href="/ai-automation-adelaide" className="underline hover:text-accent">AI automation</Link>{" "}
            offerings.
          </p>
        </div>
      </section>
    </div>
  );
}
