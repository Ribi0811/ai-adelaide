import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Missed Call Text Back Adelaide | Part of AI Automation",
  description:
    "Missed call text back for Adelaide small businesses. Instant SMS reply after every missed call, with job qualification. Part of our AI automation service from $199/mo.",
  alternates: { canonical: "/missed-call-text-back-adelaide" },
};

const faqs = [
  {
    question: "How fast does the text-back send after a missed call?",
    answer:
      "Usually within 5-20 seconds. The customer gets an immediate response instead of waiting hours for a callback.",
  },
  {
    question: "Can messages ask qualifying questions?",
    answer:
      "Yes. We can ask suburb, job type, urgency, and preferred booking time, then route qualified leads to your calendar or inbox.",
  },
  {
    question: "Will this work with my existing mobile number?",
    answer:
      "Yes. We connect to your current number and workflow so you do not need to change how customers contact you.",
  },
  {
    question: "Can I customise wording for different services?",
    answer:
      "Absolutely. You can run different templates for emergency callouts, quote requests, or after-hours messaging.",
  },
];

export default function MissedCallTextBackAdelaidePage() {
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
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Feature</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Missed Call Text Back for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Missed call text back is one feature of our AI Automation service. When you can&apos;t pick up, an instant SMS goes out within seconds — so the customer knows you got their call, knows you&apos;ll get back to them, and doesn&apos;t try your competitor. From $199/mo as part of the full automation stack.
          </p>
          <div className="mt-6">
            <Link href="/ai-automation-adelaide" className="btn-primary px-6 py-3">
              See Full AI Automation Service →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            How It Works
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            When a customer calls and you can&apos;t answer — you&apos;re on a job, you&apos;re with another client, you&apos;re closed for the day — our system detects the missed call and sends an automatic SMS within seconds.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The SMS can be a simple acknowledgement: &ldquo;Sorry we missed your call — we&apos;ll get back to you shortly. What can we help with?&rdquo;
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Or it can ask qualifying questions: &ldquo;Hi! We missed your call. Are you calling about an emergency, a quote, or a booking?&rdquo; — and route the lead to the right person in your business.
          </p>
        </div>
      </section>

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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Stop Missing Calls?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Missed call text back is one part of our full AI automation stack. Book a free chat and we&apos;ll show you the complete setup — websites, SEO, and automation — with a fixed quote.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See AI Automation Service <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
