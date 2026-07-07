// SEO workhorse dressed in Apple clothes: native <details> accordion
// (crawlable, zero JS) + FAQPage JSON-LD. These questions mirror real
// People-Also-Ask queries for the money keywords; answers link the money
// pages. Server component.
import Link from "next/link";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How much does a website cost in Adelaide?",
    a: "Adelaide agencies typically charge $3,000-$5,000+. Because AI accelerates our copywriting, design and SEO setup, our custom websites start at $699 one-off — you own it outright. See the full breakdown on our website cost guide.",
    link: { href: "/website-cost-adelaide", label: "Website cost guide" },
  },
  {
    q: "Can you really build a website in 48 hours?",
    a: "Yes — for our Starter sites. AI drafts the copy and structure in hours, a human checks every word, you review once, and we push it live. Larger Business and Growth builds take 5-14 days.",
    link: { href: "/website-design-adelaide", label: "How the 48-hour build works" },
  },
  {
    q: "Do you do SEO for small businesses in Adelaide?",
    a: "That's our core retainer. Local SEO from $399/mo: suburb pages, content, Google Business Profile optimisation, and monthly reporting — no lock-in contracts.",
    link: { href: "/seo", label: "Local SEO Adelaide" },
  },
  {
    q: "What is missed-call text-back and an AI receptionist?",
    a: "When you can't answer, our AI either texts the caller back within 30 seconds or answers the phone itself — 24/7, with an Australian accent. It books jobs, takes messages, and sends you a summary. Automation plans start at $199/mo.",
    link: { href: "/ai-receptionist-adelaide", label: "AI receptionist Adelaide" },
  },
  {
    q: "Do I own the website, or is it rented?",
    a: "You own everything — domain, design, content, code. No platform rental, no hostage fees, and no lock-in on any monthly plan. Leave anytime and take it all with you.",
    link: { href: "/website-pricing", label: "Pricing details" },
  },
];

export default function FAQV3() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-[#F5F5F7] py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">08 — Questions</p>
          <h2 className="mx-auto mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#1D1D1F] md:text-5xl">
            Straight answers, no sales script.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[17px] font-semibold text-[#1D1D1F] transition hover:bg-black/[0.02] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="shrink-0 text-xl font-normal text-[#0E8C74] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="px-7 pb-6">
                  <p className="text-[15px] leading-relaxed text-[#6E6E73]">{f.a}</p>
                  <Link
                    href={f.link.href}
                    className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0E8C74] transition hover:opacity-70"
                  >
                    {f.link.label} <span aria-hidden>›</span>
                  </Link>
                </div>
                {i < faqs.length - 1 && <div className="mx-7 border-t border-black/[0.06]" />}
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
