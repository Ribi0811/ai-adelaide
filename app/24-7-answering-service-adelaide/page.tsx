import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "24/7 Answering Service Adelaide | From $199/mo",
  description:
    "24/7 answering service for Adelaide businesses — AI vs live comparison, real Adelaide cost breakdown, tradie and clinic use cases. From $199/mo.",
  alternates: {
    canonical: "/24-7-answering-service-adelaide",
  },
};

const faqItems = [
  {
    question: "What is a 24/7 answering service?",
    answer:
      "It's a service that answers your business phone around the clock — every call, every hour, every day. Modern 24/7 services are either AI-powered (a virtual receptionist software handles the call) or live-human (a real person in a call centre answers on your behalf). Both keep you from missing leads. They differ on cost, coverage quality, and how quickly they answer.",
  },
  {
    question: "How much does a 24/7 answering service cost in Adelaide?",
    answer:
      "Live human services in Adelaide typically run $300-$1,500+/month depending on call volume, after-hours coverage, and per-minute overage fees. Our AI-powered answering service starts from $199/month with no per-call or per-minute charges, and covers nights, weekends, and public holidays at no extra cost.",
  },
  {
    question: "Do I need an AI or live answering service?",
    answer:
      "If your priority is lowest cost, fastest answer, and 24/7 coverage for high-volume calls, AI is the practical choice. If you need a human voice for sensitive calls and are happy to pay premium rates for a small number of calls, live can still work. Most Adelaide small businesses we work with choose AI once they see the cost and coverage difference.",
  },
  {
    question: "Will my customers know they're talking to AI?",
    answer:
      "Not unless you tell them. We use natural Australian voices with proper pacing and tone. The AI uses your business name, your services, your FAQs — and most callers assume they're speaking to your team. You can choose to disclose it or keep it under wraps.",
  },
  {
    question: "Can the answering service book appointments?",
    answer:
      "Yes. The AI can check your calendar, offer available slots, book the appointment, and send a confirmation SMS — all while the caller is still on the line. Live services usually take a message and pass it back for your team to book manually, which is slower and loses some leads.",
  },
  {
    question: "Can urgent calls be forwarded to me?",
    answer:
      "Absolutely. You set the rules. If the caller mentions an emergency (gas leak, burst pipe, electrical fault, child locked in car, medical emergency), the AI forwards the call directly to your mobile or sends an immediate SMS with the caller's details. Non-urgent calls get the full message treatment and a callback the next morning.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most 24/7 answering setups are live within 2-5 business days. We map your call flow (what counts as urgent, what questions to ask, where to send messages), configure the AI with your services and FAQs, connect your calendar or CRM, and test with sample calls before going live. Complex setups with custom integrations take up to a week.",
  },
  {
    question: "What if I already have an answering service?",
    answer:
      "Then AI is even more valuable. It can cover overflow, after-hours, weekends, and the simple FAQs that eat up your front desk's time. Or, if you want to retire your existing service, switching usually takes a week — and most clients see their monthly bill drop by 50-70%.",
  },
  {
    question: "Do you cover weekends and public holidays?",
    answer:
      "Yes. The AI doesn't take holidays. Christmas, New Year's, Easter long weekend — all covered at the same flat monthly rate. For businesses with genuinely reduced weekend coverage, the AI can adjust its tone and responses (e.g. 'We're closed today but can book you in for Monday morning') while still capturing the lead.",
  },
  {
    question: "Will I get voicemails or full transcripts?",
    answer:
      "You get a clean text summary, not a voicemail. The AI sends you the caller's name, number, what they wanted, whether it was urgent, and any actions taken. You can read it in 5 seconds on your phone. Full transcripts and recordings are available if you want them — most clients prefer the summary.",
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
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
    name: "24/7 Answering Service Adelaide",
    serviceType: "24/7 Answering Service",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "24/7 telephone answering service for Adelaide small businesses. AI-powered receptionist answers every call, books appointments, escalates urgent calls. From $199/month.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function TwentyFourSevenAnsweringServiceAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "24/7 Answering Service Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">24/7 Answering Service</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            24/7 Answering Service Adelaide — Every Call Answered, No Payroll Bloat
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            If your phone rings after 5pm, on weekends, or during a job, you either lose the lead or you pay through the nose for coverage. We built a 24/7 answering service that fixes both — AI-powered receptionist, every call answered in under a second, no per-minute charges, no missed leads. Adelaide-built, from $199/month.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-receptionist-adelaide" className="btn-primary px-8 py-4">
              See AI Receptionist <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-8 py-4">
              See Cost Breakdown <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">24/7 answering service cost in Adelaide (real numbers)</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Most Adelaide business owners search for 24/7 coverage and end up choosing between three options. Here's how they actually compare in cost, coverage, and quality — without the brochure fluff.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Monthly cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Speed to answer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">AI 24/7 answering (AI Adelaide)</td>
                  <td className="py-3 pr-4"><strong>From $199</strong></td>
                  <td className="py-3 pr-4">24/7/365, unlimited simultaneous calls</td>
                  <td className="py-3">Instant</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Live human answering service</td>
                  <td className="py-3 pr-4">$300-$1,500+</td>
                  <td className="py-3 pr-4">Usually business hours or rostered shifts</td>
                  <td className="py-3">Queue-dependent</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Per-minute answering (call centre)</td>
                  <td className="py-3 pr-4">$1-$3/min + base fee</td>
                  <td className="py-3 pr-4">24/7 if paid for</td>
                  <td className="py-3">Hold time varies</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">Voicemail (DIY)</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">Always</td>
                  <td className="py-3">Caller gives up after 60 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            AI is the cheapest, fastest, and most consistent option for most Adelaide small businesses. Live services still earn their keep on narrow, human-only tasks — but you pay for the privilege.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who actually needs a 24/7 answering service in Adelaide?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Tradies (plumbers, electricians, builders)</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                You're on-site, under a house, or driving between jobs when the phone rings. After hours, you're either off the tools entirely or missing emergencies worth thousands. AI catches both.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Allied health clinics (physio, chiro, dental)</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Patients reschedule at 9pm on a Sunday. New patient enquiries land at 11pm on a Tuesday. The front desk goes home at 5pm — but the patient doesn't. AI handles intake, reschedules, and bookings around the clock.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Retail & hospitality (cafes, restaurants, gift shops)</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Weekend and after-hours bookings go to voicemail right now. Tourists and late-night planners book the venue that actually answers. AI captures weekend demand while your team is flat out.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Professional services (accountants, lawyers, real estate)</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                After-hours enquiries are usually high-value — they came back to the question late at night, or it's urgent. AI qualifies, books a callback, or escalates, so you don't wake up to six voicemails from prospects you should have caught.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">AI vs live: which 24/7 option fits your business?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Decision factor</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">AI answering</th>
                  <th className="py-2 font-semibold text-slate-950">Live human answering</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Cost</td>
                  <td className="py-3 pr-4">$199-$497/mo flat</td>
                  <td className="py-3">$300-$1,500+/mo + per-minute</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Calls at once</td>
                  <td className="py-3 pr-4">Unlimited</td>
                  <td className="py-3">One human at a time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Quality</td>
                  <td className="py-3 pr-4">Same script, same tone every time</td>
                  <td className="py-3">Varies by operator</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Setup time</td>
                  <td className="py-3 pr-4">2-5 business days</td>
                  <td className="py-3">Days to weeks</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Best for</td>
                  <td className="py-3 pr-4">High volume, low cost, consistent service</td>
                  <td className="py-3">Niche, human-only tasks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">Risk</td>
                  <td className="py-3 pr-4">AI misunderstands an edge case</td>
                  <td className="py-3">Operator varies; missed calls during shift changes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after going 24/7"
        eyebrow="Real results"
        subheadline="These are the kinds of wins that happen when the phone finally gets answered every time, day or night."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqItems.map((faq) => (
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to never miss a call again?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit and we'll show you which call types should be AI, which should escalate to you, and which can wait until morning. No pressure, no fluff.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-receptionist-cost-adelaide" className="btn-primary px-8 py-4">
              See AI Pricing <span aria-hidden>→</span>
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