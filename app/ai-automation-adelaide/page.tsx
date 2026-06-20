import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Automation Adelaide | Automate Admin, Capture Every Lead",
  description:
    "AI Automation Adelaide helps local businesses automate lead capture, quote follow-up, scheduling, and admin. 24/7 coverage. Adelaide-based setup. Call 08 7100 9788.",
  alternates: { canonical: "/ai-automation-adelaide" },
};

/* ------------------------------------------------------------------ */
/*  FAQ data — extracted by the Next.js schema pattern as FAQPage      */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "What is AI automation for Adelaide businesses?",
    answer:
      "AI automation connects your phone, calendar, CRM, and admin tools so repeatable tasks run without you. Think missed-call SMS in 20 seconds, quote follow-ups that send themselves, appointment reminders that fire automatically, and lead routing that puts the right enquiry in front of the right person — 24/7. It's not a robot replacing your team. It's software handling the repetitive stuff so your team focuses on customers and delivery.",
  },
  {
    question: "How much does AI automation cost for a small Adelaide business?",
    answer:
      "Most Adelaide businesses start with a one-off setup ($500–$1,500) and a monthly subscription ($99–$497/mo). The first workflow — usually missed-call response or quote follow-up — often pays for itself within 30 days. A tradie recovering 3 extra jobs a week at $350 each sees $1,050/week in new revenue against a $99–$150/mo system cost. That's an ROI of 700–1,000% in the first month.",
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

/* ------------------------------------------------------------------ */
/*  JSON‑LD Schemas                                                    */
/* ------------------------------------------------------------------ */

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (faqs.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      }}
    />
  );
}

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
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.9235,
      longitude: 138.5995,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    priceRange: "$99–$497/month",
    sameAs: [
      "https://www.facebook.com/aiadelaide",
      "https://www.linkedin.com/company/ai-adelaide",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Adelaide",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "Custom AI automation for Adelaide businesses — missed-call capture, quote follow-up, booking management, and admin workflows.",
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "AUD",
      priceValidUntil: "2026-12-31",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AIAutomationAdelaidePage() {
  return (
    <>
      <FaqJsonLd faqs={faqItems} />
      <LocalBusinessJsonLd />
      <ServiceJsonLd />

      <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "AI Automation Adelaide" },
          ]}
        />
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light p-8 md:p-12">
            <div className="mb-6">
              <span className="eyebrow-light">AI Services</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              AI Automation Adelaide — Automate the Admin, Capture Every Lead
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              If your team is busy but growth still feels chaotic, this is
              where automation helps. We build practical AI systems that
              handle missed calls, quote follow-ups, booking confirmations,
              and repetitive admin — so your team focuses on customers and
              delivery.{" "}
              <strong>Adelaide-based setup, 2-5 business days.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book your free automation audit <span aria-hidden>→</span>
              </Link>
              <a href="tel:+61871009788" className="btn-outline-light px-8 py-4">
                (08) 7100 9788
              </a>
            </div>
          </div>
        </section>

        {/* ── The Problem ───────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              The Real Cost of Manual Admin
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              Most Adelaide small businesses don&apos;t have a lead problem —
              they have a <strong>response-time problem</strong> and an{" "}
              <strong>admin overload problem</strong>. Here&apos;s what the
              numbers actually look like:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-950">
                      Task
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-950">
                      Manual (per week)
                    </th>
                    <th className="pb-3 font-semibold text-slate-950">
                      With AI Automation
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      Missed-call response
                    </td>
                    <td className="py-3 pr-4">
                      2-3 hrs chasing voicemails — 70% never convert
                    </td>
                    <td className="py-3">
                      SMS in 20 seconds — 67% recovery rate
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4">Quote follow-up</td>
                    <td className="py-3 pr-4">
                      3-4 hrs — 62% of quotes go silent after Day 3
                    </td>
                    <td className="py-3">
                      Auto-sequence (Day 1/3/7) — 35-50% conversion lift
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      Appointment reminders
                    </td>
                    <td className="py-3 pr-4">
                      1-2 hrs manual calls — 20% no-show rate
                    </td>
                    <td className="py-3">
                      Auto-SMS 24hr + 2hr before — 7% no-show rate
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4">Booking & scheduling</td>
                    <td className="py-3 pr-4">
                      3-5 hrs back-and-forth calls/emails
                    </td>
                    <td className="py-3">
                      Customer books online — calendar syncs instantly
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4">Invoice & payment chase</td>
                    <td className="py-3 pr-4">
                      2-3 hrs — avg 22 days to collect
                    </td>
                    <td className="py-3">
                      Auto-generate + reminders — avg 14 days to collect
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-950">
                      Total admin hours
                    </td>
                    <td className="py-3 pr-4 font-semibold text-red-600">
                      11-17 hrs/week
                    </td>
                    <td className="py-3 font-semibold text-emerald-600">
                      2-4 hrs/week
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Numbers based on average Adelaide tradie/small business (3-10
              staff). Results vary by industry and call volume.
            </p>
          </div>
        </section>

        {/* ── What We Automate ──────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What We Automate First
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              We don&apos;t automate everything at once. We start with the
              one workflow that&apos;s leaking the most revenue right now:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Missed-Call Capture &amp; SMS
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Caller gets an SMS in 10-20 seconds acknowledging the
                  call. AI asks one qualifying question, books a callback
                  slot, and pushes details into your CRM. Recovery rate
                  goes from ~28% to ~67%.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Quote Follow-Up Sequences
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Day 1 thank-you, Day 3 check-in, Day 7 final touch —
                  all sent automatically. Tracks opens and forwards.
                  Flags hot leads for personal follow-up. 35-50%
                  conversion lift on average.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  24/7 AI Receptionist
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Answers every call — during jobs, after hours, weekends.
                  Books appointments, answers FAQs, routes emergencies.
                  Sounds human. Australian accent. No hold music.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Smart Scheduling &amp; Reminders
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Calendar syncs in real-time. Auto-blocks travel time.
                  SMS reminders at 24hr + 2hr before. Customer can
                  reschedule by text. No-shows drop from 20% to 7%.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Invoice &amp; Payment Automation
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Invoice generated and sent on job completion. Payment
                  reminders at Day 7/14/21. Multiple payment options.
                  Average collection time drops from 22 to 14 days.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Review &amp; Referral Requests
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Auto-sends Google review link 24hr after job
                  completion. One gentle nudge at Day 7. Referral
                  prompt after 5-star review. Builds your online
                  reputation while you sleep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industry Use Cases ────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              How Different Adelaide Businesses Use AI Automation
            </h2>

            <h3 className="mb-3 mt-8 text-h3-mobile text-slate-950 md:text-h3">
              Tradies &amp; Trade Businesses
            </h3>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              Plumbers, electricians, builders, painters, concreters,
              roofers. You&apos;re on-site, under a house, or driving
              between jobs when the phone rings. AI automation catches
              every call, qualifies the job, books it in your calendar,
              and follows up quotes — without you touching your phone.
            </p>
            <p className="text-body-mobile text-slate-700 md:text-body">
              <strong>Real result:</strong> A two-person electrical
              business in the eastern suburbs went from recovering 28%
              of missed calls to 67%, adding $1,560-$1,950/week in
              recovered revenue — same team, same phones, same ad spend.
            </p>

            <h3 className="mb-3 mt-8 text-h3-mobile text-slate-950 md:text-h3">
              Allied Health Clinics
            </h3>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              Physiotherapists, chiropractors, dentists, optometrists,
              podiatrists. Your front desk is drowning during peak hours
              while after-hours calls go unanswered. AI handles overflow,
              books appointments 24/7, sends reminders, and takes new
              patient intake — reducing no-shows by 65%.
            </p>
            <p className="text-body-mobile text-slate-700 md:text-body">
              <strong>Real result:</strong> A Stirling physiotherapy
              clinic reduced no-shows from 20% to 7%, recovering ~$1,200
              in weekly revenue from previously lost appointment slots.
            </p>

            <h3 className="mb-3 mt-8 text-h3-mobile text-slate-950 md:text-h3">
              Retail &amp; Hospitality
            </h3>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              Cafes, restaurants, gift shops, boutique retail. You miss
              after-hours booking enquiries and tourist-driven demand
              because you can&apos;t staff 24/7. AI captures bookings,
              answers FAQs (hours, menu, parking), and manages inventory
              alerts — especially critical for seasonal Hills businesses.
            </p>
            <p className="text-body-mobile text-slate-700 md:text-body">
              <strong>Real result:</strong> A Mount Barker cafe captured
              40% more weekend bookings after implementing an AI
              receptionist that handled late-night tourist enquiries.
            </p>

            <h3 className="mb-3 mt-8 text-h3-mobile text-slate-950 md:text-h3">
              Professional Services
            </h3>
            <p className="text-body-mobile text-slate-700 md:text-body">
              Accountants, real estate agents, lawyers, consultants. Your
              time is your product — every hour on admin is an hour not
              billing. AI automates appointment scheduling, document
              follow-up, client onboarding, and invoice collection so you
              stay focused on high-value work.
            </p>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What AI Automation Costs
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              No hidden fees. No lock-in contracts. No &quot;call for
              pricing&quot; games.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">
                  START
                </div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">
                  Free Audit
                </h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  $0
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Review your missed-call + admin gaps</li>
                  <li>Show you the fastest win to set up first</li>
                  <li>Plain-English summary of what to change</li>
                  <li>No obligation</li>
                </ul>
                <p className="text-sm text-slate-500">
                  Best for: Tradies who want to see where leads are
                  slipping through the cracks
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">
                  SETUP
                </div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">
                  Implementation
                </h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  from $99{" "}
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>AI receptionist or missed-call capture</li>
                  <li>Quote follow-up or reminder sequences</li>
                  <li>Calendar &amp; CRM integration</li>
                  <li>2-5 business day setup</li>
                </ul>
                <p className="text-sm text-slate-500">
                  Best for: Businesses ready to stop losing leads
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">
                  GROW
                </div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">
                  Ongoing Support
                </h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  $299-699{" "}
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Monthly improvements + new workflows</li>
                  <li>Performance monitoring &amp; reporting</li>
                  <li>Priority support (same-day)</li>
                  <li>Multi-workflow automation</li>
                </ul>
                <p className="text-sm text-slate-500">
                  Best for: Growing businesses that want more than a
                  one-off setup
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              ROI: Most businesses recover their setup cost within 30
              days. A tradie recovering 3 extra jobs at $350 each =
              $1,050/week against a $150/mo system. That&apos;s a
              700-1,000% ROI in Month 1.
            </p>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-center text-h2-mobile text-slate-950 md:text-h2">
              How It Works — Simple, Fast, Adelaide-Based
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-body-mobile text-slate-700 md:text-body">
              No drawn-out consulting project. We find the leak, set up
              the system, and get it working.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">
                  01
                </div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  We Map Your Workflow
                </h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                  30-60 minute call
                </p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We look at how calls, quotes, and admin are currently
                  handled — where leads are being lost and what the
                  first win should be.
                </p>
              </div>

              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">
                  02
                </div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  We Set Up Your Automation
                </h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                  2-5 business days
                </p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We configure the AI, connect your tools, write your
                  scripts, test everything, and hand it over with a
                  simple walkthrough.
                </p>
              </div>

              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">
                  03
                </div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  You Get the Leads Back
                </h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                  Ongoing support
                </p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Customers get instant responses, you get the details
                  in your CRM, and we keep improving the system as your
                  business evolves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
              FAQ: AI Automation Adelaide
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                    {faq.question}
                  </h3>
                  <p className="text-body-mobile text-slate-700 md:text-body">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Ready to Stop Losing Leads to Admin?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute automation audit. We&apos;ll map your
              biggest workflow gaps, show you what you&apos;re probably
              losing, and give you a clear quote — no obligation.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex px-8 py-4"
            >
              Book your free automation audit <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
              Or call{" "}
              <a href="tel:+61871009788" className="underline">
                (08) 7100 9788
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
