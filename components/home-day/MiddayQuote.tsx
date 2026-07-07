// 12:30 PM — you're on the tools; the quote chases itself. Golden-hour strip
// at 5PM closes the working day with the photo filmstrip. Server component,
// CSS-only motion.
import Link from "next/link";
import Reveal from "@/components/home-v3/Reveal";
import TimeStamp from "./TimeStamp";

const STRIP = [
  { photo: "plumber", label: "Plumbing · Norwood" },
  { photo: "salon", label: "Hair & beauty · The Parade" },
  { photo: "electrician", label: "Electrical · Mawson Lakes" },
  { photo: "cafe", label: "Cafe · Glenelg" },
  { photo: "builder", label: "Building · Burnside" },
  { photo: "clinic", label: "Allied health · Unley" },
];

export default function MiddayQuote() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F7FB] to-[#F6F4EE] px-6 py-24 md:py-32">
        <TimeStamp label="12:30" />
        <div className="relative mx-auto grid max-w-container items-center gap-12 md:grid-cols-2">
          <div className="order-2 rounded-[24px] border border-black/[0.07] bg-white p-6 shadow-[0_20px_60px_rgba(29,29,31,0.1)] md:order-1">
            <p className="font-mono text-[11px] tracking-[0.1em] text-[#9C9C97]">
              QUOTE #147 · SENT LAST THURSDAY · $2,300
            </p>
            <div className="mt-4 space-y-3">
              <div className="v3-pop ml-6 rounded-2xl rounded-br-md bg-[#0E8C74] p-3.5">
                <p className="text-[13px] leading-snug text-white">
                  Hi Sarah — just checking you got the quote for the bathroom
                  reno. Happy to answer anything, or lock in a start date.
                </p>
                <p className="mt-1 text-right text-[10px] text-white/60">12:30 pm · sent automatically</p>
              </div>
              <div className="v3-pop mr-6 rounded-2xl rounded-bl-md bg-[#F2F2F4] p-3.5 [animation-delay:.6s]">
                <p className="text-[13px] leading-snug text-[#1D1D1F]">
                  Sorry, been flat out! Yes let&apos;s go ahead. When can you start?
                </p>
                <p className="mt-1 text-[10px] text-[#98989D]">12:47 pm</p>
              </div>
              <div className="v3-pop flex items-center gap-2 rounded-xl bg-[#34C759]/10 px-3.5 py-2.5 ring-1 ring-[#34C759]/25 [animation-delay:1.1s]">
                <span className="text-[13px]" aria-hidden>✓</span>
                <p className="text-[12px] font-semibold text-[#1D7A3E]">
                  $2,300 accepted — while you were fitting a hot water system
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#A0752E]">
              12:30 PM · YOU&apos;RE UNDER A HOUSE IN SEATON
            </p>
            <h2 className="mt-4 max-w-md text-[34px] font-bold leading-[1.06] tracking-[-0.02em] text-[#1D1D1F] md:text-[48px]">
              The quote you forgot chased itself.
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#6E6E73]">
              Three polite touchpoints, perfectly timed. Most tradies never
              follow up — that&apos;s why 30% more quotes turn into jobs when
              something does it for you.{" "}
              <Link href="/ai-automation-adelaide" className="font-semibold text-[#0E8C74] hover:opacity-70">
                Automation from $199/mo ›
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 5:00 PM — knock-off. The site keeps selling. */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F4EE] via-[#FBEDD8] to-[#F3DDC2] py-24 md:py-32">
        <TimeStamp label="5:00" />
        <div className="relative mx-auto max-w-container px-6">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#A0642E]">
              5:00 PM · TOOLS DOWN
            </p>
            <h2 className="mt-4 max-w-xl text-[34px] font-bold leading-[1.06] tracking-[-0.02em] text-[#1D1D1F] md:text-[48px]">
              You knock off. Your website doesn&apos;t.
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#7A6A55]">
              Live in 48 hours, owned outright from $699 — and built to keep
              working long after you&apos;ve cracked the first cold one.{" "}
              <Link href="/website-design-adelaide" className="font-semibold text-[#0E8C74] hover:opacity-70">
                Website design ›
              </Link>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden" aria-hidden>
            <div className="v3-marquee flex w-max gap-5 pr-5 hover:[animation-play-state:paused]">
              {[...STRIP, ...STRIP].map((s, i) => (
                <figure key={i} className="relative shrink-0 overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/mockups/${s.photo}.jpg`}
                    alt=""
                    className="h-36 w-56 object-cover sepia-[0.15] md:h-44 md:w-72"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
