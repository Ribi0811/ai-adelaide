import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "SEO vs Google Ads Adelaide | 2026",
  description:
    "SEO vs Google Ads for Adelaide small businesses. Real costs, timelines, and ROI comparison. SEO from $399/mo vs Ads from $500/mo. Which fits your business?",
  alternates: {
    canonical: "/seo-vs-google-ads-adelaide",
  },
};

const comparison = [
  {
    factor: "Cost per month",
    seo: "$399-699/mo",
    ads: "$500-3,000+/mo (including ad spend)",
  winner: "seo",
  },
  {
    factor: "Time to first results",
    seo: "2-4 months",
    ads: "1-3 days",
    winner: "ads",
  },
  {
    factor: "Cost per click",
    seo: "$0 (you earn the click organically)",
    ads: "$2-15+ per click (you pay every time)",
    winner: "seo",
  },
  {
    factor: "Long-term value",
    seo: "Compounds — content ranks for years",
    ads: "Stops the moment you stop paying",
    winner: "seo",
  },
  {
    factor: "Control",
    seo: "Google decides your ranking",
    ads: "You control position and budget",
    winner: "ads",
  },
  {
    factor: "Trust & credibility",
    seo: "High — people trust organic results",
    ads: "Lower — people know it's paid",
    winner: "seo",
  },
  {
    factor: "Predictability",
    seo: "Hard to predict exact timing",
    ads: "Very predictable — spend X, get Y clicks",
    winner: "ads",
  },
  {
    factor: "Best for",
    seo: "Long-term growth, local search, building authority",
    ads: "Immediate results, promotions, testing demand",
    winner: "tie",
  },
];

const scenarios = [
  {
    title: "New business — no website traffic",
    recommendation: "Start with Google Ads + build SEO foundation",
    reasoning:
      "You need leads NOW. Run Google Ads to get immediate enquiries while we build your SEO foundation. By month 3-4, organic traffic starts replacing ad spend. By month 6, you can reduce ads and rely more on SEO.",
    timeline: "Ads: Week 1. SEO results: Month 3+.",
    cost: "$500/mo ads + $399/mo SEO = $899/mo",
  },
  {
    title: "Established business — steady customers",
    recommendation: "SEO focus, light Ads for competitive terms",
    reasoning:
      "You already have word-of-mouth and repeat customers. Invest in SEO to capture people searching for your services. Use Ads only for high-value emergency keywords (e.g., 'emergency plumber Adelaide') where organic ranking takes longer.",
    timeline: "SEO results: Month 2-4. Ads for competitive terms only.",
    cost: "$399/mo SEO + $200/mo ads = $599/mo",
  },
  {
    title: "Competitive market — lots of competitors",
    recommendation: "Both, with heavy SEO investment",
    reasoning:
      "In competitive markets (plumbers, electricians, dentists), SEO takes 6-12 months to rank well. Run Ads to stay visible while SEO builds. Once you rank, reduce ad spend. The businesses that win long-term are the ones that invest in SEO early.",
    timeline: "Ads: Week 1. SEO results: Month 6-12.",
    cost: "$699/mo SEO + $500/mo ads = $1,199/mo",
  },
  {
    title: "Niche market — few competitors",
    recommendation: "SEO only — you'll rank fast",
    reasoning:
      "If you're in a niche with low competition (e.g., 'fencing contractor Modbury'), SEO alone will get you ranking within 2-3 months. No need for Ads — you'll capture the search traffic organically.",
    timeline: "SEO results: Month 2-3.",
    cost: "$399/mo SEO only",
  },
];

const twoYearCost = [
  { month: "Month 1", seo: "$399", ads: "$1,000", combined: "$1,399" },
  { month: "Month 3", seo: "$399", ads: "$1,000", combined: "$1,399" },
  { month: "Month 6", seo: "$399", ads: "$800", combined: "$1,199" },
  { month: "Month 12", seo: "$399", ads: "$500", combined: "$899" },
  { month: "Month 18", seo: "$399", ads: "$300", combined: "$699" },
  { month: "Month 24", seo: "$399", ads: "$200", combined: "$599" },
];

const faqs = [
  {
    question: "Should I do SEO or Google Ads first?",
    answer:
      "If you need leads immediately, start with Google Ads — you can be on page 1 tomorrow. But start SEO at the same time, because Ads stop the moment you stop paying. SEO compounds over time. The best strategy is both: Ads for now, SEO for the future.",
  },
  {
    question: "How much should I spend on Google Ads in Adelaide?",
    answer:
      "For a small local business, $500-1,000/month is a realistic starting point. This covers ad spend and gives you enough clicks to generate leads. Competitive industries (plumbers, electricians) need $1,000-3,000+ because click costs are higher.",
  },
  {
    question: "How long does SEO take to work in Adelaide?",
    answer:
      "For low-competition keywords, 2-3 months. For medium competition, 3-6 months. For highly competitive terms (like 'plumber Adelaide'), 6-12 months. The advantage of local SEO is that 'plumber Norwood' or 'electrician Prospect' are much easier to rank than generic terms.",
  },
  {
    question: "Is SEO cheaper than Google Ads?",
    answer:
      "Long-term, yes. SEO costs $399-699/month and compounds — your content keeps ranking. Google Ads cost $500-3,000+/month and stop instantly when you stop paying. Over 2 years, SEO is significantly cheaper per lead. But Ads are faster to start.",
  },
  {
    question: "Can I just do Google Ads and skip SEO?",
    answer:
      "You can, but you're renting your traffic. The moment your budget runs out, you disappear. Businesses that rely only on Ads are one price increase away from losing all their leads. SEO gives you owned traffic that no one can take away.",
  },
];

export default function SeoVsGoogleAdsPage() {
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
          { label: "SEO vs Google Ads" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">SEO vs Google Ads</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            SEO vs Google Ads: Which Is Better for Your Adelaide Business?
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Both get you on Google. One you rent, one you own. Here's the real breakdown — costs, timelines, and which one actually makes sense for your Adelaide business. No bias, just numbers.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            The Real Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Factor</th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">SEO</th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Google Ads</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.factor} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{row.factor}</td>
                    <td className={`py-3 pr-4 ${row.winner === "seo" ? "text-emerald-700 font-semibold" : "text-slate-600"}`}>
                      {row.seo}
                      {row.winner === "seo" && <span className="ml-1">✓</span>}
                    </td>
                    <td className={`py-3 ${row.winner === "ads" ? "text-emerald-700 font-semibold" : row.winner === "tie" ? "text-slate-600" : "text-slate-600"}`}>
                      {row.ads}
                      {row.winner === "ads" && <span className="ml-1">✓</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Which Strategy Fits Your Situation?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {scenarios.map((s) => (
              <div key={s.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{s.title}</h3>
                <p className="mb-3 text-sm font-semibold text-accent">{s.recommendation}</p>
                <p className="mb-4 text-sm text-slate-700">{s.reasoning}</p>
                <div className="border-t border-slate-200/80 pt-3">
                  <p className="text-xs text-slate-500"><strong>Timeline:</strong> {s.timeline}</p>
                  <p className="mt-1 text-xs text-slate-500"><strong>Est. cost:</strong> {s.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24-Month Cost Projection */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-2 text-h2-mobile text-slate-950 md:text-h2">
            24-Month Cost Projection
          </h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            As SEO starts ranking, you can reduce ad spend. Here's a realistic projection for a combined strategy:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">When</th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">SEO Cost</th>
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Ads Cost</th>
                  <th className="py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Combined</th>
                </tr>
              </thead>
              <tbody>
                {twoYearCost.map((row) => (
                  <tr key={row.month} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-slate-800">{row.month}</td>
                    <td className="py-3 pr-4 text-slate-600">{row.seo}</td>
                    <td className="py-3 pr-4 text-slate-600">{row.ads}</td>
                    <td className="py-3 font-bold text-accent">{row.combined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 panel-light-soft p-4">
            <p className="text-sm text-slate-700">
              <strong>Key insight:</strong> By month 24, your SEO is generating organic traffic that replaces most of your ad spend.
              Total 2-year cost with combined strategy: ~$20,000. SEO-only: ~$9,600. Ads-only: ~$24,000+ (and it stops the moment you stop paying).
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            How We Approach It
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel-light-soft p-5">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Our SEO Approach</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Keyword research tied to your services and suburbs</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Service pages that target buying intent</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Suburb pages for local search</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Blog content answering real customer questions</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> Google Search Console monitoring</li>
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> From $399/month — see our <Link href="/seo" className="text-accent underline">SEO services</Link></li>
              </ul>
            </div>
            <div className="panel-light-soft p-5">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Google Ads (Referral)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-slate-400">—</span> We don't manage Ads in-house</li>
                <li className="flex items-start gap-2"><span className="text-slate-400">—</span> We can refer you to trusted Adelaide Ads partners</li>
                <li className="flex items-start gap-2"><span className="text-slate-400">—</span> We focus on what we're best at: SEO and organic growth</li>
                <li className="flex items-start gap-2"><span className="text-slate-400">—</span> Many clients start Ads with a partner, then reduce as SEO kicks in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            FAQs
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
            Not Sure Which You Need?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We'll look at your market, your competitors, and tell you honestly whether SEO, Ads, or both makes sense for your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/seo" className="btn-secondary px-8 py-4">
              See Our SEO Services <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              Website Pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}