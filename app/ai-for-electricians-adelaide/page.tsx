import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "AI for Electricians Adelaide | From $199/mo",
  description:
    "AI for Adelaide electricians: 24/7 call capture, emergency escalation, quote follow-up, and ServiceM8/Tradify integration. From $199/mo.",
  alternates: { canonical: "/ai-for-electricians-adelaide" },
};

const problems = [
  { stat: "3-5", label: "calls missed per week, per sparkie on average" },
  { stat: "$350-1,200", label: "average job value for electrical work in Adelaide" },
  { stat: "70%", label: "of missed callers never ring back — they go to the next sparkie" },
  { stat: "8-12 hrs", label: "of admin per week lost to voicemail, follow-up, scheduling" },
];

const features = [
  {
    title: "24/7 call capture",
    body:
      "AI answers every call, asks the right questions, qualifies as urgent or quote-based, and sends a clean SMS. No more missed emergency callouts to competitors on Google.",
  },
  {
    title: "Emergency job escalation",
    body:
      "Power outage, sparking, no hot water, safety switch tripping, burning smell — AI recognises the keywords and forwards the call to your mobile in 30 seconds. You stop losing the $800 emergency job to whoever answers first.",
  },
  {
    title: "Quote follow-up automation",
    body:
      "AI sends follow-up SMS 24 hours after every quote, then again at Day 3 and Day 7. Recovers 30-40% of cold quotes without you chasing them.",
  },
  {
    title: "ServiceM8 / Tradify / Jobber integration",
    body:
      "AI pushes job details directly into your job management software. No copy-pasting, no paper notes, no double entry.",
  },
  {
    title: "After-hours booking capture",
    body:
      "Most clients research electricians after work. AI captures after-hours enquiries and books callbacks for the next morning — or escalates immediately for genuine emergencies.",
  },
  {
    title: "Review request automation",
    body:
      "Auto-sends a Google review link 24 hours after job completion. Builds your reputation while you focus on the next job.",
  },
];

const suburbTargets = [
  "Electrician Norwood", "Electrician Glenelg", "Electrician Burnside", "Electrician Mitcham",
  "Electrician Prospect", "Electrician Unley", "Electrician Magill", "Electrician Campbelltown",
  "Electrician Payneham", "Electrician Stepney", "Electrician Medindie", "Electrician Beulah Park",
];

const faqs = [
  {
    question: "How much does AI for electricians cost in Adelaide?",
    answer:
      "From $199/month as part of the full AI automation stack, or $99/month for missed-call text-back only. Most Adelaide electrical businesses spend $199-$497/month depending on call volume and the number of workflows automated.",
  },
  {
    question: "Does it integrate with ServiceM8 and Tradify?",
    answer:
      "Yes. We connect directly with ServiceM8, Tradify, and Jobber. AI captures the call details and pushes them into your job management software so the office team sees clean jobs ready to schedule.",
  },
  {
    question: "Will it work for emergency callouts?",
    answer:
      "Yes. AI recognises emergency keywords (no power, sparking, burning smell, safety switch) and forwards those calls to your mobile within 30 seconds.",
  },
  {
    question: "What if a customer wants a quote?",
    answer:
      "AI captures job details, qualifies the scope (switchboard upgrade, power point install, safety inspection, etc.), and sends you a clean summary. You follow up with a written quote during business hours.",
  },
  {
    question: "Does it work on weekends and public holidays?",
    answer:
      "Yes. AI answers every call, every day. Electrical emergencies don't wait for business hours — neither does your coverage.",
  },
  {
    question: "Will the AI sound Australian?",
    answer:
      "Yes. Natural Australian voices with proper pacing and tone. Most callers don't realise they're talking to AI.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most electrical AI setups are live within 2-5 business days. We configure call flows, integrate with ServiceM8/Tradify, test with sample calls, and hand over with a 30-minute walkthrough.",
  },
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Yes. We layer the AI on top of your current number. The number your customers have is the number that answers.",
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
    name: "AI for Electricians Adelaide",
    serviceType: "AI for Electricians",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI for Adelaide electricians: 24/7 call capture, emergency escalation, quote follow-up, and ServiceM8/Tradify integration. From $199/mo.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
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

export default function AIForElectriciansAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI for Electricians Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI for Electricians</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI for Electricians Adelaide — Stop Missing Jobs to Voicemail
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            If you&apos;re on a job, in a ceiling, or driving between callouts, you can&apos;t answer every phone call. The cost is brutal — a missed emergency electrical call in Adelaide is often worth $350-$1,200, and most electrical businesses miss 3-5 of those chances every week. AI fixes that — every call answered, every lead qualified, every job captured.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See AI Stack <span aria-hidden>→</span>
            </Link>
            <Link href="/missed-call-text-back-adelaide" className="btn-secondary px-8 py-4">
              Missed-Call Text-Back <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">The numbers behind missed electrical calls</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {problems.map((p) => (
              <div key={p.label} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6 text-center">
                <p className="text-3xl font-bold text-slate-950">{p.stat}</p>
                <p className="mt-2 text-sm text-slate-700">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What AI does for Adelaide electricians</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            This isn&apos;t generic software. It&apos;s a practical AI system configured around how electrical businesses actually run: urgent callouts, quote work, after-hours calls, and limited time.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{f.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Adelaide suburbs we help electricians rank for</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Local SEO setup targets the searches your customers actually make. Suburb service pages so when someone in Norwood searches &quot;electrician Norwood&quot;, you have a page Google can rank for that.
          </p>
          <div className="flex flex-wrap gap-2">
            {suburbTargets.map((s) => (
              <span key={s} className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-sm text-slate-700">{s}</span>
            ))}
          </div>
          <Link href="/locations" className="mt-4 inline-block text-sm font-semibold text-accent underline">
            See full suburb list →
          </Link>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide electricians say"
        eyebrow="Real results"
        subheadline="The phone stops ringing out. The jobs keep coming."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to stop missing electrical jobs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what the AI would say when a Glenelg customer calls about a power outage at 11pm.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full Stack <span aria-hidden>→</span>
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