import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Virtual Receptionist Adelaide | AI From $199",
  description:
    "Virtual receptionist services for Adelaide small businesses. AI-powered answering, booking, and lead capture. Cheaper than human receptionists. From $199/mo.",
  alternates: {
    canonical: "/virtual-receptionist-adelaide",
  },
};

const faqItems = [
  {
    question: "Is a virtual receptionist the same as an AI receptionist?",
    answer:
      "In practice, yes — the caller hears a receptionist, but the system doing the work is AI. The reason people search for 'virtual receptionist' is usually because they want someone to answer the phone without hiring a full-time human. That's exactly what this service does, just with faster setup, lower cost, and 24/7 coverage.",
  },
  {
    question: "How much does a virtual receptionist cost in Adelaide?",
    answer:
      "A human virtual receptionist service often lands somewhere between $400 and $1,500+ per month depending on coverage and minutes. Our AI virtual receptionist starts from $199/month, which gives you much better 24/7 coverage for a fraction of the price.",
  },
  {
    question: "Can it book appointments and transfer urgent calls?",
    answer:
      "Yes. It can capture the caller's details, book directly into your calendar, send a summary to your team, or escalate urgent calls immediately. For trades, that means emergency jobs can be forwarded straight away while non-urgent jobs get booked cleanly.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "Usually not. We use natural Australian speech, human pacing, and responses tailored to your business. Most callers just hear a receptionist who knows the basics and gets the job done.",
  },
  {
    question: "Does it work after hours and on weekends?",
    answer:
      "Yes — that's the whole point. Calls get answered 24/7, including after hours, weekends, and public holidays. No voicemail, no lost leads, no Monday morning pile-up.",
  },
  {
    question: "Can it handle multiple calls at once?",
    answer:
      "Yes. Unlike a single human receptionist, the AI can take multiple calls simultaneously without queueing, hold music, or the caller hanging up after 20 seconds.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most setups are ready in 2-5 business days. We define the call flow, connect your tools, test a few sample calls, and go live.",
  },
  {
    question: "What if I already have a receptionist?",
    answer:
      "Great — then the AI can cover overflow, lunch breaks, after-hours, and times when your team is slammed. It can also handle basic FAQs and first-contact triage so your human staff can focus on higher-value conversations.",
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
    name: "Virtual Receptionist Adelaide",
    serviceType: "Virtual Receptionist Service",
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
      "Virtual receptionist service for Adelaide small businesses. AI-powered answering, appointment booking, lead capture, and after-hours coverage.",
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

export default function VirtualReceptionistAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Virtual Receptionist Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Virtual Receptionist</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Virtual Receptionist Adelaide — AI That Answers Every Call
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When someone searches for a virtual receptionist, what they really want is simple: every call answered, no chaos, no expensive payroll, and no leads disappearing into voicemail. That&apos;s what we build — an AI-powered virtual receptionist for Adelaide small businesses from $199/month.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-receptionist-vs-virtual-receptionist" className="btn-primary px-8 py-4">
              Compare AI vs Virtual Receptionist <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-8 py-4">
              See Cost Breakdown <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What a virtual receptionist should actually do</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Most businesses don&apos;t need fancy scripts. They need the basics handled well and without drama. That means answering the phone, identifying the caller, asking the right questions, and making sure the lead doesn&apos;t disappear.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Answer every call</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                No missed calls, no busy tone, no waiting for Monday morning. Every caller gets an immediate response, even when your team is flat out on jobs.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Book the next step</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                The AI can book appointments, collect lead details, or send a clean summary to your team so the follow-up is instant and the caller isn&apos;t left hanging.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Escalate urgent calls</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                If it&apos;s an emergency or a high-value lead, the system forwards the call or sends an immediate SMS so you can jump on it before the next business does.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Protect your time</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                The boring stuff gets filtered out. That means fewer interruptions, less admin, and fewer calls where someone just wants to know your opening hours or service area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Virtual receptionist pricing: human vs AI</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Typical monthly cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Setup speed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Human virtual receptionist</td>
                  <td className="py-3 pr-4">$400-$1,500+</td>
                  <td className="py-3 pr-4">Business hours or rostered shifts</td>
                  <td className="py-3">Days to weeks</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Answering service / call centre</td>
                  <td className="py-3 pr-4">$300-$900+</td>
                  <td className="py-3 pr-4">Shared team, queue-dependent</td>
                  <td className="py-3">A few days</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">AI virtual receptionist</td>
                  <td className="py-3 pr-4"><strong>From $199</strong></td>
                  <td className="py-3 pr-4">24/7, unlimited simultaneous calls</td>
                  <td className="py-3">2-5 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            The big difference is not just price. It&apos;s consistency, speed, and the ability to answer ten calls at once without dropping one.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why AI beats traditional virtual reception most of the time</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">No roster headaches</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                A human receptionist has holidays, sick days, lunch breaks, and shift changes. AI just keeps answering the phone.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">No queue burn</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                With call centres, callers wait. With AI, the call starts immediately. That difference is where a lot of your leads are won or lost.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">More context, less script-reading</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                The AI can remember your services, suburb coverage, prices, and booking rules. It&apos;s not reading a single script and hoping for the best.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Always on</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Weekend, after hours, public holiday, school holiday — the AI does not care. It answers because leads don&apos;t stop happening when your office closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide business owners say after the phone finally gets answered"
        eyebrow="Real results"
        subheadline="These are the kinds of outcomes you get when missed calls stop slipping through the cracks."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to stop losing calls?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat and we&apos;ll show you how the virtual receptionist fits into your business — whether you&apos;re after full coverage, overflow support, or a clean way to answer every after-hours call.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-receptionist-cost-adelaide" className="btn-primary px-8 py-4">
              See Pricing <span aria-hidden>→</span>
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
