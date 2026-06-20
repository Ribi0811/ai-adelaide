import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Digital Marketing Adelaide | SEO, Content & AI Marketing",
  description:
    "Digital marketing for Adelaide small businesses. SEO, content, Google Business Profile, AI automation \u2014 the digital channels that actually drive customers. From $399/month.",
  alternates: {
    canonical: "/digital-marketing-adelaide",
  },
  openGraph: {
    title: "Digital Marketing Adelaide | SEO, Content & AI Marketing",
    description: "Digital marketing for Adelaide small businesses. SEO, content, GBP, AI automation. From $399/mo.",
    url: "https://aiadelaide.com.au/digital-marketing-adelaide",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Digital Marketing Adelaide" }],
    type: "website",
  },
};

const buildItems = [
  {
    title: "Local SEO",
    body:
      "Get found on Google for your main services and suburbs. Suburb pages, content, citations, Google Business Profile. From $399/mo, month to month.",
  },
  {
    title: "Content marketing",
    body:
      "AI-powered, human-reviewed blog posts, service pages, and suburb pages. Written to rank on Google and read like a person, not a robot.",
  },
  {
    title: "Google Business Profile",
    body:
      "Posts, photos, Q&amp;A, service updates \u2014 all kept fresh monthly. Active profiles rank higher in Google&apos;s local map pack and convert more searches into calls.",
  },
  {
    title: "Email &amp; SMS marketing",
    body:
      "AI-powered sequences for quote follow-ups, review requests, appointment reminders, and re-engagement. Built into the automation stack.",
  },
  {
    title: "Conversion rate optimisation",
    body:
      "We A/B test landing pages, contact forms, and call-to-action copy. Small changes compound into big lifts in leads \u2014 typically 15-30% in the first quarter.",
  },
  {
    title: "Analytics &amp; reporting",
    body:
      "Monthly reports in plain English \u2014 what changed, what worked, what we&apos;re doing next. No agency jargon, no vanity metrics.",
  },
];

const steps = [
  {
    title: "Step 1 \u2014 Free Digital Audit",
    body:
      "We score your current digital marketing across 5 categories: website, SEO, lead capture, automation, and analytics. You see exactly where you&apos;re leaking.",
  },
  {
    title: "Step 2 \u2014 Free Strategy Chat",
    body:
      "We look at your business, your industry, your competitors. We recommend the right digital channels \u2014 not the biggest package we can sell you.",
  },
  {
    title: "Step 3 \u2014 We Build &amp; Run It",
    body:
      "Website, SEO, content, automation. We do everything. You review once. We go live in days, not months.",
  },
  {
    title: "Step 4 \u2014 We Optimise Monthly",
    body:
      "Monthly improvements. New content, new tests, new tactics. Digital marketing compounds \u2014 the longer you run it, the better it gets.",
  },
];

const channels = [
  { name: "Search (SEO)", description: "Customers find you when they Google for your service" },
  { name: "Google Business Profile", description: "You show up in the local map pack with reviews and photos" },
  { name: "Website", description: "Converts visitors into calls, forms, and bookings" },
  { name: "Email & SMS", description: "Follow up with leads, ask for reviews, remind appointments" },
  { name: "Reviews & social proof", description: "Google reviews displayed across your site and profiles" },
  { name: "Analytics", description: "Measure what works, double down, cut what doesn&apos;t" },
];

const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is any marketing that happens online \u2014 search engines, websites, social media, email, Google Business Profile, automation. For Adelaide small businesses, the highest-ROI digital channels are SEO, your website, and lead capture automation. We focus on those three because they&apos;re what actually drive customers.",
  },
  {
    question: "How much does digital marketing cost in Adelaide?",
    answer:
      "We charge from $199/mo (AI automation), $399/mo (SEO), and $699 for a website. Most clients spend $400-700/mo total. Adelaide digital marketing agencies typically charge $2,000-5,000/mo for similar work. We&apos;re not the cheapest, but we&apos;re the best value \u2014 fixed pricing, no lock-in, real results.",
  },
  {
    question: "What digital channels should I focus on?",
    answer:
      "For most Adelaide small businesses, the priorities are: (1) A fast, mobile-first website. (2) Local SEO so you show up on Google. (3) Lead capture automation so you don&apos;t miss calls. (4) Google Business Profile so you show up in the local map pack. (5) Reviews \u2014 they&apos;re the #1 conversion factor. After that, paid ads and social media can help, but the foundation is the above.",
  },
  {
    question: "Do you do social media?",
    answer:
      "Not as a service. We focus on the digital channels that drive measurable leads \u2014 SEO, website, GBP, automation. If you need social media management, we can refer you to a partner.",
  },
  {
    question: "Do you do Google Ads?",
    answer:
      "Not at the moment. We focus on organic SEO and AI automation \u2014 they give much better long-term ROI than paid ads for small businesses. If you need Google Ads, we can refer you to a partner.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Website: live in 48 hours. SEO: first movement in 2-4 weeks for niche suburbs, 2-3 months for competitive areas. Lead capture: working from day one. Reviews: first new review in 2-4 weeks. We&apos;ll give you an honest timeline on the free chat.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We&apos;ll audit it and tell you honestly if it&apos;s holding you back. If it&apos;s good, we work with it. If it&apos;s not, we&apos;ll tell you what we&apos;d build. No upsell pressure.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month to month on SEO and automation. One-off on websites. We earn the work every month.",
  },
];

export default function DigitalMarketingAdelaidePage() {
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
          { label: "Digital Marketing Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Digital Marketing Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Digital Marketing for Adelaide Small Businesses That Drives Real Customers
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Digital marketing that actually moves the needle. SEO, content, Google Business Profile, AI automation \u2014 the channels that put you in front of Adelaide customers and capture them when they&apos;re ready to buy. From $399/month, fixed pricing, no lock-in.
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What&apos;s Included</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The Digital Channels We Focus On</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We don&apos;t try to do everything. We focus on the six digital channels that drive the most customers for Adelaide small businesses:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {channels.map((channel, index) => (
              <div
                key={channel.name}
                className="panel-light-soft p-5"
                dangerouslySetInnerHTML={{
                  __html: `<p class="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Channel 0${index + 1}</p><h3 class="mt-2 text-h3-mobile text-slate-950 md:text-h3">${channel.name}</h3><p class="mt-2 text-sm text-slate-700">${channel.description}</p>`,
                }}
              />
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Get Found, Capture Leads, and Grow?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your digital marketing, and tell you which channels would move the needle first.
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
