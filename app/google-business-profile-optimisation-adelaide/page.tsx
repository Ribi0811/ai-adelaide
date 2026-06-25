import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Google Business Profile Adelaide | From $199/mo",
  description:
    "Google Business Profile optimisation for Adelaide businesses. Categories, services, photos, posts, reviews. Show up in the local 3-pack. From $199/mo.",
  alternates: { canonical: "/google-business-profile-optimisation-adelaide" },
};

const whatWeDo = [
  {
    title: "Category & services setup",
    body:
      "Primary and secondary GBP categories set correctly for your trade. Service list populated with the searches your customers actually make. This is the single biggest factor for showing up in the local 3-pack.",
  },
  {
    title: "Photo & visual content",
    body:
      "Logo, cover photo, and 10-15 job photos uploaded with optimised filenames and geo-tagging. Google rewards active profiles with imagery, and customers decide whether to call based on the photos they see.",
  },
  {
    title: "Google Posts & updates",
    body:
      "Weekly Google Posts about jobs, offers, or seasonal promos. Keeps your profile active in Google's eyes and gives customers a reason to choose you over the next listing.",
  },
  {
    title: "Q&A seeding",
    body:
      "We seed your GBP with the questions your customers ask most — pricing, services, suburbs, hours — and the answers. Builds trust before the call and shows up in search.",
  },
  {
    title: "Review request automation",
    body:
      "Auto-sends a Google review link 24 hours after job completion. Builds your 5-star reputation over time without manual chasing. We help you respond to every review (positive or negative).",
  },
  {
    title: "Citation consistency",
    body:
      "Your business name, address, and phone (NAP) need to match across Yellow Pages, True Local, Apple Maps, Bing Places, and 30+ directories. We audit, fix, and submit where missing.",
  },
];

const compare = [
  { tier: "DIY", label: "Set up yourself", cost: "$0", result: "Incomplete profile, no reviews, hidden by competitors" },
  { tier: "Cheap", label: "Bulk submission service", cost: "$50-200 once-off", result: "Citations built but profile not optimised" },
  { tier: "Pro", label: "Ongoing GBP optimisation", cost: "From $199/mo", result: "Active profile, weekly posts, review growth, 3-pack visibility" },
];

const faqs = [
  {
    question: "What is a Google Business Profile?",
    answer:
      "It's the free listing that shows up when someone searches your business name, your trade, or 'near me' searches. It includes your address, hours, photos, reviews, and a link to your website. Every Adelaide business with a physical location or service area should have one.",
  },
  {
    question: "How do I show up in the local 3-pack?",
    answer:
      "Three factors: relevance (how well your profile matches the search), distance (how close you are to the searcher), and prominence (how established your business is online). Optimising your profile improves relevance; reviews and citations improve prominence. Most Adelaide small businesses can reach the 3-pack within 3-6 months.",
  },
  {
    question: "Can I optimise my GBP myself?",
    answer:
      "Yes — the basics are free. Set up your profile, add photos, list your services, and ask customers for reviews. Where we come in is the ongoing work: weekly posts, review follow-up, citation cleanup, competitor monitoring, and ranking tracking. Most Adelaide business owners don't have time to do this consistently.",
  },
  {
    question: "How much does GBP optimisation cost in Adelaide?",
    answer:
      "From $199/month for ongoing optimisation. Setup is included in the monthly fee. No lock-in, no per-post charges. We also bundle it with our Local SEO and Website services for tradies who want the full package.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most Adelaide businesses see improvement within 30-60 days. Profile views and direction requests go up first, then calls, then walk-ins. Reaching the local 3-pack takes 3-6 months depending on competition in your suburb and trade.",
  },
  {
    question: "Do I need a website too?",
    answer:
      "Recommended but not strictly required. A GBP without a website is fine for some trades. A GBP with a website pointing to it converts better — Google sees the link as a trust signal, and customers can learn more before they call. We can build you a website from $699 if you don't have one.",
  },
  {
    question: "Will GBP optimisation work for service-area businesses?",
    answer:
      "Yes. If you're a plumber or electrician who works across multiple suburbs, GBP lets you set service areas instead of a single address. We help you optimise for each suburb and the surrounding Adelaide metro.",
  },
  {
    question: "What about reviews — can you help with negative ones?",
    answer:
      "Yes. We help you respond to every review (positive or negative) in your voice, professionally and quickly. We can also flag fake reviews for removal. The goal is a 4.7+ average with regular new reviews.",
  },
];

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile Optimisation Adelaide",
    serviceType: "Local SEO",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Google Business Profile optimisation for Adelaide businesses. Categories, services, photos, posts, reviews, citations. Show up in the local 3-pack. From $199/mo.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
    },
      };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function GoogleBusinessProfileAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Google Business Profile Optimisation Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Google Business Profile</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Google Business Profile Optimisation Adelaide — Show Up in the Local 3-Pack
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When someone in Norwood searches &quot;plumber near me&quot; or a homeowner in Glenelg types &quot;electrician Adelaide&quot;, the local 3-pack decides who gets the call. We optimise your Google Business Profile — categories, services, photos, posts, reviews, citations — so you show up first. From $199/month, no lock-in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/seo" className="btn-primary px-8 py-4">
              See Full Local SEO <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What GBP optimisation includes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whatWeDo.map((w) => (
              <div key={w.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{w.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">DIY vs bulk service vs ongoing optimisation</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Cost</th>
                  <th className="py-2 font-semibold text-slate-950">Result</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c, i) => (
                  <tr key={c.label} className={i === compare.length - 1 ? "" : "border-b border-slate-100"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{c.label}</td>
                    <td className="py-3 pr-4">{c.cost}</td>
                    <td className="py-3">{c.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            For most Adelaide small businesses, the &quot;Pro&quot; tier is the only one that actually moves the needle. The first two options get you a profile that&apos;s invisible to Google&apos;s ranking algorithm.
          </p>
        </div>
      </section>

      <Testimonials
        count={3}
        heading="What Adelaide businesses say after we optimise their GBP"
        eyebrow="Real results"
        subheadline="The 3-pack is where the calls come from. Here's what showing up there actually does."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to show up first in Adelaide?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll look at your current GBP, show you what&apos;s missing, and tell you exactly what it would take to reach the local 3-pack.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/seo" className="btn-primary px-8 py-4">
              See Full Local SEO <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}