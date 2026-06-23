import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "After Hours Answering Adelaide | 24/7",
  description:
    "24/7 after hours answering for Adelaide small businesses. Your AI receptionist handles calls when you're closed, captures leads, and texts you the summary. Part of AI automation from $199/mo.",
  alternates: {
    canonical: "/after-hours-answering-adelaide",
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ data — extracted by the Next.js schema pattern as FAQPage      */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "No. The AI uses natural Australian voices with proper pacing, tone, and pronunciation. Callers will hear your business name, get their questions answered, and either book an appointment or be sent to voicemail — without realising it was AI unless you tell them. Most clients don't disclose it and never get asked.",
  },
  {
    question: "Can it connect urgent callers to me in real time?",
    answer:
      "Yes. The AI triages every call. If a caller has an emergency (gas leak, burst pipe, no hot water, child locked in car, medical emergency), the AI flags it as urgent and either forwards the call directly to your mobile or sends you an immediate SMS with the caller's details. You can be on the line within 30 seconds. Non-urgent calls get the full message treatment and a callback the next morning.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "It takes a detailed message and sends it to you straight away via SMS and email. If the AI detects it's something critical — an emergency, a large job opportunity, a complaint — it escalates immediately with an urgent notification. The goal isn't to replace you; it's to make sure nothing important slips through the cracks while you're off the tools.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most after-hours answering setups are live within 2-3 business days. We map your call flow (what counts as urgent, what questions to ask, where to send messages), configure the AI with your services and FAQs, integrate with your calendar if needed, and test with sample calls before going live. For complex setups with custom CRM integration, allow up to a week.",
  },
  {
    question: "What does after hours answering cost in Adelaide?",
    answer:
      "As part of our full AI Automation stack, after-hours answering is included from $199/month. There's no separate after-hours rate, no per-call charge, and no premium for weekend or public holiday coverage. One flat monthly fee covers everything.",
  },
  {
    question: "Will I get voicemails or full transcripts?",
    answer:
      "You get a clean text summary, not a voicemail. The AI sends you the caller's name, number, what they wanted, whether it was urgent, and any actions taken (e.g. appointment booked). You can read it in 5 seconds on your phone. If you want the full recording or transcript, we can deliver that too — most clients prefer the summary.",
  },
  {
    question: "Can I use this for emergencies only?",
    answer:
      "Yes — you can configure the AI to only forward urgent calls and take messages for everything else. Many tradies use it this way: their AI filters for genuine emergencies (burst pipes, no hot water, electrical faults) and forwards those immediately, while non-urgent after-hours calls get a callback in the morning. You stay in control of which calls interrupt your evening.",
  },
  {
    question: "What about public holidays and weekends?",
    answer:
      "Covered 24/7/365, including Christmas, New Year's, Easter, and every long weekend. The AI doesn't take holidays. For businesses with genuinely reduced weekend coverage, the AI can adjust its tone and responses — e.g. 'We&apos;re closed today but can book you in for Monday morning, would that work?' — while still capturing the lead.",
  },
];

/* ------------------------------------------------------------------ */
/*  JSON‑LD Schemas                                                    */
/* ------------------------------------------------------------------ */

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (faqs.length === 0) return null;
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
    name: "After Hours Answering Adelaide",
    serviceType: "After Hours Answering Service",
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
      "24/7 after hours answering service for Adelaide small businesses. AI receptionist covers nights, weekends, and public holidays. Part of AI automation stack from $199/month.",
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
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AfterHoursAnsweringAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Feature</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            24/7 After Hours Answering for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            After hours answering is one feature of our AI Automation service. Your AI receptionist answers every call — nights, weekends, public holidays — captures the lead, books the appointment, and texts you the full summary. From $199/mo as part of the full automation stack. No separate after-hours rate, no voicemail, no missed leads.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-6 py-3">
              See Full AI Automation Service →
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-6 py-3">
              See Pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How After Hours Answering Works</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            When your business closes at 5pm (or 9pm, or noon on Saturdays), calls roll to your AI receptionist. It picks up like a real person, uses your business name, asks the right questions, captures the lead&apos;s details, and either books an appointment directly into your calendar or sends you a detailed message for follow-up the next day.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            You wake up to a clean summary in your inbox: who called, what they wanted, whether anything was urgent, and what actions the AI took. No more checking voicemails at midnight or returning calls from blocked numbers the next morning.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            For tradies, the AI can also flag genuine emergencies (gas leaks, burst pipes, electrical faults, no hot water) and forward them to your mobile immediately — so you sleep knowing you won&apos;t miss a $5,000 emergency call-out while still enjoying the evening off.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Adelaide Scenarios Where This Pays for Itself</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Tradies and Tradie Businesses</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                A plumber in Prospect gets a 9pm call: &ldquo;Burst pipe under the kitchen sink, water everywhere.&rdquo; The AI answers, captures the address, takes photos via SMS, escalates as urgent, and forwards to the plumber&apos;s mobile. He&apos;s on site in 30 minutes with a $1,800 job. Without the AI, the caller would have rung the next plumber on Google and got someone else.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Health Clinics and Allied Health</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                A physio clinic in Unley closes at 6pm. At 7:30pm, a patient calls to reschedule tomorrow&apos;s appointment because of a work conflict. The AI checks the calendar, offers alternative slots, books them in, and sends the patient a confirmation SMS. The clinic admin arrives in the morning to find the schedule already updated — no callback needed, no patient lost.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Retail and Hospitality</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                A Glenelg restaurant gets a call on Sunday morning from someone wanting to book a birthday dinner for 12 people next Saturday. The AI handles the booking, captures dietary requirements, takes a deposit via SMS link, and texts the restaurant manager the confirmation. The customer books the same call — no waiting for Monday.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Professional Services</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                An Adelaide accountant gets a Sunday evening call from a small business owner with an urgent BAS lodgement question. The AI captures the details, escalates as time-sensitive, and texts the accountant with a one-line summary. The accountant calls back Monday morning with the answer — the client never had to wait until Monday just to ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">After Hours vs Traditional Answering Services</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Traditional answering services charge $1-$3 per minute and pass calls between operators. Quality varies. The caller often hears &ldquo;hold for the next available operator&rdquo; or gets put on a queue. Some only cover business hours. Some miss after-hours entirely. Most don&apos;t integrate with your calendar — they just take a message and hope you call back.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            An AI receptionist for after hours delivers consistent quality, instant pickup, calendar integration, and unlimited simultaneous calls — for a flat $199/month. The math favours AI for any Adelaide business taking more than a handful of after-hours calls a week.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQ: After Hours Answering Adelaide</h2>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question}>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Answer Every Call — 24/7?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            After hours answering is one part of our full AI automation stack. Book a free chat and we&apos;ll show you the complete setup — websites, SEO, and automation — with a fixed quote for your Adelaide business.
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