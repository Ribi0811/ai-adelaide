import { PRICING, siteConfig } from "@/lib/constants";
import suburbs from "@/data/suburbs.json";
import { posts } from "@/data/posts";

// /llms.txt — the curated map we hand to AI crawlers (ChatGPT, Claude,
// Perplexity, Google AI, Bing Copilot).
//
// GENERATED, not hand-written. The previous static public/llms.txt drifted
// badly: it advertised a dead "$247 audit", listed three redirect URLs as if
// they were real pages, hardcoded a suburb count, and omitted several money
// pages. Generating it from PRICING + real page/suburb/post data means it can
// never contradict the live site again. Add new pages to the arrays below.

const U = siteConfig.url;

type Entry = { path: string; label: string; note?: string };

const core: Entry[] = [
  { path: "/", label: "Home", note: "Overview of services, pricing and Adelaide coverage." },
  { path: "/services", label: "Services", note: "Full service catalogue for Adelaide small businesses." },
  { path: "/website-pricing", label: "Pricing", note: "All website, SEO and automation pricing in one place." },
  { path: "/contact", label: "Contact", note: "Send an enquiry or book a free 15-minute call. Replies within 2 business hours." },
  { path: "/audit", label: "Free Digital Health Check", note: "Free self-assessment with a scored report. No cost, no card required." },
  { path: "/locations", label: "Locations index", note: "Every Adelaide suburb we publish a dedicated page for." },
  { path: "/about", label: "About", note: "Who we are and how we work." },
  { path: "/faq", label: "FAQ", note: "Common questions about pricing, timelines and how we work." },
];

const services: Entry[] = [
  { path: "/website-design-adelaide", label: "Website Design Adelaide", note: `Custom small-business websites, live in 48 hours. ${PRICING.website.fromLabel} one-off, or ${PRICING.website.monthly.label} on the monthly plan.` },
  { path: "/seo", label: "SEO Services Adelaide", note: `On-page and technical SEO, content, link building, Google Business Profile and reporting. ${PRICING.seo.fromLabel}, no lock-in.` },
  { path: "/local-seo-adelaide", label: "Local SEO Adelaide", note: "Google Business Profile, suburb pages, reviews and citations for local search." },
  { path: "/ai-seo-adelaide", label: "AI SEO Adelaide", note: "Improving eligibility for Google and AI-assisted discovery." },
  { path: "/seo-for-tradies-adelaide", label: "SEO for Tradies Adelaide", note: "The local SEO playbook for plumbers, electricians, builders, HVAC, landscapers and painters." },
  { path: "/ai-automation-adelaide", label: "AI Automation Adelaide", note: `Missed-call text-back, quote follow-up, reminders and admin workflows. ${PRICING.automation.fromLabel}, live in 2-5 business days.` },
  { path: "/quote-chaser-adelaide", label: "Quote Chaser", note: `Automated quote follow-up — three polite, timed touchpoints per quote, stopping the moment the customer replies. Included in Automation Starter (${PRICING.automation.tiers[0].price}).` },
  { path: "/missed-call-text-back-adelaide", label: "Missed-Call Text-Back", note: "Automatic SMS reply when a call is missed, so the lead is not lost." },
  { path: "/ai-receptionist-adelaide", label: "AI Receptionist Adelaide", note: "24/7 AI phone answering that books appointments and takes messages." },
  { path: "/virtual-receptionist-adelaide", label: "Virtual Receptionist Adelaide", note: "Reception coverage for Adelaide small businesses." },
  { path: "/answering-service-adelaide", label: "Answering Service Adelaide", note: "24/7 call answering, including after hours and weekends." },
  { path: "/after-hours-answering-adelaide", label: "After-Hours Answering Adelaide", note: "Out-of-hours call handling." },
  { path: "/missed-call-answering-service-adelaide", label: "Missed Call Answering Service", note: "How missed-call recovery works and what it recovers." },
  { path: "/google-business-profile-optimisation-adelaide", label: "Google Business Profile Optimisation", note: "GBP setup, categories, photos and review readiness." },
  { path: "/bookkeeping-adelaide", label: "AI Bookkeeping Adelaide", note: "Bookkeeping prep and invoice automation." },
  { path: "/ai-marketing-adelaide", label: "AI Marketing Adelaide", note: "AI-assisted local marketing for small business." },
  { path: "/ai-consulting-adelaide", label: "AI Consulting Adelaide", note: "Practical AI advice for Adelaide businesses." },
  { path: "/ai-app-development-adelaide", label: "AI App Development Adelaide", note: "Custom AI-assisted application builds." },
  { path: "/ai-office-worker-adelaide", label: "AI Office Worker Adelaide", note: "Automating repetitive back-office admin." },
  { path: "/tradie-website-bundle", label: "Tradie Website Bundle", note: "Website plus SEO bundled for trade businesses." },
];

const industries: Entry[] = [
  { path: "/websites-for-plumbers-adelaide", label: "Websites for Plumbers Adelaide" },
  { path: "/websites-for-electricians-adelaide", label: "Websites for Electricians Adelaide" },
  { path: "/websites-for-builders-adelaide", label: "Websites for Builders Adelaide" },
  { path: "/websites-for-landscapers-adelaide", label: "Websites for Landscapers Adelaide" },
  { path: "/websites-for-painters-adelaide", label: "Websites for Painters Adelaide" },
  { path: "/websites-for-cafes-adelaide", label: "Websites for Cafes & Restaurants Adelaide" },
  { path: "/websites-for-hairdressers-adelaide", label: "Websites for Hairdressers Adelaide" },
  { path: "/websites-for-beauty-salons-adelaide", label: "Websites for Beauty Salons Adelaide" },
  { path: "/websites-for-clinics-adelaide", label: "Websites for Clinics & Allied Health Adelaide" },
  { path: "/websites-for-retail-shops-adelaide", label: "Websites for Retail Shops Adelaide" },
  { path: "/ndis-provider-marketing-adelaide", label: "NDIS Provider Websites & SEO Adelaide", note: "Websites, local SEO and enquiry systems for NDIS providers." },
  { path: "/automotive-seo-services", label: "Automotive SEO Services", note: "Mechanics, panel beaters, dealerships, tyre shops." },
  { path: "/hotel-seo-services", label: "Hotel SEO Services", note: "Direct bookings instead of OTA commissions." },
  { path: "/aged-care-seo-services", label: "Aged Care SEO Services", note: "Home care, retirement living and NDIS-adjacent providers." },
];

const guides: Entry[] = [
  { path: "/website-cost-adelaide", label: "How Much Does a Website Cost in Adelaide?", note: "DIY vs budget vs agency vs premium, with real numbers." },
  { path: "/seo-vs-google-ads-adelaide", label: "SEO vs Google Ads Adelaide", note: "An honest comparison of cost, timeline and when each makes sense." },
  { path: "/ai-automation-vs-hiring-staff-adelaide", label: "AI Automation vs Hiring Staff", note: "Real cost comparison: a part-time receptionist versus automation." },
  { path: "/ai-receptionist-cost-adelaide", label: "AI Receptionist Cost Adelaide", note: "What an AI receptionist costs and what drives the price." },
  { path: "/ai-receptionist-vs-virtual-receptionist", label: "AI Receptionist vs Virtual Receptionist", note: "Differences, trade-offs and which suits which business." },
  { path: "/best-ai-receptionist-australia", label: "Best AI Receptionist Australia", note: "How to evaluate AI receptionist options in Australia." },
  { path: "/testimonials", label: "Client Reviews" },
  { path: "/tools/ai-readiness-calculator", label: "AI Readiness Calculator", note: "Free tool scoring how ready a business is to automate." },
  { path: "/lost-leads-calculator", label: "Lost Leads Calculator", note: "Free tool estimating revenue lost to missed calls." },
  { path: "/blog", label: "Blog", note: "Practical guides for Adelaide small businesses." },
];

function list(entries: Entry[]): string {
  return entries
    .map((e) => `- [${e.label}](${U}${e.path === "/" ? "" : e.path})${e.note ? `: ${e.note}` : ""}`)
    .join("\n");
}

export const dynamic = "force-static";

export function GET() {
  const suburbList = (suburbs as { name: string; slug: string }[])
    .map((s) => `[${s.name}](${U}/${s.slug})`)
    .join(", ");

  const blogList = posts
    .map((p) => `- [${p.title}](${U}/blog/${p.slug})`)
    .join("\n");

  const body = `# AI Adelaide

> AI Adelaide is an Adelaide-based digital studio building websites, local SEO and AI automation for South Australian small businesses. Website design ${PRICING.website.fromLabel} one-off (you own it) or ${PRICING.website.monthly.label} on a monthly plan. Local SEO ${PRICING.seo.fromLabel}. AI automation ${PRICING.automation.fromLabel}. The digital health check / audit is free. No lock-in contracts on any plan. Adelaide owned and operated.

AI Adelaide works with Adelaide tradies (plumbers, electricians, builders, HVAC, landscapers, painters), allied health and clinics, cafes and restaurants, beauty salons and hairdressers, retail shops, NDIS providers, and professional services — helping them get found on Google, win more enquiries, and automate admin such as missed-call follow-up, quote chasing, appointment reminders and 24/7 call answering.

## Key facts

- **Website design**: ${PRICING.website.tiers[0].price} (Starter), ${PRICING.website.tiers[1].price} (Business), ${PRICING.website.tiers[2].price} (Growth) — one-off, you own the site. Starter sites go live in 48 hours.
- **Monthly website plan**: ${PRICING.website.monthly.setup} setup then ${PRICING.website.monthly.price}, including hosting, content edits and ongoing care. Month to month, buy out anytime.
- **Local SEO**: ${PRICING.seo.tiers[0].price} (Local SEO) or ${PRICING.seo.tiers[1].price} (Growth SEO), month to month.
- **AI automation**: ${PRICING.automation.tiers[0].price} (Starter) or ${PRICING.automation.tiers[1].price} (Business), month to month.
- **Audit**: free. There is no paid audit.
- **Contracts**: no lock-in on any plan.
- **Location**: ${siteConfig.address}. Serving greater Adelaide, South Australia.
- **Phone**: ${siteConfig.phone} — answered 24/7 by our own AI receptionist, which is the same system we install for clients.
- **Email**: ${siteConfig.email}

## Core pages

${list(core)}

## Services

${list(services)}

## Industries and niches

${list(industries)}

## Guides, comparisons and free tools

${list(guides)}

## Adelaide suburbs with dedicated pages

${suburbList}

Each suburb page covers local SEO for that area, common local business pain points, services offered, and pricing.

## Blog

${blogList}

## Company information

- **Name**: AI Adelaide
- **Website**: ${U}
- **Email**: ${siteConfig.email}
- **Phone**: ${siteConfig.phone}
- **Address**: ${siteConfig.address}
- **Service area**: Greater Adelaide, South Australia
- **Specialties**: small-business website design, local SEO, AI automation (missed-call text-back, quote follow-up, AI receptionist, appointment reminders, review requests), Google Business Profile optimisation.
- **Positioning**: AI-accelerated production is why the pricing and turnaround are what they are; every site is human-checked before launch.

## Optional

- [llms-full.txt](${U}/llms-full.txt): extended version with more detail on each service.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
