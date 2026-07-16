import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import { PRICING, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Google Business Profile Adelaide | Local SEO",
  description:
    `Google Business Profile optimisation within our Adelaide Local SEO service: categories, services, photos, reviews and reporting. ${PRICING.seo.fromLabel}.`,
  alternates: { canonical: "/google-business-profile-optimisation-adelaide" },
};

const whatWeDo = [
  {
    title: "Category & services setup",
    body:
      "We review primary and secondary categories, services and business details against what you genuinely offer. This improves relevance, one of several factors Google uses for local results.",
  },
  {
    title: "Photo & visual content",
    body:
      "We organise your logo, cover image and genuine work or premises photos so customers can quickly understand the business. We do not claim that file names or geo-tagging create a ranking shortcut.",
  },
  {
    title: "Google Posts & updates",
    body:
      "Useful updates about services, completed work or seasonal information can keep customers informed. Posting frequency is agreed to match the plan and the real material available.",
  },
  {
    title: "Customer questions and profile accuracy",
    body:
      "We identify common questions about pricing, services, suburbs and hours, then make sure the answers are clear on your website and profile wherever Google provides an appropriate business-editing feature.",
  },
  {
    title: "Review request automation",
    body:
      "A post-job workflow can send a Google review link and a polite reminder. Customers choose whether and how to review; we help you respond professionally and never buy, gate or fabricate reviews.",
  },
  {
    title: "Citation consistency",
    body:
      "We audit your business name, address and phone across relevant platforms such as Apple Maps, Bing Places, Yellow Pages and suitable industry directories, then correct important inconsistencies.",
  },
];

const compare = [
  { tier: "DIY", label: "Set up yourself", cost: "$0", result: "A valid option if you can keep details, photos and reviews current" },
  { tier: "Audit", label: "One-off review", cost: "Free with us", result: "Find missing details, eligibility issues and priority fixes" },
  { tier: "Ongoing", label: "Local SEO plan", cost: PRICING.seo.fromLabel, result: "Profile work coordinated with website, reviews, citations and reporting" },
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
      "Google describes the main local factors as relevance, distance and prominence. We improve the accurate information and trust signals within your control, but distance and Google's systems still affect each search. Nobody can guarantee a 3-pack position or timetable.",
  },
  {
    question: "Can I optimise my GBP myself?",
    answer:
      "Yes — the basics are free. Set up your profile, add photos, list your services, and ask customers for reviews. Where we come in is the ongoing work: weekly posts, review follow-up, citation cleanup, competitor monitoring, and ranking tracking. Most Adelaide business owners don't have time to do this consistently.",
  },
  {
    question: "How much does GBP optimisation cost in Adelaide?",
    answer:
      `Google Business Profile work is included in our ${PRICING.seo.tiers[0].price} Local SEO plan rather than sold here as an unapproved standalone product. Growth SEO is ${PRICING.seo.tiers[1].price}. Both are month to month with no lock-in.`,
  },
  {
    question: "How long until I see results?",
    answer:
      "There is no fixed timetable. We establish a baseline for relevant searches and profile actions, complete the accuracy and relevance work, then monitor what changes as Google processes it. Competition, distance, prominence and your starting position all affect the result.",
  },
  {
    question: "Do I need a website too?",
    answer:
      `A website is not required for every eligible profile, but it gives customers somewhere to verify your services, proof and contact details. We can build one ${PRICING.website.fromLabel} if the current website is missing or holding conversions back.`,
  },
  {
    question: "Will GBP optimisation work for service-area businesses?",
    answer:
      "Eligible plumbers, electricians and other mobile businesses can hide their address and define genuine service areas. We configure the profile to follow Google's rules. Listing an area does not make the business rank equally across every suburb.",
  },
  {
    question: "What about reviews — can you help with negative ones?",
    answer:
      "We help you respond to positive and negative reviews professionally and can flag reviews that appear to breach Google's policies. We focus on a steady flow of genuine feedback rather than promise a particular rating.",
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
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Google Business Profile optimisation within Local SEO for Adelaide businesses, covering accurate categories, services, photos, reviews, citations and reporting.",
    offers: {
      "@type": "Offer",
      price: PRICING.seo.tiers[0].price.replace(/[^\d]/g, ""),
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: PRICING.seo.tiers[0].price.replace(/[^\d]/g, ""), priceCurrency: "AUD", unitText: "MONTH" },
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
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            We improve the information and trust signals within your control—categories, services, photos, reviews, citations and website alignment—so your business is a stronger candidate for relevant Adelaide searches. Google also considers distance and prominence, so positions are never guaranteed. Included in Local SEO {PRICING.seo.fromLabel}.
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
            DIY can work if the business has time and follows Google&apos;s rules. Ongoing support becomes useful when profile work needs to stay coordinated with website content, reviews, citations and lead measurement.
          </p>
        </div>
      </section>

      <Testimonials
        count={3}
        heading="What Adelaide businesses say after we optimise their GBP"
        eyebrow="Real results"
        subheadline="A complete profile helps customers compare your services, proof and contact details when they find you."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Improve Your Adelaide Profile?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll review your current profile, identify missing or inaccurate information, and explain which local-search improvements are worth prioritising. No ranking guarantee.
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
