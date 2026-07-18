"use client";

// Interactive/animated layer for the AI automation preview. All copy visible
// here is either verbatim from the live page or pure UI chrome (numerals,
// phone-mockup labels) that adds no marketing claim. Every animation is
// scroll-triggered, plays once, and respects prefers-reduced-motion.
import { useEffect, useRef, useState } from "react";

const TEAL = "#0E8C74";

/* ---------- shared: run-once-on-scroll hook ---------- */
function useInView(threshold = 0.4) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

function useCountUp(target: number, run: boolean, ms = 1400) {
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

/* ============================================================= */
/*  HERO: missed call → AI text-back → booked (phone mockup)     */
/* ============================================================= */
export function MissedCallDemo() {
  const [stage, setStage] = useState(0); // 0 ring, 1 sms, 2 reply, 3 booked
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  function play() {
    clear();
    setStage(0);
    [1, 2, 3].forEach((s, i) =>
      timers.current.push(setTimeout(() => setStage(s), 900 + i * 1300))
    );
  }
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(3);
      played.current = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          io.disconnect();
          play();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-[300px]">
      {/* phone */}
      <div className="relative rounded-[44px] bg-[#1D1D1F] p-3 shadow-[0_30px_80px_rgba(29,29,31,0.35)]">
        <span className="absolute left-1/2 top-2 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden />
        <div className="relative min-h-[440px] overflow-hidden rounded-[34px] bg-gradient-to-b from-[#0C1120] to-[#1D1D1F] px-4 pb-4 pt-9">
          {/* incoming call banner */}
          <div
            className={`flex items-center gap-3 rounded-2xl bg-white/[0.08] p-3.5 transition-all duration-500 ${
              stage === 0 ? "opacity-100" : "opacity-40"
            }`}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#E8590C]/20 text-[#FF6B35]">
              {stage === 0 && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8590C]/40" aria-hidden />
              )}
              <span className="relative text-[15px]">☏</span>
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] text-white/50">Missed call</p>
              <p className="truncate text-[13px] font-semibold text-white">
                0421 ··· ···
              </p>
            </div>
            <span className="ml-auto font-mono text-[10px] text-white/40">now</span>
          </div>

          {/* AI SMS out */}
          <div
            className={`mt-3 max-w-[80%] rounded-2xl rounded-tl-md bg-white/[0.1] p-3 transition-all duration-500 ${
              stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <p className="text-[12.5px] leading-relaxed text-white">
              G&apos;day! Sorry we missed your call — is this urgent? I can book
              you in for first thing tomorrow.
            </p>
            <p className="mt-1.5 font-mono text-[9px] text-[#5EF2D6]">
              sent by AI · 8 seconds later
            </p>
          </div>

          {/* customer reply */}
          <div
            className={`mt-2.5 ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-[#0E8C74] p-3 transition-all duration-500 ${
              stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <p className="text-[12.5px] leading-relaxed text-white">
              Yes please — hot water&apos;s gone. Tomorrow AM works.
            </p>
          </div>

          {/* booked */}
          <div
            className={`mt-3 flex items-center gap-2.5 rounded-2xl border border-[#5EF2D6]/30 bg-[#5EF2D6]/[0.08] p-3 transition-all duration-500 ${
              stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">
              ✓
            </span>
            <p className="text-[12px] font-semibold leading-snug text-white">
              Booked — 9:00 am tomorrow. Details in your inbox.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="font-mono text-[11px]" style={{ color: TEAL }}>
          ● {stage >= 3 ? "lead saved" : "answering…"}
        </span>
        <button
          type="button"
          onClick={play}
          className="rounded-full border border-black/10 px-3 py-0.5 font-mono text-[11px] text-[#6E6E73] transition hover:border-black/25 hover:text-[#1D1D1F]"
        >
          replay
        </button>
      </div>
    </div>
  );
}

/* ============================================================= */
/*  SAVINGS: three count-up stat cards ($2,800 / $1,400 / $800)  */
/* ============================================================= */
export function SavingsCounters({
  items,
}: {
  items: { label: string; value: number; prefix?: string; body: string }[];
}) {
  const { ref, seen } = useInView(0.35);
  return (
    <div ref={ref} className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <StatCard key={it.label} {...it} run={seen} delay={i * 120} />
      ))}
    </div>
  );
}

function StatCard({
  label,
  value,
  prefix = "$",
  body,
  run,
  delay,
}: {
  label: string;
  value: number;
  prefix?: string;
  body: string;
  run: boolean;
  delay: number;
}) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!run) return;
    const t = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(t);
  }, [run, delay]);
  const n = useCountUp(value, start);
  return (
    <div className="rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">
        {label}
      </p>
      <p className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.02em] tabular-nums text-[#1D1D1F]">
        {prefix}
        {n.toLocaleString()}
        <span className="text-[15px] font-normal text-[#98989D]">/mo</span>
      </p>
      <p className="mt-3 text-[13.5px] leading-relaxed text-[#6E6E73]">{body}</p>
    </div>
  );
}

/* ============================================================= */
/*  QUOTE CHASE mini (reused shape from quote-chaser page)       */
/* ============================================================= */
export function QuoteChaseMini() {
  const [stage, setStage] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  function play() {
    clear();
    setStage(0);
    [1, 2, 3].forEach((s, i) =>
      timers.current.push(setTimeout(() => setStage(s), 800 + i * 1200))
    );
  }
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(3);
      played.current = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          io.disconnect();
          play();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_20px_50px_rgba(29,29,31,0.1)]"
    >
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#FAFAFC] px-4 py-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
          Quote #147
        </span>
        <span className="rounded-full bg-black/[0.06] px-2 py-0.5 font-mono text-[10px] font-bold text-[#1D1D1F]">
          $2,300
        </span>
      </div>
      <div className="min-h-[190px] space-y-2.5 p-4">
        <div
          className={`max-w-[86%] rounded-2xl rounded-tl-md bg-[#F5F5F7] p-3 transition-all duration-500 ${
            stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[12.5px] leading-relaxed text-[#1D1D1F]">
            Hi Sarah — just checking you got the quote for the bathroom reno.
          </p>
          <p className="mt-1 font-mono text-[9px] text-[#98989D]">
            Day 3 · sent automatically
          </p>
        </div>
        <div
          className={`ml-auto max-w-[86%] rounded-2xl rounded-tr-md bg-[#0E8C74] p-3 transition-all duration-500 ${
            stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[12.5px] leading-relaxed text-white">
            Yes let&apos;s go ahead. When can you start?
          </p>
        </div>
        <div
          className={`flex items-center gap-2 rounded-2xl border border-[#0E8C74]/25 bg-[#0E8C74]/[0.07] p-3 transition-all duration-500 ${
            stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[11px] font-bold text-white">
            ✓
          </span>
          <p className="text-[12px] font-semibold text-[#1D1D1F]">
            $2,300 accepted
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================= */
/*  AI RECEPTIONIST: answered call w/ live waveform + transcript */
/* ============================================================= */
export function ReceptionistDemo() {
  const [stage, setStage] = useState(0); // 0 ringing, 1 answered, 2 caller, 3 ai, 4 booked
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  function play() {
    clear();
    setStage(0);
    [1, 2, 3, 4].forEach((s, i) =>
      timers.current.push(setTimeout(() => setStage(s), 700 + i * 1250))
    );
  }
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(4);
      played.current = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          io.disconnect();
          play();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const live = stage >= 1 && stage < 4;
  const bars = [0.5, 0.9, 0.4, 1, 0.6, 0.85, 0.35, 0.7, 0.5, 0.95, 0.45, 0.75];

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-[24px] bg-[#1D1D1F] p-7 text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]"
    >
      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-[#5EF2D6]/[0.12] blur-[70px]" aria-hidden />
      {/* status row */}
      <div className="relative flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E8C74]/25 text-[16px] text-[#5EF2D6]">☏</span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            {stage === 0 ? "Incoming call" : stage >= 4 ? "Call complete" : "AI answering · live"}
          </p>
          <p className="text-[14px] font-semibold text-white">0448 ··· ···</p>
        </div>
        <span className="ml-auto font-mono text-[10px] text-white/40">
          {stage >= 4 ? "0:42" : "live"}
        </span>
      </div>

      {/* waveform */}
      <div className="relative mt-6 flex h-12 items-end justify-center gap-1.5" aria-hidden>
        {bars.map((h, i) => (
          <span
            key={i}
            className={live ? "v4-eq-bar" : ""}
            style={{
              width: 4,
              height: `${h * 100}%`,
              background: live ? "#5EF2D6" : "rgba(255,255,255,0.15)",
              borderRadius: 2,
              animationDelay: `${i * 0.08}s`,
              transform: live ? undefined : "scaleY(0.25)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      {/* transcript */}
      <div className="relative mt-6 space-y-2.5">
        <div className={`max-w-[85%] rounded-2xl rounded-tl-md bg-white/[0.08] p-3 transition-all duration-500 ${stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
          <p className="font-mono text-[9px] uppercase tracking-wide text-white/40">Caller</p>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-white">
            Hi, do you have anything Thursday for a service?
          </p>
        </div>
        <div className={`ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#0E8C74] p-3 transition-all duration-500 ${stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
          <p className="font-mono text-[9px] uppercase tracking-wide text-white/60">AI receptionist</p>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-white">
            Absolutely — I&apos;ve got 9am or 1pm Thursday. Which suits?
          </p>
        </div>
      </div>

      <div className={`relative mt-3 flex items-center gap-2.5 rounded-2xl border border-[#5EF2D6]/30 bg-[#5EF2D6]/[0.08] p-3 transition-all duration-500 ${stage >= 4 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">✓</span>
        <p className="text-[12px] font-semibold leading-snug text-white">
          Appointment booked — 9:00 am Thursday · added to your calendar
        </p>
      </div>

      <div className="relative mt-5 flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#5EF2D6]">
          ● {stage >= 4 ? "booked while you worked" : "answering…"}
        </span>
        <button
          type="button"
          onClick={play}
          className="rounded-full border border-white/15 px-3 py-0.5 font-mono text-[11px] text-white/60 transition hover:border-white/35 hover:text-white"
        >
          replay
        </button>
      </div>
    </div>
  );
}

/* ============================================================= */
/*  REMINDER mini: no-show 20% → 7% ring                         */
/* ============================================================= */
export function NoShowRing() {
  const { ref, seen } = useInView(0.5);
  const pct = useCountUp(7, seen, 1200);
  const dash = 2 * Math.PI * 42;
  return (
    <div
      ref={ref}
      className="flex h-full flex-col items-center justify-center rounded-[20px] border border-black/[0.06] bg-white p-6 text-center shadow-[0_20px_50px_rgba(29,29,31,0.08)]"
    >
      <div className="relative h-[120px] w-[120px]">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#0E8C74"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={seen ? dash * (1 - 0.93) : dash}
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[28px] font-semibold tabular-nums text-[#1D1D1F]">
            {pct}%
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#98989D]">
            no-shows
          </span>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[#6E6E73]">
        Down from <span className="font-semibold text-[#1D1D1F]">20%</span> with
        auto-SMS reminders
      </p>
    </div>
  );
}
