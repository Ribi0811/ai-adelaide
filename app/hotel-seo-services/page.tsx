import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 75 chars (max 60); description
  // was truncated by the checker's regex on embedded escaped quotes and
  // rewritten without them.
  title: "Hotel SEO Services Adelaide",
  description:
    "Hotel and accommodation SEO for Adelaide and SA. Rank for local hotel and motel searches, drive direct bookings, cut OTA commissions. From $497/mo.",
  alternates: { canonical: "/hotel-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile for hotels", body: "Optimised for hospitality — hotel categories, amenity attributes, photo galleries, room types, booking links, review highlighting. Critical for \"hotel near me\" searches." },
  { title: "Adelaide suburb + region pages", body: "Adelaide CBD, Glenelg, North Adelaide, Hahndorf, Mount Barker, Barossa, McLaren Vale — every region you serve gets a dedicated page targeting accommodation searches there." },
  { title: "Direct booking optimisation", body: "Your booking engine (SiteMinder, Cloudbeds, RoomKey, etc.) wired up properly so Google's hotel features surface your direct rates. Goal: steal bookings back from Booking.com and Expedia." },
  { title: "Local + travel content", body: "Blog content on Adelaide attractions, events, food, day trips — the kind of content travellers actually search before booking. Drives informational traffic that converts to direct bookings." },
  { title: "Review generation + response", body: "Hotels live and die on reviews. We set up automated post-stay review requests AND help you respond to reviews (good and bad) in ways that improve rankings AND conversion." },
  { title: "OTA strategy", body: "Yes, you still need Booking.com and Expedia. But SEO is how you build direct demand so you're not paying 15-22% commissions forever. We help you balance both." },
];

const faqs = [
  { question: "Do you do SEO for hotels in Adelaide?", answer: "Yes — we work with boutique hotels, motels, B&Bs, serviced apartments, holiday parks, and short-term rental managers (Airbnb, Stayz, etc.) across Adelaide and regional SA. Our process targets both Google organic search AND Google's hotel-specific features (hotel pack, map results, free booking links)." },
  { question: "How much does hotel SEO cost in Adelaide?", answer: "Hotel SEO packages for Adelaide and SA start at $497/month (Google Business Profile optimisation, 5 suburb pages, monthly content, review management). Mid-tier packages for boutique hotels and chains run $897/month with more content and OTA integration work. Premium packages with full content engines start at $1,497/month. Month-to-month, no lock-in." },
  { question: "How long does hotel SEO take to work?", answer: "Google Business Profile changes can show results in 2-4 weeks. Suburb pages and content take 2-4 months. For competitive terms like \"hotel Adelaide CBD\" or \"accommodation Glenelg\", expect 3-6 months. Long-term SEO wins compound — every month you rank, you save thousands in OTA commissions." },
  { question: "Can SEO help me get off Booking.com and Expedia?", answer: "Not entirely — OTAs are still valuable for visibility. But SEO is how you build a base of customers who book direct with you, bypassing 15-22% OTA commissions. Most hotels we work with shift 25-40% of bookings to direct within 12-18 months, saving $50k-$200k/year in commission costs. Pays for the SEO itself many times over." },
  { question: "Do you do SEO for Airbnb and short-term rentals?", answer: "Yes — short-term rental managers (Airbnb, Stayz, Booking, direct websites) face unique SEO challenges. We optimise your direct booking site, build suburb + property pages, set up review systems, and create content that drives direct enquiries. Many STR managers find SEO outperforms their OTA listings once established." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function HotelSeoServicesPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "Hotel SEO Services" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Hotel & Accommodation SEO</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">Hotel SEO Services — Get Direct Bookings from Google</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Stop paying 15-22% commissions to Booking.com and Expedia for every booking. Hotel SEO builds your direct booking pipeline so guests find you on Google and book straight with you. Adelaide and regional SA focused.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free Hotel SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/blog/ai-tools-adelaide-hospitality-2026" className="btn-secondary px-8 py-4">Hospitality AI Tools Guide <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What's Included in Hotel SEO</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whatsIncluded.map((item, i) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">0{i + 1}</p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Hotel SEO FAQs</h2>
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

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Cut Your OTA Commission Bill</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We'll show you where you rank for accommodation searches, what your competitors are doing, and exactly what it would take to drive more direct bookings.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Hotel SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}