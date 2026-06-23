import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LostLeadsCalculator from "@/components/LostLeadsCalculator";

export const metadata: Metadata = {
  title: "Missed Call Calculator | How Much Are You Losing?",
  description:
    "Find out exactly how much revenue your Adelaide business is losing to missed calls. Enter two numbers, get your annual leakage figure instantly.",
  alternates: { canonical: "/lost-leads-calculator" },
};

const faqs = [
  {
    question: "How accurate is this calculator?",
    answer:
      "We use industry-standard benchmarks: 85% of callers who hit voicemail never ring back, and most Adelaide small businesses miss 3-5 calls per week. Your actual leakage will depend on your specific industry, call volume, and how quickly you call back. The calculator gives you a realistic estimate, not a precise number — the real figure is usually within 20-30% of the estimate.",
  },
  {
    question: "What's a realistic missed call rate?",
    answer:
      "Most Adelaide small businesses miss 3-5 calls per week per staff member who's on the tools or in appointments. A solo tradie might miss 8-12/week. A clinic with two practitioners might miss 15-25/week. The defaults in the calculator (8 calls/week) are a reasonable starting point — adjust to match your actual situation.",
  },
  {
    question: "What if I get most of my leads online instead of by phone?",
    answer:
      "If you get most of your leads via website forms, social media, or referrals, the missed-call figure is less critical. But phone enquiries convert 3-5x higher than form submissions, so even a small missed-call rate is hurting your revenue. Worth measuring both.",
  },
  {
    question: "How do I actually reduce missed calls?",
    answer:
      "Three practical steps: 1) AI missed-call text-back (responds in 5-20 seconds with your business name, asks qualifying questions), 2) AI receptionist (answers live calls when you can't), 3) Better call routing (forward after hours, send urgent calls to mobile, queue overflow during peak). Most Adelaide businesses start with text-back and add live AI answering when call volume justifies it.",
  },
  {
    question: "What's the cost of an AI missed-call service?",
    answer:
      "Missed-call text-back alone from $99/month. Full AI receptionist from $199/month. Both flat monthly, no per-call charges. Most Adelaide small businesses see ROI within the first 30 days.",
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
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            Most Adelaide small businesses lose thousands of dollars a year to missed calls — and never know it. The math is simple: every missed call is a potential job that went to voicemail, and 85% of those callers ring the next business on Google instead. This calculator uses industry-standard benchmarks to show you what your specific revenue leakage looks like. Two sliders, instant answer.
          </p>
        </div>
      </section>

      <LostLeadsCalculator />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What this calculator measures</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            The two sliders capture the only numbers that matter: how many calls you miss per week, and what each missed call is worth. The math is conservative — we use 85% as the &quot;never call back&quot; rate, which is the industry average. If your business has a higher repeat-customer rate, the actual leakage might be even worse (because lost leads don&apos;t come back).
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Tradie baseline</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                8-10 missed calls/week × $400-700 average job value = <strong className="text-slate-950">$140K-$360K/year</strong> in potential revenue walking out the door.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Allied health baseline</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                12-20 missed calls/week × $80-150 average appointment = <strong className="text-slate-950">$50K-$150K/year</strong> in lost bookings.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Professional services baseline</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                5-10 missed calls/week × $1,500-5,000 average engagement = <strong className="text-slate-950">$400K-$2.6M/year</strong> in lost client work.
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
                SMS in 5-20 seconds. Asks 2-3 qualifying questions. Sends you a clean summary. Recovers 60%+ of missed leads. From $99/month.
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
                Day 1 thank-you, Day 3 check-in, Day 7 final touch — all automatic. Lifts quote-to-job conversion by 35-50%. Included in the AI stack.
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