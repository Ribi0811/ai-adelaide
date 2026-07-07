export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/website-design-adelaide", label: "Websites" },
  { href: "/website-pricing", label: "Pricing" },
  { href: "/seo", label: "SEO" },
  { href: "/services", label: "Services" },
  { href: "/audit", label: "Free Audit" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

/**
 * PRICING — single source of truth for every price quoted on the site.
 * Confirmed against the live site by Ivan, 4 Jul 2026: websites from $699,
 * local SEO from $399/mo, AI automation from $199/mo, audit always free.
 *
 * Note: this constant is provided for new/updated pages to import instead of
 * hardcoding numbers. It does NOT retroactively rewrite every existing price
 * literal sitewide (959 matches across app/components/lib/data at last count,
 * the vast majority already correct) — see CHANGELOG-SEO-WORK.md Phase 4 for
 * what was actually swept and fixed vs. what was left as pre-existing, correct
 * copy referencing these same figures directly.
 */
export const PRICING = {
  audit: {
    label: "Free Audit",
    price: "Free",
    href: "/audit",
  },
  website: {
    label: "Website Design",
    from: "$699",
    fromLabel: "from $699",
    href: "/website-pricing",
    tiers: [
      { name: "Starter", price: "$699" },
      { name: "Business", price: "$1,299" },
      { name: "Growth", price: "$2,499" },
    ],
  },
  seo: {
    label: "Local SEO",
    from: "$399/mo",
    fromLabel: "from $399/mo",
    href: "/seo",
    tiers: [
      { name: "Local SEO", price: "$399/mo" },
      { name: "Growth SEO", price: "$699/mo" },
    ],
  },
  automation: {
    label: "AI Automation",
    from: "$199/mo",
    fromLabel: "from $199/mo",
    href: "/ai-automation-adelaide",
    tiers: [
      { name: "Starter", price: "$199/mo" },
      { name: "Business", price: "$399/mo" },
    ],
  },
} as const;

/* eslint-disable @typescript-eslint/no-unused-vars */
export const testimonials = [
  {
    quote:
      "I used to lose 2-3 leads a week to missed calls. Now everything comes through automatically. Paid for itself in the first month.",
    name: "Dave S.",
    role: "Trades business owner",
    industry: "trades",
  },
  {
    quote:
      "I honestly didn't think it would work for a small clinic like mine. Now my front desk spends half the time on admin and we've had zero no-shows since we set up the reminders.",
    name: "Sarah K.",
    role: "Clinic owner",
    industry: "health",
  },
  {
    quote:
      "The bookkeeping prep alone saves me 4 hours every week. My accountant is happy. I'm happy.",
    name: "Mark T.",
    role: "Builder",
    industry: "trades",
  },
  {
    quote:
      "Since the new site went live, my online bookings are up 40%. I barely touch the phone for new clients anymore. The best $1,299 I've ever spent.",
    name: "Chloe M.",
    role: "Salon owner",
    industry: "hairdresser",
  },
  {
    quote:
      "We were paying an agency $800 a month for SEO that wasn't moving the needle. AI Adelaide got us ranking on page 1 in three months. Honest pricing, real results.",
    name: "Tom W.",
    role: "Cafe owner",
    industry: "cafe",
  },
  {
    quote:
      "Switched from a WordPress site that was constantly breaking. New site is fast, looks great on mobile, and the AI quote follow-up has doubled my booking rate. Should've done this years ago.",
    name: "Sarah P.",
    role: "Trades business owner",
    industry: "trades",
  },
  {
    quote:
      "Patients used to cancel last-minute all the time. Now the reminder system drops no-shows to almost zero. The receptionist spends less time on the phone and more time with patients in the room.",
    name: "James L.",
    role: "Clinic owner",
    industry: "health",
  },
  {
    quote:
      "I run a small beauty salon. I was invisible on Google. Within 6 weeks of the new site + SEO, I was getting 4-5 new client enquiries a week from search. I had to hire a part-time therapist.",
    name: "Megan R.",
    role: "Beauty salon owner",
    industry: "beauty",
  },
  {
    quote:
      "The site paid for itself in the first weekend. One customer found us on Google and spent $1,200. The SEO keeps working even when I'm not actively marketing.",
    name: "Josh K.",
    role: "Retail shop owner",
    industry: "retail",
  },
  {
    quote:
      "Worth every cent. The site looks better than the franchise competitor down the road, loads faster, and I'm ranking above them on Google for the first time in years.",
    name: "Aisha N.",
    role: "Salon owner",
    industry: "hairdresser",
  },
];

/* Case studies for the pricing page and industry pages.
   Locations intentionally omitted to protect client privacy. */
export const caseStudies = [
  {
    business: "Suburban Plumbing",
    industry: "Plumbing",
    plan: "Business ($1,299) + Local SEO ($399/mo)",
    result: "47% more booked jobs in 90 days",
    quote:
      "The new site and SEO combo brought in 3-4 extra jobs a week within the first quarter. The site paid back the setup fee in the first month.",
    name: "Dave S.",
  },
  {
    business: "Coastal Cafe",
    industry: "Cafe",
    plan: "Starter ($699) + Local SEO ($399/mo)",
    result: "Page 1 ranking for local suburb search in 90 days",
    quote:
      "We were nowhere on Google. Now we're page 1 for the most important search in our suburb. Weekend foot traffic is up 30%.",
    name: "Tom W.",
  },
  {
    business: "Bright Smile Dental",
    industry: "Clinic",
    plan: "Growth ($2,499) + AI Automation ($399/mo)",
    result: "No-shows dropped 65%, +$8k/month revenue",
    quote:
      "The reminder system is the single best thing we've added. Empty slots used to cost us $120 each. Now they're almost always filled.",
    name: "James L.",
  },
];

export const siteConfig = {
  name: "AI Adelaide",
  description:
    "Website design from $699, local SEO, and AI automation for Adelaide small businesses. Affordable websites, SEO that ranks, automation that saves time.",
  email: "hello@aiadelaide.com.au",
  // Display phone + click-to-call. Set NEXT_PUBLIC_PHONE in env (e.g. "+61871009788")
  // and NEXT_PUBLIC_PHONE_DISPLAY (e.g. "(08) 7100 9788"). Falls back to masked
  // placeholder if env not set so local dev still works.
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(08) 7100 9788",
  phoneHref: `tel:${process.env.NEXT_PUBLIC_PHONE || "+61871009788"}`,
  url: "https://aiadelaide.com.au",
  address: "5 Peel St, Adelaide SA 5000",
};
