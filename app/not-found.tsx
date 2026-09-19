import Link from "next/link";

// 404 — on-brand "missed connection" moment (handoff Q10 "404 delight").
// A lost page is literally a missed lead, which is the exact problem we sell
// against — so the 404 answers the phone. New copy is fine here: 404s are
// never indexed and carry no ranking equity.
const quickLinks = [
  { href: "/website-design-adelaide", label: "Website design" },
  { href: "/website-pricing", label: "Pricing" },
  { href: "/seo", label: "SEO services" },
  { href: "/ai-automation-adelaide", label: "AI automation" },
  { href: "/blog", label: "Blog" },
  { href: "/locations", label: "Adelaide suburbs" },
];

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-[#FBFBFD] px-6 pb-24 pt-36 md:pb-32 md:pt-48">
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-container text-center">
        {/* The missed call */}
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
          <span className="relative flex h-2.5 w-2.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8590C] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E8590C]" />
          </span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
            Missed connection
          </span>
        </div>

        <p
          className="v3-rise mt-8 font-mono text-[96px] font-semibold leading-none tracking-[-0.04em] text-[#1D1D1F] md:text-[160px]"
          aria-hidden
        >
          4<span className="text-[#0E8C74]">0</span>4
        </p>

        <h1 className="v3-rise mx-auto mt-6 max-w-2xl text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#1D1D1F] [animation-delay:.12s] [text-wrap:balance] md:text-[44px]">
          This page missed your visit.
        </h1>
        <p className="v3-rise mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
          Ironic — we&apos;re the people who make sure Adelaide businesses
          never miss a lead. The page you&apos;re after has moved or never
          existed, but unlike a missed call, this one&apos;s easy to recover:
        </p>

        <div className="v3-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:.36s]">
          <Link
            href="/"
            data-track="notfound_home"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
          >
            Back to the homepage
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="tel:+61871009788"
            data-track="tel_notfound"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 font-mono text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
          >
            (08) 7100 9788 — our AI answers
          </a>
        </div>

        <div className="v3-rise mx-auto mt-12 max-w-2xl [animation-delay:.48s]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#98989D]">
            Or jump straight to
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-[14px] font-medium text-[#424245] transition-all hover:-translate-y-0.5 hover:border-[#0E8C74] hover:text-[#0E8C74]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
