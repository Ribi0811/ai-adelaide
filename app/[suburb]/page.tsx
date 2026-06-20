import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import suburbs from "@/data/suburbs.json";
import { siteConfig, services, testimonials } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    title: `${suburb.name} Websites, SEO & AI Automation | AI Adelaide`,
    description: `Website design from $699, local SEO, and AI automation for ${suburb.name} small businesses. Adelaide-based, no lock-in. Call ${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.url}/${suburb.slug}` },
    openGraph: {
      title: `${suburb.name} Websites, SEO & AI Automation | AI Adelaide`,
      description: `Website design from $699, local SEO, and AI automation for ${suburb.name} small businesses. Adelaide-based, no lock-in.`,
    },
  };
}

function buildFaqs(suburb: Suburb) {
  return [
    {
      question: `How much does a website cost for a ${suburb.name} business?`,
      answer: `Our Starter website is $699 for a 3-page site — perfect for getting online fast. The Business tier is $1,299 for 5-7 pages with blog and SEO foundation. The Growth tier is $2,499 for 10+ pages with suburb targeting and automation integrations. All prices are one-off, no lock-in. See our ${suburb.name} website pricing page for full details.`,
    },
    {
      question: `Can you help my ${suburb.name} business rank on Google?`,
      answer: `Yes. We do local SEO for ${suburb.name} businesses — keyword research tied to your services and suburb, service pages that target buying intent, suburb pages, blog content answering real customer questions, and Google Search Console monitoring. SEO retainers start from $399/month. Most ${suburb.name} businesses see results within 2-4 months for local keywords.`,
    },
    {
      question: `What types of businesses in ${suburb.name} do you work with?`,
      answer: `We work with ${suburb.name} tradies (plumbers, electricians, builders, HVAC), allied health clinics (physio, chiro, dental), cafes and restaurants, retail shops, beauty salons, professional services, and automotive. If you're a small business in ${suburb.name} that needs a website, SEO or automation, we can help.`,
    },
    {
      question: `How quickly can you build a website for my ${suburb.name} business?`,
      answer: `Starter websites are live in 48 hours. Business tier takes 5-7 days. Growth tier takes 10-14 days. We handle all copywriting, design and setup — you just tell us about your business and review the result.`,
    },
    {
      question: `Do you offer automation for ${suburb.name} businesses?`,
      answer: `Yes. We set up missed call text-back systems, AI receptionist, quote follow-up sequences, appointment reminders and review automation for ${suburb.name} businesses. Automation starts from $199/month. Most ${suburb.name} tradies recover 3-5 extra jobs per week.`,
    },
    {
      question: `What does it cost for a ${suburb.name} business?`,
      answer: `Websites from $699 one-off. SEO from $399/month. Automation from $199/month. No lock-in contracts. Most ${suburb.name} businesses recover their investment within 30 days — a $699 website that brings in one extra $800 job has already paid for itself.`,
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
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: suburb.name },
          ]}
        />
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light relative overflow-hidden p-8 md:p-12">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${suburb.heroColor || "from-accent/15 via-electric/10 to-accent/15"}`} />
            <div className="relative">
              <div className="mb-6">
                <span className="eyebrow-light">{suburb.name} websites, SEO & automation</span>
              </div>
              <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
                Websites, SEO &amp; AI Automation for {suburb.name} Businesses
              </h1>
              <p className="mb-3 max-w-3xl text-lg font-medium text-[#1E3A5F] md:text-xl">
                {suburb.heroLine}
              </p>
              <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
                {suburb.intro} <strong>Websites from $699, SEO from $399/month, automation from $199/month — Adelaide-based, no lock-in contracts.</strong>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Book Free Chat <span aria-hidden>→</span>
                </Link>
              <a href={siteConfig.phoneHref} className="btn-outline-light px-8 py-4">
                {siteConfig.phone}
              </a>
              </div>
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
              Ready to grow your {suburb.name} business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute chat. We'll look at your website, your Google ranking, and your admin bottlenecks — then tell you exactly what we'd recommend. No obligation, no pressure.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
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
