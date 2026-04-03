import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI Receptionist, Websites & SEO for Adelaide Businesses",
  description:
    "AI receptionist, website design, and local SEO for Adelaide tradies and health practices. Never miss a call again. Start with a free audit.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "What We Do — AI Receptionist, Websites & SEO for Adelaide Businesses",
    description:
      "AI receptionist, website design, and local SEO for Adelaide businesses. Start with a free audit.",
    url: "https://aiadelaide.com.au/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Adelaide Services",
      },
    ],
  },
};

// Lead product gets special treatment in render — kept first
const leadService = {
  id: "ai-receptionist",
  icon: "📞",
  heading: "AI Phone Receptionist",
  tagline: "Our Core Product",
  body: "Never miss a call again. Your AI receptionist answers 24/7, captures lead details, handles common questions, and books jobs straight into your calendar. It sounds natural, handles the tricky stuff, and never takes a sick day.",
  perfectFor:
    "Tradies who can't answer on a ladder, health clinics during appointments, any business losing jobs to voicemail.",
  cta: {
    primary: { label: "Book Your Free Audit →", href: "/contact" },
    secondary: { label: "📞 08 7100 9788", href: "tel:+61871009788" },
  },
  note: "Start with: A free audit — we show you exactly what you're losing.",
};

const supportingServices = [
  {
    id: "website-design",
    icon: "💻",
    heading: "Websites for Tradies & Local Businesses",
    tagline: "Also Available",
    body: "A proper website, not some template that looks like everyone else's. We build fast, mobile-friendly sites that actually convert visitors into calls. Clear calls-to-action, easy contact forms, Google Maps integration — the stuff that gets you jobs.",
    perfectFor:
      "Tradies with outdated sites, no site at all, or a \"website\" that's just a Facebook page.",
    cta: {
      primary: { label: "Get a Quote →", href: "/contact" },
    },
    note: "Book a free audit and we'll scope what your business needs.",
  },
  {
    id: "local-seo",
    icon: "📍",
    heading: "Local SEO — Get Found in Adelaide",
    tagline: "Also Available",
    body: "Ranking on Google isn't magic, it's work. We do the technical stuff — Google Business Profile optimisation, local keywords, citation building, content that answers what people actually search. No fluff, no vague promises, just the basics done right.",
    perfectFor:
      "Businesses that want local customers finding them on Google, not competitors.",
    cta: {
      primary: { label: "Talk to Us About SEO →", href: "/contact" },
    },
    note: "We start with an audit to see where you're losing traffic.",
  },
];

export default function ServicesPage() {
  const allServices = [leadService, ...supportingServices];
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": allServices.map((service) => ({
      "@type": "Service",
      "@id": `https://aiadelaide.com.au/services#${service.id}`,
      name: service.heading,
      serviceType: "AI & Digital Services",
      description: service.body,
      provider: {
        "@type": "Organization",
        name: "AI Adelaide",
        url: "https://aiadelaide.com.au",
      },
      areaServed: {
        "@type": "City",
        name: "Adelaide",
      },
    })),
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Page header */}
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Services</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            What We Do — AI Receptionist, Websites &amp; SEO for Adelaide Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Three things, done properly. Start with a free audit and we&apos;ll show you exactly
            where you&apos;re losing money — and which of these makes the biggest difference for
            your business first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/contact" className="btn-primary px-8 py-4">
              Book Your Free Audit <span aria-hidden>→</span>
            </a>
            <a
              href="tel:+61871009788"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-700 hover:border-accent/40 hover:bg-accent/5 transition-colors"
            >
              <span className="text-accent">📞</span>
              <span>08 7100 9788</span>
            </a>
          </div>
        </div>
      </section>

      {/* LEAD SERVICE — AI Receptionist, large prominent card */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <article
          id={leadService.id}
          className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-white p-8 shadow-xl md:p-10"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-accent to-teal-400" />

          {/* Badge */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="text-4xl">{leadService.icon}</span>
            <span className="rounded-full border border-accent bg-accent px-4 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white shadow">
              {leadService.tagline}
            </span>
          </div>

          <h2 className="mb-4 text-h1-mobile text-slate-950 md:text-h1">
            {leadService.heading}
          </h2>
          <p className="mb-8 max-w-3xl text-body-mobile text-slate-600 md:text-body">
            {leadService.body}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Perfect for */}
            <div className="rounded-2xl border border-slate-100 bg-[#f6fffe] p-5 md:col-span-2 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Perfect for
              </p>
              <p className="mt-2 text-body-mobile text-slate-700 md:text-body">
                {leadService.perfectFor}
              </p>
            </div>

            {/* Note + CTAs */}
            <div className="space-y-4">
              {leadService.note && (
                <div className="rounded-2xl border border-slate-100 bg-[#f6fffe] p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Note
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{leadService.note}</p>
                </div>
              )}
              <div className="flex flex-col gap-3">
                <a
                  href={leadService.cta.primary.href}
                  className="btn-primary justify-center px-5 py-4 text-center text-base"
                >
                  {leadService.cta.primary.label}
                </a>
                {leadService.cta.secondary && (
                  <a
                    href={leadService.cta.secondary.href}
                    className="flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-5 py-4 text-sm font-semibold text-slate-700 hover:bg-accent/20 transition-colors"
                  >
                    {leadService.cta.secondary.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Supporting services — smaller cards */}
      <section className="max-w-container mx-auto space-y-6 px-6 pt-8 md:space-y-8 md:pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Also available
        </p>
        {supportingServices.map((service) => (
          <article key={service.id} className="panel-light p-6 md:p-8">
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{service.icon}</span>
                <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {service.tagline}
                </span>
              </div>
              <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">{service.heading}</h2>
              <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
                {service.body}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="panel-light-soft p-5 md:col-span-2 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Perfect for
                </p>
                <p className="mt-2 text-body-mobile text-slate-700 md:text-body">
                  {service.perfectFor}
                </p>
              </div>
              <div className="space-y-4">
                {service.note && (
                  <div className="panel-light-soft p-5 md:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Note
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{service.note}</p>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <a
                    href={service.cta.primary.href}
                    className="btn-primary justify-center px-5 py-3 text-center"
                  >
                    {service.cta.primary.label}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Related guides */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-6">
          Helpful guides
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { href: "/ai-receptionist-cost-adelaide", title: "How Much Does an AI Receptionist Cost?", desc: "Honest pricing breakdown — what you actually pay vs a human receptionist." },
            { href: "/ai-automation-vs-hiring-staff-adelaide", title: "AI Automation vs Hiring Staff", desc: "The real cost comparison for Adelaide small businesses." },
            { href: "/missed-call-answering-service-adelaide", title: "Missed Call Answering Service", desc: "Never lose a lead to voicemail again — how it works." },
          ].map((guide) => (
            <div key={guide.href} className="rounded-2xl border border-slate-100 bg-white shadow-light-card p-6 flex flex-col">
              <p className="font-semibold text-slate-950 mb-2">{guide.title}</p>
              <p className="text-sm text-slate-600 flex-1">{guide.desc}</p>
              <a href={guide.href} className="inline-block mt-4 text-accent text-sm font-semibold hover:underline">
                Read guide →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Not sure where to start?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit and we&apos;ll show you exactly what you&apos;re losing and what to
            fix first. No pressure. No hard sell. Just numbers.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="btn-primary px-8 py-4">
              Book Your Free Audit <span aria-hidden>→</span>
            </a>
            <a
              href="tel:+61871009788"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 hover:border-accent/30 hover:bg-accent/5 transition-colors"
            >
              <span className="text-accent">📞</span>
              <span>Call 08 7100 9788</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
