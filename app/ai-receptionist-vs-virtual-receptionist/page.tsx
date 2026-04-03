import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Receptionist vs Virtual Receptionist | Adelaide Comparison",
  description:
    "Compare AI receptionist vs virtual receptionist for Adelaide businesses on cost, coverage, setup speed, and scalability.",
  alternates: { canonical: "/ai-receptionist-vs-virtual-receptionist" },
};

const rows = [
  { label: "Cost", ai: "From ~$99/month", virtual: "$1,500-$4,000+/month" },
  { label: "Hours", ai: "24/7 coverage", virtual: "Usually business hours" },
  { label: "Response speed", ai: "Instant, every time", virtual: "Queue and staffing dependent" },
  { label: "Setup", ai: "Days", virtual: "Weeks (hiring + training)" },
  { label: "Scalability", ai: "Scales with call volume", virtual: "Needs more staff/headcount" },
];

export default function ComparisonPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <h1 className="text-h1-mobile text-slate-950 md:text-h1">AI Receptionist vs Virtual Receptionist: Which is Right for Your Adelaide Business?</h1>
          <p className="mt-5 max-w-3xl text-slate-700">Both options improve call handling. But for tradies and service businesses needing 24/7 coverage without payroll overhead, AI wins on speed, cost, and consistency.</p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light overflow-x-auto p-6 md:p-8">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="py-2 pr-4">Category</th><th className="py-2 pr-4">AI Receptionist</th><th className="py-2">Virtual Receptionist</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-slate-100 align-top">
                  <td className="py-3 pr-4 font-semibold">{r.label}</td>
                  <td className="py-3 pr-4">{r.ai}</td>
                  <td className="py-3">{r.virtual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Conclusion</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700">For Adelaide tradies needing low-cost 24/7 responsiveness, AI receptionist systems deliver stronger ROI and faster implementation than traditional virtual reception models.</p>
          <Link href="/ai-receptionist-adelaide" className="btn-primary mt-8 inline-flex px-8 py-4">Try AI Receptionist <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
