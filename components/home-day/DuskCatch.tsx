"use client";

// 7:42 PM — dusk. The missed call, caught, compressed into one cinematic
// beat. Auto-plays on scroll into view.
import { useEffect, useRef, useState } from "react";
import TimeStamp from "./TimeStamp";
import useToday from "./useToday";

export default function DuskCatch() {
  const { phoneDate } = useToday();
  const [stage, setStage] = useState(0); // 1 ring · 2 missed · 3 sms · 4 booked
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
          setStage(4);
          return;
        }
        setTimeout(() => setStage(1), 300);
        setTimeout(() => setStage(2), 1800);
        setTimeout(() => setStage(3), 2800);
        setTimeout(() => setStage(4), 4300);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section data-nav-dark className="relative overflow-hidden bg-gradient-to-b from-[#F3DDC2] via-[#453A55] to-[#232032] px-6 py-24 text-white md:py-32">
      <TimeStamp label="7:42" tone="dark" />
      <div ref={ref} className="relative mx-auto grid max-w-container items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#D8B4E2]">
            7:42 PM · YOU&apos;RE AT DINNER
          </p>
          <h2 className="mt-4 max-w-md text-[34px] font-bold leading-[1.06] tracking-[-0.02em] md:text-[48px]">
            The call you didn&apos;t hear didn&apos;t get away.
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/60">
            Eight seconds after the ring-out, your AI texts them back. By
            dessert, tomorrow&apos;s 9am is booked. Hear it yourself —{" "}
            <a href="tel:+61871009788" className="font-semibold text-[#5EF2D6] hover:opacity-80">
              call (08) 7100 9788
            </a>
            , our AI answers right now.
          </p>
        </div>

        {/* the phone itself — bezel, notch, lock screen */}
        <div className="mx-auto w-full max-w-[320px]">
          <div className="rounded-[44px] border border-white/10 bg-black p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="relative min-h-[480px] overflow-hidden rounded-[34px] bg-gradient-to-b from-[#2A2438] to-[#151222] px-4 pb-6 pt-12">
              <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden />
              <p className="text-center font-mono text-[12px] text-white/45">{phoneDate}</p>
              <p className="mt-0.5 text-center text-[52px] font-semibold leading-none tracking-tight text-white/90">
                7:42
              </p>
              <div className="mt-6 space-y-3">
          <div
            className={`rounded-2xl bg-white/10 p-4 backdrop-blur transition-all duration-500 ${stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-full text-[16px] ${stage >= 2 ? "bg-[#E8590C]/25 text-[#FF8A5C]" : "bg-[#34C759]/25 text-[#34C759]"}`}>
                {stage >= 2 ? "✕" : "☏"}
              </span>
              <div>
                <p className="text-[14px] font-semibold">{stage >= 2 ? "Missed call" : "Incoming call…"}</p>
                <p className="text-[12px] text-white/50">0421 ··· ··· · rang out at dinner</p>
              </div>
              {stage === 1 && (
                <span className="relative ml-auto flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#34C759] opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#34C759]" />
                </span>
              )}
            </div>
          </div>

          <div
            className={`ml-10 rounded-2xl rounded-br-md bg-[#0E8C74] p-4 transition-all duration-500 ${stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <p className="text-[13px] leading-snug text-white">
              G&apos;day! Sorry we missed your call — is this urgent? I can
              book you in for first thing tomorrow.
            </p>
            <p className="mt-1 text-right text-[10px] text-white/60">7:42 pm · 8 seconds later</p>
          </div>

          <div
            className={`rounded-2xl border border-[#34C759]/30 bg-[#34C759]/10 p-4 transition-all duration-500 ${stage >= 4 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <p className="text-[14px] font-semibold text-[#5EF2D6]">✓ Booked — 9:00 am tomorrow</p>
            <p className="mt-0.5 text-[12px] text-white/55">
              Job details in your inbox. You found out over dessert.
            </p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
