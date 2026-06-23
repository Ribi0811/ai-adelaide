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

export const services = [
  {
    id: "audit",
    title: "Missed Call Audit",
    price: "Free",
    description:
      "The starting point. We look at where missed calls and slow follow-up are costing you jobs, then show you the best place to start.",
    features: [
      "Review of your missed call handling and call-back process",
      "Clear recommendation on the fastest win to set up first",
      "Plain-English summary of what to change",
      "No obligation to continue",
    ],
    bestFor: "Tradies who want to see where leads are slipping through the cracks",
  },
  {
    id: "implementation",
    title: "Setup",
    price: "from $99/month",
    description:
      "We don&apos;t just give you a plan — we set up the system. AI receptionist, missed call follow-up, reminders, or admin support.",
    features: [
      "AI receptionist or automated answering system",
      "Connection with your existing tools where needed",
      "Simple handover for you and your team",
      "Fast setup window",
    ],
    timeline: "2-5 business days",
    bestFor: "Tradies ready to stop losing leads and clean up the admin backlog",
  },
  {
    id: "retainer",
    title: "Ongoing Support",
    price: "$299-699/month",
    description:
      "Your system running, improving, and handling more of the boring stuff month after month.",
    features: [
      "Monthly improvements",
      "Extra follow-up and reminder automations",
      "Performance monitoring",
      "Priority support",
    ],
    bestFor: "Businesses that want more than a one-off setup",
  },
  {
    id: "seo",
    title: "Tradie Growth Add-on",
    price: "$300-500/month",
    description:
      "Get found by the right customers before they ring someone else.",
    features: [
      "SEO-focused content",
      "Keyword research tied to your suburb and service pages",
      "Google Search Console monitoring",
      "Content built around actual customer searches",
    ],
    bestFor: "Tradies who want more inbound leads alongside the phone system",
  },
  {
    id: "website-design",
    title: "Website Design",
    price: "from $699",
    description:
      "Fast, conversion-focused websites for Adelaide tradies, hairdressers, cafes, clinics, and local service businesses.",
    features: [
      "Professional mobile-first design",
      "Google-ready page structure and metadata",
      "Suburb targeting pages built in",
      "Lead capture forms and AI automation-ready setup",
    ],
    bestFor: "Small businesses that need a proper website live fast without agency bloat",
  },
];

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
