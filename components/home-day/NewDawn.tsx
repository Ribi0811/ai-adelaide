// 6:01 AM, next day — the loop closes on a fuller calendar. Price + close.
import Link from "next/link";
import { PRICING } from "@/lib/constants";
import Reveal from "@/components/home-v3/Reveal";

export default function NewDawn() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0C1120] via-[#3D3A50] to-[#FDF1E3] px-6 pb-28 pt-24 md:pb-36 md:pt-32">
      <div
        className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F5B96E]/[0.45] blur-[110px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#E8C9A0]">
            6:01 AM · WEDNESDAY
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-white [text-wrap:balance] md:text-[56px]">
            The sun comes up on a fuller calendar.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">
            One booked job pays for the whole system. Everything after that is
            the reason you bought it.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { name: "Website design", price: `from ${PRICING.website.from}`, sub: "one-off, you own it", href: "/website-design-adelaide" },
              { name: "Local SEO", price: `from ${PRICING.seo.from}`, sub: "no lock-in", href: "/seo" },
              { name: "AI automation", price: `from ${PRICING.automation.from}`, sub: "on in 2–5 days", href: "/ai-automation-adelaide" },
            ].map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className="group rounded-2xl border border-white/25 bg-white/85 px-5 py-4 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <p className="text-[13px] font-semibold text-[#6E6E73]">{t.name}</p>
                <p className="mt-0.5 text-[20px] font-bold tracking-tight text-[#1D1D1F]">
                  {t.price}
                </p>
                <p className="text-[11px] text-[#98989D]">
                  {t.sub} <span className="text-[#0E8C74] opacity-0 transition-opacity group-hover:opacity-100">›</span>
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact#send-message"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-9 py-4 text-[17px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(20,20,19,0.35)]"
            >
              Start your first day
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="tel:+61871009788"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#1D1D1F]/25 bg-white/60 px-9 py-4 text-[17px] font-semibold text-[#1D1D1F] backdrop-blur transition hover:bg-white/90"
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#0E8C74] opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#0E8C74]" />
              </span>
              (08) 7100 9788
            </a>
          </div>
          <p className="mt-7 text-[13px] text-[#7A6A55]">
            A human replies within 2 business hours · No lock-in · Adelaide owned
          </p>
        </Reveal>
      </div>
    </section>
  );
}
