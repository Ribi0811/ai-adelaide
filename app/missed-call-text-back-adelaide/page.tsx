import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Missed Call Text-Back Adelaide",
  description:
    "Auto-text-back for Adelaide tradies who miss calls on the job. Recover missed leads in under 60 seconds, $199 setup.",
  alternates: { canonical: "/missed-call-text-back-adelaide" },
};

const howItWorks = [
  {
    step: "1. Caller rings",
    body:
      "You miss the call — because you're on a job, driving, in a meeting, or off the tools. The AI system detects the missed call instantly.",
  },
  {
    step: "2. SMS in 5-20 seconds",
    body:
      "The caller gets an SMS using your business name and your voice. It acknowledges the missed call, apologises, and asks if they'd like to book or leave details.",
  },
  {
    step: "3. Lead qualifies",
    body:
      "The AI asks 2-3 qualifying questions (suburb, job type, urgency, preferred time) — or books directly into your calendar if you want it that fast.",
  },
  {
    step: "4. You get the summary",
    body:
      "You receive a clean SMS and email with the caller's name, number, what they wanted, and urgency level. No more voicemail tag.",
  },
];

const benefits = [
  {
    title: "Recover 60%+ of missed calls",
    body:
      "Industry research shows that responding within 5 minutes makes you 21x more likely to qualify the lead. SMS within 20 seconds beats that handily.",
  },
  {
    title: "Look professional, even off the tools",
    body:
      "Customers don't know you're on a roof or under a house. They see an instant, polite reply that says \"we care about your call\".",
  },
  {
    title: "Filter tire-kickers",
    body:
      "The qualifying questions filter out the \"just browsing\" calls so you focus on the jobs that actually convert.",
  },
  {
    title: "Works with your existing number",
    body:
      "No number porting, no new SIM, no app to learn. The text-back runs on the number your customers already have.",
  },
  {
    title: "Custom wording for different services",
    body:
      "Run different templates for emergency callouts, quote requests, after-hours bookings — all in your voice, all tracked separately.",
  },
  {
    title: "Includes lead capture form",
    body:
      "If the caller doesn't text back, the AI sends a follow-up with a one-tap link to a web form. Even the quiet ones convert.",
  },
];

const scenarios = [
  {
    title: "Tradie on-site",
    body:
      "A plumber is under a sink when a call comes in. Missed call fires the SMS in 12 seconds. The homeowner texts back with their address and the issue. The plumber finishes the job, calls back, and books the work — same hour.",
  },
  {
    title: "After-hours emergency",
    body:
      "9pm, a Noarlunga homeowner has a burst pipe. They call three plumbers; the AI gets back to them in 15 seconds with a callback offer. They pick the plumber who actually responded. That's the win.",
  },
  {
    title: "Clinic overflow",
    body:
      "Front desk is slammed, calls go to voicemail. The AI sends an SMS offering the next three appointment slots via a one-tap link. Patient books without anyone in the clinic lifting a finger.",
  },
];

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
  {
    question: "What if the caller doesn't text back?",
    answer:
      "The AI sends a follow-up after 30 minutes with a one-tap link to a web form. If they still don't respond, you get a summary email so you can call back when you're free.",
  },
  {
    question: "Does this include the AI receptionist too?",
    answer:
      "It's part of the same stack. Missed-call text-back is the entry-level feature; you can add full AI receptionist (answers live calls), booking automation, and quote follow-up on top.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Missed-call text-back is included from $199/month as part of our full AI automation stack. Standalone text-back starts at $99/month for simple setups.",
  },
  {
    question: "Will it work on weekends and public holidays?",
    answer:
      "Yes. The system doesn't take holidays. Every missed call — weekend, public holiday, 3am — gets the same instant SMS response.",
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
    name: "Missed Call Text Back Adelaide",
    serviceType: "Missed Call SMS Automation",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Missed call text back service for Adelaide businesses. Instant SMS auto-response within 20 seconds, with job qualification. Part of AI automation from $199/mo.",
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

export default function MissedCallTextBackAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Missed Call Text Back Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Missed Call Text Back</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Missed Call Text Back Adelaide — Reply in 20 Seconds, Win the Job
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            The fastest reply wins the job. When you can&apos;t pick up, our AI sends an SMS in 5-20 seconds, qualifies the lead, and either books them in or hands you a clean summary. No more voicemails, no more missed revenue, no more customers ringing the next business on Google. Part of AI automation from $199/mo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Automation <span aria-hidden>→</span>
            </Link>
            <Link href="/missed-call-answering-service-adelaide" className="btn-secondary px-8 py-4">
              Compare Answering Service <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How missed call text back works</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {howItWorks.map((step) => (
              <div key={step.step} className="panel-light-soft p-5 md:p-6">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{step.step}</p>
                <p className="text-body-mobile text-slate-700 md:text-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why Adelaide tradies and clinics use it</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{b.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{b.body}</p>
              </div>
            ))}
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
        heading="What Adelaide businesses say after adding missed-call text back"
        eyebrow="Real results"
        subheadline="The smallest change with the biggest impact — one tap, one SMS, one recovered job."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to win the next missed call?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what the SMS looks like, how the qualification works, and what it would cost for your business.
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