import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Office Worker Adelaide | Automate Email, Documents, and Admin",
  description:
    "AI Office Worker setup for Adelaide SMBs. We automate inbox triage, document sorting, admin follow-ups, and recurring office workflows without replacing your team.",
  alternates: {
    canonical: "/ai-office-worker-adelaide",
  },
};

export default function AIOfficeWorkerAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Office Worker</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Office Worker Setup for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Your team doesn&apos;t need another dashboard. It needs less admin chaos.
            We set up an AI office worker that handles repetitive email, document,
            and follow-up tasks so your staff can focus on clients, delivery, and
            revenue.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Who this is for
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
            <li>Accounting and bookkeeping firms</li>
            <li>Law offices and conveyancing teams</li>
            <li>Real estate and property management offices</li>
            <li>Allied health clinics and private practices</li>
            <li>Small service businesses with busy inboxes and messy admin handoffs</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What an AI Office Worker can automate first
          </h2>

          <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Inbox triage and routing</h3>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Incoming emails are sorted by urgency and type, then routed to the right
            person with context. No more "who handles this?" ping-pong.
          </p>

          <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Document intake and filing</h3>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Invoices, statements, PDFs, and forms are automatically named, categorised,
            and filed in the right folder structure.
          </p>

          <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Follow-up reminders</h3>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            The AI tracks outstanding tasks and sends reminders so approvals, payments,
            and client responses don&apos;t slip through the cracks.
          </p>

          <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Meeting summaries and action items</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Meeting notes are converted into clear action lists with owners and due
            dates, then pushed to your team workflow.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            How we implement it
          </h2>
          <ol className="list-decimal space-y-3 pl-6 text-body-mobile text-slate-700 md:text-body">
            <li>
              <strong>Workflow audit:</strong> We map where admin time is being lost.
            </li>
            <li>
              <strong>Priority build:</strong> We automate the highest-impact workflow first.
            </li>
            <li>
              <strong>Team rollout:</strong> We train your team and tune the workflow in live use.
            </li>
            <li>
              <strong>Ongoing support:</strong> We improve it as your business evolves.
            </li>
          </ol>
          <p className="mt-4 text-body-mobile text-slate-700 md:text-body">
            We can run this in your environment (preferred for sensitive data) or host it
            for you, depending on your compliance requirements.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Want to see what this looks like in your office?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Start with a quick audit and we&apos;ll show exactly which office workflows to
            automate first.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/audit" className="btn-primary px-8 py-4">
              Start AI Audit <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Call <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
