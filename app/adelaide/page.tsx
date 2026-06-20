import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services in Adelaide",
  description:
    "AI Automation Services in Adelaide for local businesses and tradies. We help capture missed leads, automate follow-up, and streamline operations.",
  alternates: { canonical: "/adelaide" },
};

const suburbs = [
  "Adelaide CBD","Norwood","Unley","Prospect","Glenelg","Mawson Lakes","Modbury","Tea Tree Gully","Burnside","Campbelltown","Mitcham","Goodwood","Henley Beach","Semaphore","Port Adelaide","Morphett Vale","Seaford","Marion","Brighton","Mount Barker",
];

export default function AdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">Adelaide local service page</span>
          <h1 className="mt-4 text-h1-mobile text-slate-950 md:text-h1">AI Automation Services in Adelaide</h1>
          <p className="mt-5 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            We help Adelaide small businesses and tradies automate the work that leaks revenue: missed calls, delayed quote follow-up, booking confirmations, and repetitive admin.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Built for Adelaide operators</h2>
          <p className="mt-4 text-body-mobile text-slate-700 md:text-body">
            From single-operator tradies to growing local teams, we design automation around real workflows, not generic templates.
            Popular use-cases include AI receptionist coverage, missed-call text back, reminder sequences, and lead routing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/ai-receptionist-adelaide" className="underline">AI Receptionist Adelaide</Link>
            <Link href="/missed-call-text-back-adelaide" className="underline">Missed Call Text Back</Link>
            <Link href="/services" className="underline">All Services</Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Suburbs we serve</h2>
          <ul className="mt-5 grid gap-2 text-slate-700 md:grid-cols-3">
            {suburbs.map((s) => <li key={s}>• {s}</li>)}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Ready to automate your Adelaide business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700">Get a practical roadmap and clear ROI targets for your first automation sprint.</p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex px-8 py-4" >Book Free Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
