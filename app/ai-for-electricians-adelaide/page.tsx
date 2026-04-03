import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Electricians Adelaide — Never Miss a Job Call",
  description:
    "Adelaide electricians on-site can't answer every call. Our AI captures missed calls, qualifies urgent faults, and sends you a summary. Book a free chat.",
  alternates: {
    canonical: "/ai-for-electricians-adelaide",
  },
};

export default function AIForElectriciansAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">AI for electricians Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI for Adelaide Electricians — Book Jobs While You&apos;re on the Tools
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Sparkies spend most of the day in safety-critical work: switchboards open, fault finding underway,
            compliance checks happening, power issues needing immediate focus. That means calls go unanswered. Every
            missed call to a sparkle is another job for your competitor. AI for electricians Adelaide fixes that by
            capturing every enquiry, triaging urgency, and giving you instant summaries.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-5">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What AI does for electricians specifically</h2>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">24/7 call capture</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            AI answers every call, captures the fault details, and sorts urgent jobs from standard quote requests.
            Instead of random voicemails, you get structured notes with who called, what the issue is, where it is, and
            how urgent it sounds.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">Urgent electrical fault flagging</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Fault calls are time-sensitive. Power outages, burning smells, sparking switches, or safety concerns need
            escalation now. AI can flag urgent fault language and trigger immediate alerts so you can prioritise high-risk jobs first.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">Quote follow-up automation</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Electrical quotes often go cold because everyone is busy. AI sends an automatic follow-up SMS 24 hours after
            quote delivery when no response comes in. That gentle follow-up wins back jobs that otherwise disappear.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">After-hours emergency capture</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            After-hours outages and emergency electrical issues are common. AI handles after-hours calls, captures details,
            and escalates true emergencies with immediate SMS notifications.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Solo electricians doing residential and commercial callouts.</li>
            <li>Small electrical teams balancing install work and fault response.</li>
            <li>Emergency sparkies handling after-hours outages and urgent repairs.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-5 text-h2-mobile text-slate-950 md:text-h2">How it works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Step 1", "Quick chat", "We map your call types, emergency rules, and booking process."],
              ["Step 2", "Configuration", "We set up AI scripts for urgent faults, quotes, and after-hours calls."],
              ["Step 3", "Go live", "You stay focused on electrical work while AI captures every lead."],
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
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Real-world electrician scenarios in Adelaide</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A residential sparky in Unley misses two calls during a switchboard upgrade. One is an urgent fault from a
            nearby rental. AI captures both, flags the urgent call, and sends the detail summary immediately. The urgent
            job is booked the same day instead of going to a competitor.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A commercial electrician in the CBD sends five quotes in one week. Normally only one or two close. With
            automated follow-up SMS and a clear callback prompt, two extra quotes convert. Same quality of work, better
            conversion from the pipeline already in motion.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Another Adelaide team uses after-hours AI call capture for power outage calls. Instead of waking the whole
            team for every enquiry, only urgent issues are escalated instantly. That means faster response for real
            emergencies and less burnout for everyone else.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-5">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Will it work with my existing number?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">Yes. We can keep your current number and layer the AI flow over your existing setup.</p>
          </div>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">What about emergency calls at 2am?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">AI identifies urgent faults and sends immediate SMS escalation so you can triage quickly.</p>
          </div>

          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Do I need to change anything about how I work?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">No. It runs in the background and supports your current process instead of replacing it.</p>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Related pages</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <Link href="/tradie-website-bundle" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              Tradie Website Bundle →
            </Link>
            <Link href="/ai-for-plumbers-adelaide" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              AI for Plumbers Adelaide →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to stop losing electrical jobs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-700 md:text-body">
            Book a free chat and we&apos;ll show you exactly how AI for electricians Adelaide can capture leads while you&apos;re on-site.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
