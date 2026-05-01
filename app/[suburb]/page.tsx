import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import suburbs from "@/data/suburbs.json";
import { siteConfig, services, testimonials } from "@/lib/constants";

type Suburb = (typeof suburbs)[number];

interface SuburbPageProps {
  params: { suburb: string };
}

function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((suburb) => suburb.slug === slug);
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: suburb.slug }));
}

export function generateMetadata({ params }: SuburbPageProps): Metadata {
  const suburb = getSuburb(params.suburb);
  if (!suburb) return {};
  return {
    title: `AI Automation in ${suburb.name}, Adelaide | AI Adelaide`,
    description: suburb.intro,
    alternates: { canonical: `${siteConfig.url}/${suburb.slug}` },
    openGraph: {
      title: `AI Automation in ${suburb.name}, Adelaide | AI Adelaide`,
      description: suburb.intro,
    },
  };
}

function buildFaqs(suburb: Suburb) {
  return [
    {
      question: `How does AI automation help a tradie in ${suburb.name}?`,
      answer: `When you're on a job in ${suburb.name} and can't answer, the AI sends an SMS acknowledgement in 10–20 seconds, qualifies the call, and books a callback slot — all automatically. Details go straight into your CRM so when you're off the tools you have full context, not just a missed-call notification. Most ${suburb.name} tradies recover 3–5 extra jobs per week.`,
    },
    {
      question: `What types of businesses in ${suburb.name} benefit most?`,
      answer: `Tradies and owner-operators in ${suburb.name} see the fastest ROI — plumbers, electricians, builders, painters, and HVAC techs who miss 25–40% of calls while on-site. Allied health clinics (physio, chiro, dental) reduce no-shows from 20% to 7% with automated reminders. Cafes, restaurants, and retail capture after-hours bookings that would otherwise go to competitors.`,
    },
    {
      question: `Can it handle after-hours and weekend calls from ${suburb.name} customers?`,
      answer: `Yes — 24/7 including weekends and public holidays. Whether it's a ${suburb.name} homeowner with a burst pipe at 9pm or a Saturday brunch booking for Jetty Road, the AI qualifies urgency, books appointments, answers FAQs, and escalates genuine emergencies to your mobile. It uses an Australian accent and most callers don't realise they're talking to AI.`,
    },
    {
      question: `Will it integrate with ServiceM8, Tradify, or my existing tools?`,
      answer: `Almost certainly. We connect with ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, Cliniko, and most CRMs and job management platforms. If your tool has an API or webhook we can usually integrate within 1–2 days. You keep using the tools you already know — we layer automation on top.`,
    },
    {
      question: `How quickly can I get set up and see results?`,
      answer: `Setup takes 2–5 business days. Most ${suburb.name} tradies see measurable improvement within the first week — response times drop from hours to under 30 seconds, missed-call recovery jumps from ~28% to ~67%, and recovered revenue starts flowing immediately. Most businesses recover their setup cost within the first 30 days.`,
    },
    {
      question: `What does it cost for a ${suburb.name} business?`,
      answer: `Entry-level automation (missed-call SMS or basic AI receptionist) starts from $99/month. A comprehensive setup with AI receptionist, quote follow-up, scheduling, and ongoing improvements runs $299–699/month. No lock-in contracts. Most businesses recover their investment within 30 days — recovering 3 extra jobs at $350 each = $1,050/week against a $99–150/mo system.`,
    },
  ];
}

export default function SuburbPage({ params }: SuburbPageProps) {
  const suburb = getSuburb(params.suburb);
  if (!suburb) notFound();

  const faqs = buildFaqs(suburb);
  const matchedTestimonial = testimonials.find(
    (t) => t.location.toLowerCase() === suburb.name.toLowerCase()
  );

  return (
    <>
      {/* ── FAQPage Schema ────────────────────────────────── */}
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

      {/* ── LocalBusiness Schema ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            url: `${siteConfig.url}/${suburb.slug}`,
            description: suburb.intro,
            telephone: siteConfig.phoneHref?.replace("tel:", ""),
            email: siteConfig.email,
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
              name: `${suburb.name}, SA`,
            },
            serviceType: ["AI Automation", "AI Receptionist", "SEO"],
          }),
        }}
      />

      {/* ── Service Schema ────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `AI Automation for ${suburb.name} Businesses`,
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: `${suburb.name}, SA`,
            },
            description: `Missed-call capture, quote follow-up, 24/7 AI receptionist and admin automation for tradies and small businesses in ${suburb.name}. Adelaide-based, 2-5 day setup.`,
            offers: {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "AUD",
            },
          }),
        }}
      />

      <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light p-8 md:p-12">
            <div className="mb-6">
              <span className="eyebrow-light">{suburb.name} AI automation services</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              AI Automation for {suburb.name} Small Businesses &amp; Tradies
            </h1>
            <p className="mb-3 max-w-3xl text-lg font-medium text-[#1E3A5F] md:text-xl">
              {suburb.heroLine}
            </p>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              {suburb.intro} <strong>We set up the automation in 2–5 business days — Adelaide-based, no lock-in contracts.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book your free {suburb.name} audit <span aria-hidden>→</span>
              </Link>
              <a href={siteConfig.phoneHref} className="btn-outline-light px-8 py-4">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ── Pain Points ────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
            Common bottlenecks for {suburb.name} businesses
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {suburb.painPoints.map((painPoint, index) => (
              <article key={painPoint.slice(0, 30)} className="panel-light p-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                  Pain point {index + 1}
                </p>
                <p className="text-body-mobile text-slate-700 md:text-body">{painPoint}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Now ─────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Why now in {suburb.name}
            </h2>
            <p className="max-w-4xl text-body-mobile text-slate-700 md:text-body">
              {suburb.whyNow}
            </p>
          </div>
        </section>

        {/* ── What We Automate ────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
            What we automate for {suburb.name} businesses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Answer Calls Instantly — 24/7",
                body: "AI handles missed calls and after-hours enquiries so every prospect gets a fast first response. SMS acknowledgement in 10–20 seconds. Qualifies urgency, books callback slots, pushes details to your CRM.",
              },
              {
                title: "Follow Up Quotes Automatically",
                body: "Day 1 thank-you, Day 3 check-in, Day 7 final touch — all sent without you touching your phone. Tracks opens and forwards. 35–50% conversion lift.",
              },
              {
                title: "Book Jobs Into Your Calendar",
                body: "Qualified leads push into your schedule with full details. SMS reminders at 24hr + 2hr before appointments. No-shows drop 65%.",
              },
              {
                title: "Automate Admin & Payments",
                body: "Invoices generated on job completion. Payment reminders at Day 7/14/21. Collection time drops from 22 to 14 days. Admin hours cut by 70%.",
              },
              {
                title: "Build Reviews While You Work",
                body: "Auto-sends Google review link 24hr after job completion. Gentle nudge at Day 7. Referral prompt after 5-star review. Runs in the background.",
              },
              {
                title: "Integrated with Your Stack",
                body: "Connects with ServiceM8, Tradify, Jobber, Xero, Google Calendar, and 50+ platforms. We don't replace your tools — we make them work together.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  {item.title}
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Industries ──────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
            Industries we support in {suburb.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {suburb.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* ── Case Study / Testimonial ────────────────────────── */}
        {matchedTestimonial && (
          <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
            <div className="panel-light p-8 md:p-10">
              <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
                Real result from a {suburb.name} business
              </h2>
              <blockquote className="mb-4 border-l-4 border-accent pl-6 text-body-mobile text-slate-700 italic md:text-body">
                &ldquo;{matchedTestimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-slate-500">
                — {matchedTestimonial.name}, {matchedTestimonial.role}, {matchedTestimonial.location}
              </p>
            </div>
          </section>
        )}

        {/* ── Pricing ─────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What it costs — {suburb.name} pricing
            </h2>
            <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
              Transparent pricing. No lock-in contracts. Start with the one workflow leaking the most revenue and scale from there.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">START</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Free Audit</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">$0</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
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
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>AI receptionist or missed-call capture</li>
                  <li>Quote follow-up or reminder sequences</li>
                  <li>Calendar &amp; CRM integration</li>
                  <li>2–5 business day setup</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">GROW</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Ongoing Support</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  $299–699 <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>Monthly improvements + new workflows</li>
                  <li>Performance monitoring &amp; reporting</li>
                  <li>Priority support (same-day)</li>
                  <li>Multi-workflow automation</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ROI: Recovering 3 extra jobs at $350 each = $1,050/week against a $99–150/mo system. Most {suburb.name} businesses recover their investment within 30 days.
            </p>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
              FAQ — {suburb.name} AI Automation
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                    {faq.question}
                  </h3>
                  <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 pb-2 text-center md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Ready to stop missing jobs in {suburb.name}?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute audit. We&apos;ll map your call flow, show you where jobs are leaking, and give you a clear automation plan — no obligation.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Book your free {suburb.name} audit <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
              Or call{" "}
              <a href={siteConfig.phoneHref} className="underline">
                {siteConfig.phone}
              </a>
            </p>

            {/* ── Internal Links ───────────────────────────────── */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
                <Link href="/" className="underline hover:text-accent">Home</Link>
                <Link href="/ai-automation-adelaide" className="underline hover:text-accent">Adelaide AI Automation</Link>
                <Link href="/ai-receptionist-adelaide" className="underline hover:text-accent">AI Receptionist</Link>
                <Link href="/services" className="underline hover:text-accent">All Services</Link>
                <Link href="/blog" className="underline hover:text-accent">Blog</Link>
                <Link href="/contact" className="underline hover:text-accent">Contact</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
