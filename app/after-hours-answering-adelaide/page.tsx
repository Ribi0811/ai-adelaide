import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "After Hours Answering Service Adelaide | AI Receptionist 24/7 — AI Adelaide",
  description:
    "Adelaide businesses trust AI Adelaide for after-hours call answering. Never miss an enquiry again — 24/7 coverage, real human-sounding AI, instant text alerts. Book a free audit.",
  alternates: {
    canonical: "/after-hours-answering-adelaide",
  },
};

const faqs = [
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "No. The AI sounds like a professional receptionist — it uses your business name, answers common questions the way you would, and handles the call naturally. Callers won't know unless you specifically tell them to.",
  },
  {
    question: "Can it connect callers to me in real time?",
    answer:
      "Yes. For urgent calls or high-value enquiries, the AI can call you immediately or send an urgent text so you can call back within minutes. It triages based on what the caller needs.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "It takes a detailed message and sends it to you straight away. If it's something critical — like an emergency or a large job — it escalates immediately. The goal isn't to replace you; it's to make sure nothing slips through.",
  },
  {
    question: "How long does setup take?",
    answer:
      "We can have your AI receptionist live within 24–48 hours using your existing phone number. No new hardware, no technical configuration on your end. You just start receiving better call summaries from day one.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. We offer a free audit so you can see exactly what calls you've been missing. Then a two-week trial so you can verify the quality before committing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function AfterHoursAnsweringAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">After Hours Answering Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            After Hours Answering Service for Adelaide Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
            You close at 5pm. Your phone stops ringing — except it doesn&apos;t. It goes to voicemail, and whoever called is
            already calling your competitor by 5:01pm. Every missed after-hours call is a job you didn&apos;t get or a
            booking you lost. Our AI receptionist answers every call, 24 hours a day, 7 days a week — without hiring
            overnight staff. From $197/month.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4">
              Book Free Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What Your After Hours Answering Service Actually Handles</h2>
          <ul className="list-disc pl-6 space-y-3 text-body-mobile text-slate-700 md:text-body">
            <li>
              <strong>Answers every call instantly</strong> — no voicemail, no hold music, no waiting. The caller gets a real
              response in seconds, any time of day or night.
            </li>
            <li>
              <strong>Takes structured messages</strong> — captures the caller&apos;s name, number, what they need, and when
              they need it. You get a clean summary in your phone or inbox the moment the call ends.
            </li>
            <li>
              <strong>Books appointments directly</strong> — if you use a scheduling system, the AI can check availability
              and lock in bookings while the caller is still on the line.
            </li>
            <li>
              <strong>Triages urgent calls</strong> — if something sounds like an emergency or a high-value enquiry, the AI
              escalates immediately — calls you, sends an urgent text, or routes to your on-call number.
            </li>
            <li>
              <strong>Qualifies leads before you call back</strong> — asks the right questions so when you do follow up,
              you know exactly what the job is worth.
            </li>
          </ul>
        </div>
      </section>

      {/* The Cost of Missing Calls */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">The Real Cost of Missed After-Hours Calls</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            For tradies, medical practices, legal firms, and service businesses, after-hours calls are often{" "}
            <strong>high intent</strong>. They aren&apos;t browsing. They need help now. Missing those calls means
            immediate lost revenue.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Tradies lose emergency callouts and next-day bookings.</li>
            <li>Medical and allied health clinics lose new patient enquiries — permanently.</li>
            <li>Legal firms miss urgent consult requests and referral opportunities.</li>
            <li>Real estate agencies lose prospective tenants calling after hours about properties.</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How It Works</h2>
          <div className="space-y-5">
            <div>
              <p className="text-body-mobile text-slate-700 md:text-body">
                <strong>1. Free audit.</strong> We look at how you&apos;re currently handling calls, what you&apos;re missing,
                and what a 24/7 AI receptionist would capture for your specific business.
              </p>
            </div>
            <div>
              <p className="text-body-mobile text-slate-700 md:text-body">
                <strong>2. We configure your AI.</strong> Using your existing phone number. Callers won&apos;t know
                they&apos;re talking to AI — it sounds like a real receptionist, with your business name, your tone, your
                common questions answered the way you&apos;d answer them.
              </p>
            </div>
            <div>
              <p className="text-body-mobile text-slate-700 md:text-body">
                <strong>3. You&apos;re live.</strong> From your first night onwards, every after-hours call gets answered.
                You wake up to a message in your inbox or on your phone, with the details you need to quote or book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Traditional */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">AI After Hours Answering vs Traditional Answering Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="panel-light-soft p-5">
              <h3 className="text-h3-mobile text-slate-950 md:text-h3">Traditional answering service</h3>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-slate-700">
                <li>Usually priced per call — costs add up fast</li>
                <li>Human handoff causes delays</li>
                <li>Inconsistent note quality</li>
                <li>Limited availability, overnight gaps possible</li>
                <li>Staff turnover affects continuity</li>
              </ul>
            </article>
            <article className="panel-light-soft p-5">
              <h3 className="text-h3-mobile text-slate-950 md:text-h3">AI after-hours answering (AI Adelaide)</h3>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-slate-700">
                <li>Flat monthly rate — no surprise costs</li>
                <li>Instant response, 24/7, every time</li>
                <li>Structured summaries, perfect every call</li>
                <li>Never sleeps, never misses a call</li>
                <li>Learns and improves with your business</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Who It&apos;s For</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Our after hours answering Adelaide setup is configured per industry, so callers get relevant questions and a
            smoother experience from the first call.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>
              <strong>Tradies</strong> — plumbers, electricians, builders, HVAC. Jobs come in after hours and on weekends.
              You can&apos;t answer every call personally. Your AI can.
            </li>
            <li>
              <strong>Allied health</strong> — physiotherapists, chiropractors, dentists. Appointment-based businesses where
              a missed call is a missed treatment slot.
            </li>
            <li>
              <strong>Small business and retail</strong> — businesses that close in the evening but still want to capture
              enquiries for bookings, events, or special orders.
            </li>
            <li>
              <strong>Professional services</strong> — accountants, lawyers, property managers who need to be reachable for
              urgent client matters outside business hours.
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 text-center">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What It Costs</h2>
          <p className="mx-auto max-w-2xl text-body-mobile text-slate-700 md:text-body">
            Most Adelaide businesses on our after-hours plan pay between{" "}
            <strong>$197 and $497 per month</strong> depending on call volume. There&apos;s no setup fee, no hardware, no
            long-term contracts. You can cancel anytime. For businesses receiving 20–50 after-hours calls per week, one
            recovered job per week covers the cost — usually the ROI is immediate.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4">
              Book Free Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What Adelaide Businesses Say</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-700">
              <p className="text-body-mobile md:text-body">
                &quot;We were losing three to four enquiries every weekend. Now we get a text message before we&apos;ve
                finished dinner and we can call back first thing Monday. It&apos;s been that simple.&quot;
              </p>
              <footer className="mt-2 text-sm font-medium text-slate-500">— HVAC business, eastern suburbs Adelaide</footer>
            </blockquote>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-700">
              <p className="text-body-mobile md:text-body">
                &quot;I run a one-man electrical operation. I can&apos;t answer the phone while I&apos;m on a job. The AI
                answers, tells me what they need, and I call them back with a quote. I&apos;ve won jobs I would have
                missed.&quot;
              </p>
              <footer className="mt-2 text-sm font-medium text-slate-500">— Electrician, northern Adelaide</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="mt-2 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-container mx-auto px-6 pt-12 pb-8 text-center md:pt-16 md:pb-12">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Stop Losing Calls After Hours
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-700 md:text-body">
            Your competitors are getting those calls. A 24/7 AI receptionist means you&apos;re open even when you&apos;re
            closed. Book your free audit — we&apos;ll show you exactly what you&apos;ve been missing and what it&apos;s
            actually costing you.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4">
            Book Free Audit <span aria-hidden>→</span>
          </Link>
          <p className="mt-4 text-sm text-slate-500">No obligation. No contracts. Setup in 24–48 hours.</p>
        </div>
      </section>
    </div>
  );
}
