"use client";

// 8:15 AM — someone searches. The query types itself, results land, and
// yours is first. SEO explained in four seconds, no jargon.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TimeStamp from "./TimeStamp";

const QUERY = "emergency plumber norwood";

export default function MorningSearch() {
  const [chars, setChars] = useState(0);
  const [stage, setStage] = useState(0); // 1 results · 2 highlight
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
          setChars(QUERY.length);
          setStage(2);
          return;
        }
        let i = 0;
        const t = setInterval(() => {
          i += 1;
          setChars(i);
          if (i >= QUERY.length) {
            clearInterval(t);
            setTimeout(() => setStage(1), 350);
            setTimeout(() => setStage(2), 1100);
          }
        }, 55);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F7F4] to-[#F1F7FB] px-6 py-24 md:py-32">
      <TimeStamp label="8:15" />
      <div className="relative mx-auto grid max-w-container items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#3A7CA5]">
            8:15 AM · SOMEONE&apos;S SINK JUST BURST
          </p>
          <h2 className="mt-4 max-w-md text-[34px] font-bold leading-[1.06] tracking-[-0.02em] text-[#1D1D1F] md:text-[48px]">
            They searched. You were the first answer.
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#6E6E73]">
            Suburb pages, reviews, Google Business Profile — our local SEO
            puts you where the panic-Googling happens.{" "}
            <Link href="/seo" className="font-semibold text-[#0E8C74] hover:opacity-70">
              Local SEO from $399/mo ›
            </Link>
          </p>
        </div>

        <div ref={ref} className="rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_20px_60px_rgba(29,29,31,0.1)]">
          <div className="flex items-center gap-3 rounded-full border border-black/[0.1] px-4 py-2.5">
            <span className="text-[15px] text-[#4285F4]" aria-hidden>⌕</span>
            <span className="min-h-[20px] text-[14px] text-[#1D1D1F]">
              {QUERY.slice(0, chars)}
              <span className={`ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-[#4285F4] ${chars < QUERY.length ? "animate-pulse" : "opacity-0"}`} />
            </span>
          </div>
          <div className="mt-4 space-y-2.5">
            <div
              className={`rounded-xl p-3.5 transition-all duration-500 ${stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} ${stage >= 2 ? "bg-[#0E8C74]/[0.08] ring-1 ring-[#0E8C74]/30" : "bg-[#FAFAFA]"}`}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E8C74] text-[9px] font-bold text-white">Y</span>
                <span className="font-mono text-[11px] text-[#6E6E73]">yourbusiness.com.au</span>
                <span
                  className={`ml-auto rounded-full bg-[#0E8C74] px-2.5 py-0.5 text-[10px] font-bold text-white transition-all duration-300 ${stage >= 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                >
                  #1 — that&apos;s you
                </span>
              </div>
              <p className="mt-1.5 text-[14px] font-semibold text-[#1a0dab]">
                Emergency Plumber Norwood — Fixed Quotes, Same-Day
              </p>
              <p className="text-[12px] text-[#6E6E73]">
                ★★★★★ 4.9 · Servicing Norwood &amp; inner east · Open now
              </p>
            </div>
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
                className={`rounded-xl bg-[#FAFAFA] p-3.5 transition-all duration-500 ${stage >= 1 ? "translate-y-0 opacity-60" : "translate-y-2 opacity-0"}`}
              >
                <div className="h-2.5 w-40 rounded bg-black/[0.1]" />
                <div className="mt-2 h-2 w-56 rounded bg-black/[0.06]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
