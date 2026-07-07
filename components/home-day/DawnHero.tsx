"use client";

// 6:02 AM — dawn. The premise lands in one line, then the day begins.
// The weekday is the visitor's actual weekday — it's THEIR day.
import Link from "next/link";
import useToday from "./useToday";

export default function DawnHero() {
  const { weekday } = useToday();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF1E3] via-[#FBF3EA] to-[#F6F7F4] px-6 pb-24 pt-36 md:pb-32 md:pt-48">
      {/* rising sun glow — animates up + brightens on load */}
      <div
        className="v4-sunrise pointer-events-none absolute left-1/2 top-[440px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#F5B96E]/[0.35] blur-[110px] md:top-[380px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.14em] text-[#B4763B]">
          6:02 AM · {weekday} · ADELAIDE
        </p>

        <h1 className="v3-rise mx-auto mt-6 max-w-3xl text-[46px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1D1D1F] [animation-delay:.12s] [text-wrap:balance] md:text-[84px]">
          Your Adelaide business.
          <br />
          <span className="bg-gradient-to-r from-[#B4520E] via-[#D97706] to-[#B4520E] bg-clip-text text-transparent">
            Open 24 hours.
          </span>
        </h1>

        <p className="v3-rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-xl">
          Website design that wins work, local SEO that gets you found on
          Google, and AI automation that never sleeps — from $699, no
          lock-in. Scroll through one day with it running.
        </p>

        <div className="v3-rise mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:.36s]">
          <Link
            href="/contact#send-message"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-8 py-4 text-[17px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(20,20,19,0.3)]"
          >
            Get a fixed quote
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <span className="font-mono text-[12px] tracking-[0.08em] text-[#9A8A76]">
            OR SCROLL — THE DAY STARTS NOW ↓
          </span>
        </div>
      </div>
    </section>
  );
}
