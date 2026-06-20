import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "After-Hours AI Answering Adelaide | Never Miss a Late Job",
  description:
    "After-hours AI call answering for Adelaide tradies. Never miss a late call — AI answers 24/7, captures every job detail, sends instant SMS summaries. From $99/month. No hidden fees. Book your free demo today.",
  alternates: {
    canonical: "/after-hours-answering",
  },
};

const faqs = [
  {
    question: "What happens if AI can't answer the question?",
    answer:
      "If a caller asks something outside your rules, the AI captures their details and sends you an urgent SMS summary so you can call back quickly. We can also route priority calls to your on-call number.",
  },
  {
    question: "Does it work with my existing number?",
    answer:
      "Yes. In most setups we can forward after-hours calls from your current business number to your AI answering line, so you keep your existing number and branding.",
  },
  {
    question: "How fast is the SMS?",
    answer:
      "Usually within seconds of the call finishing. You get the caller name, job type, urgency, and callback number in one clear summary.",
  },
];

export default function AfterHoursAnsweringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "AI Adelaide",
        url: `${siteConfig.url}/after-hours-answering`,
        telephone: "+61871009788",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adelaide",
          addressRegion: "SA",
          addressCountry: "AU",
        },
        areaServed: "Adelaide",
        serviceType: "After-hours AI call answering",
        offers: {
          "@type": "Offer",
          priceCurrency: "AUD",
          price: "99",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "99",
            priceCurrency: "AUD",
            priceType: "https://schema.org/MinimumPrice",
          },
          description: "After-hours AI answering from $99/month",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">After-hours AI answering</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            After-Hours AI Answering for Adelaide Tradies &amp; Service Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Never miss a late call again — AI answers 24/7, captures the job, sends you an SMS.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {[
              "Call comes in",
              "AI answers instantly",
              "Captures name, job type, urgency",
              "Captures callback number",
              "SMS summary sent to tradie instantly",
            ].map((step, index) => (
              <div key={step} className="panel-light-soft p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Step {index + 1}</p>
                <p className="mt-2 text-sm text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel-light p-6 md:p-8">
            <h2 className="text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>Plumbers</li>
              <li>Electricians</li>
              <li>Builders</li>
              <li>HVAC businesses</li>
              <li>Cleaners</li>
              <li>Landscapers</li>
            </ul>
          </div>

          <div className="panel-light p-6 md:p-8">
            <h2 className="text-h2-mobile text-slate-950 md:text-h2">Pricing</h2>
            <p className="mt-4 text-4xl font-semibold text-slate-950">Contact us for pricing</p>
            <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
              Affordable after-hours coverage so every late enquiry gets answered and captured.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book Free Chat <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-8 text-center">
          <span className="eyebrow-light">FAQ</span>
          <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
            Common Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="panel-light p-6 md:p-8">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
