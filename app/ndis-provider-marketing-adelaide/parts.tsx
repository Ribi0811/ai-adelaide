"use client";

// Animated hero visual for the NDIS provider page: a calm "provider search"
// where skeleton listings settle in and one highlighted placeholder card —
// "Your NDIS service" (a placeholder, never a real business) — rises to the
// top. Wordless skeletons mean no invented provider content or claims. Plays
// once on scroll, replayable, reduced-motion shows the resolved state.
import { useEffect, useRef, useState } from "react";

const TEAL = "#0E8C74";

export default function FindYouDemo() {
  const [step, setStep] = useState(0); // 0 empty, 1-3 skeletons in, 4 you rise
  const rootRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  function play() {
    clear();
    setStep(0);
    [1, 2, 3, 4].forEach((s, i) =>
      timers.current.push(setTimeout(() => setStep(s), 500 + i * 700))
    );
  }
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(4);
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

  const youOnTop = step >= 4;

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_30px_80px_rgba(29,29,31,0.14)]"
    >
      {/* search bar */}
      <div className="border-b border-black/[0.06] bg-[#FAFAFC] px-5 py-4">
        <div className="flex items-center gap-3 rounded-full border border-black/[0.1] bg-white px-4 py-2.5">
          <span className="text-[15px] text-[#4285F4]" aria-hidden>⌕</span>
          <span className="text-[12.5px] italic text-[#6E6E73]">
            support coordinator near me
          </span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        {/* Your listing — rises to the top when step 4 */}
        <div
          className={`rounded-2xl border p-4 transition-all duration-700 ease-out ${
            youOnTop
              ? "order-first border-[#0E8C74] bg-[#0E8C74]/[0.06] shadow-[0_14px_36px_rgba(14,140,116,0.18)]"
              : "border-black/[0.06] bg-white"
          }`}
          style={{ transform: youOnTop ? "translateY(0)" : "translateY(6px)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold text-white"
              style={{ background: TEAL }}
            >
              Y
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-semibold tracking-tight text-[#1D1D1F]">
                Your NDIS service
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-[#6E6E73]">
                yourservice.com.au
              </p>
            </div>
            {youOnTop && (
              <span className="ml-auto rounded-full bg-[#0E8C74] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                Top result
              </span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden>
            {["Registered", "Enquiries open", "Servicing your area"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#0E8C74]/20 bg-white px-2.5 py-1 text-[10.5px] font-medium text-[#0E8C74]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Skeleton competitors fade in */}
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-black/[0.05] bg-[#FAFAFA] p-4 transition-all duration-500"
            style={{
              opacity: step >= s ? 1 : 0,
              transform: step >= s ? "translateY(0)" : "translateY(8px)",
            }}
            aria-hidden
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 rounded-xl bg-black/[0.06]" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-1/2 rounded bg-black/[0.08]" />
                <div className="h-2 w-2/3 rounded bg-black/[0.05]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-black/[0.06] bg-[#FAFAFC] px-5 py-2.5">
        <span className="font-mono text-[11px]" style={{ color: TEAL }}>
          ● {youOnTop ? "found first" : "searching…"}
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
