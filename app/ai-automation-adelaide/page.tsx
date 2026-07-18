import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import {
  MissedCallDemo,
  SavingsCounters,
  QuoteChaseMini,
  NoShowRing,
  ReceptionistDemo,
} from "./parts";

// cal.com 15-min booking (Ivan's account, 2026-07-17).
const CAL_URL = "https://cal.com/aiadelaide";
// Integration names — all stated verbatim in the page's FAQ copy.
const integrations = ["ServiceM8", "Tradify", "Jobber", "Xero", "MYOB", "Google Calendar", "Calendly", "Microsoft 365", "HubSpot"];

// AI automation money page in the v4 language with live animated demos.
// Ported from /ai-automation-preview 2026-07-17 (Ivan-approved). Every visible
// marketing string is verbatim from the prior version (copy freeze until
// ~2026-09-15); only presentation + demos changed. Two prior bugs stay fixed
// ($99 schema price, $150/mo ROI line — both now $199).
export const metadata: Metadata = {
  title: "AI Automation Adelaide | From $199/mo",
  description:
    "AI and business automation for Adelaide small businesses — missed-call text-back, quote follow-ups, admin workflows. Setup in 2-5 days. From $199/mo.",
  alternates: { canonical: "/ai-automation-adelaide" },
};

const savings = [
  {
    label: "Recovered leads",
    value: 2800,
    body: "3-5 extra jobs/month at $350-$700 average value from missed-call text-back and faster quote follow-up.",
  },
  {
    label: "Admin hours saved",
    value: 1400,
    body: "8-12 hours/week reclaimed from chasing voicemails, typing up quotes, and booking reminders — at $35/hr equivalent.",
  },
  {
    label: "Faster cash collection",
    value: 800,
    body: "Invoice follow-up and payment reminders compress 22-day average collection to ~14 days — recovered working capital.",
  },
];

const automations = [
  {
    title: "Missed-Call Capture & SMS",
    body: "Caller gets an SMS in 10-20 seconds acknowledging the call. AI asks one qualifying question, books a callback slot, and pushes details into your CRM. Recovery rate goes from ~28% to ~67%.",
  },
  {
    title: "Quote Follow-Up Sequences",
    body: "Day 1 thank-you, Day 3 check-in, Day 7 final touch — all sent automatically. Tracks opens and forwards. Flags hot leads for personal follow-up. 35-50% conversion lift on average.",
  },
  {
    title: "24/7 AI Receptionist",
    body: "Answers every call — during jobs, after hours, weekends. Books appointments, answers FAQs, routes emergencies. Sounds human. Australian accent. No hold music.",
  },
  {
    title: "Smart Scheduling & Reminders",
    body: "Calendar syncs in real-time. Auto-blocks travel time. SMS reminders at 24hr + 2hr before. Customer can reschedule by text. No-shows drop from 20% to 7%.",
  },
  {
    title: "Invoice & Payment Automation",
    body: "Invoice generated and sent on job completion. Payment reminders at Day 7/14/21. Multiple payment options. Average collection time drops from 22 to 14 days.",
  },
  {
    title: "Review & Referral Requests",
    body: "Auto-sends Google review link 24hr after job completion. One gentle nudge at Day 7. Referral prompt after 5-star review. Builds your online reputation while you sleep.",
  },
];

const steps = [
  { n: "01", title: "We Map Your Workflow", tag: "30-60 minute call", body: "We look at how calls, quotes, and admin are currently handled — where leads are being lost and what the first win should be." },
  { n: "02", title: "We Set Up Your Automation", tag: "2-5 business days", body: "We configure the AI, connect your tools, write your scripts, test everything, and hand it over with a simple walkthrough." },
  { n: "03", title: "You Get the Leads Back", tag: "Ongoing support", body: "Customers get instant responses, you get the details in your CRM, and we keep improving the system as your business evolves." },
];

const faqItems = [
  {
    question: "What is AI automation for Adelaide businesses?",
    answer:
      "AI automation connects your phone, calendar, CRM, and admin tools so repeatable tasks run without you. Think missed-call SMS in 20 seconds, quote follow-ups that send themselves, appointment reminders that fire automatically, and lead routing that puts the right enquiry in front of the right person — 24/7. It's not a robot replacing your team. It's software handling the repetitive stuff so your team focuses on customers and delivery.",
  },
  {
    question: "How much does AI automation cost for a small Adelaide business?",
    answer:
      "Most Adelaide businesses start with a one-off setup and a monthly subscription from $199/mo. The first workflow — usually missed-call response or quote follow-up — often pays for itself within 30 days. A tradie recovering 3 extra jobs a week at $350 each sees $1,050/week in new revenue against a $199/mo system cost. That's an ROI of 400%+ in the first month.",
  },
  {
    question: "Is this the same as business automation in Adelaide?",
    answer:
      "Yes — business automation Adelaide companies search for is exactly what we build; the difference is we use AI to do it faster and cheaper. Traditional business automation projects mean months of consultants mapping processes. We pick the workflow leaking the most money (usually missed calls or quote follow-up), automate it in under a week from $199/mo, and expand from there. Same outcome — fewer manual tasks, faster response — without the enterprise price tag.",
  },
  {
    question: "How long does it take to set up AI automation?",
    answer:
      "Most workflows go live in 2–5 business days. We start with a 30–60 minute call to map your current process, then configure the automation, test it, and hand it over. Complex integrations (multi-location calendars, custom CRMs, industry-specific compliance tools) might take 7–10 days. You keep your existing phone number, email, and tools — we layer automation on top.",
  },
  {
    question: "Will my customers know they're talking to AI?",
    answer:
      "Only if you tell them. Modern AI voices use natural Australian accents with proper pacing and tone. SMS and email follow-ups are written in your voice — we use your actual wording. Most customers assume it's your team. The goal is faster response, not a sci-fi experience.",
  },
  {
    question: "What if the AI makes a mistake or doesn't understand something?",
    answer:
      "The AI is trained to recognise when it's outside its knowledge. It can take a detailed message, escalate to a human (via SMS or call forward), or politely explain its limits and offer alternatives. We review call and message logs regularly and fill gaps as we find them. You're always in control — you set the escalation rules.",
  },
  {
    question: "Can AI automation work with the tools I already use?",
    answer:
      "Almost certainly yes. We integrate with ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, Microsoft 365, HubSpot, and most popular CRMs and job management platforms. If your tool has an API or webhook, we can usually connect it within 1–2 days.",
  },
  {
    question: "Is this just for tradies or does it work for other businesses?",
    answer:
      "AI automation works for any Adelaide business that handles repeatable customer interactions. Our most common clients are tradies (plumbers, sparkies, builders), allied health clinics (physio, chiro, dental), retail and hospitality, and professional services (accountants, real estate agents, lawyers). The automation is different for each — we configure it to your industry and workflow.",
  },
  {
    question: "What happens if I want to change how the automation works later?",
    answer:
      "Easy. Message us or jump on a quick call. We can update scripts, add new FAQs, change routing rules, or add workflows (e.g. adding Google review requests after job completion) within 24–48 hours. Automation should evolve with your business.",
  },
];

const problemRows = [
  ["Missed-call response", "2-3 hrs chasing voicemails — 70% never convert", "SMS in 20 seconds — 67% recovery rate"],
  ["Quote follow-up", "3-4 hrs — 62% of quotes go silent after Day 3", "Auto-sequence (Day 1/3/7) — 35-50% conversion lift"],
  ["Appointment reminders", "1-2 hrs manual calls — 20% no-show rate", "Auto-SMS 24hr + 2hr before — 7% no-show rate"],
  ["Booking & scheduling", "3-5 hrs back-and-forth calls/emails", "Customer books online — calendar syncs instantly"],
  ["Invoice & payment chase", "2-3 hrs — avg 22 days to collect", "Auto-generate + reminders — avg 14 days to collect"],
];

const INK = "#1D1D1F";


function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AI Adelaide",
    description:
      "AI Automation Adelaide helps local businesses automate lead capture, quote follow-up, scheduling, and admin. 24/7 coverage.",
    url: "https://aiadelaide.com.au",
    telephone: "+61871009788",
    email: "hello@aiadelaide.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Peel St",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      postalCode: "5000",
      addressCountry: "AU",
    },
    geo: { "@type": "GeoCoordinates", latitude: -34.9235, longitude: 138.5995 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed: { "@type": "City", name: "Adelaide" },
    priceRange: "$199–$399/month",
    sameAs: [
      "https://www.facebook.com/aiadelaide",
      "https://www.linkedin.com/company/ai-adelaide",
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Adelaide",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Custom AI automation for Adelaide businesses — missed-call capture, quote follow-up, booking management, and admin workflows.",
    offers: {
      "@type": "Offer",
      price: "199.00",
      priceCurrency: "AUD",
      priceValidUntil: "2026-12-31",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function AIAutomationAdelaidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="bg-[#FBFBFD]">
      <LocalBusinessJsonLd />
      <ServiceJsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero + live phone demo */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-16 md:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "AI Automation Adelaide" },
            ]}
          />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                AI Services
              </p>
              <h1 className="v3-rise mt-4 max-w-2xl text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[50px]" style={{ color: INK }}>
                AI Automation Adelaide — Automate the Admin, Capture Every Lead
              </h1>
              <p className="v3-rise mt-6 max-w-xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
                If your team is busy but growth still feels chaotic, this is
                where automation helps. We build practical AI systems that
                handle missed calls, quote follow-ups, booking confirmations,
                and repetitive admin — so your team focuses on customers and
                delivery. <strong className="text-[#424245]">Adelaide-based setup, 2-5 business days.</strong>
              </p>
              <div className="v3-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.36s]">
                <Link href="/contact?service=automation#send-message" data-track="quote_automation_hero" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]">
                  Book your free automation audit
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a href="tel:+61871009788" data-track="tel_automation_hero" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 font-mono text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]">
                  (08) 7100 9788
                </a>
              </div>
            </div>
            <div className="v3-rise [animation-delay:.3s]">
              <MissedCallDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Savings — animated counters */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
              Why Adelaide businesses automate
            </p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Most Adelaide businesses save $5K+ in the first 90 days
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              The math isn&apos;t magic — it&apos;s recovery. Here&apos;s how typical Adelaide service businesses add up the wins once the first workflow goes live.
            </p>
          </Reveal>
          <div className="mt-10">
            <SavingsCounters items={savings} />
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-[#6E6E73]">
              Total estimated savings: <strong className="text-[#1D1D1F]">~$5,000/month</strong> for a typical Adelaide tradie or service business. Your numbers will vary by industry, call volume, and average job value — but the structure is the same. Want to see your own number?{" "}
              <Link href="/contact#send-message" className="font-semibold text-[#0E8C74] underline decoration-[#0E8C74]/30 underline-offset-4 hover:text-[#1D1D1F]">Book a free audit</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The problem — restyled table */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              The Real Cost of Manual Admin
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Most Adelaide small businesses don&apos;t have a lead problem — they have a <strong className="text-[#424245]">response-time problem</strong> and an <strong className="text-[#424245]">admin overload problem</strong>. Here&apos;s what the numbers actually look like:
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
              <div className="grid grid-cols-1 gap-px bg-black/[0.06] md:grid-cols-[1.2fr_1.5fr_1.5fr]">
                <div className="bg-[#1D1D1F] px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5EF2D6]">Task</div>
                <div className="hidden bg-[#1D1D1F] px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 md:block">Manual (per week)</div>
                <div className="hidden bg-[#1D1D1F] px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5EF2D6] md:block">With AI Automation</div>
                {problemRows.map((r) => (
                  <div key={r[0]} className="contents">
                    <div className="bg-white px-5 py-4 text-[14px] font-semibold text-[#1D1D1F]">{r[0]}</div>
                    <div className="bg-white px-5 py-4 text-[13.5px] leading-snug text-[#98989D]"><span className="font-mono text-[10px] uppercase tracking-wide text-[#E8590C] md:hidden">Manual: </span>{r[1]}</div>
                    <div className="bg-white px-5 py-4 text-[13.5px] leading-snug text-[#424245]"><span className="font-mono text-[10px] uppercase tracking-wide text-[#0E8C74] md:hidden">AI: </span>{r[2]}</div>
                  </div>
                ))}
                <div className="bg-[#F5F5F7] px-5 py-4 text-[14px] font-semibold text-[#1D1D1F]">Total admin hours</div>
                <div className="bg-[#F5F5F7] px-5 py-4 text-[14px] font-bold text-[#E8590C]"><span className="font-mono text-[10px] uppercase tracking-wide md:hidden">Manual: </span>11-17 hrs/week</div>
                <div className="bg-[#F5F5F7] px-5 py-4 text-[14px] font-bold text-[#0E8C74]"><span className="font-mono text-[10px] uppercase tracking-wide md:hidden">AI: </span>2-4 hrs/week</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] text-[#98989D]">
              Numbers based on average Adelaide tradie/small business (3-10 staff). Results vary by industry and call volume.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we automate — showcase cards with two live demos */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              What We Automate First
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              We don&apos;t automate everything at once. We start with the one workflow that&apos;s leaking the most revenue right now:
            </p>
          </Reveal>

          {/* Two hero product tiles WITH live demos */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col gap-6 rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] md:flex-row md:items-center">
                <div className="flex-1">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">Live</p>
                  <h3 className="mt-2 text-[19px] font-semibold tracking-tight" style={{ color: INK }}>{automations[1].title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{automations[1].body}</p>
                </div>
                <div className="w-full shrink-0 md:w-[230px]"><QuoteChaseMini /></div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-6 rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">Live</p>
                  <h3 className="mt-2 text-[19px] font-semibold tracking-tight" style={{ color: INK }}>{automations[3].title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{automations[3].body}</p>
                </div>
                <div className="w-full shrink-0 sm:w-[180px]"><NoShowRing /></div>
              </div>
            </Reveal>
          </div>

          {/* Remaining three as clean cards (receptionist has its own demo band below) */}
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {[automations[0], automations[4], automations[5]].map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,29,31,0.1)]">
                  <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: INK }}>{a.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#6E6E73]">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Receptionist — dark voice-demo showcase band */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
            <Reveal>
              <div>
                <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">Live · hear it yourself</p>
                <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
                  24/7 AI Receptionist
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6E6E73] md:text-[16px]">
                  Answers every call — during jobs, after hours, weekends. Books appointments, answers FAQs, routes emergencies. Sounds human. Australian accent. No hold music.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="tel:+61871009788" data-track="tel_receptionist_demo" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]">
                    Call it now — (08) 7100 9788
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a href={CAL_URL} target="_blank" rel="noopener noreferrer" data-track="book_call_receptionist" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]">
                    Book a 15-min call
                  </a>
                </div>
                <p className="mt-4 font-mono text-[12px] text-[#98989D]">
                  Our own AI answers this number right now — that&apos;s the same system we install.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ReceptionistDemo />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Integrations marquee */}
      <section className="border-y border-black/[0.06] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-container px-6">
          <p className="text-center font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#98989D]">
            Works with the tools you already use
          </p>
        </div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* Two identical halves, each repeated enough to overflow any
              viewport, so the -50% translate loops seamlessly with no gap. */}
          <div className="v3-marquee flex w-max items-center">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={half === 1}>
                {[...integrations, ...integrations, ...integrations].map((name, i) => (
                  <span key={i} className="shrink-0 whitespace-nowrap rounded-full border border-black/[0.08] bg-[#FBFBFD] px-6 py-3 text-[15px] font-semibold text-[#424245]">
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-container px-6">
          <p className="text-center text-[13px] text-[#98989D]">
            If your tool has an API or webhook, we can usually connect it within 1–2 days.
          </p>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after automating the admin"
        eyebrow="Real results"
        subheadline="These are the sorts of wins that happen when missed calls stop disappearing and follow-up actually happens on time."
      />

      {/* Pricing — three cards, middle dark */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              What AI Automation Costs
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              No hidden fees. No lock-in contracts. No &quot;call for pricing&quot; games.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">Start</p>
                <h3 className="mt-2 text-[19px] font-semibold tracking-tight" style={{ color: INK }}>Free Audit</h3>
                <p className="mt-3 text-[32px] font-semibold tracking-[-0.02em]" style={{ color: INK }}>$0</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {["Review your missed-call + admin gaps", "Show you the fastest win to set up first", "Plain-English summary of what to change", "No obligation"].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] text-[#424245]"><span className="mt-[2px] font-semibold text-[#0E8C74]">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] text-[#98989D]">Best for: Tradies who want to see where leads are slipping through the cracks</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="v3-shimmer-border flex h-full flex-col rounded-[28px] bg-[#1D1D1F] p-7 text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">Setup</p>
                <h3 className="mt-2 text-[19px] font-semibold tracking-tight text-white">Automation Starter</h3>
                <p className="mt-3 text-[32px] font-semibold tracking-[-0.02em] text-white">from $199<span className="text-[15px] font-normal text-white/50">/month</span></p>
                <ul className="mt-4 flex-1 space-y-2">
                  {["AI receptionist or missed-call capture", "Quote follow-up or reminder sequences", "Calendar & CRM integration", "2-5 business day setup"].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] text-white/80"><span className="mt-[2px] font-semibold text-[#5EF2D6]">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] text-white/45">Best for: Businesses ready to stop losing leads</p>
                <Link href="/contact?service=automation&plan=automation-starter#send-message" data-track="quote_automation_starter" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]">Get started →</Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">Grow</p>
                <h3 className="mt-2 text-[19px] font-semibold tracking-tight" style={{ color: INK }}>Automation Business</h3>
                <p className="mt-3 text-[32px] font-semibold tracking-[-0.02em]" style={{ color: INK }}>from $399<span className="text-[15px] font-normal text-[#98989D]">/month</span></p>
                <ul className="mt-4 flex-1 space-y-2">
                  {["Monthly improvements + new workflows", "Performance monitoring & reporting", "Priority support (same-day)", "Multi-workflow automation"].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] text-[#424245]"><span className="mt-[2px] font-semibold text-[#0E8C74]">✓</span><span>{f}</span></li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] text-[#98989D]">Best for: Growing businesses that want more than a one-off setup</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works — gradient rail */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="text-center text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              How It Works — Simple, Fast, Adelaide-Based
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              No drawn-out consulting project. We find the leak, set up the system, and get it working.
            </p>
          </Reveal>
          <div className="relative mt-14 hidden h-1 rounded-full bg-black/[0.07] md:mx-auto md:block md:max-w-4xl" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {steps.map((_, i) => (
              <span key={i} className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#F5F5F7] bg-[#0E8C74]" style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }} />
            ))}
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-6 md:mt-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 text-center shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <p className="font-mono text-[22px] font-semibold text-[#0E8C74]">{s.n}</p>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-tight" style={{ color: INK }}>{s.title}</h3>
                  <p className="mx-auto mt-3 inline-flex rounded-full border border-[#0E8C74]/20 bg-[#0E8C74]/[0.06] px-3 py-1 font-mono text-[11px] text-[#0E8C74]">{s.tag}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#6E6E73]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">04</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              FAQ: AI Automation Adelaide
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
              {faqItems.map((faq, i) => (
                <details key={faq.question} className="group" open={i === 0}>
                  <summary data-track="faq_open" className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[16px] font-semibold text-[#1D1D1F] transition hover:bg-black/[0.02] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 text-xl font-normal text-[#0E8C74] transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="px-7 pb-6 text-[15px] leading-relaxed text-[#6E6E73]">{faq.answer}</p>
                  {i < faqItems.length - 1 && <div className="mx-7 border-t border-black/[0.06]" />}
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Explore More — internal link hub (verbatim) */}
      <section className="px-6 pb-4 md:pb-8">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="text-[22px] font-semibold tracking-tight" style={{ color: INK }}>
              Explore More
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/ai-receptionist-cost-adelaide", label: "AI Receptionist Cost Adelaide" },
                { href: "/ai-automation-vs-hiring-staff-adelaide", label: "AI Automation vs Hiring Staff" },
                { href: "/websites-for-plumbers-adelaide", label: "Websites for Plumbers Adelaide" },
                { href: "/websites-for-electricians-adelaide", label: "Websites for Electricians Adelaide" },
                { href: "/mawson-lakes", label: "AI Automation in Mawson Lakes" },
                { href: "/port-adelaide", label: "AI Automation in Port Adelaide" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between gap-3 rounded-[16px] border border-black/[0.08] bg-white px-5 py-4 text-[14px] font-semibold text-[#1D1D1F] shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#0E8C74]/50 hover:text-[#0E8C74]"
                >
                  {l.label}
                  <span aria-hidden className="text-[#0E8C74] transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <StackCTA variant="automation" />

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-4 md:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Ready to Stop Losing Leads to Admin?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free 15-minute automation audit. We&apos;ll map your biggest workflow gaps, show you what you&apos;re probably losing, and give you a clear quote — no obligation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?service=automation#send-message" data-track="quote_automation_cta" className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]">
                Book your free automation audit
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" data-track="book_call_automation_cta" className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]">
                Book a 15-min call
              </a>
            </div>
            <p className="mt-4 font-mono text-[12px] text-[#98989D]">Or call (08) 7100 9788 — our AI answers right now.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
