import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import suburbs from "@/data/suburbs.json";
import { PRICING, siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import SuburbHero from "@/components/SuburbHero";

// Optional per-suburb SEO overrides (T4): only the highest-value suburbs set
// these to target their exact GSC query ("website designer {suburb}"). All
// others fall back to the shared template below.
type Suburb = (typeof suburbs)[number] & {
  seoTitle?: string;
  seoDescription?: string;
};

interface SuburbPageProps {
  params: { suburb: string };
}

function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((suburb) => suburb.slug === slug) as Suburb | undefined;
}

function renderSeoTemplate(value: string): string {
  const websiteFromTitle = PRICING.website.fromLabel.replace(/^./, (letter) => letter.toUpperCase());
  return value
    .replaceAll("{websiteFrom}", PRICING.website.fromLabel)
    .replaceAll("{websiteFromTitle}", websiteFromTitle);
}

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ suburb: suburb.slug }));
}

export function generateMetadata({ params }: SuburbPageProps): Metadata {
  const suburb = getSuburb(params.suburb);
  if (!suburb) return {};
  const ogImageUrl = `${siteConfig.url}/${suburb.slug}/opengraph-image`;
  const ogImageAlt = `AI Adelaide — ${suburb.name} (${suburb.postcode}) websites, SEO and AI automation services`;
  // Tier 12 template; T4 (2026-07-13) adds optional per-suburb overrides that
  // target the exact "website designer {suburb}" GSC query. seoTitle already
  // includes "| AI Adelaide", so it must bypass the layout template via
  // title.absolute (the template appends "| AI Adelaide" to plain strings).
  const templateTitle = `${suburb.name} Web Design, SEO & AI Automation`;
  const templateDesc = `Website design ${PRICING.website.fromLabel}, local SEO, and AI automation for ${suburb.name} small businesses. Adelaide-based, no lock-in contracts. Call ${siteConfig.phone}.`;
  const customTitle = suburb.seoTitle ? renderSeoTemplate(suburb.seoTitle) : null;
  const ogTitle = customTitle ?? templateTitle;
  const description = suburb.seoDescription ? renderSeoTemplate(suburb.seoDescription) : templateDesc;
  return {
    title: customTitle ? { absolute: customTitle } : templateTitle,
    description,
    keywords: [
      `AI websites ${suburb.name}`,
      `SEO ${suburb.name}`,
      `AI automation ${suburb.name}`,
      `website design ${suburb.name}`,
      `local SEO ${suburb.name}`,
      `small business ${suburb.name}`,
      `${suburb.name} web design`,
      `Adelaide ${suburb.name} web design`,
    ],
    alternates: { canonical: `${siteConfig.url}/${suburb.slug}` },
    openGraph: {
      title: ogTitle,
      description,
      url: `${siteConfig.url}/${suburb.slug}`,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

function buildFaqs(suburb: Suburb) {
  const standard = [
    {
      question: `How much does a website cost for a ${suburb.name} business?`,
      answer: `Our Starter website is ${PRICING.website.tiers[0].price} for a 3-page site. The Business tier is ${PRICING.website.tiers[1].price} for 5-7 pages with blog and SEO foundation. The Growth tier is ${PRICING.website.tiers[2].price} for 10+ pages with suburb targeting and automation integrations. All prices are one-off, no lock-in. See our website pricing page for full details.`,
    },
    {
      question: `Can you help my ${suburb.name} business rank on Google?`,
      answer: `Yes. We do local SEO for ${suburb.name} businesses — keyword research tied to your services and suburb, service pages that target buying intent, useful local content, and Google Search Console monitoring. SEO retainers start from ${PRICING.seo.from}. Timing depends on your starting position, competition, website and Google's ranking systems, so we establish a baseline and report movement rather than guarantee a position.`,
    },
    {
      question: `How quickly can you build a website for my ${suburb.name} business?`,
      answer: `Starter websites are live in 48 hours. Business tier takes 5-7 days. Growth tier takes 10-14 days. We handle all copywriting, design and setup — you just tell us about your business and review the result.`,
    },
    {
      question: `Do you offer automation for ${suburb.name} businesses?`,
      answer: `Yes. We set up missed-call text-back systems, AI receptionist, quote follow-up sequences, appointment reminders and review automation for ${suburb.name} businesses. Automation starts from ${PRICING.automation.from}. We define the workflow and success measure first, then track the calls, replies, bookings or admin time it actually changes.`,
    },
    {
      question: `What does it cost for a ${suburb.name} business?`,
      answer: `Websites start ${PRICING.website.fromLabel} one-off, SEO ${PRICING.seo.fromLabel}, and automation ${PRICING.automation.fromLabel}. There are no lock-in contracts. Payback depends on your margins, lead volume and close rate; we can model a conservative break-even point using your own numbers before you proceed.`,
    },
  ];
  // Merge suburb-specific FAQs (1-2 unique Qs per suburb from data/suburbs.json)
  const custom = (suburb as { customFaqs?: { question: string; answer: string }[] }).customFaqs ?? [];
  return [...standard, ...custom];
}

export default function SuburbPage({ params }: SuburbPageProps) {
  const suburb = getSuburb(params.suburb);
  if (!suburb) notFound();

  const faqs = buildFaqs(suburb);
  const websiteIntentPage = Boolean(suburb.seoTitle);
  const capabilityItems = websiteIntentPage
    ? [
        {
          title: "Mobile-first website design",
          body: `A fast, clear website for ${suburb.name} customers with click-to-call, enquiry forms, readable service pages and a simple path to book or request a quote.`,
        },
        {
          title: "Copywriting and service structure",
          body: "We turn what you tell us about the business into clear service copy, then you review every claim before the website goes live.",
        },
        {
          title: "Google-ready foundations",
          body: "One clear page topic, useful headings, metadata, internal links, structured data where appropriate, analytics and Search Console setup.",
        },
        {
          title: "Local enquiry pathways",
          body: `Calls, forms and booking actions are prominent on mobile, with genuine ${suburb.name} service information rather than generic suburb-name swapping.`,
        },
        {
          title: "Easy future expansion",
          body: "Add service pages, case studies, local SEO or automation later without rebuilding the original website from scratch.",
        },
        {
          title: "Adelaide-based support",
          body: "You deal directly with a local studio for launch changes, ongoing improvements and practical advice about what to prioritise next.",
        },
      ]
    : [
        {
          title: "Answer Calls Instantly — 24/7",
          body: "AI handles missed calls and after-hours enquiries so every prospect gets a fast first response. SMS acknowledgement can be configured in seconds, with urgency, callback and CRM details captured.",
        },
        {
          title: "Follow Up Quotes Automatically",
          body: "Day 1, Day 3 and Day 7 follow-up can run without manual chasing. An illustrative improvement target may be 35–50% in quote-to-job conversion, but the result depends on your baseline, offer and lead quality and is not guaranteed.",
        },
        {
          title: "Book Jobs Into Your Calendar",
          body: "Qualified leads can move into your schedule with appointment reminders. A 65% reduction in no-shows is an illustrative target for suitable reminder workflows, not a promised result.",
        },
        {
          title: "Automate Admin & Payments",
          body: "Invoices and payment reminders can run on a set schedule. A 70% reduction in repetitive admin is an illustrative target for well-defined workflows; we measure the actual time saved after launch.",
        },
        {
          title: "Build Reviews While You Work",
          body: "Send a Google review link after a completed job, with a polite follow-up if appropriate. Customers choose whether to review and every review must be genuine.",
        },
        {
          title: "Integrated with Your Stack",
          body: "We scope connections to the tools you already use, such as job management, accounting, CRM and calendar platforms, before confirming what can be automated.",
        },
      ];

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

      {/* ── Service Schema ────────────────────────────────── */}
      {/* T4 (2026-07-13): removed the page-level LocalBusiness block (the ONE
          business entity lives in app/layout.tsx as @id .../#organization) and
          the dead "$99" Service offer (no such tier; prices come from PRICING).
          The Service now references the root org by @id instead of embedding a
          second business. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Web Design, SEO & AI Automation for ${suburb.name} Businesses`,
            provider: {
              "@id": "https://aiadelaide.com.au/#organization",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: `${suburb.name}, SA`,
            },
            description: `Website design, local SEO, missed-call capture and 24/7 AI receptionist for tradies and small businesses in ${suburb.name}. Adelaide-based, no lock-in.`,
          }),
        }}
      />

      {/* ── WebPage Schema ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${siteConfig.url}/${suburb.slug}#webpage`,
            url: `${siteConfig.url}/${suburb.slug}`,
            name: suburb.heroLine ? `${suburb.heroLine} | AI Adelaide` : `${suburb.name} Web Design, SEO & AI Automation`,
            description: suburb.intro,
            inLanguage: "en-AU",
            isPartOf: {
              "@type": "Organization",
              "@id": `${siteConfig.url}#organization`,
              name: "AI Adelaide",
              url: siteConfig.url,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.url,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Locations",
                  item: `${siteConfig.url}/locations`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: suburb.name,
                  item: `${siteConfig.url}/${suburb.slug}`,
                },
              ],
            },
          }),
        }}
      />

      <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
                <span className="eyebrow-light">
                  {websiteIntentPage ? `Website designer ${suburb.name}` : `${suburb.name} websites, SEO & automation`}
                </span>
              </div>
              <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
                {websiteIntentPage
                  ? `Website Designer ${suburb.name} for Local Business`
                  : suburb.heroLine || `Websites, SEO & AI Automation for ${suburb.name} Businesses`}
              </h1>
              <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
                {websiteIntentPage
                  ? `Need a professional website for a ${suburb.name} business? We build fast, mobile-first sites with clear service pages, enquiry actions and Google-ready foundations. `
                  : `${suburb.intro} `}
                <strong>Websites {PRICING.website.fromLabel}, SEO {PRICING.seo.fromLabel}, automation {PRICING.automation.fromLabel} — Adelaide-based, no lock-in contracts.</strong>
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

        {/* Inline hero image — ranks in Google Images + gives the page a visual anchor */}
        <section className="max-w-container mx-auto px-6 pt-10 md:pt-12">
          <SuburbHero suburb={suburb} />
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

        {/* ── Website + SEO + Automation, in that order ───────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
            {websiteIntentPage
              ? `Website Design for ${suburb.name} Businesses`
              : `Websites, SEO & Automation for ${suburb.name} Businesses`}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="panel-light-soft p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">01 · Website — {PRICING.website.fromLabel}</p>
              <p className="text-body-mobile text-slate-700 md:text-body">{suburb.websiteLine}</p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">02 · Local SEO — {PRICING.seo.fromLabel}</p>
              <p className="text-body-mobile text-slate-700 md:text-body">{suburb.seoLine}</p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">03 · Automation — {PRICING.automation.fromLabel}</p>
              <p className="text-body-mobile text-slate-700 md:text-body">{suburb.automationLine}</p>
            </div>
          </div>
        </section>

        {/* ── Local context (main strip / business mix) — only where we've
             written it up; not yet backfilled for every suburb. ─────── */}
        {"localContext" in suburb && (suburb as { localContext?: string }).localContext && (
          <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
            <div className="panel-light p-8 md:p-10">
              <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
                Doing business in {suburb.name}
              </h2>
              <p className="max-w-4xl text-body-mobile text-slate-700 md:text-body">
                {(suburb as { localContext?: string }).localContext}
              </p>
            </div>
          </section>
        )}

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

        {/* ── Primary capability detail ───────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <h2 className="mb-8 text-h2-mobile text-slate-950 md:text-h2">
            {websiteIntentPage
              ? `What Your ${suburb.name} Website Includes`
              : `What We Automate for ${suburb.name} Businesses`}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilityItems.map((item) => (
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

        {/* ── Evidence standard ───────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              A clear baseline for your {suburb.name} business
            </h2>
            <p className="text-body-mobile text-slate-700 md:text-body">
              Before recommending a build or SEO plan, we record the current
              website, relevant local searches and enquiry path. After launch,
              we report qualified calls and forms alongside search movement—no
              anonymous success stories or guaranteed ranking claims.
            </p>
          </div>
        </section>

        {/* ── Pricing ─────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What it costs — {suburb.name} pricing
            </h2>
            <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
              Transparent pricing with no lock-in contracts. Start with the service that matches the immediate business need and add the rest only when there is a clear reason.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">START</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Free Audit</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">{PRICING.audit.price}</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {websiteIntentPage ? (
                    <>
                      <li>Review your current website</li>
                      <li>Check mobile enquiry pathways</li>
                      <li>Identify priority content and SEO gaps</li>
                      <li>No obligation to continue</li>
                    </>
                  ) : (
                    <>
                      <li>Review your current workflow gaps</li>
                      <li>Identify the highest-priority automation opportunity</li>
                      <li>Clear implementation plan</li>
                      <li>No obligation to continue</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">{websiteIntentPage ? "WEBSITE" : "SETUP"}</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">{websiteIntentPage ? "Starter Website" : "Automation Starter"}</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  {websiteIntentPage ? PRICING.website.tiers[0].price : PRICING.automation.tiers[0].price}
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {websiteIntentPage ? (
                    <>
                      <li>3-page mobile-first website</li>
                      <li>Copywriting and enquiry form</li>
                      <li>Core Google-ready setup</li>
                      <li>One-off build fee</li>
                    </>
                  ) : (
                    <>
                      <li>AI receptionist or missed-call capture</li>
                      <li>Quote follow-up or reminder sequences</li>
                      <li>Calendar &amp; CRM integration</li>
                      <li>2–5 business day setup</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">{websiteIntentPage ? "EXPAND" : "GROW"}</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">{websiteIntentPage ? "Business Website" : "Automation Business"}</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  {websiteIntentPage ? PRICING.website.tiers[1].price : PRICING.automation.tiers[1].price}
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {websiteIntentPage ? (
                    <>
                      <li>5–7 page website</li>
                      <li>Blog and SEO foundation</li>
                      <li>Expanded service content</li>
                      <li>One-off build fee</li>
                    </>
                  ) : (
                    <>
                      <li>Monthly improvements + new workflows</li>
                      <li>Performance monitoring &amp; reporting</li>
                      <li>Priority support (same-day)</li>
                      <li>Multi-workflow automation</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              {websiteIntentPage
                ? "We can estimate the number of enquiries or sales needed to cover the build using your average job value and close rate. Payback varies by business and is not guaranteed."
                : `Illustrative only: three additional $350 jobs would equal $1,050 in revenue against a ${PRICING.automation.tiers[0].price} system. Your result depends on lead volume, margins, response process and close rate and is not guaranteed.`}
            </p>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
              FAQ — {suburb.name} Websites, SEO &amp; Automation
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
              Book a free 15-minute chat. We&apos;ll review your website, search visibility and enquiry process, then explain what we&apos;d prioritise. No obligation, no pressure.
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
                <Link href={websiteIntentPage ? "/website-design-adelaide" : "/ai-automation-adelaide"} className="underline hover:text-accent">
                  {websiteIntentPage ? "Website Design Adelaide" : "Adelaide AI Automation"}
                </Link>
                <Link href={websiteIntentPage ? "/website-pricing" : "/ai-receptionist-adelaide"} className="underline hover:text-accent">
                  {websiteIntentPage ? "Website Pricing" : "AI Receptionist"}
                </Link>
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
