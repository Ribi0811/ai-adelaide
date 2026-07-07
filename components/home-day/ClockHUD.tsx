"use client";

// The scroll clock: fixed HUD that maps scroll progress through the day
// container onto a 24-hour clock, 6:00 AM → 6:00 AM. The page IS the day;
// this is its instrument panel.
import { useEffect, useState } from "react";

const PHASES: { until: number; label: string; dot: string }[] = [
  { until: 0.14, label: "DAWN", dot: "#F2B279" },
  { until: 0.42, label: "DAY", dot: "#F5CE47" },
  { until: 0.56, label: "GOLDEN HOUR", dot: "#EE9A4D" },
  { until: 0.74, label: "DUSK", dot: "#8B7BB4" },
  { until: 0.93, label: "NIGHT", dot: "#9DB8E8" },
  { until: 1.01, label: "NEW DAWN", dot: "#F2B279" },
];

export default function ClockHUD() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = document.getElementById("day-wrapper");
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const minutes = (6 * 60 + p * 24 * 60) % (24 * 60);
  const h24 = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const ampm = h24 < 12 ? "AM" : "PM";
  const phase = PHASES.find((x) => p <= x.until) ?? PHASES[PHASES.length - 1];

  return (
    <div
      className="fixed right-4 top-24 z-40 flex items-center gap-2.5 rounded-full border border-black/10 bg-white/70 py-1.5 pl-3 pr-4 shadow-sm backdrop-blur-xl md:right-8"
      aria-hidden
    >
      <span
        className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
        style={{ background: phase.dot }}
      />
      <span className="font-mono text-[13px] font-semibold tabular-nums text-[#1D1D1F]">
        {h12}:{String(m).padStart(2, "0")} {ampm}
      </span>
      <span className="hidden font-mono text-[10px] tracking-[0.14em] text-[#86868B] sm:block">
        {phase.label}
      </span>
    </div>
  );
}
