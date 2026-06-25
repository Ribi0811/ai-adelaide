import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Missed Call Service Adelaide",
  description:
    "Missed call service for Adelaide tradies. We text back missed callers in 60 seconds and book them into your calendar.",
  alternates: { canonical: "/missed-call-service" },
};

const options = [
  {
    tier: "DIY",
    label: "Voicemail",
    price: "$0",
    coverage: "Always",
    speed: "Caller gives up after 60 seconds",
    description:
      "The default. 80%+ of callers don't leave a message — they ring the next business on Google instead.",
  },
  {
    tier: "Basic",
    label: "Missed-call text back (AI SMS)",
    price: "From $99/mo",
    coverage: "24/7",
    speed: "5-20 seconds",
    description:
      "AI sends an instant SMS in your voice, asks 2-3 qualifying questions, and forwards qualified leads to your calendar or inbox.",
  },
  {
    tier: "Pro",
    label: "Missed call service (full AI)",
    price: "From $199/mo",
    coverage: "24/7, unlimited simultaneous calls",
    speed: "Instant answer",
    description:
      "AI picks up the call live, books appointments, escalates urgent jobs, and only bothers you when needed. Includes text-back.",
  },
  {
    tier: "Premium",
    label: "Live human answering service",
    price: "$300-$1,500+/mo",
    coverage: "Business hours or rostered",
    speed: "Queue-dependent",
    description:
      "A real person answers in your business name. Useful if you want a human voice for sensitive calls, but expensive for 24/7.",
  },
];

const industries = [
  {
    title: "Tradies (plumbers, electricians, builders)",
    body:
      "You're on-site when the call rings. The AI answers, captures the job, books it, and texts you the summary. Recovery rate goes from 28% to 67%.",
  },
  {
    title: "Allied health (physio, chiro, dental)",
    body:
      "Front desk is slammed during peak hours, calls go to voicemail. The AI handles overflow, books appointments, and sends reminders.",
  },
  {
    title: "Retail & hospitality (cafes, restaurants, gift shops)",
    body:
      "Tourists and late-night customers book the place that actually answers. The AI captures weekend demand while your team is flat out.",
  },
  {
    title: "Professional services (accountants, real estate, legal)",
    body:
      "After-hours enquiries are usually high-value. The AI qualifies, books, or escalates, so you don't wake up to six voicemails from prospects you should have caught.",
  },
];

const faqs = [
  {
    question: "What is a missed call service?",
    answer:
      "A missed call service catches calls you can't pick up and responds on your behalf — usually with an instant SMS, sometimes with a live AI or human answer. The point is to keep the lead warm so they don't ring the next business on Google.",
  },
  {
    question: "How fast does the response go out?",
    answer:
      "Our AI sends the text-back in 5-20 seconds. Live AI answers are instant. Both are dramatically faster than the 30-minute to 24-hour response time most small businesses manage on voicemail alone.",
  },
  {
    question: "What does the SMS say?",
    answer:
      "Whatever you want, in your voice. The default is something like: \"Hi, this is [Business]. Sorry we missed your call — we're on the tools. Can you tell us what you need help with? We'll get back to you within the hour.\" Then the AI asks 2-3 qualifying questions based on your services.",
  },
  {
    question: "Will it work with my existing mobile number?",
    answer:
      "Yes. We layer the automation on top of your current number — no porting, no new SIM, no app for your customers to learn. The number your customers have is the number that responds.",
  },
  {
    question: "Can I customise the messages for different services?",
    answer:
      "Yes. Emergency callouts, quote requests, after-hours, weekend bookings — each can have its own template, qualification questions, and routing rules.",
  },
  {
    question: "Does this include an AI receptionist?",
    answer:
      "It's part of the same stack. Missed-call text-back is the entry feature. Add live AI answering, booking automation, and quote follow-up for the full package.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Standalone text-back from $99/mo. Full AI missed-call service with live answering from $199/mo. Both flat monthly, no per-call charges.",
  },
  {
    question: "How do I know it's working?",
    answer:
      "Monthly reporting: how many missed calls, how many SMS sent, how many leads qualified, how many jobs booked. You'll see the recovery rate climb in the first 30 days.",
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
    name: "Missed Call Service Adelaide",
    serviceType: "Missed Call Automation",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI missed call service for Adelaide businesses. Catches every missed call, responds in seconds, qualifies the lead. Part of AI automation from $199/mo.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
    },
      };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function MissedCallServicePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Missed Call Service Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Missed Call Service</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Missed Call Service Adelaide — Every Call Answered, Every Lead Captured
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            85% of callers who hit voicemail don&apos;t ring back. They go to the next business on Google. A missed call service fixes that — AI responds in seconds, qualifies the lead, and either books the job or hands you a clean summary. No more missed revenue, no more cold leads. Part of AI automation from $199/mo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Automation <span aria-hidden>→</span>
            </Link>
            <Link href="/missed-call-text-back-adelaide" className="btn-secondary px-8 py-4">
              Text-Back Only <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Which missed call service fits your business?</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            There are four ways to handle a missed call in 2026. Here&apos;s how they actually compare on cost, coverage, and speed.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Tier</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Speed</th>
                </tr>
              </thead>
              <tbody>
                {options.map((o, i) => (
                  <tr key={o.label} className={i === options.length - 1 ? "" : "border-b border-slate-100 align-top"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{o.tier}</td>
                    <td className="py-3 pr-4">{o.label}</td>
                    <td className="py-3 pr-4">{o.price}</td>
                    <td className="py-3 pr-4">{o.coverage}</td>
                    <td className="py-3">{o.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            For most Adelaide small businesses, the &quot;Pro&quot; tier (live AI answering + text-back) is the sweet spot — best cost, full coverage, fastest speed.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How different Adelaide businesses use it</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{ind.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after switching to AI missed-call service"
        eyebrow="Real results"
        subheadline="The fastest SMS reply wins the job. Here's what that looks like in real numbers."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Stop losing jobs to voicemail</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what the AI text-back looks like, what the qualification flow does, and what it would cost for your call volume.
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