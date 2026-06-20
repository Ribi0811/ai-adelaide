import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Marketing Agencies Adelaide | The AI-First, Fixed-Pricing Alternative",
  description:
    "Tired of marketing agencies that charge thousands and deliver nothing? We're the AI-first, fixed-pricing alternative for Adelaide small businesses. No lock-in, no hourly billing, no agency BS.",
  alternates: {
    canonical: "/marketing-agencies-adelaide",
  },
  openGraph: {
    title: "Marketing Agencies Adelaide | The AI-First, Fixed-Pricing Alternative",
    description: "Tired of marketing agencies that charge thousands? We're the AI-first, fixed-pricing alternative for Adelaide small businesses.",
    url: "https://aiadelaide.com.au/marketing-agencies-adelaide",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Marketing Agencies Adelaide" }],
    type: "website",
  },
};

const comparison = [
  { feature: "Monthly cost", us: "from $199/mo (automation) / $399/mo (SEO)", them: "$2,000-5,000+/mo" },
  { feature: "Lock-in contract", us: "None \u2014 month to month", them: "12 months typical" },
  { feature: "Setup time", us: "2-5 days for automation, 5-7 days for website", them: "3-6 months onboarding" },
  { feature: "What you get", us: "AI-powered SEO, content, lead capture, follow-up \u2014 all working 24/7", them: "A junior team doing the work manually" },
  { feature: "Reporting", us: "Plain English monthly reports \u2014 what changed, what&apos;s next", them: "Vague PDF decks full of vanity metrics" },
  { feature: "Who does the work", us: "AI tools + Adelaide-based specialists \u2014 lean, fast", them: "A mix of juniors, contractors, offshore" },
  { feature: "Adelaide knowledge", us: "Born and based in Adelaide. We know the suburbs, the market, the pace.", them: "Sydney/Melbourne agencies with a local landing page" },
  { feature: "Cancellation", us: "Email us. Done. We don&apos;t make you beg.", them: "Read the fine print. Good luck." },
];

const uspItems = [
  {
    title: "Fixed pricing, not hourly billing",
    body:
      "You know exactly what you&apos;ll pay every month. No scope creep, no surprise invoices for &lsquo;extra hours&rsquo; or &lsquo;strategy sessions&rsquo;. We list the price on the website. You can see it right now.",
  },
  {
    title: "No lock-in contracts",
    body:
      "Month to month. We earn the work every month. If you&apos;re not happy, you walk \u2014 we don&apos;t make you beg. 12-month contracts are a tax on the agency for being too slow to deliver. We move fast enough that you&apos;ll stay.",
  },
  {
    title: "AI-first, not junior-first",
    body:
      "Agencies bill you for junior hours. We bill you for AI outputs. The work is faster, the cost is lower, and the quality is more consistent. We use AI for research, content, lead capture, and reporting. We use humans for strategy and review.",
  },
  {
    title: "Adelaide-based, Adelaide-focused",
    body:
      "We&apos;re born and based in Adelaide. We know Norwood isn&apos;t the same as North Adelaide. We know the difference between a Glenelg cafe and a Mitcham cafe. Sydney agencies can&apos;t fake this.",
  },
  {
    title: "We focus on what moves the needle",
    body:
      "We don&apos;t do &lsquo;brand awareness campaigns&rsquo; or &lsquo;thought leadership content&rsquo; unless they directly drive customers. We focus on three things: getting you found on Google, capturing every lead, and following up automatically. That&apos;s it.",
  },
  {
    title: "You can leave anytime",
    body:
      "You own your website, your content, your Google Business Profile, your automation. If you decide to go elsewhere or do it yourself, you take everything with you. No hostage situations.",
  },
];

const faqs = [
  {
    question: "How are you different from a typical marketing agency?",
    answer:
      "Three big things. (1) We&apos;re AI-first \u2014 not junior team + offshore outsourcing. (2) We&apos;re fixed-pricing \u2014 not hourly billing. (3) We&apos;re no lock-in \u2014 month to month. Plus we&apos;re Adelaide-based, small-business focused, and we own the work. The result: better outcomes, lower cost, no BS.",
  },
  {
    question: "How much do marketing agencies in Adelaide typically charge?",
    answer:
      "Adelaide marketing agencies typically charge $2,000-5,000/month for SEO, paid ads, and content. The big ones can hit $10,000+/month. We charge from $199/month for AI automation, $399/month for SEO, $699 for a website. Most of our clients spend $400-700/month total.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Depends on the package. Website: live in 48 hours, generating enquiries in 1-2 weeks. SEO: first movement in 2-4 weeks for niche suburbs, 2-3 months for competitive areas. AI automation: first recovered leads within days. We&apos;ll give you an honest assessment on the free chat.",
  },
  {
    question: "Do you do Google Ads / paid social?",
    answer:
      "Not at the moment. We focus on organic SEO and AI automation \u2014 they give much better long-term ROI than paid ads for small businesses. If you need Google Ads management, we can refer you to a partner agency we trust.",
  },
  {
    question: "What if I&apos;ve already been burned by an agency?",
    answer:
      "We hear this a lot. The honest answer: a lot of Adelaide marketing agencies overcharge and underdeliver. We&apos;re not them. We&apos;re happy to start with a small package (just AI automation, for example) so you can see how we work before committing. No lock-in means no risk.",
  },
  {
    question: "Do you do branding, logo design, video production?",
    answer:
      "Not directly. We focus on the things that drive customers: website, SEO, AI automation. If you need branding, we can refer you to a designer we work with. If you need video, we can recommend a videographer. We keep our scope tight so we can be excellent at what we do.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month to month on SEO and automation. One-off on websites. We earn the work every month. The reason agencies lock you in is because their results take 6+ months to show. Ours show in weeks. We don&apos;t need a contract to keep you.",
  },
  {
    question: "Can I talk to a current client?",
    answer:
      "Yes. On the free chat, we can connect you with a current client in your industry. Most are happy to talk about their experience, what worked, and what didn&apos;t.",
  },
];

export default function MarketingAgenciesAdelaidePage() {
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
          { label: "Resources", href: "/blog" },
          { label: "Marketing Agencies Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Marketing Agencies Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            The Marketing Agency Alternative Adelaide Small Businesses Actually Want
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most Adelaide marketing agencies are slow, expensive, and lock you into 12-month contracts. We&apos;re the opposite. AI-first, fixed pricing, no lock-in, Adelaide-based. The same quality outcomes as an agency, at a fraction of the cost. Compare us below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/website-pricing" className="btn-primary px-8 py-4">
              See Our Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Us vs a typical marketing agency
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            Here&apos;s a side-by-side comparison. The numbers are real \u2014 we know because we&apos;ve heard the same story from dozens of Adelaide business owners who switched to us.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-body-mobile md:text-body">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 text-left font-semibold text-slate-700">Feature</th>
                  <th className="py-3 px-4 text-left font-semibold text-accent">AI Adelaide</th>
                  <th className="py-3 pl-4 text-left font-semibold text-slate-700">Typical agency</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-900">{row.feature}</td>
                    <td
                      className="py-3 px-4 text-slate-700"
                      dangerouslySetInnerHTML={{ __html: row.us }}
                    />
                    <td
                      className="py-3 pl-4 text-slate-500"
                      dangerouslySetInnerHTML={{ __html: row.them }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Why We&apos;re Different</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {uspItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3
                  className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies count={3} heading="What changed for these Adelaide businesses" />

      <Testimonials
        count={3}
        heading="Why Adelaide businesses switched to us"
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Try a Marketing Partner That Actually Delivers?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your business, your current marketing, and tell you honestly whether we&apos;re the right fit. No sales pitch \u2014 just a useful conversation.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
                Send a Message <span aria-hidden>→</span>
              </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
