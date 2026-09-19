"use client";

// 11:58 PM — the stars are out, you're asleep, the receipt keeps printing.
// Staggered "while you slept" ledger under a CSS starfield.
import { useEffect, useRef, useState } from "react";
import TimeStamp from "./TimeStamp";

const LEDGER = [
  { t: "11:58 PM", text: "Booking request — leaking tap, Prospect", amt: "job saved" },
  { t: "2:14 AM", text: "Quote request captured from website form", amt: "$1,140 est." },
  { t: "6:00 AM", text: "★★★★★ review collected from yesterday's job", amt: "reputation" },
];

export default function NightSleep() {
  const [rows, setRows] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || played.current) return;
        played.current = true;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setRows(LEDGER.length);
          return;
        }
        LEDGER.forEach((_, i) => setTimeout(() => setRows(i + 1), 600 + i * 900));
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section data-nav-dark className="relative overflow-hidden bg-gradient-to-b from-[#232032] via-[#0C1120] to-[#0C1120] px-6 py-28 text-white md:py-36">
      {/* starfield + the occasional shooting star */}
      <div className="v3-stars pointer-events-none absolute inset-0" aria-hidden />
      <div className="v3-stars-2 pointer-events-none absolute inset-0" aria-hidden />
      <span className="v4-shooting pointer-events-none absolute left-[12%] top-[18%]" aria-hidden />
      <span className="v4-shooting pointer-events-none absolute left-[58%] top-[10%] [animation-delay:4.5s]" aria-hidden />
      <TimeStamp label="11:58" tone="dark" />

      <div ref={ref} className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#8FA8D8]">
          11:58 PM · YOU&apos;RE ASLEEP
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-[34px] font-bold leading-[1.06] tracking-[-0.02em] [text-wrap:balance] md:text-[52px]">
          The best part of the day happens while you miss it.
        </h2>

        <div className="mx-auto mt-12 max-w-lg overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] text-left backdrop-blur">
          <p className="border-b border-white/10 px-6 py-3.5 font-mono text-[11px] tracking-[0.14em] text-white/40">
            WHILE YOU SLEPT
          </p>
          {LEDGER.map((r, i) => (
            <div
              key={r.t}
              className={`flex items-center justify-between gap-4 px-6 py-4 transition-all duration-500 ${i < rows ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
            >
              <div>
                <p className="font-mono text-[11px] text-[#8FA8D8]">{r.t}</p>
                <p className="mt-0.5 text-[14px] text-white/85">{r.text}</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#5EF2D6]/10 px-3 py-1 text-[11px] font-semibold text-[#5EF2D6]">
                {r.amt}
              </span>
            </div>
          ))}
          <div
            className={`border-t border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-700 ${rows >= LEDGER.length ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-[13px] text-white/50">
              None of this needed you awake. That&apos;s the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
