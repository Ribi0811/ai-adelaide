"use client";

// Shared mock-website engine: the realistic small-business site rendered
// inside browser chrome, driven by a step state machine. Used by the v2 hero
// and the v4 "build yours" section. Photos live in /public/mockups with
// gradient fallbacks. No invented business names or domains — demo data uses
// "Your …" placeholders; custom builds render the visitor's own input.
import { useEffect, useState } from "react";

export type PhotoKey = "plumber" | "electrician" | "builder" | "salon" | "cafe" | "clinic";

export type Trade = {
  domain: string;
  biz: string;
  tag: string;
  headline: string;
  sub: string;
  cta: string;
  brand: string;
  photo: PhotoKey;
  services: { name: string; from: string }[];
  review: { text: string; name: string; suburb: string };
  sms: string;
};

export const STEPS = { type: 0, sub: 1, blocks: 2, rank: 3, sms: 4, done: 5 } as const;

export const BASE: Record<PhotoKey, Omit<Trade, "domain" | "biz">> = {
  plumber: {
    tag: "Plumbing & gas · Adelaide",
    headline: "We fix leaks. Fast.",
    sub: "Emergency plumbing across Adelaide. Fixed quotes, licensed & insured.",
    cta: "Call now",
    brand: "#1663A6",
    photo: "plumber",
    services: [
      { name: "Hot water systems", from: "from $299" },
      { name: "Blocked drains", from: "from $189" },
      { name: "Burst pipe repair", from: "24/7 callout" },
    ],
    review: { text: "Fixed our hot water the same afternoon. Spotless work.", name: "Karen M.", suburb: "Norwood" },
    sms: "G'day! Saw we missed you — how can we help?",
  },
  electrician: {
    tag: "Electrical contractors · Adelaide",
    headline: "Sparkies who show up.",
    sub: "Licensed electricians. Upfront pricing, tidy work, lifetime warranty.",
    cta: "Get a quote",
    brand: "#D97706",
    photo: "electrician",
    services: [
      { name: "Switchboard upgrades", from: "from $890" },
      { name: "EV charger install", from: "from $650" },
      { name: "Fault finding", from: "from $120" },
    ],
    review: { text: "Quoted on the phone, arrived on time, no surprises.", name: "Steve T.", suburb: "Mawson Lakes" },
    sms: "Hi! Missed your call — after a quote or an urgent fix?",
  },
  builder: {
    tag: "Building & renovations · Adelaide",
    headline: "Built right, first time.",
    sub: "Renovations, extensions and decks. Free site visits, fixed-price contracts.",
    cta: "Free site visit",
    brand: "#8A5D36",
    photo: "builder",
    services: [
      { name: "Kitchen renovations", from: "from $18k" },
      { name: "Extensions", from: "free quote" },
      { name: "Decks & pergolas", from: "from $6k" },
    ],
    review: { text: "Our extension finished two weeks early. Unheard of.", name: "Priya S.", suburb: "Burnside" },
    sms: "G'day! Saw we missed you — how can we help?",
  },
  salon: {
    tag: "Hair & beauty · Norwood",
    headline: "Walk out brand new.",
    sub: "Cuts, colour and styling on The Parade. Book online, open late Thursdays.",
    cta: "Book online",
    brand: "#C2497D",
    photo: "salon",
    services: [
      { name: "Cut & style", from: "from $85" },
      { name: "Full colour", from: "from $160" },
      { name: "Bridal packages", from: "POA" },
    ],
    review: { text: "Best balayage in Adelaide, and I can book at midnight.", name: "Jess L.", suburb: "Norwood" },
    sms: "Hi lovely! We missed you — want me to book you in?",
  },
  cafe: {
    tag: "Cafe & catering · Adelaide",
    headline: "Worth crossing town for.",
    sub: "Brunch, specialty coffee and functions. Book a table online.",
    cta: "Book a table",
    brand: "#8B5A2B",
    photo: "cafe",
    services: [
      { name: "Weekend brunch", from: "7am – 2pm" },
      { name: "Functions & events", from: "from $39pp" },
      { name: "Office catering", from: "next-day" },
    ],
    review: { text: "The banana bread alone is worth the drive.", name: "Tom R.", suburb: "Glenelg" },
    sms: "Hi! We missed your call — after a booking or catering?",
  },
  clinic: {
    tag: "Allied health · Adelaide",
    headline: "Feel better, sooner.",
    sub: "Physio, podiatry and massage. Online booking, HICAPS on the spot.",
    cta: "Book online",
    brand: "#0F766E",
    photo: "clinic",
    services: [
      { name: "Initial consult", from: "$95" },
      { name: "Sports physio", from: "from $89" },
      { name: "NDIS plans", from: "welcome" },
    ],
    review: { text: "Reminders mean I never miss a session now.", name: "Mark D.", suburb: "Unley" },
    sms: "Hi! We missed you — want me to find you an appointment?",
  },
};

export const KIND_LABELS: Record<PhotoKey, string> = {
  plumber: "Plumber",
  electrician: "Electrician",
  builder: "Builder",
  salon: "Salon / beauty",
  cafe: "Cafe / hospitality",
  clinic: "Clinic / health",
};

export const PHOTOS: Record<PhotoKey, React.CSSProperties> = {
  plumber: {
    background:
      "radial-gradient(120% 90% at 15% 10%, rgba(255,255,255,0.35), transparent 45%), linear-gradient(135deg, #0E3A5C 0%, #1B6FA8 55%, #3FA0DE 100%)",
  },
  electrician: {
    background:
      "radial-gradient(70% 60% at 75% 30%, rgba(245,158,11,0.55), transparent 60%), linear-gradient(160deg, #14100A 0%, #241A0E 60%, #3A2A12 100%)",
  },
  builder: {
    background:
      "radial-gradient(120% 100% at 20% 0%, rgba(255,235,200,0.35), transparent 50%), linear-gradient(120deg, #A9743F, #8A5D36)",
  },
  salon: {
    background:
      "radial-gradient(30% 30% at 75% 25%, rgba(255,255,255,0.65), transparent 60%), linear-gradient(140deg, #F3C7D6 0%, #D887AC 100%)",
  },
  cafe: {
    background:
      "radial-gradient(35% 35% at 70% 30%, rgba(255,244,222,0.5), transparent 60%), linear-gradient(150deg, #4A3222 0%, #5C3E27 100%)",
  },
  clinic: {
    background:
      "radial-gradient(45% 45% at 70% 25%, rgba(255,255,255,0.7), transparent 60%), linear-gradient(140deg, #DDF2EE 0%, #9ED4CA 100%)",
  },
};

export function slugify(name: string) {
  const s = name.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22);
  return `${s || "yourbusiness"}.com.au`;
}

const INK = "#1D1D1F";
const missingPhotos = new Set<string>();

export default function MockSite({ d, step, chars }: { d: Trade; step: number; chars: number }) {
  const on = (s: number) => step >= s;
  const [imgOk, setImgOk] = useState(!missingPhotos.has(d.photo));
  useEffect(() => {
    setImgOk(!missingPhotos.has(d.photo));
  }, [d.photo]);

  return (
    <div className="relative bg-white">
      {/* photo hero */}
      <div
        className="relative h-[230px] overflow-hidden sm:h-[250px]"
        style={imgOk ? undefined : PHOTOS[d.photo]}
      >
        {imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/mockups/${d.photo}.jpg`}
            alt=""
            className="v3-kenburns absolute inset-0 h-full w-full object-cover"
            loading="eager"
            onError={() => {
              missingPhotos.add(d.photo);
              setImgOk(false);
            }}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"
          aria-hidden
        />

        {/* glass navbar over the photo */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-black/20 px-5 py-2.5 backdrop-blur-md">
          <span className="flex items-center gap-2">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white shadow-sm"
              style={{ background: d.brand }}
            >
              {d.biz.charAt(0)}
            </span>
            <span className="text-[12px] font-bold tracking-tight text-white">{d.biz}</span>
          </span>
          <span className="hidden gap-4 text-[10px] font-medium text-white/80 sm:flex">
            <span>Services</span>
            <span>About</span>
            <span>Reviews</span>
            <span>Contact</span>
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold text-white shadow-sm transition-opacity duration-300 ${on(STEPS.sub) ? "opacity-100" : "opacity-0"}`}
            style={{ background: d.brand }}
          >
            {d.cta}
          </span>
        </div>

        {/* overlaid hero copy */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-4 text-left sm:px-6">
          <p
            className={`text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 transition-opacity duration-300 ${on(STEPS.sub) ? "opacity-100" : "opacity-0"}`}
          >
            {d.tag}
          </p>
          <p className="mt-1 min-h-[34px] text-[26px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-sm sm:text-[30px]">
            {d.headline.slice(0, chars)}
            <span
              className={`ml-0.5 inline-block h-6 w-[2.5px] translate-y-0.5 bg-white ${step < STEPS.sub ? "animate-pulse" : "opacity-0"}`}
              aria-hidden
            />
          </p>
          <p
            className={`mt-1 max-w-[380px] text-[11px] leading-relaxed text-white/85 transition-opacity duration-500 ${on(STEPS.sub) ? "opacity-100" : "opacity-0"}`}
          >
            {d.sub}
          </p>
          <div
            className={`mt-2.5 flex items-center gap-2 transition-all duration-500 ${on(STEPS.sub) ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
          >
            <span
              className="rounded-full px-3.5 py-1.5 text-[10px] font-semibold text-white shadow-md"
              style={{ background: d.brand }}
            >
              {d.cta}
            </span>
            <span className="rounded-full border border-white/40 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
              Our work
            </span>
            <span className="ml-1 hidden items-center gap-1 text-[10px] font-medium text-white/90 sm:flex">
              <span className="tracking-[0.06em] text-[#FFC531]">★★★★★</span>
              4.9 · 127 reviews
            </span>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="grid grid-cols-3 gap-2 px-5 pb-3 pt-3.5 sm:px-6">
        {d.services.map((s, i) => (
          <div
            key={`${d.biz}-${s.name}`}
            style={{ transitionDelay: `${i * 160}ms` }}
            className={`rounded-xl border border-black/[0.05] bg-[#FAFAFA] px-3 py-2.5 text-left transition-all duration-500 ${on(STEPS.blocks) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
          >
            <p className="text-[10px] font-semibold leading-tight" style={{ color: INK }}>
              {s.name}
            </p>
            <p className="mt-0.5 text-[9px] font-semibold" style={{ color: d.brand }}>
              {s.from}
            </p>
          </div>
        ))}
      </div>

      {/* review strip */}
      <div
        className={`mx-5 mb-4 flex items-center gap-2.5 rounded-xl bg-[#FAFAFA] px-3 py-2 text-left transition-all duration-500 sm:mx-6 ${on(STEPS.rank) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
          style={{ background: d.brand }}
        >
          {d.review.name.charAt(0)}
        </span>
        <p className="min-w-0 truncate text-[10px] text-[#6E6E73]">
          <span className="text-[#F5A623]">★★★★★</span>{" "}
          <span className="font-medium" style={{ color: INK }}>
            &ldquo;{d.review.text}&rdquo;
          </span>{" "}
          — {d.review.name}, {d.review.suburb}
        </p>
      </div>

      {/* iOS-style notification: the missed call, caught */}
      <div
        className={`pointer-events-none absolute right-3 top-12 z-10 w-[240px] rounded-2xl border border-black/[0.06] bg-white/95 p-3 text-left shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 ${on(STEPS.sms) ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
        aria-hidden={!on(STEPS.sms)}
      >
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-[#34C759] text-[8px] text-white">
            ✓
          </span>
          <span className="text-[9px] font-semibold text-[#6E6E73]">MESSAGES · now</span>
        </div>
        <p className="mt-1 text-[10px] font-semibold" style={{ color: INK }}>
          {d.biz} <span className="font-normal text-[#98989D]">→ missed caller</span>
        </p>
        <p className="mt-0.5 text-[10px] leading-snug text-[#3C3C43]">{d.sms}</p>
      </div>
    </div>
  );
}
