"use client";

// Interactive layer for the pricing preview — the WOW: pricing you can play
// with. Pick a tier, toggle add-ons, watch a live receipt assemble itself.
// Every tier/add-on name, feature and price is passed in VERBATIM from the
// page's data (which mirrors the live page). Only receipt chrome ("One-off",
// "Monthly") is new. Spotlight hover + count-up + shimmer are pure CSS/JS.
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type Tier = {
  name: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  notIncluded: string[];
  bestFor: string;
  cta: string;
  popular: boolean;
};

export type Addon = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

const INK = "#1D1D1F";
const TEAL = "#0E8C74";

const money = (s: string) => Number(s.replace(/[^0-9]/g, ""));

function useCountUp(target: number, run: boolean, ms = 700) {
  const [v, setV] = useState(run ? 0 : target);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const from = v;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setV(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, run]);
  return v;
}

/* Cursor-tracking spotlight wrapper */
function Spotlight({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="group/spot relative h-full [--mx:50%] [--my:50%]"
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(340px circle at var(--mx) var(--my), ${
            dark ? "rgba(94,242,214,0.14)" : "rgba(14,140,116,0.09)"
          }, transparent 65%)`,
        }}
      />
    </div>
  );
}

export default function PricingLab({ tiers, addons, addonsHeading }: { tiers: Tier[]; addons: Addon[]; addonsHeading?: React.ReactNode }) {
  const [tierIdx, setTierIdx] = useState(1); // Business preselected
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tier = tiers[tierIdx];
  const monthly = useMemo(
    () => addons.filter((a) => picked.has(a.name)).reduce((s, a) => s + money(a.price), 0),
    [picked, addons]
  );
  const oneOff = money(tier.price);
  const oneOffAnim = useCountUp(oneOff, inView, 500);
  const monthlyAnim = useCountUp(monthly, inView, 500);

  function toggle(name: string) {
    setPicked((p) => {
      const n = new Set(p);
      if (n.has(name)) n.delete(name);
      else n.add(name);
      return n;
    });
  }

  return (
    <div ref={rootRef} className="grid items-start gap-6 lg:grid-cols-[1.7fr_1fr]">
      <div>
        {/* Tier cards — selectable */}
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => {
            const selected = i === tierIdx;
            const dark = t.popular;
            return (
              <Spotlight key={t.name} dark={dark}>
                <button
                  type="button"
                  onClick={() => setTierIdx(i)}
                  aria-pressed={selected}
                  data-track={`pricing_tier_${t.name.toLowerCase()}`}
                  className={`relative flex h-full w-full flex-col rounded-[28px] p-7 text-left transition-all duration-300 ${
                    dark
                      ? "v3-shimmer-border bg-[#1D1D1F] text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]"
                      : "border bg-white text-[#1D1D1F] shadow-[0_2px_12px_rgba(29,29,31,0.05)]"
                  } ${
                    selected
                      ? dark
                        ? "-translate-y-1"
                        : "-translate-y-1 border-[#0E8C74] shadow-[0_20px_50px_rgba(14,140,116,0.18)]"
                      : dark
                        ? ""
                        : "border-black/[0.06] hover:-translate-y-0.5"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[#0E8C74] px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      Most Popular
                    </span>
                  )}
                  <span
                    className={`absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full border text-[12px] font-bold transition-all duration-300 ${
                      selected
                        ? "border-[#0E8C74] bg-[#0E8C74] text-white"
                        : dark
                          ? "border-white/25 text-transparent"
                          : "border-black/15 text-transparent"
                    }`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-tight">{t.name}</h3>
                  <p className={`mt-0.5 text-[12px] font-semibold ${dark ? "text-white/50" : "text-[#98989D]"}`}>
                    {t.tagline}
                  </p>
                  <p className="mt-5 text-[38px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
                    {t.price}
                  </p>
                  <p className={`mt-3.5 text-[13.5px] leading-relaxed ${dark ? "text-white/65" : "text-[#6E6E73]"}`}>
                    {t.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-[13px] ${dark ? "text-white/80" : "text-[#424245]"}`}>
                        <span className="mt-[2px] font-semibold" style={{ color: dark ? "#5EF2D6" : TEAL }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {t.notIncluded.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-[13px] ${dark ? "text-white/30" : "text-[#B4B4B9]"}`}>
                        <span className="mt-[2px]">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-5 border-t pt-4 ${dark ? "border-white/10" : "border-black/[0.06]"}`}>
                    <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/40" : "text-[#98989D]"}`}>
                      Best for
                    </p>
                    <p className={`mt-1 text-[12.5px] ${dark ? "text-white/65" : "text-[#6E6E73]"}`}>{t.bestFor}</p>
                  </div>
                </button>
              </Spotlight>
            );
          })}
        </div>

        {/* Add-on toggles */}
        {addonsHeading}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {addons.map((a) => {
            const on = picked.has(a.name);
            return (
              <Spotlight key={a.name}>
                <button
                  type="button"
                  onClick={() => toggle(a.name)}
                  aria-pressed={on}
                  data-track="pricing_addon_toggle"
                  className={`flex h-full w-full flex-col rounded-[24px] border p-6 text-left transition-all duration-300 ${
                    on
                      ? "-translate-y-0.5 border-[#0E8C74] bg-[#0E8C74]/[0.05] shadow-[0_16px_40px_rgba(14,140,116,0.15)]"
                      : "border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.05)] hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[16px] font-semibold tracking-tight" style={{ color: INK }}>
                      {a.name}
                    </h4>
                    <span className="flex items-center gap-2.5">
                      <span className="text-[17px] font-semibold tracking-tight" style={{ color: TEAL }}>
                        {a.price}
                      </span>
                      <span
                        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${on ? "bg-[#0E8C74]" : "bg-black/[0.12]"}`}
                        aria-hidden
                      >
                        <span
                          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${on ? "left-[22px]" : "left-0.5"}`}
                        />
                      </span>
                    </span>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#6E6E73]">{a.description}</p>
                  <ul className={`grid gap-1.5 overflow-hidden transition-all duration-500 ${on ? "mt-4 max-h-64 opacity-100" : "mt-0 max-h-0 opacity-0"}`}>
                    {a.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-[#424245]">
                        <span className="mt-[2px] font-semibold" style={{ color: TEAL }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              </Spotlight>
            );
          })}
        </div>
      </div>

      {/* The receipt — assembles itself as you play */}
      <div className="lg:sticky lg:top-24">
        <div className="relative overflow-hidden rounded-[24px] bg-[#1D1D1F] p-7 text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]">
          <div
            className="pointer-events-none absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full bg-[#5EF2D6]/[0.12] blur-[60px]"
            aria-hidden
          />
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EF2D6]">
            AI Adelaide · {tier.name}
          </p>
          <div className="mt-5 space-y-3 border-b border-white/10 pb-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[14px] text-white/80">{tier.name}</span>
              <span className="font-mono text-[14px] tabular-nums text-white">{tier.price}</span>
            </div>
            {addons.filter((a) => picked.has(a.name)).map((a) => (
              <div key={a.name} className="flex items-baseline justify-between gap-3 v3-pop">
                <span className="text-[13px] text-white/60">{a.name}</span>
                <span className="font-mono text-[13px] tabular-nums text-white/80">{a.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">One-off</span>
            <span className="text-[30px] font-semibold tabular-nums tracking-tight">${oneOffAnim.toLocaleString()}</span>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Monthly</span>
            <span className={`text-[20px] font-semibold tabular-nums tracking-tight transition-colors ${monthly > 0 ? "text-[#5EF2D6]" : "text-white/30"}`}>
              ${monthlyAnim.toLocaleString()}
              <span className="ml-1 text-[12px] font-normal text-white/40">/mo</span>
            </span>
          </div>
          <p className="mt-4 text-[11.5px] leading-relaxed text-white/40">
            No lock-in contracts. You own your site. Upgrade whenever you&apos;re ready.
          </p>
          <Link
            href={`/contact?service=website&plan=${tier.name.toLowerCase()}${
              picked.size > 0
                ? `&addons=${encodeURIComponent(Array.from(picked).join("|"))}`
                : ""
            }#send-message`}
            data-track="pricing_builder_quote"
            className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]"
          >
            {tier.cta}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
