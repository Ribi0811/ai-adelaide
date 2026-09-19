"use client";

// The WOW for the SEO previews: a stylised search-results ladder where one
// teal result (yourbusiness.com.au — the site's established placeholder)
// climbs from #6 to #1 on scroll into view. Competitor rows are wordless
// skeleton bars, so the animation adds ZERO copy to the page. Self-contained
// per preview dir so deleting a preview never breaks another.
import { useEffect, useRef, useState } from "react";

const ROWS = 6;
const ROW_H = 58;
const TEAL = "#0E8C74";

export default function RankLadder() {
  const [pos, setPos] = useState(ROWS - 1); // start at #6 (index 5)
  const [done, setDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  function climb() {
    clear();
    setDone(false);
    setPos(ROWS - 1);
    for (let step = 1; step < ROWS; step++) {
      timers.current.push(
        setTimeout(() => {
          setPos(ROWS - 1 - step);
          if (ROWS - 1 - step === 0) {
            timers.current.push(setTimeout(() => setDone(true), 500));
          }
        }, 600 + step * 850)
      );
    }
  }

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos(0);
      setDone(true);
      played.current = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          io.disconnect();
          climb();
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

  // Skeleton rows occupy every slot except `pos`
  const skeletonSlots: number[] = [];
  for (let i = 0; i < ROWS; i++) if (i !== pos) skeletonSlots.push(i);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_30px_80px_rgba(29,29,31,0.14)]"
    >
      {/* search bar — wordless */}
      <div className="border-b border-black/[0.06] bg-[#FAFAFC] px-5 py-4">
        <div className="flex items-center gap-3 rounded-full border border-black/[0.1] bg-white px-4 py-2.5">
          <span className="text-[15px] text-[#4285F4]" aria-hidden>⌕</span>
          <span className="v3-shimmer h-2.5 w-40 rounded bg-black/[0.12]" aria-hidden />
        </div>
      </div>

      {/* the ladder */}
      <div className="relative mx-5 my-4" style={{ height: ROWS * ROW_H }} aria-hidden>
        {skeletonSlots.map((slot, i) => (
          <div
            key={`sk-${i}`}
            className="absolute inset-x-0 rounded-xl bg-[#FAFAFA] p-3.5 transition-all duration-700 ease-out"
            style={{ top: slot * ROW_H, height: ROW_H - 10 }}
          >
            <div className="h-2.5 w-2/3 rounded bg-black/[0.09]" />
            <div className="mt-2 h-2 w-5/6 rounded bg-black/[0.05]" />
          </div>
        ))}

        {/* your result */}
        <div
          className={`absolute inset-x-0 rounded-xl p-3.5 transition-all duration-700 ease-out ${
            done
              ? "bg-[#0E8C74]/[0.08] ring-2 ring-[#0E8C74] shadow-[0_12px_32px_rgba(14,140,116,0.25)]"
              : "bg-[#0E8C74]/[0.06] ring-1 ring-[#0E8C74]/40"
          }`}
          style={{ top: pos * ROW_H, height: ROW_H - 10 }}
        >
          <div className="flex items-center gap-2">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white"
              style={{ background: TEAL }}
            >
              Y
            </span>
            <span className="font-mono text-[11px] text-[#6E6E73]">yourbusiness.com.au</span>
            <span
              className={`ml-auto rounded-full px-2 py-0.5 font-mono text-[10px] font-bold tabular-nums transition-all duration-300 ${
                done ? "scale-110 bg-[#0E8C74] text-white" : "bg-black/[0.06] text-[#6E6E73]"
              }`}
            >
              #{pos + 1}
            </span>
          </div>
          <div className="mt-2 h-2.5 w-3/4 rounded" style={{ background: "rgba(14,140,116,0.35)" }} />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/[0.06] bg-[#FAFAFC] px-5 py-2.5">
        <span className="font-mono text-[11px]" style={{ color: TEAL }}>
          ● {done ? "#1" : `#${pos + 1}`}
        </span>
        <button
          type="button"
          onClick={climb}
          className="rounded-full border border-black/10 px-3.5 py-1 font-mono text-[11px] text-[#6E6E73] transition hover:border-black/25 hover:text-[#1D1D1F]"
        >
          replay
        </button>
      </div>
    </div>
  );
}
