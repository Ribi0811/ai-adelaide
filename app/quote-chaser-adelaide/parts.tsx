"use client";

// Quote Chaser demo — an SMS thread that chases a quote by itself while the
// visitor watches. Messages mirror the homepage 12:30 scene (same approved
// copy) so the claim stays consistent site-wide. Plays once on scroll into
// view, replayable, reduced-motion shows the final state.
import { useEffect, useRef, useState } from "react";

const STAGES = 5; // 0=quote card, 1=nudge, 2=read, 3=reply, 4=accepted

export default function QuoteChase() {
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
    for (let s = 1; s < STAGES; s++) {
      timers.current.push(setTimeout(() => setStage(s), 700 + s * 1150));
    }
  }

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(STAGES - 1);
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
      className="relative overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_30px_80px_rgba(29,29,31,0.14)]"
    >
      {/* thread header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#FAFAFC] px-5 py-3.5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
          Quote #147 · sent last Thursday
        </span>
        <span className="rounded-full bg-black/[0.06] px-2.5 py-0.5 font-mono text-[11px] font-bold tabular-nums text-[#1D1D1F]">
          $2,300
        </span>
      </div>

      <div className="min-h-[330px] space-y-3 px-5 py-5">
        {/* quote sitting unanswered */}
        <div className="flex items-center gap-2 text-[12px] text-[#98989D]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8590C]" aria-hidden />
          No reply for 5 days — Quote Chaser steps in
        </div>

        {/* nudge */}
        <div
          className={`max-w-[85%] rounded-2xl rounded-tl-md bg-[#F5F5F7] p-3.5 transition-all duration-500 ${
            stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[13.5px] leading-relaxed text-[#1D1D1F]">
            Hi Sarah — just checking you got the quote for the bathroom reno.
            Happy to answer anything, or lock in a start date.
          </p>
          <p className="mt-1.5 font-mono text-[10px] text-[#98989D]">
            12:30 pm · sent automatically
          </p>
        </div>

        {/* read receipt */}
        <p
          className={`pl-1 font-mono text-[10px] text-[#0E8C74] transition-all duration-500 ${
            stage >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          ✓✓ read 12:41 pm
        </p>

        {/* customer reply */}
        <div
          className={`ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#0E8C74] p-3.5 text-white transition-all duration-500 ${
            stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[13.5px] leading-relaxed">
            Sorry, been flat out! Yes let&apos;s go ahead. When can you start?
          </p>
          <p className="mt-1.5 text-right font-mono text-[10px] text-white/60">
            12:47 pm
          </p>
        </div>

        {/* accepted */}
        <div
          className={`flex items-center gap-2.5 rounded-2xl border border-[#0E8C74]/25 bg-[#0E8C74]/[0.07] p-3.5 transition-all duration-500 ${
            stage >= 4 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">
            ✓
          </span>
          <p className="text-[13px] font-semibold leading-snug text-[#1D1D1F]">
            $2,300 accepted — while you were on the tools
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/[0.06] bg-[#FAFAFC] px-5 py-2.5">
        <span className="font-mono text-[11px] text-[#0E8C74]">
          ● {stage >= 4 ? "quote won" : "chasing…"}
        </span>
        <button
          type="button"
          onClick={play}
          className="rounded-full border border-black/10 px-3.5 py-1 font-mono text-[11px] text-[#6E6E73] transition hover:border-black/25 hover:text-[#1D1D1F]"
        >
          replay
        </button>
      </div>
    </div>
  );
}
