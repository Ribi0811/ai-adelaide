import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";

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

const tierBreakdown = [
  {
    name: "Starter",
    price: "$699",
    tagline: "Get online fast",
    liveIn: "Live in 48 hours",
    features: [
      "3-page custom website (Home, Services, Contact)",
      "Mobile-first responsive design",
      "Click-to-call button",
      "Contact form with email notifications",
      "Basic SEO setup (title tags, meta descriptions)",
      "Google Business Profile setup",
    ],
    bestFor: "Sole traders, new businesses, anyone with no website at all",
  },
  {
    name: "Business",
    price: "$1,299",
    tagline: "Most popular",
    liveIn: "Live in 5-7 days",
    features: [
      "5-7 page custom website",
      "Blog setup with CMS",
      "SEO foundation (schema, sitemap, canonical tags)",
      "One suburb service page included",
      "Google Business Profile optimisation",
      "Lead capture form + AI automation-ready",
      "1 month of SEO setup included",
    ],
    bestFor: "Established businesses ready to grow online",
  },
  {
    name: "Growth",
    price: "$2,499",
    tagline: "Full growth engine",
    liveIn: "Live in 10-14 days",
    features: [
      "10+ page custom website",
      "Blog with 3 starter articles",
      "Full SEO setup (schema, internal links, keyword targeting)",
      "Three suburb service pages included",
      "Google Business Profile + Bing Places setup",
      "AI automation integrations (missed call, booking, reviews)",
      "1 month SEO retainer included",
    ],
    bestFor: "Businesses wanting to dominate their local area",
  },
];

const industryLinks = [
  { href: "/websites-for-plumbers-adelaide", label: "Websites for Plumbers" },
  { href: "/websites-for-electricians-adelaide", label: "Websites for Electricians" },
  { href: "/websites-for-clinics-adelaide", label: "Websites for Clinics" },
  { href: "/websites-for-cafes-adelaide", label: "Websites for Cafes" },
  { href: "/websites-for-hairdressers-adelaide", label: "Websites for Hairdressers" },
  { href: "/websites-for-beauty-salons-adelaide", label: "Websites for Beauty Salons" },
  { href: "/websites-for-retail-shops-adelaide", label: "Websites for Retail Shops" },
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
  {
    question: "How can AI Adelaide charge $699 when agencies charge $5,000+?",
    answer:
      "AI handles the time-consuming parts — first-draft copywriting, layout variations, meta tag generation, and SEO setup — that agencies bill hours for. A human still reviews and refines every site before it goes live, but the labour cost per site drops dramatically. That's the whole reason a $699 price point is possible without cutting corners on quality.",
  },
  {
    question: "What's the difference between the $699, $1,299, and $2,499 tiers?",
    answer:
      "Starter ($699) is a 3-page site live in 48 hours — enough to look professional and get found. Business ($1,299) adds a blog, one suburb page, and a month of SEO setup — most popular for businesses ready to grow. Growth ($2,499) is 10+ pages with three suburb pages, full SEO setup, and AI automation integrations built in — for businesses serious about dominating local search. See the full breakdown on our pricing page.",
  },
  {
    question: "Can I start with Starter and upgrade later?",
    answer:
      "Yes. Most businesses that start on Starter ($699) upgrade to Business once they're ready to invest in SEO and content — you're not locked into the tier you started with, and you only pay the difference, not the full price again.",
  },
  {
    question: "Do prices differ by industry — is a website for a clinic more expensive than for a tradie?",
    answer:
      "No — the three tiers and their prices are the same across every industry. What differs is which tier makes sense: a solo tradie often fits Starter or Business, while a multi-practitioner clinic or a business serving many suburbs usually needs Business or Growth for the extra pages and suburb targeting. See our industry-specific guides below for what to prioritise in your build.",
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
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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

      {/* What Each Tier Includes */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What Each AI Adelaide Tier Actually Includes
          </h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            "From $699" doesn't tell you what you get. Here's exactly what's in each tier, so you can pick the right one instead of guessing.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {tierBreakdown.map((tier) => (
              <div key={tier.name} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{tier.tagline}</p>
                <h3 className="mt-2 mb-1 text-h3-mobile text-slate-950 md:text-h3">{tier.name}</h3>
                <p className="mb-1 text-2xl font-bold text-slate-950">{tier.price}</p>
                <p className="mb-4 text-xs text-slate-500">{tier.liveIn}</p>
                <ul className="mb-4 space-y-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 text-accent">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-slate-200/80 pt-3 text-xs text-slate-500">
                  <strong className="text-slate-700">Best for:</strong> {tier.bestFor}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Prefer to spread the cost? There&apos;s also a monthly plan — $199
            setup then $99/month with hosting, content edits and ongoing care
            included, month-to-month with no lock-in. Full pricing, add-ons,
            and package comparisons on our{" "}
            <Link href="/website-pricing" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              website pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Why AI Makes $699 Possible */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Why AI Makes a $699 Website Possible
          </h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            The honest question every Adelaide business owner asks: if agencies charge $5,000-15,000, how can AI Adelaide charge $699 for something that isn't a cheap template?
          </p>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            The answer is where the hours go. A traditional agency website involves a strategy session, a copywriter drafting pages from scratch, a designer building layouts by hand, a developer coding it up, an SEO specialist setting up metadata and schema separately, and multiple rounds of internal review — each step billed at an hourly or project rate. That's where the $5,000+ price tag comes from: it's mostly labour, not materials.
          </p>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            AI Adelaide uses AI to handle the first pass of the time-consuming parts — drafting copy tailored to your business and suburb, generating layout variations, writing meta titles and descriptions, and setting up the technical SEO foundation (schema markup, sitemap entries, canonical tags) that usually needs a specialist. A human still reviews, edits, and approves every page before it goes live — nothing ships without human sign-off — but the hours spent per site drop from days to hours. That difference is passed straight through as a lower price, not a lower-quality product.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            It's the same reason budget template shops are cheap in a different way: they skip the work entirely and hand you a generic layout. AI Adelaide doesn't skip the work — it just does the work faster, so a custom, SEO-ready website is affordable for a business that could never justify a $10,000 agency invoice.
          </p>
        </div>
      </section>

      {/* What affects price within a tier */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What Actually Moves the Price Within Each Tier
          </h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            The three tiers above ($699, $1,299, $2,499) are fixed prices — not "starting from" figures that creep up once you're in a conversation. But the right tier for your business depends on a few practical factors worth thinking through before you book.
          </p>
          <h3 className="mb-2 mt-6 text-h3-mobile text-slate-950 md:text-h3">How many pages you actually need</h3>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            A sole trader with one service and one location fits comfortably in the 3-page Starter tier: home, services, contact. A business with multiple service lines, multiple locations, or a genuine content library (case studies, guides, a blog) needs the extra pages in Business or Growth. More pages generally means more SEO surface area too — each page is a chance to rank for a different search.
          </p>
          <h3 className="mb-2 mt-6 text-h3-mobile text-slate-950 md:text-h3">Whether you need suburb targeting</h3>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            If you only serve one suburb or a tight radius, you don't need suburb pages — Starter is enough. If you service multiple suburbs across Adelaide (most tradies and many clinics do), each suburb page is a separate ranking opportunity for "[service] [suburb]" searches. Business includes one, Growth includes three — additional suburb pages can be added later as a smaller add-on rather than paying for the next tier up just for pages you won't use.
          </p>
          <h3 className="mb-2 mt-6 text-h3-mobile text-slate-950 md:text-h3">Whether you're ready for SEO and automation yet</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The build price and the ongoing SEO/automation retainers are separate decisions. Some businesses want to launch a website first, see how it performs, and add SEO a few months in once the site itself is proven. Others want to launch and rank at the same time. Neither is wrong — but it's worth deciding upfront so the "total cost" figure you're comparing against other quotes reflects what you're actually planning to spend, not just the one-off build price.
          </p>
        </div>
      </section>

      {/* Pricing traps */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Pricing Traps to Watch for When Comparing Quotes
          </h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Website quotes rarely show the full picture upfront. Here's what to check before you sign anything.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">"From $X" that isn't really $X</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Some quotes advertise a low starting price, then add a "design fee," a "content fee," and a "launch fee" once you're already committed. Ask upfront: is this the total cost, or is it the starting point for extras?
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Ownership and lock-in</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Some agencies and platforms host your site on their infrastructure, which means leaving means starting over. Ask who owns the domain, who owns the content, and what happens if you want to switch providers later.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Recurring fees that aren't disclosed upfront</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Hosting, domain renewal, "maintenance" fees, and per-change charges add up. Ask for the full ongoing monthly or annual cost, not just the build price, before comparing two quotes side by side.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">SEO left out entirely</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                A website with no SEO foundation — no schema, no sitemap, no meta tags, no suburb targeting — won't show up on Google no matter how good it looks. Ask whether basic SEO is included in the build price or sold separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific pricing */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Website Costs by Industry
          </h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            The $699-2,499 pricing above applies across industries — but the right tier and the specific features that matter most vary by trade. See what a website costs (and what it should include) for your industry:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {industryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
              >
                {link.label} →
              </Link>
            ))}
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
              <p className="text-lg font-bold text-slate-950">Year 1 total: $6,349 (with SEO) or $1,561 (without SEO)</p>
              <p className="mt-2 text-sm text-slate-600">
                Compare that to $10,000-15,000+ at a boutique agency — and you get the same or better result for a local tradie site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two more worked examples */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Two More Examples: Starter and Growth Tiers
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">A New Cafe (Starter Tier)</h3>
              <p className="mb-3 text-body-mobile text-slate-700 md:text-body">
                A newly opened cafe just needs to look legitimate on Google and give customers hours, menu, and location. No blog, no SEO retainer yet.
              </p>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Website (Starter tier):</strong> $699 one-off</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Domain (.com.au):</strong> $22/year</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Hosting:</strong> $20/month ($240/year)</span></li>
              </ul>
              <p className="mt-4 border-t border-slate-200/80 pt-3 font-bold text-slate-950">Year 1 total: $961</p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">An Established Clinic (Growth Tier)</h3>
              <p className="mb-3 text-body-mobile text-slate-700 md:text-body">
                A clinic with several practitioners wants to rank across multiple suburbs and integrate booking automation from day one.
              </p>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Website (Growth tier):</strong> $2,499 one-off</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Domain (.com.au):</strong> $22/year</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Hosting:</strong> $20/month ($240/year)</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Growth SEO retainer:</strong> $699/month</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">✓</span><span><strong>Automation Starter:</strong> $199/month</span></li>
              </ul>
              <p className="mt-4 border-t border-slate-200/80 pt-3 font-bold text-slate-950">Year 1 total: $13,537</p>
              <p className="mt-2 text-sm text-slate-600">Still well under a premium agency's $15,000-50,000+ range — with a comparable full-service build.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            None of these totals include SEO or automation unless the business chose to add them — every add-on above is optional, and every price shown here is the exact figure from our{" "}
            <Link href="/website-pricing" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              pricing page
            </Link>
            , not a rounded estimate.
          </p>
        </div>
      </section>

      {/* Quick decision guide */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            A Quick Way to Pick Your Tier
          </h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            If you're still weighing it up, a rough rule of thumb works better than agonising over the spec sheet. If you have no website at all today and just need something live and professional this week, Starter ($699) solves that problem completely — you can always add SEO or more pages later without rebuilding anything.
          </p>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            If you already have some kind of web presence but it's not bringing in leads, or you know you'll want a blog and at least one suburb page soon, Business ($1,299) is usually the better starting point — it includes a month of SEO setup so you're not starting from zero on search visibility.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            If you're actively trying to out-rank competitors across several suburbs, or you already know missed calls and slow follow-up are costing you jobs, Growth ($2,499) bundles the suburb pages and automation groundwork you'd otherwise buy piecemeal. None of this is a permanent decision — every tier can be upgraded, and nothing here locks you into a contract you can't get out of.
          </p>
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

      <StackCTA variant="website" />

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