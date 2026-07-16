import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 75 chars (max 60); description
  // was truncated by the checker's regex on embedded escaped quotes and
  // rewritten without them.
  title: "Hotel SEO Services Adelaide",
  description:
    `Hotel SEO for Adelaide and SA accommodation businesses. Improve local visibility, direct-booking opportunities, content and reporting. ${PRICING.seo.fromLabel}.`,
  alternates: { canonical: "/hotel-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile for hotels", body: "Optimised for hospitality — hotel categories, amenity attributes, photo galleries, room types, booking links, review highlighting. Critical for \"hotel near me\" searches." },
  { title: "Adelaide suburb + region pages", body: "Adelaide CBD, Glenelg, North Adelaide, Hahndorf, Mount Barker, Barossa, McLaren Vale — every region you serve gets a dedicated page targeting accommodation searches there." },
  { title: "Direct booking optimisation", body: "We review how your booking engine and direct rates connect to the website and eligible Google hotel features. The goal is to make direct booking easy when a guest chooses that route." },
  { title: "Local + travel content", body: "Blog content on Adelaide attractions, events, food, day trips — the kind of content travellers actually search before booking. Drives informational traffic that converts to direct bookings." },
  { title: "Review requests + response", body: "Reviews strongly influence guest decisions. We set up post-stay requests and help you respond professionally to positive and negative feedback, without buying, gating or fabricating reviews." },
  { title: "OTA and direct-booking balance", body: "OTAs can remain valuable for reach. SEO and a usable direct-booking experience help build another acquisition channel so the business is less dependent on any single platform." },
];

const faqs = [
  { question: "Do you do SEO for hotels in Adelaide?", answer: "Yes — we work with boutique hotels, motels, B&Bs, serviced apartments, holiday parks, and short-term rental managers (Airbnb, Stayz, etc.) across Adelaide and regional SA. Our process targets both Google organic search AND Google's hotel-specific features (hotel pack, map results, free booking links)." },
  { question: "How much does hotel SEO cost in Adelaide?", answer: `Local SEO is ${PRICING.seo.tiers[0].price}; Growth SEO is ${PRICING.seo.tiers[1].price} for a broader content and authority scope. Both are month to month with no lock-in.` },
  { question: "How long does hotel SEO take to work?", answer: "There is no fixed timetable. Your property, location, existing authority, booking setup and competition all affect movement. We establish a baseline and review search visibility, direct enquiries and bookings over the following months rather than promise a ranking date." },
  { question: "Can SEO help me get off Booking.com and Expedia?", answer: "SEO can help grow direct discovery and bookings, but OTAs may remain an important channel. We use your actual commission rate, booking value and direct-booking conversion data to model the value of shifting a portion of bookings rather than promise a fixed saving." },
  { question: "Do you do SEO for Airbnb and short-term rentals?", answer: "Yes. We can improve a direct booking site, useful location and property pages, review workflows and content for short-term rental managers. Results depend on the properties, market, website and competition; SEO is a complementary channel, not a guaranteed replacement for OTA visibility." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function HotelSeoServicesPage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            Build a stronger direct-booking channel alongside Booking.com, Expedia and other sources. We help Adelaide and regional SA accommodation businesses improve discovery, property information and the path from Google to a direct booking.
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
            Free 15-minute chat. We&apos;ll review accommodation-search visibility, direct-booking pathways and competitors, then explain which improvements we would prioritise.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Hotel SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
