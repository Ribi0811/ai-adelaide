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
    answer: "Most after-hours answering setups are live within 2-3 business days.",
  },
];

export default function AfterHoursAnsweringAdelaidePage() {
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
            24/7 After Hours Answering for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            After hours answering is one feature of our AI Automation service. Your AI receptionist answers every call — nights, weekends, public holidays — captures the lead, books the appointment, and texts you the full summary. From $199/mo as part of the full automation stack.
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How After Hours Answering Works</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            When your business closes at 5pm (or whenever), calls roll to your AI receptionist. It picks up like a real person, asks the right questions, captures the lead, and either books an appointment or sends you a detailed message.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            You wake up to a clean summary: who called, what they wanted, and whether anything needs urgent attention. No more checking voicemails at midnight.
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
            Ready to Answer Every Call — 24/7?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            After hours answering is one part of our full AI automation stack. Book a free chat and we&apos;ll show you the complete setup — websites, SEO, and automation — with a fixed quote.
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
