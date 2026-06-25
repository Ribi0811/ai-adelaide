import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "After-Hours Answering Adelaide",
  description:
    "After-hours phone answering for Adelaide tradies. Missed calls turn into booked jobs overnight, $199 setup.",
  alternates: { canonical: "/after-hours-answering" },
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
  {
    question: "Can I have AI answer during business hours too?",
    answer:
      "Yes. Most Adelaide businesses we set up have AI answer overflow during the day and take all after-hours calls. One flat rate covers both.",
  },
  {
    question: "What's the difference between after-hours and missed-call?",
    answer:
      "After-hours is when your office is closed (5pm-9am, weekends). Missed-call is any call that rings out, day or night. They're different problems with overlapping solutions. We can configure both.",
  },
  {
    question: "Can I have AI forward urgent calls to my mobile?",
    answer:
      "Yes. You set the rules. If the caller mentions an emergency (gas leak, burst pipe, electrical fault, no hot water, medical), the AI forwards the call or sends an urgent SMS immediately.",
  },
  {
    question: "Will the AI sound Australian?",
    answer:
      "Yes. We use natural Australian voices with proper pacing and tone. Most callers don't realise they're talking to AI.",
  },
  {
    question: "How much does it cost in Adelaide?",
    answer:
      "Standalone after-hours AI starts at $99/month. Most tradies and clinics take the full AI automation stack from $199/month which covers 24/7, including after-hours, business hours, weekends, and public holidays.",
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
    name: "After-Hours AI Answering Adelaide",
    serviceType: "After-Hours Answering",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "After-hours AI call answering for Adelaide tradies and small businesses. Captures every after-hours, weekend, and public holiday call. From $99/mo.",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "AUD", unitText: "MONTH" },
    },
      };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const scenarios = [
  {
    title: "Tradie emergency after 7pm",
    body:
      "A Prospect homeowner rings at 7:42pm with a burst pipe. The AI answers, captures the address, escalates as urgent, and forwards to the plumber's mobile. He's on-site in 30 minutes with a $1,800 job. Without AI, the homeowner rings the next plumber on Google and gets them instead.",
  },
  {
    title: "Clinic reschedule at 9pm",
    body:
      "A Stirling physio patient wants to move tomorrow's appointment. The AI checks the calendar, offers alternative slots, books them in, and sends a confirmation. Clinic admin arrives Monday to find the schedule already updated.",
  },
  {
    title: "Restaurant booking on Sunday",
    body:
      "A 12-person birthday booking comes in on Sunday morning. The AI captures dietary requirements, takes a deposit, and texts the manager. The customer never had to wait until Monday — and the venue never had to staff a Sunday phone line.",
  },
];

const compare = [
  { tier: "AI after-hours answering", cost: "From $99/mo", coverage: "24/7, unlimited calls", speed: "Instant" },
  { tier: "Live human answering", cost: "$300-$1,500+/mo", coverage: "Rostered shifts", speed: "Queue-dependent" },
  { tier: "Per-minute call centre", cost: "$1-$3/min + base", coverage: "24/7 if paid for", speed: "Hold time varies" },
  { tier: "Voicemail", cost: "$0", coverage: "Always", speed: "Caller gives up" },
];

export default function AfterHoursAnsweringPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "After-Hours Answering Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">After-Hours Answering</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            After-Hours AI Answering Adelaide — Capture Every Late Call
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            5pm Friday, your office closes. The phone still rings. Without after-hours coverage, every call goes to voicemail — and 80% of callers ring the next business on Google. We fix that with AI that picks up, qualifies, books, or escalates — 5pm to 9am, weekends, public holidays. From $99/mo, or part of the full AI stack from $199/mo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Stack <span aria-hidden>→</span>
            </Link>
            <Link href="/24-7-answering-service-adelaide" className="btn-secondary px-8 py-4">
              24/7 Comparison <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">After-hours vs the alternatives</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            Most Adelaide business owners think they only have two options: voicemail or a live answering service. Here&apos;s the actual third option — and why it usually wins.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Speed</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c, i) => (
                  <tr key={c.tier} className={i === compare.length - 1 ? "" : "border-b border-slate-100"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{c.tier}</td>
                    <td className="py-3 pr-4">{c.cost}</td>
                    <td className="py-3 pr-4">{c.coverage}</td>
                    <td className="py-3">{c.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Adelaide scenarios</h2>
          <div className="space-y-6">
            {scenarios.map((s) => (
              <div key={s.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{s.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after adding after-hours coverage"
        eyebrow="Real results"
        subheadline="The phone that used to ring out at 7pm now books jobs. Here's what that looks like."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Stop losing after-hours jobs to voicemail</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what the AI answers, how it escalates urgent jobs, and what it costs for your call volume.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Stack <span aria-hidden>→</span>
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