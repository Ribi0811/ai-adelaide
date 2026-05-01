import Link from "next/link";

export interface SuburbAutomationPageProps {
  suburb: string;
  region?: string; // "eastern suburbs", "southern suburbs", "inner west", etc.
  tradieFocus?: string; // specific tradie types relevant to this suburb
  knownFor?: string; // what this suburb is known for
}

const defaultFaqs = (suburb: string) => [
  {
    question: `How does AI automation work for a tradie in ${suburb}?`,
    answer: `The AI runs in the background while you work. When a call comes in and you can't answer (because you're on a roof, under a house, or driving between jobs in ${suburb}), the system sends an SMS to the caller in 10-20 seconds acknowledging the call, asks one qualifying question, and books a callback slot — all automatically. Details go straight into your CRM or job management app so when you're off the tools, you've got full context, not just a missed-call notification.`,
  },
  {
    question: `What types of businesses in ${suburb} benefit most from automation?`,
    answer: `Tradies and owner-operators in ${suburb} see the fastest ROI — plumbers, electricians, builders, painters, concreters, landscapers, and HVAC technicians who are on-site all day and miss 25-40% of their calls. Allied health clinics (physio, chiro, dental) benefit from automated appointment reminders that reduce no-shows from 20% to 7%. Local retail and hospitality businesses use AI to capture after-hours bookings and enquiries.`,
  },
  {
    question: `Can AI automation handle after-hours and weekend calls from ${suburb} customers?`,
    answer: `Yes. The AI receptionist answers 24/7 — including weekends, public holidays, and that 7pm call from a ${suburb} homeowner whose hot water has died. It qualifies the urgency, books appointments, answers FAQs, and escalates genuine emergencies to your mobile. It sounds human, uses an Australian accent, and most callers don't realise they're talking to AI.`,
  },
  {
    question: "Will it integrate with ServiceM8, Tradify, or my existing tools?",
    answer:
      "Almost certainly. We connect with ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, Cliniko, Nookal, and most popular CRMs and job management platforms. If your tool has an API or webhook, we can usually integrate it within 1-2 days. You keep using the tools you already know — we layer automation on top.",
  },
  {
    question: "How quickly can I get this set up and see results?",
    answer:
      "Setup takes 2-5 business days. Most tradies see measurable improvement within the first week — response times drop from hours to under 30 seconds, missed-call recovery goes from ~28% to ~67%, and recovered revenue starts flowing immediately. Most businesses recover their setup cost within the first 30 days.",
  },
  {
    question: "What does it cost for a local business?",
    answer:
      "No lock-in contracts. Entry-level automation (missed-call SMS or basic AI receptionist) starts from $99/month. A more comprehensive setup with AI receptionist, quote follow-up, scheduling, and ongoing improvements runs $299-699/month. Most businesses recover their investment within 30 days — recovering 3 extra jobs at $350 each = $1,050/week against a $99-150/mo system.",
  },
];

export default function SuburbAutomationPage({
  suburb,
  region,
  tradieFocus,
  knownFor,
}: SuburbAutomationPageProps) {
  const faqs = defaultFaqs(suburb);

  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AI Adelaide",
            url: `https://www.aiadelaide.com.au/ai-automation-${suburb.toLowerCase()}`,
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
            areaServed: {
              "@type": "AdministrativeArea",
              name: `${suburb}, SA`,
            },
            description: `Local AI automation for tradies and small businesses in ${suburb} — missed-call capture, quote follow-up, booking reminders, and 24/7 AI receptionist. Adelaide-based setup.`,
          }),
        }}
      />
      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `AI Automation for ${suburb} Businesses`,
            provider: {
              "@type": "LocalBusiness",
              name: "AI Adelaide",
              url: "https://www.aiadelaide.com.au",
            },
            areaServed: { "@type": "AdministrativeArea", name: `${suburb}, SA` },
            description: `Custom AI automation for ${suburb} tradies and small businesses — missed-call capture, quote follow-up, booking reminders, 24/7 AI receptionist.`,
            offers: { "@type": "Offer", price: "99.00", priceCurrency: "AUD" },
          }),
        }}
      />

      <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light p-8 md:p-12">
            <div className="mb-6">
              <span className="eyebrow-light">{suburb} AI automation services</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              AI Automation for {suburb} Small Businesses &amp; Tradies
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              {tradieFocus || "Tradies and owner-operators"} in {suburb}
              {region ? ` (${region})` : ""} are flat out on-site, then buried in admin after
              hours. If your calls, quote follow-ups, and booking messages are handled manually,
              leads slip through the cracks before you even get back to the ute.{" "}
              <strong>We build practical AI automation that plugs into your workflow — Adelaide-based setup, 2-5 business days.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book your free {suburb} audit <span aria-hidden>→</span>
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
              Why {suburb} Businesses Are Automating Now
            </h2>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              Most small teams in {suburb} don't have a dedicated admin person monitoring every
              channel all day. Calls come in while you're quoting, texts pile up during installs,
              and follow-up tasks sit in notebooks until the end of the week. This is exactly where
              revenue leakage happens.
            </p>
            {knownFor && (
              <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
                {suburb} is known for {knownFor} — which means demand comes in waves, often outside
                standard business hours. When customers can't reach you immediately, they call the
                next business in the map pack within 60 seconds.
              </p>
            )}
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              The numbers are stark for a typical {suburb} tradie:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>40 inbound calls a week — 25% missed because you're on a job</li>
              <li>50% of those callers never answer your callback later</li>
              <li>3-5 lost jobs per week at $350-420 average = $1,050-$2,100 in leaked revenue</li>
              <li>Over a year, that's $50,000-$100,000+ walking out the door</li>
            </ul>
            <p className="text-body-mobile text-slate-700 md:text-body">
              Our approach is simple: start with one workflow that has clear ROI (usually
              missed-call SMS capture), then layer in the next improvement once your team sees
              results. Because the automation runs 24/7, your business looks responsive even when
              you're on tools.
            </p>
          </div>
        </section>

        {/* ── What We Automate ──────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What We Do for {suburb} Businesses
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Answer Calls Instantly — 24/7
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  AI handles missed calls and after-hours enquiries so every prospect gets a fast
                  first response. SMS acknowledgement in 10-20 seconds. Qualifies urgency, books
                  callback slots, pushes details to your CRM.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Follow Up Quotes Automatically
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Day 1 thank-you, Day 3 check-in, Day 7 final touch — all sent without you
                  touching your phone. Tracks opens and forwards. 35-50% conversion lift.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Book Jobs Into Your Calendar
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Qualified leads push into your schedule with full details. Auto-blocks travel
                  time. SMS reminders at 24hr + 2hr before appointments. No-shows drop 65%.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Automate Admin &amp; Payments
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Invoices generated on job completion. Payment reminders at Day 7/14/21.
                  Collection time drops from 22 to 14 days. Your admin hours cut by 70%.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Build Your Reputation While You Work
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Auto-sends Google review link 24hr after job completion. Gentle nudge at Day 7.
                  Referral prompt after a 5-star review. Runs in the background, builds trust.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Integrated with Your Stack
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Connects with ServiceM8, Tradify, Jobber, Xero, Google Calendar, and 50+
                  platforms. We don't replace your tools — we make them work together automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who It's For ──────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Who in {suburb} Benefits Most
            </h2>
            <div className="grid gap-4 text-body-mobile text-slate-700 md:grid-cols-2 md:text-body">
              <ul className="list-disc space-y-1 pl-6">
                <li>Plumbers — emergency call screening, burst-pipe priority routing</li>
                <li>Electricians — after-hours fault triage, safety-urgent escalation</li>
                <li>Builders &amp; carpenters — project enquiry intake, site meeting scheduling</li>
                <li>Painters — quote bookings, colour consultation scheduling</li>
              </ul>
              <ul className="list-disc space-y-1 pl-6">
                <li>HVAC &amp; refrigeration — 24/7 emergency call capture</li>
                <li>Concreters &amp; landscapers — site visit scheduling, weather rescheduling</li>
                <li>Allied health clinics — no-show reduction, 24/7 patient booking</li>
                <li>Cafes &amp; retail — after-hours booking and enquiry capture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Case Study ────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Real Result: Adelaide Tradie Automation in Action
            </h2>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              A two-person electrical business in Adelaide's eastern suburbs was averaging 55
              inbound calls a week. They missed about 14 — recovering only 3-4 manually.
            </p>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              After implementing automated missed-call SMS and follow-up:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>Response time dropped from "later tonight" to under 30 seconds</li>
              <li>Missed-call recovery increased from ~28% to ~67%</li>
              <li>Extra weekly revenue: $1,560-$1,950 from recovered jobs</li>
              <li>Same team, same phones, same ad spend — just better capture</li>
            </ul>
            <p className="text-body-mobile text-slate-700 md:text-body">
              Another example: a Stirling physiotherapy clinic cut no-shows from 20% to 7%,
              recovering ~$1,200/week in previously lost appointment slots using automated
              SMS reminders.
            </p>
          </div>
        </section>

        {/* ── Pricing ───────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What It Costs — {suburb} Pricing
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              Transparent pricing. No lock-in contracts. Start with the one workflow that's
              leaking the most revenue and scale from there.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">START</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Free Audit</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">$0</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Review your current workflow gaps</li>
                  <li>Identify the fastest automation win</li>
                  <li>Clear implementation plan</li>
                  <li>No obligation to continue</li>
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
              ROI: Recovering 3 extra jobs at $350 each = $1,050/week against a $99-150/mo
              system. Most {suburb} businesses recover their investment within 30 days.
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
              No drawn-out consulting. We find the leak, set up the system, and get it working —
              usually within a week.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">01</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Audit Your Workflow</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">30-60 min call</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We map how calls, quotes, and admin work now — where leads leak and what the
                  first automation win should be.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">02</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Build Your System</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">2-5 business days</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We configure the AI, connect your tools, write your scripts, test thoroughly,
                  and hand it over with clear docs.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">03</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">You Get Results</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">Ongoing support</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Customers get instant responses, you get the leads back, and we keep refining.
                  You stay focused on the work that pays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
              FAQ — {suburb} AI Automation
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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
              Ready to Stop Missing Jobs in {suburb}?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute audit. We'll map your call flow, show you where jobs are
              leaking, and give you a clear automation plan for {suburb} — no obligation.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Book your free {suburb} audit <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
              Or call{" "}
              <a href="tel:+61871009788" className="underline">
                (08) 7100 9788
              </a>
            </p>
            <div className="mt-5 flex justify-center gap-6 text-sm text-slate-600">
              <Link href="/">Home</Link>
              <Link href="/ai-automation-adelaide">Adelaide Automation</Link>
              <Link href="/services">Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
