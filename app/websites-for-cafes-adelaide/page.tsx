import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Cafes Adelaide | Cafe Website Design",
  description:
    "Cafe websites for Adelaide coffee shops and restaurants. Menu display, online reservations, location maps, Google reviews. Built fast, mobile-first, from $699.",
  alternates: {
    canonical: "/websites-for-cafes-adelaide",
  },
};

const buildItems = [
  {
    title: "Menu display built in",
    body:
      "Beautiful, browsable menu — breakfast, lunch, dinner, drinks, dietary filters. Customers know exactly what you serve before they walk in. Easy to update when you change the menu.",
  },
  {
    title: "Online reservations",
    body:
      "Connect with OpenTable, Resy, SevenRooms, or your own booking system. Customers book a table from their phone in under 30 seconds.",
  },
  {
    title: "Tap-to-call & directions",
    body:
      "One tap connects customers to your phone. Another tap opens Google Maps with directions. Both are critical for foot traffic — especially for tourists and weekday lunchers.",
  },
  {
    title: "Location & hours prominent",
    body:
      "Suburb, opening hours, parking info, public transport — all above the fold. Customers searching &lsquo;cafe near me&rsquo; at 8am need this info instantly.",
  },
  {
    title: "Gallery that sells the vibe",
    body:
      "Plates, coffee art, the room, the bar — your website should make people want to come in. We set it up so you can add new photos weekly without touching code.",
  },
  {
    title: "Google Maps + reviews integration",
    body:
      "Your Google reviews, location pin, and directions all built in. New customers trust social proof — your best recent reviews displayed right on the homepage.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your cafe, your menu, your vibe, your regulars. We need photos or stock imagery choices, plus your booking platform if you have one.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, build the menu pages, and wire up the booking integration. You don't write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tell us what to change — menu tweaks, photo swaps, opening hour updates. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live on your domain, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Cafes with no website, relying on Instagram and word-of-mouth",
  "Coffee shops wanting to take direct bookings instead of commission apps",
  "Restaurants losing customers to competitors with better Google presence",
  "Cafe chains wanting a consistent web presence across multiple locations",
  "New cafes launching and need to be findable on day one",
  "Established cafes whose current site is slow or doesn't show on mobile",
];

const localAdelaide = [
  "Glenelg & Jetty Road — tourist-driven, mobile-first and Google Maps matter most",
  "Norwood & The Parade — competitive strip, reviews + SEO are critical",
  "Burnside & Glen Osmond — local regulars, easy online reservations win",
  "Unley & King William Road — brunch crowd, beautiful galleries convert best",
  "Mitcham & Belair — suburban loyalty, Google reviews drive discovery",
];

const faqs = [
  {
    question: "Can you integrate my booking platform?",
    answer:
      "Yes. We work with OpenTable, Resy, SevenRooms, and most cafe POS systems that have a web widget. If you don't have one, we'll set you up with a free or low-cost option that works.",
  },
  {
    question: "How do you handle the menu?",
    answer:
      "We build a clean, browsable menu page with categories (breakfast, lunch, drinks, etc.), prices, and dietary tags (V, VG, GF). Easy to update via a simple editor or by emailing us the changes.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete, custom-built cafe site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month if you want to rank for &lsquo;cafe [suburb]&rsquo;.",
  },
  {
    question: "Will it show up on Google Maps?",
    answer:
      "Yes — your Google Maps listing, location pin, hours, and reviews are all built into the site. We also set up Google Business Profile properly so your listing ranks well in the local map pack.",
  },
  {
    question: "Can I add online ordering later?",
    answer:
      "Absolutely. We can integrate with your preferred ordering platform (Mr Yum, Square, ChowNow, or your existing POS). The site is built to be ready when you are.",
  },
  {
    question: "Do I need to provide food photos?",
    answer:
      "Ideally yes — your own plated food and coffee art convert far better than stock. We can launch with curated stock and swap in yours later. Most cafes send 10-20 photos and we pick the best.",
  },
  {
    question: "How long until I see SEO results?",
    answer:
      "Niche suburbs (like &lsquo;cafe Mitcham&rsquo;) can show movement in 2-4 weeks. Competitive areas (&lsquo;cafe Glenelg&rsquo;, &lsquo;cafe Norwood&rsquo;) take 2-3 months for page 1. We&apos;ll give you an honest timeline on the free chat.",
  },
  {
    question: "Can I add AI automation later?",
    answer:
      "Yes. The site can connect with our AI receptionist and missed call text-back system. Most cafes add this in month 2-3 once the website is generating consistent bookings and they realise they&apos;re still missing calls during the rush.",
  },
];

export default function WebsitesForCafesPage() {
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
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Cafes Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Cafes & Restaurants</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Cafe Website That Brings Customers Through the Door
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Adelaide&apos;s cafe scene is competitive. Your regulars know you — but new customers are searching &lsquo;cafe [suburb]&rsquo; on Google every morning. If your site is slow, ugly, or doesn&apos;t show on mobile, they walk into the cafe down the road instead. We build beautiful, fast cafe websites that bring new customers in and let regulars book a table from their phone. From $699, live in 48 hours.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in 48 Hours</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{step.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Cafes we build websites for across Adelaide
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We work with cafes, restaurants, and coffee shops across Adelaide. Here are the suburbs we serve most:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        industry="cafe"
        count={2}
        heading="What Adelaide cafe owners say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Bring More Customers Through the Door?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your cafe site, show you examples from local Adelaide cafes, and give you a fixed quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
