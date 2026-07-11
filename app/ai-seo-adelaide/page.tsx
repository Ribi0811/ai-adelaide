import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

// Tier 12 (2026-07-11): GSC shows "ai seo adelaide" (80 impr @ pos 15.4) and
// "ai seo services" (pos 9.5) landing on the homepage with no dedicated page,
// plus AEO-flavoured queries like "how do i get my business recommended by ai
// tools in adelaide". This page owns the "AI SEO" intent both ways: SEO done
// with AI, and being visible to AI assistants/AI Overviews.
export const metadata: Metadata = {
  title: "AI SEO Adelaide — Rank on Google & ChatGPT",
  description:
    "AI SEO for Adelaide small businesses. Rank higher on Google and get recommended by ChatGPT and AI Overviews. From $399/mo, no lock-in, Adelaide owned.",
  alternates: { canonical: "/ai-seo-adelaide" },
};

const whatsIncluded = [
  { title: "AI-accelerated local SEO", body: "Everything in our local SEO service — Google Business Profile, suburb pages, reviews, citations — done faster because AI handles the research and drafting while a human makes every final call. That speed is why it costs $399/mo, not $1,500/mo." },
  { title: "AI Overview visibility", body: "Google now answers many searches with an AI Overview before any blue link. We structure your pages — clear answers, FAQ schema, entity-consistent business details — so that overview cites you instead of skipping you." },
  { title: "Get recommended by ChatGPT & co.", body: "When someone asks an AI assistant \"who builds websites in Adelaide?\", the answer comes from what's written about you online. We build the consistent business footprint (site, GBP, directories, reviews) that AI assistants draw on." },
  { title: "Content that answers real questions", body: "AI tools and Google both reward pages that directly answer the questions Adelaide customers actually ask. We mine live search data for those questions and publish clear, local answers — no filler." },
  { title: "Structured data everywhere", body: "LocalBusiness, Service, and FAQPage schema on every page that matters, so both Google's crawler and AI models can read exactly what you do, where you work, and what it costs." },
  { title: "Monthly plain-English reporting", body: "Where you rank, what moved, what we're doing next — including how you're showing up in AI-generated answers, not just the classic ten blue links." },
];

const faqs = [
  { question: "What is AI SEO?", answer: "AI SEO means two things, and we do both. First: using AI to do the heavy lifting of SEO — keyword research, content drafting, technical audits — so the same work costs a fraction of the usual agency price. Second: optimising your business to be visible in AI-driven search — Google's AI Overviews, ChatGPT recommendations, and voice assistants — not just traditional rankings." },
  { question: "How do I get my business recommended by AI tools in Adelaide?", answer: "AI assistants recommend businesses that have a clear, consistent online footprint: a fast website that plainly states what you do and where, a complete Google Business Profile, consistent name-address-phone details across directories, genuine reviews, and structured data. We build exactly that footprint — it's the same foundation that wins local Google rankings, which is why the two go together." },
  { question: "Does AI-written content actually rank on Google?", answer: "Yes — Google's own guidance says it rewards helpful content regardless of how it's produced, and penalises unhelpful content regardless of how it's produced. Our process uses AI for speed but every page is shaped around real Adelaide search data and reviewed by a human before it goes live. Lazy AI filler doesn't rank; well-directed AI content does." },
  { question: "How much does AI SEO cost in Adelaide?", answer: "Our local SEO starts at $399/month and Growth SEO is $699/month — month-to-month, no lock-in. AI is the reason the price is that low: it compresses the hours, not the quality. Adelaide agencies commonly charge $1,000-$2,500/month for comparable work." },
  { question: "Will AI Overviews steal my traffic?", answer: "For informational searches, AI Overviews do reduce clicks — which is exactly why local service businesses should care about being the business the overview names. For commercial searches (\"plumber Norwood\", \"web designer Adelaide\"), Google still shows the local pack and organic results, and buyers still click through to compare. Being visible in both is the play." },
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
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">AI SEO Adelaide — Rank on Google and Get Named by ChatGPT</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Search is splitting in two: Google's classic results, and AI answers from ChatGPT, AI Overviews, and voice assistants. AI SEO covers both — we use AI to do local SEO at a price traditional agencies can't match, and we build the online footprint that makes AI tools recommend your Adelaide business by name.
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Be the Business the AI Recommends</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We&apos;ll show you where you rank today, what AI assistants currently say about your business, and exactly what it would take to fix both. Also see <Link href="/seo" className="underline underline-offset-4">SEO services Adelaide</Link> and <Link href="/seo-for-tradies-adelaide" className="underline underline-offset-4">SEO for tradies</Link>.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free AI SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
