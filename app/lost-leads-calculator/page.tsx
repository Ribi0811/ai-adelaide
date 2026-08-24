import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LostLeadsCalculator from "@/components/LostLeadsCalculator";

export const metadata: Metadata = {
  title: "Missed Call Calculator — What Are You Losing?",
  description:
    "Model the potential value of missed calls using your Adelaide business call volume, job value and estimated win rate. Scenario only, not a revenue forecast.",
  alternates: { canonical: "/lost-leads-calculator" },
};

const faqs = [
  {
    question: "How accurate is this calculator?",
    answer:
      "It is a scenario model, not an estimate based on an industry benchmark. Enter your own missed-call volume, average job value and estimated win rate. Compare the result with call logs and won jobs before making a business decision.",
  },
  {
    question: "What's a realistic missed call rate?",
    answer:
      "Check your phone or provider call log for at least four representative weeks. Count unanswered new-enquiry calls separately from spam, repeat customers and calls that were successfully returned.",
  },
  {
    question: "What if I get most of my leads online instead of by phone?",
    answer:
      "If most leads arrive through forms, bookings, social media or referrals, measure those channels separately. The useful comparison is each channel's qualified enquiries, win rate and revenue—not a universal phone-versus-form conversion claim.",
  },
  {
    question: "How do I actually reduce missed calls?",
    answer:
      "Three practical steps: 1) AI missed-call text-back (responds in 5-20 seconds with your business name, asks qualifying questions), 2) AI receptionist (answers live calls when you can't), 3) Better call routing (forward after hours, send urgent calls to mobile, queue overflow during peak). Most Adelaide businesses start with text-back and add live AI answering when call volume justifies it.",
  },
  {
    question: "What's the cost of an AI missed-call service?",
    answer:
      "AI automation starts from $199/month. The break-even point depends on your real call volume, job value, margin and close rate; no payback period is guaranteed.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most setups are live within 2-5 business days. We configure the call flow, integrate with your existing tools, and test before going live.",
  },
  {
    question: "What happens after I get my number?",
    answer:
      "If you submit your details, we&apos;ll be in touch within 24 hours with a free 15-minute audit. We&apos;ll show you what your specific missed-call leakage looks like, what the AI would say, and what the monthly cost would be. No obligation, no pressure.",
  },
  {
    question: "Can I use this if I'm not in Adelaide?",
    answer:
      "Yes — the missed-call math is the same anywhere. The AI text-back and receptionist services are configured for Australia-wide use, with Australian voices and Australian integrations. We currently serve clients across SA, VIC, NSW, and QLD.",
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

export default function LostLeadsCalculatorPage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/lost-leads-calculator" },
          { label: "Missed Call Calculator" },
        ]}
      />

      <section className="max-w-container mx-auto px-6 pt-2">
        <div className="panel-light p-6 md:p-8">
          <p className="text-body-mobile text-slate-700 md:text-body">
            Missed calls can represent commercial opportunities, but not every caller is a qualified lead and not every lead becomes a job. Use your own call volume, job value and estimated win rate to model a scenario, then compare it with real call logs and won work.
          </p>
        </div>
      </section>

      <LostLeadsCalculator />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What this calculator measures</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            The three sliders capture your missed calls, average job value and estimated share that would become jobs. The result is illustrative arithmetic. It is not measured lost revenue and it does not predict how much automation will recover.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Use call logs</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Count genuine unanswered new enquiries over a representative period. Exclude spam, suppliers and repeat calls about existing jobs.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Use won-job data</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Calculate the real average value and close rate of new phone enquiries. Use margin as well as revenue when assessing payback.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Measure after launch</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Record acknowledgements, qualified leads, booked work and revenue so the real result replaces the scenario assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The 3-step fix</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Step 1</p>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Add AI text-back</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Acknowledges the call, asks approved qualifying questions and sends a summary. Measure the real reply and booking rate. From $199/month.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Step 2</p>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Add AI receptionist</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Live AI answers every call. Books appointments, escalates emergencies, sends you a summary. From $199/month including text-back.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Step 3</p>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Add quote follow-up</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Send an approved follow-up sequence automatically, then compare quote acceptance with the pre-launch baseline. Included in the AI stack.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-6 py-3">
              See AI Automation Stack <span aria-hidden>→</span>
            </Link>
            <Link href="/missed-call-text-back-adelaide" className="btn-secondary px-6 py-3">
              See Text-Back Only <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
