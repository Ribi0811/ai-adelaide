import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation for Adelaide Tradies | Capture Every Job, Reduce Admin",
  description:
    "AI automation for Adelaide tradies — capture missed calls in 20 seconds, follow up quotes automatically, and cut admin by 70%. Plumbers, sparkies, builders. Call 08 7100 9788.",
  alternates: { canonical: "/ai-automation-for-tradies-adelaide" },
};

const faqItems = [
  {
    question: "How does AI automation work for a tradie who's on the tools all day?",
    answer:
      "The AI runs in the background while you work. When a call comes in and you can't answer, it sends an SMS to the caller in 10-20 seconds — 'Hey, we saw your call, what's the job?' The caller can reply by text, book a callback slot, or get basic FAQs answered. Details go straight into your CRM or job management app. You follow up when you're off the tools — but now you've got context, not just a missed call notification.",
  },
  {
    question: "What tradie processes should be automated first?",
    answer:
      "Start with missed-call recovery — it's the fastest ROI and the simplest to set up. After that, tackle quote follow-up (Day 1/3/7 auto-sequences that stop quotes going cold) and booking reminders (SMS at 24hr + 2hr before the job to cut no-shows). Once those three are running, layer in automated review requests and referral prompts. Don't automate everything at once — nail each workflow before moving to the next.",
  },
  {
    question: "Can AI automation work for a solo tradie or a 2-3 person crew?",
    answer:
      "Yes — small teams often see the biggest gains because admin load usually sits with owners and senior techs who should be billing, not chasing paper. A solo plumber recovering 3 missed calls a week at $350 each sees $1,050/week in new revenue. A two-person electrical crew recovered $1,560-$1,950/week after setting up automated follow-up — same team, same phones, same ad spend.",
  },
  {
    question: "Will it integrate with ServiceM8, Tradify, or my job management app?",
    answer:
      "Almost certainly. We connect with ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, and most popular CRMs and job management platforms. If your tool has an API or webhook, we can usually integrate it within 1-2 days. You keep using the tools you already know — we layer automation on top.",
  },
  {
    question: "Does this replace my office admin or receptionist?",
    answer:
      "It supports them by removing repetitive, high-volume tasks — SMS reminders, missed-call responses, quote nudges, booking confirmations — so they can focus on customer service, complex scheduling, and problem-solving. Most tradies keep their admin person but free them up for higher-value work. The AI handles the volume; the human handles the nuance.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most tradies see measurable improvement within the first week. Setup takes 2-5 business days. After going live, track four numbers: inbound calls, missed calls, missed calls that get a response, and recovered jobs. If you recover 3 extra jobs at $350 each in your first week, that's $1,050 against a $99-150/mo system cost. ROI is typically 700-1,000% in the first month.",
  },
];

export default function TradieAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AI Adelaide",
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
            areaServed: { "@type": "City", name: "Adelaide" },
            description:
              "AI automation for Adelaide tradies — missed-call capture, quote follow-up, booking management, and admin workflows.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Automation for Adelaide Tradies",
            provider: {
              "@type": "LocalBusiness",
              name: "AI Adelaide",
              url: "https://aiadelaide.com.au",
            },
            areaServed: { "@type": "City", name: "Adelaide" },
            description:
              "Custom AI automation for Adelaide tradies — missed-call capture, quote follow-up, booking reminders, and admin workflows.",
            offers: {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "AUD",
            },
          }),
        }}
      />

      <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
        {/* Hero */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light p-8 md:p-12">
            <div className="mb-6">
              <span className="eyebrow-light">AI Services for Tradies</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              AI Automation for Adelaide Tradies — Stay on the Tools, We'll Handle the Phones
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              If your phone rings while you're on a roof, under a sink, or driving between jobs,
              you're leaving money on the table. We build tradie automation that captures every call,
              follows up quotes automatically, and cuts admin by 70% —{" "}
              <strong>Adelaide-based setup, 2-5 business days.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book your free workflow audit <span aria-hidden>→</span>
              </Link>
              <a href="tel:+61871009788" className="btn-outline-light px-8 py-4">
                (08) 7100 9788
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Tradies Don't Have a Lead Problem — They Have a Response-Time Problem
            </h2>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              Here's the math for a typical Adelaide tradie:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>40 inbound calls a week from enquiries and referrals</li>
              <li>25% missed because you're on-site or it's after hours</li>
              <li>50% of those callers never pick up when you call back later</li>
              <li>Average job value: $350-420 for smaller work, much higher for urgent jobs</li>
            </ul>
            <p className="text-body-mobile text-slate-700 md:text-body">
              That's <strong>roughly $2,100 in lost weekly revenue</strong> from calls you've already
              paid to generate through Google Ads, SEO, signage, and word of mouth. Over a year,
              that's $100,000+ in work leaking through one bottleneck: no immediate response.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Stats from real Adelaide tradie data (blog posts, audit findings).
            </p>
          </div>
        </section>

        {/* What We Automate */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What We Automate for Tradies
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Missed-Call Capture &amp; SMS
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Caller gets an SMS in 10-20 seconds acknowledging the call. AI asks one qualifying
                  question, books a callback slot, and pushes details into your CRM. Recovery rate
                  goes from ~28% to ~67%.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Quote Follow-Up Sequences
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Day 1 thank-you, Day 3 check-in, Day 7 final touch — all sent automatically.
                  Tracks opens and forwards. Flags hot leads for personal follow-up. 35-50%
                  conversion lift on average.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  24/7 AI Receptionist
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Answers every call — during jobs, after hours, weekends. Books appointments,
                  answers FAQs, qualifies emergency vs non-urgent. Australian accent. No hold music.
                  Your number stays the same.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Job Booking &amp; Reminders
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Calendar syncs in real-time. Auto-blocks travel time between jobs. SMS reminders
                  at 24hr + 2hr before. Customer can reschedule by text. No-shows drop from 20% to 7%.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Invoice &amp; Payment Chase
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Invoice generated and sent on job completion. Payment reminders at Day 7/14/21.
                  Average collection time drops from 22 to 14 days — better cash flow without the
                  awkward phone calls.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Reviews &amp; Referrals on Autopilot
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Auto-sends Google review link 24hr after job completion. One gentle nudge at Day 7.
                  Referral prompt after a 5-star review. Builds your online reputation while you sleep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trades We Serve */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Trades We Work With
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Plumbers</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Emergency call screening, burst-pipe priority routing, quote booking for bathroom
                  renos. AI sorts the "water through the ceiling" from the "can you quote a new tap?"
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Electricians</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  After-hours fault triage, safety-urgent escalation, switchboard upgrade quoting.
                  A Morphett Vale sparky caught a $12,000 job from a 6pm call he would've missed.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Builders &amp; Carpenters</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Project enquiry intake, site meeting scheduling, supplier call routing,
                  variation quote follow-up. Keeps the build moving while the office stays organised.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Painters</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Quote bookings with room measurements, colour consultation scheduling, availability
                  checks. No more "I'll measure up when I can" turning into a lost job.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">HVAC &amp; Refrigeration</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  40% of after-hours emergency calls go unanswered. AI captures the "cool room's
                  down and I've got $3K of stock at risk" calls and routes them immediately.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Concreters &amp; Landscapers</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Site visit scheduling with photo requests, weather-dependent job rescheduling,
                  material quantity quote follow-up. Keeps long-cycle jobs from going cold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Real Result: Eastern Suburbs Electrical
            </h2>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              A two-person electrical business in Adelaide's eastern suburbs was averaging 55
              inbound calls a week. They missed about 14. Before automation, they recovered only
              3-4 of those missed calls.
            </p>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              After implementing automated follow-up:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>Response time dropped from "later tonight" to under 30 seconds</li>
              <li>Missed-call recovery increased from ~28% to ~67%</li>
              <li>They converted an additional 4-5 jobs per week</li>
              <li>At an average $390 per recovered job, extra weekly revenue sat around $1,560-$1,950</li>
            </ul>
            <p className="text-body-mobile text-slate-700 md:text-body">
              Same team. Same phones. Same ad spend. Better capture.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What It Costs
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              No lock-in contracts. No "call for pricing" games. Start with the one workflow that
              leaks the most revenue and scale from there.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">START</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Free Audit</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">$0</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Review your missed-call + admin gaps</li>
                  <li>Show you the fastest win to set up first</li>
                  <li>Plain-English summary of what to change</li>
                  <li>No obligation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">SETUP</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Implementation</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  from $99 <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>AI receptionist or missed-call capture</li>
                  <li>Quote follow-up or reminder sequences</li>
                  <li>Calendar &amp; CRM integration</li>
                  <li>2-5 business day setup</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">GROW</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Ongoing Support</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  $299-699 <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Monthly improvements + new workflows</li>
                  <li>Performance monitoring &amp; reporting</li>
                  <li>Priority support (same-day)</li>
                  <li>Multi-workflow automation</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ROI: Most tradies recover setup cost within 30 days. Recovering 3 extra jobs at
              $350 each = $1,050/week against a $99-150/mo system.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-center text-h2-mobile text-slate-950 md:text-h2">
              How It Works
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-body-mobile text-slate-700 md:text-body">
              No drawn-out consulting project. We find the leak, set up the system, and get it working
              — usually within a week.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">01</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Map Your Workflow</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">30-60 min call</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We look at how calls, quotes, and admin are currently handled — where leads get lost
                  and what the first win should be.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">02</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Set Up Your System</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">2-5 business days</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We configure the AI, connect your tools, write your scripts, test everything, and
                  hand it over with a simple walkthrough.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">03</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">You Get Back to Work</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">Ongoing support</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Customers get instant responses, you get the details in your CRM, and we keep
                  improving as your business grows. You focus on the tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                  <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Stop Missing Jobs While You're on the Tools
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute audit. We'll map your current call flow, show you where jobs are
              leaking, and give you a clear plan — no obligation.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Book your free workflow audit <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
              Or call <a href="tel:+61871009788" className="underline">(08) 7100 9788</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
