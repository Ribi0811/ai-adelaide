import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About AI Adelaide — Adelaide Websites, SEO & AI Automation Team",
  description:
    "Adelaide-based team building websites, SEO, and AI automation for small businesses. Not a Sydney agency, not a chatbot vendor. Real systems, local support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AI Adelaide — Adelaide Websites, SEO & AI Automation Team",
    description: "Adelaide-based team building websites, SEO, and AI automation for small businesses. Not a Sydney agency, not a chatbot vendor. Real systems, local support.",
    url: `${siteConfig.url}/about`,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About AI Adelaide — Adelaide Websites, SEO & AI Automation Team",
    description: "Adelaide-based team building websites, SEO, and AI automation for small businesses. Not a Sydney agency, not a chatbot vendor. Real systems, local support.",
    images: ["/twitter-image"],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/about#webpage`,
        name: "About AI Adelaide",
        url: `${siteConfig.url}/about`,
        inLanguage: "en-AU",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: "AI Adelaide",
        url: siteConfig.url,
        areaServed: "Adelaide",
        description:
          "Adelaide-based team building websites, SEO, and AI automation for small and medium businesses. We design, build, and support real systems — not chatbots, not templates.",
        founder: {
          "@type": "Person",
          name: "Ivan",
          jobTitle: "Founder",
        },
      },
    ],
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Hero */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Adelaide-based. Adelaide-focused.</span>
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-h1-mobile text-slate-950 md:text-h1">
              We&apos;re the Adelaide team building websites, SEO &amp; AI automation for local businesses
            </h1>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Not a Sydney agency. Not a chatbot vendor. We design, build, and look after the actual systems — websites that rank, SEO that compounds, and AI that captures every lead.
            </p>
          </div>
        </div>
      </section>

      {/* Ivan's story */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light relative overflow-hidden p-8 md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                How this started
              </p>
              <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
                We kept watching Adelaide businesses lose to competitors who got
                there first
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-body-mobile text-slate-700 md:text-body">
                Our team has spent years working in technology — telco infrastructure,
                data systems, enterprise platforms. Along the way we noticed
                something that bothered us: the same digital tools and SEO tactics
                that were giving big companies an edge were completely out of reach
                for the plumber in Norwood, the physio in Glenelg, the builder in
                Modbury.
              </p>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Not because those business owners weren&apos;t smart. Because nobody
                had built them a practical entry point. They were invisible on
                Google, missing leads to missed calls, and paying for ads that
                converted poorly — while competitors with simple websites and
                basic automations quietly cleaned up.
              </p>
              <p className="text-body-mobile text-slate-700 md:text-body">
                We started AI Adelaide to fix that. One Adelaide business at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light relative overflow-hidden p-8 md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              The mission
            </p>
            <h2 className="mx-auto mb-6 max-w-2xl text-h2-mobile text-slate-950 md:text-h2">
              Give Adelaide small businesses the same digital tools as the big guys
            </h2>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              The big corporates already have in-house web teams, SEO agencies,
              and seven-figure tech budgets. We&apos;re here for everyone else — the
              owner-operators, the small crews, the practices and studios and
              shops that make Adelaide actually worth living in. You deserve the
              same tools, built to your scale, at a price that makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="eyebrow-light">What we build</span>
          <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
            Websites, SEO &amp; AI automation that move the needle
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "💻",
              title: "Website Design",
              desc: "Mobile-first, Google-ready websites built for Adelaide small businesses. From $699, live in 48 hours. Click-to-call, suburb targeting, AI-call-ready.",
            },
            {
              icon: "📍",
              title: "Local SEO",
              desc: "Keyword research, suburb pages, content, citations, Google Business Profile, and rank tracking. We do the work so you rank for &lsquo;[your service] [suburb]&rsquo;.",
            },
            {
              icon: "⚙️",
              title: "AI Automation",
              desc: "Missed call text-back, AI receptionist, quote follow-ups, review requests, appointment reminders. Capture every lead and stop the manual admin drain.",
            },
          ].map((item) => (
            <div key={item.title} className="panel-light p-6 md:p-8">
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
                {item.title}
              </h3>
              <p
                className="text-body-mobile text-slate-600 md:text-body"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Adelaide */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light relative overflow-hidden p-8 md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Why local matters
              </p>
              <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
                We&apos;re Adelaide. We understand this market.
              </h2>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Adelaide isn&apos;t Sydney. The customer base, the word-of-mouth
                culture, the pace — it&apos;s different. We live here. We work local
                hours. When your site needs a tweak at 8am Thursday before a
                big job, we&apos;re actually reachable. And we&apos;re not charging you
                Sydney agency rates to be &ldquo;local&rdquo; from 1,500km away.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["🏠", "Based in Adelaide", "Not a virtual office. We&apos;re actually here."],
                ["💬", "Local hours", "Available when Adelaide businesses need support."],
                ["💰", "SA pricing", "No Sydney margin stacked on top of your quote."],
                ["🤝", "Long-term focus", "We build systems, then stay to make sure they work."],
              ].map(([icon, title, copy]) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-light-card">
                  <div className="mb-2 text-2xl">{icon}</div>
                  <p className="mb-1 text-sm font-semibold text-slate-900">{title}</p>
                  <p
                    className="text-sm text-slate-600"
                    dangerouslySetInnerHTML={{ __html: copy }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container mx-auto px-6 text-center">
        <div className="panel-light relative overflow-hidden p-8 md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <h2 className="mx-auto mb-4 max-w-2xl text-h2-mobile text-slate-950 md:text-h2">
              Ready to get a website, rank on Google, or capture more leads?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute chat. Tell us what&apos;s costing you the most time or money — and we&apos;ll tell you honestly which of our three services (website, SEO, or automation) makes sense first.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book Free Chat <span aria-hidden>→</span>
              </Link>
              <Link href="/website-pricing" className="btn-secondary px-8 py-4">
                See Website Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
