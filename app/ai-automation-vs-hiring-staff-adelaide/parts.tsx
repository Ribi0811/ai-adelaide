"use client";

// CostRace — animated visual for figures ALREADY on this page (part-time
// receptionist real cost $38,000-$48,000/yr vs AI automation $2,388-$4,788/yr).
// Pure presentation of existing verified content; adds no new claims.
import { useEffect, useRef, useState } from "react";

const HUMAN = 38000; // page's low-end "total real cost"
const AI = 2388; // page's $199/mo × 12

function useCountUp(target: number, run: boolean, ms = 1800) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) {
      setV(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return v;
}

export default function CostRace() {
  const [run, setRun] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const human = useCountUp(HUMAN, run && !reduced);
  const ai = useCountUp(AI, run && !reduced, 1400);
  const humanShown = reduced ? HUMAN : human;
  const aiShown = reduced ? AI : ai;

  return (
    <div ref={rootRef} className="grid gap-5 md:grid-cols-2">
      {/* Human */}
      <div className="relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-8 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
          Part-time receptionist
        </p>
        <p className="mt-4 text-[44px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-[#1D1D1F] md:text-[56px]">
          ${humanShown.toLocaleString()}
          <span className="text-[18px] font-normal text-[#98989D]">+/yr</span>
        </p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/[0.06]" aria-hidden>
          <div
            className="h-2 rounded-full bg-[#E8590C] transition-[width] duration-[1800ms] ease-out"
            style={{ width: run || reduced ? "100%" : "0%" }}
          />
        </div>
        <p className="mt-4 text-[13.5px] leading-relaxed text-[#6E6E73]">
          9–5, Mon–Fri · sick days you still pay for · one call at a time
        </p>
      </div>

      {/* AI */}
      <div className="relative overflow-hidden rounded-[24px] bg-[#1D1D1F] p-8 text-white shadow-[0_24px_60px_rgba(29,29,31,0.3)]">
        <div
          className="pointer-events-none absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full bg-[#5EF2D6]/[0.14] blur-[60px]"
          aria-hidden
        />
        <p className="relative font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
          AI automation
        </p>
        <p className="relative mt-4 text-[44px] font-semibold leading-none tracking-[-0.03em] tabular-nums md:text-[56px]">
          ${aiShown.toLocaleString()}
          <span className="text-[18px] font-normal text-white/40">/yr</span>
        </p>
        <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden>
          <div
            className="h-2 rounded-full bg-[#5EF2D6] transition-[width] duration-[1400ms] ease-out"
            style={{ width: run || reduced ? "6.3%" : "0%" }}
          />
        </div>
        <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/60">
          24/7, 365 days · never sick · unlimited simultaneous calls
        </p>
      </div>
    </div>
  );
}
