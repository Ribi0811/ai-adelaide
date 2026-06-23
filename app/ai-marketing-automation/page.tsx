import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "AI Marketing Automation Adelaide | Capture Every Lead 24/7",
  description:
    "AI marketing automation for Adelaide. Missed-call text-back, AI receptionist, quote follow-ups. From $199/mo.",
  alternates: {
    canonical: "/ai-marketing-automation",
  },
  openGraph: {
    title: "AI Marketing Automation Adelaide | Capture Every Lead 24/7",
    description: "AI marketing automation for Adelaide small businesses. From $199/mo, live in 2-5 days.",
    url: "https://aiadelaide.com.au/ai-marketing-automation",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Marketing Automation Adelaide" }],
    type: "website",
  },
};

const buildItems = [
  {
    title: "Missed call text-back",
    body:
      "When you can&apos;t pick up, an SMS goes out within 30 seconds. The customer knows you got their call, knows you&apos;ll get back to them, and doesn&apos;t try your competitor.",
  },
  {
    title: "AI receptionist (24/7)",
    body:
      "Answers calls 24/7, qualifies the lead, books the appointment, sends you a summary. Sounds like a real receptionist, costs $199/mo, works while you sleep.",
  },
  {
    title: "Quote follow-up sequences",
    body:
      "Day 1 thank-you, Day 3 check-in, Day 7 final touch \u2014 all sent automatically. 35-50% lift in quote-to-job conversion.",
  },
  {
    title: "Review request automation",
    body:
      "Auto-send a Google review link 24hr after a job. Nudge again at Day 7. Build your Google review count on autopilot.",
  },
  {
    title: "Lead routing &amp; qualification",
    body:
      "New leads get tagged by service, urgency, suburb. The right person on your team sees the right leads first. No more leads falling into the wrong inbox.",
  },
  {
    title: "Appointment reminders",
    body:
      "SMS + email reminders at 24hr and 2hr before appointments. No-shows drop 30-65% \u2014 that&apos;s thousands in recovered revenue each month.",
  },
];

const steps = [
  {
    title: "Step 1 \u2014 Map your workflow",
    body:
      "30-60 minute call. We map how leads currently flow through your business \u2014 from first contact to closed deal. We find the leaks.",
  },
  {
    title: "Step 2 \u2014 We set up the system",
    body:
      "We configure the AI tools, connect your phone/calendar/CRM, write the scripts. You review before go-live.",
  },
  {
    title: "Step 3 \u2014 Go live in 2-5 days",
    body:
      "We launch, monitor, and adjust. Most clients see first recovered leads within 48 hours of going live.",
  },
  {
    title: "Step 4 \u2014 We improve monthly",
    body:
      "Monthly reviews. We add new automations, optimise existing ones, and report on what&apos;s working.",
  },
];

const faqs = [
  {
    question: "What is AI marketing automation?",
    answer:
      "AI marketing automation uses AI to handle the repetitive marketing tasks that eat your time \u2014 missed call follow-up, lead qualification, quote follow-up, review requests, appointment reminders. The AI does the work 24/7, so you don&apos;t lose leads while you&apos;re on a job, after hours, or on the weekend. It&apos;s like having a marketing assistant who never sleeps.",
  },
  {
    question: "How much does AI marketing automation cost?",
    answer:
      "From $199/month. Most clients spend $199-499/mo depending on the workflows. Compare to a part-time marketing assistant at $2,500+/mo, or a full-time hire at $60k+/yr. The AI does the work for a fraction of the cost.",
  },
  {
    question: "What workflows can be automated?",
    answer:
      "Common ones: missed call text-back, AI receptionist, lead qualification, quote follow-up sequences, review requests, appointment reminders, re-engagement campaigns, and post-purchase nurture. We configure them to your specific business.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most clients are live in 2-5 business days. Complex integrations (multi-step workflows, custom CRM) might take 7-10 days. You keep your existing phone number, email, and tools \u2014 we layer automation on top.",
  },
  {
    question: "Will customers know they&apos;re talking to AI?",
    answer:
      "Only if you tell them. Modern AI voices use natural Australian accents with proper pacing and tone. Most customers assume it&apos;s your team. The goal is faster response, not a sci-fi experience.",
  },
  {
    question: "Does it work with my existing tools?",
    answer:
      "Almost certainly yes. We integrate with ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, Microsoft 365, HubSpot, and most popular CRMs. If your tool has an API or webhook, we can usually connect it within 1-2 days.",
  },
  {
    question: "What if the AI makes a mistake?",
    answer:
      "The AI is trained to recognise when it&apos;s outside its knowledge. It can take a detailed message, escalate to a human (via SMS or call forward), or politely explain its limits. We review call and message logs regularly and fill gaps as we find them.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month to month. If you&apos;re not happy, you walk \u2014 we don&apos;t make you beg. Most clients stay because the system pays for itself within 30 days.",
  },
];

export default function AIMarketingAutomationPage() {
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
          { label: "AI Marketing Automation" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI Marketing Automation Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Marketing Automation That Captures Every Lead \u2014 24/7
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            AI marketing automation does the repetitive work that eats your evenings \u2014 missed call follow-up, lead qualification, quote follow-ups, review requests, appointment reminders. Live in 2-5 days, from $199/month. Most clients recover their investment within 30 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Automation Service
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Stop Losing Leads to Missed Calls and Slow Follow-Up?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your call volume, and tell you exactly which automations would recover the most leads.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/ai-automation-adelaide" className="btn-secondary px-8 py-4">
              See AI Automation Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
