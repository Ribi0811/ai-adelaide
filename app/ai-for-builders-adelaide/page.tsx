import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Builders Adelaide — Capture Every Lead",
  description:
    "Adelaide builders on-site can't manage every lead. AI captures enquiries, follows up quotes automatically, and never lets a renovation lead go cold.",
  alternates: {
    canonical: "/ai-for-builders-adelaide",
  },
};

export default function AIForBuildersAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">AI for builders Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI for Adelaide Builders — Manage Leads While You&apos;re on the Build
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Builders live inside long sales cycles. One renovation enquiry can become a $20K, $80K, or even $200K
            project. But site visits, supplier calls, and project management mean inbound leads often hit voicemail.
            Without consistent follow-up, high-value quotes go cold and opportunities vanish. AI for builders Adelaide
            keeps your lead pipeline moving while you stay focused on delivery.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-5">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What AI solves for builders</h2>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">Lead capture during site visits</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            When you&apos;re on the build, you can&apos;t stop to handle every incoming enquiry. AI captures calls and web leads,
            logs project type and location, then sends you a summary so nothing slips through.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">Quote follow-up automation (highest ROI)</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Quote follow-up is where most builders leak revenue. AI sends timely SMS follow-ups after quote delivery so
            leads don&apos;t go cold. For builders, that one automation often drives the biggest immediate return because
            recovering a single project can pay for months of service.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">After-hours renovation enquiry capture</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Homeowners usually research and enquire after hours. AI handles those calls and messages, captures scope
            details, and keeps your pipeline full even when your office is closed.
          </p>

          <h3 className="text-h3-mobile text-slate-950 md:text-h3">Consistent nurturing over long timelines</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Builder projects take time to decide. AI keeps leads warm with consistent check-ins, so your business stays
            top-of-mind when they&apos;re ready to proceed.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Custom home builders managing multiple active projects.</li>
            <li>Renovation builders handling high-value quote pipelines.</li>
            <li>Small building firms wanting enterprise-level follow-up without hiring extra admin.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-5 text-h2-mobile text-slate-950 md:text-h2">How it works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Step 1", "Free strategy chat", "We map your current lead flow, quote process, and key drop-off points."],
              ["Step 2", "We configure your AI workflow", "Call capture, lead qualification, and quote follow-up are set up around your process."],
              ["Step 3", "You build, AI nurtures", "You stay on-site while enquiries are captured and followed up automatically."],
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
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Builder-specific examples in Adelaide</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A renovation builder in Norwood receives five enquiries over a weekend. Normally, those leads would sit
            until Monday and cool off. AI captures each call, confirms key details, and sends a clean list ready for
            follow-up first thing Monday. Result: faster response and more booked site visits.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A custom-home builder in the eastern suburbs sends high-value quotes ($60K+ scope) that often go quiet.
            Automated follow-up pulls stalled conversations back into motion and gives the client an easy reply path.
            Recovering just one additional project has major revenue impact.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Another small team uses after-hours capture for homeowner renovation enquiries. Instead of losing evening
            leads to larger competitors, they wake up with fully captured intent signals and a priority queue for
            callback. It keeps the pipeline healthy without adding admin headcount.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8 space-y-4">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>
          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Will it work with my existing number?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">Yes. We can connect AI to your current phone setup so your brand and number stay unchanged.</p>
          </div>
          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">What about urgent calls after-hours?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">Urgent enquiries can be flagged and escalated immediately via SMS, while non-urgent enquiries are queued cleanly.</p>
          </div>
          <div>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">Do I need to change how my business works?</h3>
            <p className="mt-2 text-body-mobile text-slate-700 md:text-body">No. The AI layer runs in the background and supports your existing process.</p>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to capture more renovation and build leads?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-700 md:text-body">
            Book a free chat and we&apos;ll map how AI for builders Adelaide can stop leads and quotes from going cold.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4">
            Book Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
