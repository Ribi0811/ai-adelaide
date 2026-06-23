import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Website Cost Adelaide | From $699 (2026 Guide)",
  description:
    "How much does a website cost in Adelaide? Full breakdown: DIY $200, budget $395-600, AI Adelaide $699-2,499, agencies $5,000-15,000. No hidden fees.",
  alternates: {
    canonical: "/website-cost-adelaide",
  },
};

const options = [
  {
    tier: "DIY Builder",
    examples: "Wix, Squarespace, GoDaddy",
    cost: "$200-600/yr",
    time: "1-4 weeks (your time)",
    quality: "Template-based. Looks generic. Limited SEO. You do all the work.",
    pros: ["Cheapest option", "Full control", "No waiting on a designer"],
    cons: [
      "You write all the copy",
      "You design every page",
      "No SEO strategy included",
      "Looks like a template, not a business",
      "No local Adelaide support",
      "You maintain it yourself",
    ],
    verdict: "Only if you have zero budget and lots of free time.",
    color: "slate",
  },
  {
    tier: "Budget Web Shop",
    examples: "Affordable Websites Adelaide, DigiWebCraft",
    cost: "$395-999",
    time: "1-2 weeks",
    quality: "Basic template site. A few pages. Minimal customisation. Often overseas-built.",
    pros: ["Very cheap", "Faster than DIY", "Someone else builds it"],
    cons: [
      "Template designs — your site looks like 50 others",
      "Copy is often generic or AI-generated junk",
      "No SEO strategy",
      "No ongoing support",
      "Often built offshore — no local context",
      "You get what you pay for",
    ],
    verdict: "Fine for a business card site. Won't generate leads.",
    color: "amber",
  },
  {
    tier: "AI Adelaide",
    examples: "Starter, Business, Growth tiers",
    cost: "$699-2,499",
    time: "2-14 days",
    quality: "Custom-designed, locally-written, SEO-ready. Built by Adelaide locals who understand the market.",
    pros: [
      "Custom design — not a template",
      "Professional copywriting included",
      "SEO foundation built in from day one",
      "Local Adelaide support — call us anytime",
      "AI automation-ready (missed calls, bookings)",
      "No lock-in contracts",
      "Live in days, not months",
    ],
    cons: [
      "More expensive than template shops",
      "Not full agency-level custom development",
    ],
    verdict: "The sweet spot for small businesses. Best value for money.",
    color: "emerald",
    highlight: true,
  },
  {
    tier: "Boutique Agency",
    examples: "WebAdelaide, Digital Nomads HQ, StudioHawk",
    cost: "$5,000-15,000",
    time: "4-12 weeks",
    quality: "Custom design, strategy sessions, multi-round revisions. Professional but expensive.",
    pros: [
      "Fully custom design process",
      "Strategy and brand workshops",
      "Multiple revision rounds",
      "Team of specialists",
    ],
    cons: [
      "Expensive — 5-20x what most small businesses need",
      "Long timelines (weeks to months)",
      "Ongoing costs for changes",
      "Often too much process for a 5-page site",
    ],
    verdict: "Great if you're an established business with budget. Overkill for most tradies.",
    color: "blue",
  },
  {
    tier: "Premium Agency",
    examples: "National agencies, award winners",
    cost: "$15,000-50,000+",
    time: "3-6 months",
    quality: "Full custom build with animations, integrations, enterprise architecture.",
    pros: ["Top-tier design and development", "Full team", "Enterprise capabilities"],
    cons: [
      "Massively expensive",
      "Months of process",
      "You're a small fish to them",
      "Way more than a local business needs",
    ],
    verdict: "Only for established companies with real budgets. Not for small business.",
    color: "rose",
  },
];

const costBreakdown = [
  { item: "Domain name", cost: "$20-50/yr", note: "Your .com.au address" },
  { item: "Hosting", cost: "$15-30/mo", note: "Where your site lives" },
  { item: "SSL certificate", cost: "Free", note: "Included with all modern hosting" },
  { item: "Design & build (one-off)", cost: "$699-2,499", note: "Our pricing — see /website-pricing" },
  { item: "Ongoing maintenance", cost: "$0-100/mo", note: "Basic changes usually included with us" },
  { item: "SEO (optional)", cost: "$399+/mo", note: "Only if you want to rank on Google" },
];

const faqs = [
  {
    question: "How much does a basic website cost in Adelaide?",
    answer:
      "A basic 3-page website from AI Adelaide costs $699. Budget template shops charge $395-600 but you get a generic template with no SEO. DIY builders like Wix cost $200-600/year but you do all the work yourself.",
  },
  {
    question: "Why are agency websites so expensive ($5,000-15,000)?",
    answer:
      "Agencies include strategy sessions, brand workshops, custom design from scratch, multiple revision rounds, and a team of specialists. For a local tradie or small business, this is usually overkill. You're paying for process, not just a website.",
  },
  {
    question: "What ongoing costs should I budget for?",
    answer:
      "Domain name ($20-50/year), hosting ($15-30/month), and optionally SEO ($399+/month). With AI Adelaide, basic maintenance and text changes are included — no extra monthly fees unless you add SEO or automation.",
  },
  {
    question: "Is the $699 website any good?",
    answer:
      "Yes. It's a real custom-designed website — not a template. 3 pages, mobile-first, contact form, basic SEO, Google Business Profile setup. It's designed to get you online and looking professional fast. You can upgrade to Business ($1,299) or Growth ($2,499) anytime.",
  },
  {
    question: "Do I need to pay for hosting separately?",
    answer:
      "Yes, hosting is $15-30/month and domain is $20-50/year. We help you set these up but you own them. No lock-in — if you leave, you take your domain and site with you.",
  },
  {
    question: "Can I get a website for free?",
    answer:
      "Technically yes — Google Sites, free Wix plans, Facebook pages. But free sites look free. They have ads, limited features, no custom domain, and Google ranks them poorly. A $699 investment in a real website pays for itself with one or two new customers.",
  },
];

export default function WebsiteCostAdelaidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: "How Much Does a Website Cost?" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Cost Guide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            How Much Does a Website Cost in Adelaide?
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Real pricing from $200 to $50,000+. We break down every option — DIY, budget shops, AI Adelaide, boutique agencies, and premium agencies — so you know exactly what you're paying for. No fluff, no hidden costs, no upsells.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Adelaide Website Options Compared
          </h2>
          <div className="space-y-4">
            {options.map((opt) => (
              <div
                key={opt.tier}
                className={`panel-light-soft p-5 md:p-6 ${
                  opt.highlight ? "ring-2 ring-accent" : ""
                }`}
              >
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-h3-mobile text-slate-950 md:text-h3">{opt.tier}</h3>
                      {opt.highlight && (
                        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{opt.examples}</p>
                    <p className="mt-3 text-sm text-slate-700">{opt.quality}</p>
                  </div>
                  <div className="text-right md:min-w-[120px]">
                    <p className="text-2xl font-bold text-slate-950">{opt.cost}</p>
                    <p className="mt-1 text-xs text-slate-500">{opt.time}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600">Pros</p>
                    <ul className="space-y-1.5">
                      {opt.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 text-emerald-500">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-rose-600">Cons</p>
                    <ul className="space-y-1.5">
                      {opt.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 text-rose-400">—</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-200/80 pt-3">
                  <p className="text-sm font-semibold text-slate-700">
                    <span className="text-slate-400">Verdict:</span> {opt.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            What You Actually Pay For
          </h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Every website has the same building blocks. Here's what each one really costs — whether you use us, an agency, or do it yourself.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Item</th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Cost</th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((row) => (
                  <tr key={row.item} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{row.item}</td>
                    <td className="py-3 pr-4 font-bold text-accent">{row.cost}</td>
                    <td className="py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Real Example: A Plumber in Norwood
          </h2>
          <div className="panel-light-soft p-5 md:p-6">
            <p className="text-body-mobile text-slate-700 md:text-body">
              A plumber in Norwood needs a website. Here's what it actually costs with AI Adelaide:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-[10px] text-accent">✓</span>
                <span><strong>Website (Business tier):</strong> $1,299 one-off</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-[10px] text-accent">✓</span>
                <span><strong>Domain (.com.au):</strong> $22/year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-[10px] text-accent">✓</span>
                <span><strong>Hosting:</strong> $20/month ($240/year)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-[10px] text-accent">✓</span>
                <span><strong>SEO retainer (optional):</strong> $399/month</span>
              </li>
            </ul>
            <div className="mt-5 border-t border-slate-200/80 pt-4">
              <p className="text-lg font-bold text-slate-950">Year 1 total: $6,559 (with SEO) or $1,761 (without SEO)</p>
              <p className="mt-2 text-sm text-slate-600">
                Compare that to $10,000-15,000+ at a boutique agency — and you get the same or better result for a local tradie site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Website Cost FAQs
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
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
            Get a Real Website for $699
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Stop comparing quotes. Book a free chat and we'll tell you exactly which tier fits your business — no upsell, no pressure.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/website-pricing" className="btn-primary px-8 py-4">
              See Pricing <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
            <Link href="/website-design-adelaide" className="btn-secondary px-8 py-4">
              Learn More <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}