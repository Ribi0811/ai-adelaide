import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Receptionist vs Virtual Receptionist Adelaide",
  description:
    "Compare AI receptionist vs virtual receptionist for Adelaide businesses on cost, coverage, setup speed, scalability, and after-hours support.",
  alternates: {
    canonical: "/ai-receptionist-vs-virtual-receptionist",
  },
};

const rows = [
  {
    label: "Monthly cost",
    ai: "From $199/mo",
    virtual: "$400-$1,500+/mo",
  },
  {
    label: "Coverage",
    ai: "24/7, weekends, public holidays",
    virtual: "Usually business hours or rostered shifts",
  },
  {
    label: "Calls at once",
    ai: "Unlimited simultaneous calls",
    virtual: "One human at a time",
  },
  {
    label: "Speed to answer",
    ai: "Instant",
    virtual: "Queue, hold music, or call-backs",
  },
  {
    label: "Setup time",
    ai: "2-5 business days",
    virtual: "Days to weeks",
  },
  {
    label: "Emergency handling",
    ai: "Can escalate instantly by SMS or call-forward",
    virtual: "Depends on staffing and process",
  },
  {
    label: "Lead capture",
    ai: "Books, qualifies, and sends a summary automatically",
    virtual: "Usually takes a message, then hands off",
  },
  {
    label: "Consistency",
    ai: "Same script, same quality every time",
    virtual: "Varies by person, shift, and workload",
  },
  {
    label: "Scaling",
    ai: "Handles spikes without extra headcount",
    virtual: "Needs more staff or overtime",
  },
  {
    label: "Ideal use case",
    ai: "Businesses that need every call answered without payroll bloat",
    virtual: "Businesses that want human-only answering and can absorb the cost",
  },
];

const scenarios = [
  {
    title: "Tradie getting called while on a job",
    ai: "The AI answers, gets the caller's details, checks whether it's urgent, and either books the job or escalates immediately. No missed work order while you're under a sink or on a roof.",
    virtual:
      "A human receptionist can do it too, but only if someone is available right then. Outside rostered hours, the caller may wait or go elsewhere.",
  },
  {
    title: "Clinic rescheduling a patient after hours",
    ai: "The AI can offer the next available slots, send a confirmation, and log the reschedule before the clinic even opens.",
    virtual:
      "A human receptionist can take the message, but the booking often waits until the next business day unless the call lands during staffed hours.",
  },
  {
    title: "Cafe or restaurant booking on a Sunday",
    ai: "The AI captures the booking, notes dietary requirements, and sends the confirmation straight away. Weekend demand gets captured while the team is flat out.",
    virtual:
      "A human receptionist can handle it if they're rostered. If not, you miss the booking or it goes to voicemail.",
  },
  {
    title: "Emergency call outside office hours",
    ai: "The AI can identify the urgency and escalate to the owner or on-call person instantly.",
    virtual:
      "If the service isn't staffed after hours, the call gets deferred — which is fine for some businesses, deadly for others.",
  },
];

const faqItems = [
  {
    question: "Is an AI receptionist the same as a virtual receptionist?",
    answer:
      "For buyers, the outcome is the same: the phone gets answered, the lead gets captured, and you don't lose work to voicemail. The difference is the engine behind it. A virtual receptionist is usually a human service. An AI receptionist does the same job through automation, which is why it scales better and costs less.",
  },
  {
    question: "Which is cheaper: AI receptionist or virtual receptionist?",
    answer:
      "AI, by a mile. A human virtual receptionist can cost $400-$1,500+ per month depending on coverage and minutes. Our AI receptionist starts from $199/month and covers 24/7 without adding payroll, sick days, or extra headcount.",
  },
  {
    question: "Will callers know it's AI?",
    answer:
      "Usually not. The voice is natural, the timing is normal, and the script is tailored to your business. Most callers just hear a helpful receptionist who knows the basics and gets the job done.",
  },
  {
    question: "Can AI receptionist transfer urgent calls to a human?",
    answer:
      "Yes. You define the rules. If the caller says it's urgent, the system can forward the call to your mobile or send an immediate SMS so you can jump on it fast.",
  },
  {
    question: "What happens after hours?",
    answer:
      "After hours is where AI shines. It answers every time, asks the right questions, and books or escalates without making the caller wait until the next business day.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most setups are live in 2-5 business days. We define the call flow, connect your calendar or CRM, test a few calls, and then go live.",
  },
  {
    question: "Can a virtual receptionist still be useful?",
    answer:
      "Absolutely. If you specifically want a human voice and you only need limited coverage, a human virtual receptionist can make sense. But if you want the lowest cost, fastest setup, and 24/7 coverage, AI usually wins.",
  },
  {
    question: "What if I already have a receptionist?",
    answer:
      "Then AI is even more useful. It can cover overflow, lunch breaks, after-hours, and the simple FAQs that eat up your front desk's time. Human staff do better when they don't have to answer every repetitive call.",
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

export default function ComparisonPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Receptionist vs Virtual Receptionist" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Comparison Guide</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Receptionist vs Virtual Receptionist: Which One Actually Works Better for Adelaide Businesses?
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            The search term people use is usually virtual receptionist. The thing they actually want is every call answered, leads captured, and no payroll drama. So the real question is simple: do you want a human-only answering service, or do you want a system that answers 24/7, scales instantly, and costs less?
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Best for cost</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">AI Receptionist</p>
              <p className="mt-1 text-sm text-slate-600">From $199/mo, no extra headcount.</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Best for coverage</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">AI Receptionist</p>
              <p className="mt-1 text-sm text-slate-600">Answers every call 24/7.</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Best for human touch</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Virtual Receptionist</p>
              <p className="mt-1 text-sm text-slate-600">Useful if you only need limited human coverage.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/virtual-receptionist-adelaide" className="btn-primary px-8 py-4">
              See Virtual Receptionist Page <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-8 py-4">
              See AI Cost Breakdown <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The comparison table that actually matters</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            Most comparison pages waffle. This is the short version: if you need a receptionist because calls are leaking revenue, AI gives you more coverage for less money. If you need a human voice for a narrow window and you're happy paying for a roster, virtual receptionist can still work. The table below is where the real differences show up.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Category</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">AI Receptionist</th>
                  <th className="py-2 font-semibold text-slate-950">Virtual Receptionist</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 align-top">
                    <td className="py-3 pr-4 font-semibold text-slate-950">{row.label}</td>
                    <td className="py-3 pr-4">{row.ai}</td>
                    <td className="py-3">{row.virtual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Where AI wins, and where a human receptionist still makes sense</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">AI wins when the phone keeps ringing</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                If you miss calls because your team is on-site, in appointments, driving between jobs, or already on another call, AI is the practical answer. It doesn't get tired, it doesn't need a lunch break, and it doesn't cost more when you have a busy week.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Virtual receptionist wins when you want a human-only desk</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                If your brand absolutely needs a human every time and you're happy to pay for that labour, a virtual receptionist can still be the right fit. It's just rarely the cheapest or most scalable fit for Adelaide small businesses.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">AI wins on after-hours coverage</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                After hours is where most leads are lost. AI answers every time the call comes in — late night, weekends, public holidays. That means fewer voicemails and fewer missed opportunities.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Human wins on niche exceptions</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Some businesses have very specific, complex call handling where a trained human is still useful. The key is knowing that you're paying more for that nuance — and making sure the value is real, not just traditional habit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Adelaide scenarios where the difference is obvious</h2>
          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{scenario.title}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">AI receptionist</p>
                    <p className="text-body-mobile text-slate-700 md:text-body">{scenario.ai}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">Virtual receptionist</p>
                    <p className="text-body-mobile text-slate-700 md:text-body">{scenario.virtual}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The cost of delay is the bit most people ignore</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Here's the blunt version: every missed call is a tiny leak. One leak doesn't matter. Twenty a week absolutely does. If your average job value is $350 and you recover even 20% more calls, the numbers move fast.
          </p>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Example: 15 missed calls a week at a conservative $350 average job value is $5,250 in weekly opportunity. If the AI receptionist helps you win just a fraction of those back, the service pays for itself very quickly. That's why so many Adelaide tradies and service businesses start with the AI option even if they were originally shopping for a virtual receptionist.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The question is not "Can I afford AI?" The real question is "Can I afford to keep losing leads to voicemail or slow callbacks?" That's the part that hurts.
          </p>
        </div>
      </section>

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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">If you want every call answered, AI is usually the move</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Want the human-only option? We can still point you to the right setup. But if you want the lowest cost, fastest setup, and the least amount of lost leads, the AI receptionist is the one that wins most often.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/virtual-receptionist-adelaide" className="btn-primary px-8 py-4">
              Go to Virtual Receptionist Page <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-8 py-4">
              See Pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
