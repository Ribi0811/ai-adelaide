import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Plumbers Adelaide — Stop Missing Jobs",
  description:
    "Adelaide plumbers miss 3-5 calls a week. Our AI answers every call, qualifies the job, and sends you a summary. Never lose a job to voicemail again.",
  alternates: {
    canonical: "/ai-for-plumbers-adelaide",
  },
};

export default function AIForPlumbersAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">AI for plumbers Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Tools for Adelaide Plumbers — Answer Every Call, Book More Jobs
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
            If you&apos;re on a job in Prospect, under a house in Norwood, or driving between callouts in Glenelg,
            you can&apos;t answer every phone call. That&apos;s normal. But the cost is brutal: a missed emergency plumbing
            call in Adelaide is often worth $400-800, and most plumbing businesses are missing 3-5 of those chances
            every week. The caller doesn&apos;t wait. They ring the next plumber.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-5">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What AI does for Adelaide plumbers</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            This isn&apos;t generic software. It&apos;s a practical AI system configured around how plumbing businesses actually
            run: urgent jobs, quote work, after-hours calls, and limited time.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">1) 24/7 call capture</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            AI answers every call, asks the right questions, and qualifies the lead as urgent or quote-based. You get a
            clean summary by SMS so you can decide fast. No more voicemail black hole. No more wondering who called and
            what they needed.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">2) Quote follow-up automation</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            You send a quote, then get busy and forget to chase it. AI sends a follow-up SMS 24 hours later if there&apos;s
            no response. That one simple step brings cold quotes back to life and lifts conversion without extra admin.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">3) After-hours booking capture</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Most people search and call after work. AI captures those enquiries after-hours, logs details, and sends
            your team everything first thing in the morning (or immediately for urgent jobs). You wake up to warm leads,
            not missed opportunities.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Who this is for</h2>
          <ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
            <li><strong>Solo plumbers</strong> who are on the tools all day and can&apos;t be receptionist + technician.</li>
            <li><strong>Small plumbing crews</strong> juggling multiple sites, quotes, and callouts.</li>
            <li><strong>Emergency plumbers</strong> who need urgent jobs flagged instantly, even at 2am.</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            If your phone regularly rings while your hands are literally in a leak, AI for plumbers Adelaide is built for
            your reality.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How it works (3 simple steps)</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Step 1", "Book a quick chat", "We map your current call flow, missed-call pain points, and quote process."],
              ["Step 2", "We configure your AI", "We set up scripts, urgency rules, and follow-up messages around your business."],
              ["Step 3", "You stop missing jobs", "Calls are captured automatically while you stay focused on plumbing work."],
            ].map(([step, title, copy]) => (
              <article key={step} className="panel-light-soft p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{step}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-5">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Will it work with my existing number?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">
              Yes. In most setups you keep your current business number. We route and configure the AI so your customer
              experience stays consistent.
            </p>
          </div>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">What about emergency calls at 2am?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">
              AI flags urgency and sends you an immediate SMS with the key details so you can triage fast.
            </p>
          </div>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Do I need to change anything about how I work?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">
              No. It runs in the background. You keep doing the work; the AI handles the call capture and follow-up layer.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Useful next steps</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <Link href="/tradie-website-bundle" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              Explore the Tradie Website Bundle →
            </Link>
            <Link href="/missed-call-service" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              See the Missed Call Service →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to book more plumbing jobs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-700 md:text-body">
            Book a free chat and we&apos;ll show you exactly how AI for plumbers Adelaide can stop missed calls from leaking revenue.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
