import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AI Adelaide — Local AI Automation for SA Businesses",
  description:
    "Adelaide-based AI automation team. We build real systems for local tradies and small businesses — not chatbots, not templates. Real results.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AI Adelaide — Local AI Automation for SA Businesses",
    description:
      "Adelaide-based AI automation team. We build real systems for local tradies and small businesses — not chatbots, not templates. Real results.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About AI Adelaide — Local AI Automation for SA Businesses",
    description:
      "Adelaide-based AI automation team. We build real systems for local tradies and small businesses — not chatbots, not templates. Real results.",
    images: ["/twitter-image"],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://aiadelaide.com.au/about#webpage",
        name: "About AI Adelaide",
        url: "https://aiadelaide.com.au/about",
        inLanguage: "en-AU",
      },
      {
        "@type": "Organization",
        "@id": "https://aiadelaide.com.au#organization",
        name: "AI Adelaide",
        url: "https://aiadelaide.com.au",
        areaServed: "Adelaide",
        description:
          "Adelaide-based AI automation consultants helping small and medium businesses capture more leads, eliminate admin, and grow without hiring.",
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

      {/* Hero */}
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Adelaide-based. Adelaide-focused.</span>
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-h1-mobile text-slate-950 md:text-h1">
              We&apos;re the Adelaide team helping local businesses win with AI
            </h1>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Not a chatbot vendor. Not a Sydney agency with a landing page. We
              build the actual systems — and we&apos;re here when something needs
              fixing.
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
                something that bothered us: the same AI tools that were giving
                big companies an edge were completely out of reach for the
                plumber in Norwood, the physio in Glenelg, the builder in
                Modbury.
              </p>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Not because those business owners weren&apos;t smart. Because nobody
                had built them a practical entry point. They were losing leads
                to missed calls, drowning in admin on Sunday nights, and paying
                for ads that converted poorly — while their competitors with
                simple automations quietly cleaned up.
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
              Democratise AI for small and medium Adelaide businesses
            </h2>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              The big corporates already have AI teams, automation vendors, and
              seven-figure tech budgets. We&apos;re here for everyone else — the
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
            Three systems that move the needle
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "📞",
              title: "AI Receptionists",
              desc: "Never miss another call. Your AI receptionist answers 24/7, qualifies the lead, books the appointment, and sends you a summary — while you&apos;re on the tools.",
            },
            {
              icon: "⚙️",
              title: "Workflow Automation",
              desc: "Quotes, follow-ups, reminders, reviews — all the stuff that&apos;s falling through the cracks right now runs automatically. Less Sunday night admin. More family time.",
            },
            {
              icon: "🎯",
              title: "Lead Capture Systems",
              desc: "Turn your website into a 24/7 sales rep. Forms, chat, missed-call SMS — every touchpoint captures and follows up the lead before a competitor does.",
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
                hours. When your system needs a fix at 8am Thursday before a
                big job, we&apos;re actually reachable. And we&apos;re not charging you
                Sydney agency rates to be "local" from 1,500km away.
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
              Ready to see what AI can actually do for your business?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute audit. Bring one annoying workflow — missed
              calls, quote follow-ups, no-show reminders, whatever costs you the
              most time. We&apos;ll tell you exactly what&apos;s possible and what a
              realistic rollout looks like.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book a Free Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
