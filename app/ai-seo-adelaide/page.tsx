import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

// Tier 12 (2026-07-11): GSC shows "ai seo adelaide" (80 impr @ pos 15.4) and
// "ai seo services" (pos 9.5) landing on the homepage with no dedicated page,
// plus AEO-flavoured queries like "how do i get my business recommended by ai
// tools in adelaide". This page owns the "AI SEO" intent both ways: SEO done
// with AI, and being visible to AI assistants/AI Overviews.
export const metadata: Metadata = {
  title: "AI SEO Adelaide — AI Search Visibility",
  description:
    `AI SEO for Adelaide businesses: people-first content, technical SEO and a consistent entity footprint for Google and AI search. ${PRICING.seo.fromLabel}.`,
  alternates: { canonical: "/ai-seo-adelaide" },
};

const whatsIncluded = [
  { title: "AI-assisted, human-reviewed SEO", body: "AI helps with research, first drafts and repetitive checks while a person decides the strategy, verifies claims, edits the page and approves what goes live. The service follows our standard Local SEO and Growth SEO pricing." },
  { title: "AI Overview readiness", body: "We make important pages easy to understand with direct answers, clear sourcing, descriptive headings and consistent business details. This can improve eligibility for search features, but no agency can guarantee that an AI Overview will cite a particular site." },
  { title: "Consistent business footprint", body: "AI assistants may draw on many sources when answering local recommendations. We strengthen the information within your control: your website, Google Business Profile, relevant directories, genuine reviews and clear service details." },
  { title: "Content that answers real questions", body: "AI tools and Google both reward pages that directly answer the questions Adelaide customers actually ask. We mine live search data for those questions and publish clear, local answers — no filler." },
  { title: "Appropriate structured data", body: "We use LocalBusiness, Service and FAQPage structured data only where it accurately represents the visible page. It helps machines understand the content but does not force inclusion in search or AI answers." },
  { title: "Monthly plain-English reporting", body: "We report traditional search visibility, leads and completed work. Where reliable tools allow it, we can record spot checks of AI answers while explaining that responses vary by model, prompt, location and time." },
];

const faqs = [
  { question: "What is AI SEO?", answer: "AI SEO means two things, and we do both. First: using AI to do the heavy lifting of SEO — keyword research, content drafting, technical audits — so the same work costs a fraction of the usual agency price. Second: optimising your business to be visible in AI-driven search — Google's AI Overviews, ChatGPT recommendations, and voice assistants — not just traditional rankings." },
  { question: "How do I get my business recommended by AI tools in Adelaide?", answer: "There is no submission or guaranteed method. The practical work is to make your business easy to verify across authoritative sources: a clear website, complete Google Business Profile, consistent business details, genuine reviews, useful content and appropriate structured data. This improves the information available to search and AI systems without controlling their answer." },
  { question: "Does AI-written content actually rank on Google?", answer: "Content is judged by whether it is useful, reliable and created for people, not simply by whether AI helped produce it. We use AI for speed, then verify facts, remove generic filler, add Adelaide and business-specific detail, and have a person review every page before publication." },
  { question: "How much does AI SEO cost in Adelaide?", answer: `Local SEO is ${PRICING.seo.tiers[0].price} and Growth SEO is ${PRICING.seo.tiers[1].price}, month to month with no lock-in. AI assists the workflow; the deliverable remains human-reviewed SEO work.` },
  { question: "Will AI Overviews affect my traffic?", answer: "They can change how people discover and compare businesses, especially for informational searches. The response is to publish useful first-party information, make services and proof easy to verify, and keep measuring calls and enquiries rather than assume an AI mention will produce traffic." },
  { question: "Is AI SEO different from your normal SEO service?", answer: "It's the same engine — our local SEO service has been AI-accelerated from day one. This page exists because businesses increasingly search for \"AI SEO\" specifically. If you want the full picture of what's included, see our SEO services page or the local SEO breakdown; pricing and process are identical." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AiSeoAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "AI SEO Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI SEO Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">AI SEO Adelaide — Build Visibility Across Google and AI Search</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Customers can now discover businesses through classic Google results, maps, AI Overviews and assistants. We strengthen the accurate, people-first information those systems can access while improving traditional SEO. No one can guarantee a citation or recommendation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free AI SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/local-seo-adelaide" className="btn-secondary px-8 py-4">See Local SEO Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What&apos;s Included in AI SEO</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">AI SEO FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Make Your Business Easier to Find and Verify</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We&apos;ll review your current search visibility, business information and content gaps, then explain what is worth improving. AI responses vary, so assistant checks are observations rather than guaranteed rankings. Also see <Link href="/seo" className="underline underline-offset-4">SEO services Adelaide</Link> and <Link href="/seo-for-tradies-adelaide" className="underline underline-offset-4">SEO for tradies</Link>.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free AI SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
