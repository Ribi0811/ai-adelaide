import Link from "next/link";

const services = [
  "Missed Call Recovery",
  "Review Requests / Follow-up",
  "Booking Prep / Appointment Reminders",
  "After-Hours Answering",
  "Quote Follow-up",
  "Lead Routing",
];

function TickerRow() {
  return (
    <div className="services-ticker-track flex min-w-max items-center gap-3 pr-3">
      {services.map((service, index) => (
        <div
          key={`${service}-${index}`}
          className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>{service}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesTicker() {
  return (
    <section className="section-shell bg-[#edf4f8] py-4 md:py-5">
      <div className="max-w-container mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 backdrop-blur-sm md:px-5">
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Built for the jobs that leak revenue first
            </p>
            <Link href="/services" className="text-sm font-medium text-slate-700 underline underline-offset-4">
              View all services
            </Link>
          </div>

          <div className="services-ticker-mask flex gap-3">
            <TickerRow />
            <TickerRow />
          </div>
        </div>
      </div>
    </section>
  );
}
