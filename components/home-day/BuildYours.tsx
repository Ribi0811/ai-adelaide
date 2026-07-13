"use client";

// 5:31 PM — the graft from v2: type your business name, watch your website
// get built inside the day's golden hour. Uses the shared MockSite engine.
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MockSite, {
  BASE,
  KIND_LABELS,
  STEPS,
  slugify,
  type PhotoKey,
  type Trade,
} from "@/components/home-v3/MockSite";
import TimeStamp from "./TimeStamp";
import { track } from "@/lib/track";

export default function BuildYours() {
  const [data, setData] = useState<Trade>({
    ...BASE.plumber,
    domain: "yourbusiness.com.au",
    biz: "Your Plumbing Co",
  });
  const [isCustom, setIsCustom] = useState(false);
  const [bizName, setBizName] = useState("");
  const [kind, setKind] = useState<PhotoKey>("plumber");
  const [chars, setChars] = useState(0);
  const [step, setStep] = useState<number>(STEPS.type);
  const reduce = useRef(false);
  const played = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    intervals.current.forEach(clearInterval);
    timers.current = [];
    intervals.current = [];
  };

  const run = useCallback((d: Trade) => {
    clear();
    setData(d);
    setChars(0);
    setStep(STEPS.type);
    if (reduce.current) {
      setChars(d.headline.length);
      setStep(STEPS.done);
      return;
    }
    let i = 0;
    const typing = setInterval(() => {
      i += 1;
      setChars(i);
      if (i >= d.headline.length) {
        clearInterval(typing);
        timers.current.push(setTimeout(() => setStep(STEPS.sub), 250));
        timers.current.push(setTimeout(() => setStep(STEPS.blocks), 700));
        timers.current.push(setTimeout(() => setStep(STEPS.rank), 1600));
        timers.current.push(setTimeout(() => setStep(STEPS.sms), 3200));
        timers.current.push(setTimeout(() => setStep(STEPS.done), 4000));
      }
    }, 52);
    intervals.current.push(typing);
  }, []);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          io.disconnect();
          run({ ...BASE.plumber, domain: "yourbusiness.com.au", biz: "Your Plumbing Co" });
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, [run]);

  function buildMine(e: React.FormEvent) {
    e.preventDefault();
    const name = bizName.trim() || "Your Business";
    track("preview_website", { trade: kind });
    setIsCustom(true);
    run({ ...BASE[kind], domain: slugify(name), biz: name });
  }

  // T2: carry the visitor's business name + service into the contact form.
  const closerHref = `/contact?business=${encodeURIComponent(data.biz)}&service=website#send-message`;

  return (
    <section className="relative overflow-hidden bg-[#F3DDC2] px-6 py-24 md:py-32">
      <TimeStamp label="5:31" />
      <div ref={rootRef} className="relative mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#A0642E]">
            5:31 PM · WHILE THE UTE&apos;S STILL WARM
          </p>
          <h2 className="mt-4 text-[34px] font-bold leading-[1.06] tracking-[-0.02em] text-[#1D1D1F] [text-wrap:balance] md:text-[48px]">
            Watch yours get built. Right now.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-[#7A6A55]">
            Type your business name — a 10-second preview of the real thing.
            The finished website is custom-designed and live in 48 hours.
          </p>
        </div>

        <form
          onSubmit={buildMine}
          className="mx-auto mt-9 flex max-w-2xl flex-col items-stretch gap-2 rounded-[22px] border border-[#1D1D1F]/10 bg-white/75 p-2 shadow-[0_12px_40px_rgba(122,90,40,0.15)] backdrop-blur-xl sm:flex-row sm:rounded-full"
        >
          <input
            type="text"
            value={bizName}
            onChange={(e) => setBizName(e.target.value)}
            placeholder="Your business name"
            maxLength={28}
            aria-label="Your business name"
            className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-[15px] text-[#1D1D1F] placeholder-[#9A8A76] outline-none"
          />
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as PhotoKey)}
            aria-label="Your trade or industry"
            className="rounded-full bg-[#1D1D1F]/[0.05] px-4 py-3 text-[15px] font-medium text-[#1D1D1F] outline-none"
          >
            {(Object.keys(BASE) as PhotoKey[]).map((k) => (
              <option key={k} value={k}>
                {KIND_LABELS[k]}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-full bg-[#1D1D1F] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:brightness-125 active:scale-[0.98]"
          >
            Preview my website →
          </button>
        </form>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            className="pointer-events-none absolute -inset-x-8 bottom-[-30px] top-1/3 rounded-[48px] bg-[#F5B96E]/[0.4] blur-[70px]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-white text-left shadow-[0_30px_90px_rgba(90,60,20,0.25)]">
            <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-[#FAFAFC] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 flex items-center gap-1.5 rounded-md bg-black/[0.04] px-3 py-0.5 font-mono text-[11px] text-[#6E6E73]">
                <span className="text-[9px]" aria-hidden>🔒</span>
                {data.domain}
              </span>
              <span
                className={`ml-auto rounded-full bg-[#0E8C74] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white transition-opacity duration-300 ${step >= STEPS.rank ? "opacity-100" : "opacity-0"}`}
              >
                Google-ready
              </span>
            </div>
            <MockSite d={data} step={step} chars={chars} />
          </div>

          <div
            className={`text-center transition-all duration-500 ${isCustom && step >= STEPS.done ? "mt-7 translate-y-0 opacity-100" : "pointer-events-none mt-2 translate-y-2 opacity-0"}`}
            aria-hidden={!(isCustom && step >= STEPS.done)}
          >
            <Link
              href={closerHref}
              onClick={() => track("personal_closer_click", { trade: kind })}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_12px_32px_rgba(14,140,116,0.4)] transition-all hover:-translate-y-0.5"
            >
              Want this live by next week? Get a quote for {data.biz}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <p className="mt-3 text-[13px] text-[#9A8A76]">
              Free draft, fixed quote, no obligation — mention {data.biz} in the form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
