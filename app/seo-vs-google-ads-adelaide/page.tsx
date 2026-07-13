import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO vs Google Ads Adelaide | 2026",
  description:
    `SEO vs Google Ads for Adelaide businesses: compare speed, control, lead economics, long-term value and realistic budget assumptions. SEO ${PRICING.seo.fromLabel}.`,
  alternates: {
    canonical: "/seo-vs-google-ads-adelaide",
  },
};

const comparison = [
  {
    factor: "Cost per month",
    seo: `${PRICING.seo.tiers[0].price}–${PRICING.seo.tiers[1].price}`,
    ads: "Set from real click costs, conversion rate and lead target",
  winner: "seo",
  },
  {
    factor: "Time to first results",
    seo: "Usually gradual; timing varies",
    ads: "Can begin after campaign approval and launch",
    winner: "ads",
  },
  {
    factor: "Cost per click",
    seo: "No media fee per organic click",
    ads: "Auction-priced fee per click",
    winner: "seo",
  },
  {
    factor: "Long-term value",
    seo: "Can compound while pages stay useful and competitive",
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
    seo: "Can build familiarity and authority",
    ads: "Clearly labelled paid placement",
    winner: "tie",
  },
  {
    factor: "Predictability",
    seo: "Hard to predict exact timing",
    ads: "Budget and traffic are controllable; leads still vary",
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
      "Use Ads to test immediate demand while the SEO foundation is built. Reduce ad spend only after tracked organic enquiries are consistently replacing paid leads—not according to a preset month.",
    timeline: "Ads can launch first; assess SEO over a longer measurement window.",
    cost: "Example only: chosen ad budget + Local SEO plan.",
  },
  {
    title: "Established business — steady customers",
    recommendation: "SEO focus, light Ads for competitive terms",
    reasoning:
      "You already have word-of-mouth and repeat customers. Invest in SEO to capture people searching for your services. Use Ads only for high-value emergency keywords (e.g., 'emergency plumber Adelaide') where organic ranking takes longer.",
    timeline: "Review organic movement monthly; use Ads where immediate visibility is valuable.",
    cost: "Local SEO plan + a campaign budget based on lead economics.",
  },
  {
    title: "Competitive market — lots of competitors",
    recommendation: "Both, with heavy SEO investment",
    reasoning:
      "Run Ads for controlled visibility while investing consistently in technical work, useful content, proof and authority. Reduce spend only when lead-source data shows organic search can carry more of the target.",
    timeline: "Expect a longer SEO measurement window in competitive categories.",
    cost: "Growth SEO plan + an evidence-based ad budget.",
  },
  {
    title: "Niche market — few competitors",
    recommendation: "Test SEO first; keep Ads available",
    reasoning:
      "A niche such as ‘fencing contractor Modbury’ may have a clearer organic opportunity, but low competition does not guarantee ranking or lead volume. Start with the foundation, measure demand, and add Ads if the business needs faster validation.",
    timeline: "Set a baseline, then review indexing, impressions, enquiries and competition.",
    cost: "Local SEO plan; optional test budget for Ads.",
  },
];

const seoMonthly = Number(PRICING.seo.tiers[0].price.replace(/[^\d]/g, ""));
const twoYearCost = [
  { month: "Month 1", ads: 1000 },
  { month: "Month 3", ads: 1000 },
  { month: "Month 6", ads: 800 },
  { month: "Month 12", ads: 500 },
  { month: "Month 18", ads: 300 },
  { month: "Month 24", ads: 200 },
].map(({ month, ads }) => ({
  month,
  seo: PRICING.seo.tiers[0].price,
  ads: `$${ads.toLocaleString("en-AU")}`,
  combined: `$${(seoMonthly + ads).toLocaleString("en-AU")}`,
}));

const faqs = [
  {
    question: "Should I do SEO or Google Ads first?",
    answer:
      "If you need immediate visibility, Google Ads can begin once the campaign is approved and launched. SEO usually needs a longer measurement window. Using both can make sense, but the split should be based on margins, urgency, search demand and tracked lead quality.",
  },
  {
    question: "How much should I spend on Google Ads in Adelaide?",
    answer:
      "Work backwards from the value of a qualified lead, your close rate, target job volume and current auction estimates. A useful test budget must buy enough relevant clicks to learn something, but there is no responsible universal Adelaide spend figure.",
  },
  {
    question: "How long does SEO take to work in Adelaide?",
    answer:
      "There is no fixed timeline. Competition, starting authority, technical condition, content quality, location and Google's systems all matter. Specific service-and-suburb searches can present a more focused opportunity than broad Adelaide terms, but they are not automatically easy.",
  },
  {
    question: "Is SEO cheaper than Google Ads?",
    answer:
      "It can be, but only your lead and revenue data can answer that. SEO can continue producing organic visits without a per-click media fee, while Ads provide faster control over placement and budget. Compare cost per qualified lead and won revenue over a long enough period.",
  },
  {
    question: "Can I just do Google Ads and skip SEO?",
    answer:
      "You can rely on Ads, but paid placement stops when the campaign or budget stops. Organic visibility is not permanently owned either—rankings can change. A balanced acquisition mix reduces dependence on one channel and gives you better data about what produces qualified work.",
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
            Both can put an Adelaide business in front of active searchers. Ads buy controllable placement; SEO builds organic visibility that can compound but can also change. Here is how to compare them using real lead economics instead of guaranteed timelines.
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
            The table below is an illustrative budget scenario, not a forecast. Reduce ad spend only if measured organic leads and won revenue support the decision.
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
              These figures demonstrate how a budget could change; they are not a quote, forecast or recommended spend. Build the real model from your click costs, conversion rate, qualified leads and won revenue.
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
                <li className="flex items-start gap-2"><span className="text-accent">✓</span> {PRICING.seo.fromLabel} — see our <Link href="/seo" className="text-accent underline">SEO services</Link></li>
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

      {/* Related deep dive */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
            Tradie-specific deep dive
          </p>
          <h2 className="mb-3 text-h2-mobile text-slate-950 md:text-h2">
            If you&apos;re a tradie, read the full playbook
          </h2>
          <p className="mb-5 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Once you&apos;ve picked a path, the question is execution. Our
            <strong> SEO for Tradies Adelaide</strong> guide walks through Google Business Profile,
            reviews, suburb pages, schema markup, content, and pricing —
            everything a plumber, sparkie, builder, HVAC tech, or
            landscaper needs to actually rank in 2026.
          </p>
          <Link
            href="/seo-for-tradies-adelaide"
            className="btn-secondary px-6 py-3"
          >
            Read the tradie SEO guide <span aria-hidden>→</span>
          </Link>
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
