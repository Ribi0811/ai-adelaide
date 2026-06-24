import Link from "next/link";
import { navLinks, legalLinks, siteConfig } from "@/lib/constants";
import SuburbNav from "@/components/SuburbNav";

const serviceLinks = [
  { href: "/website-design-adelaide", label: "Website Design" },
  { href: "/website-pricing", label: "Website Pricing" },
  { href: "/seo", label: "Local SEO" },
  { href: "/ai-automation-adelaide", label: "AI Automation" },
  { href: "/ai-receptionist-adelaide", label: "AI Receptionist" },
  { href: "/virtual-receptionist-adelaide", label: "Virtual Receptionist" },
  { href: "/24-7-answering-service-adelaide", label: "24/7 Answering Service" },
  { href: "/bookkeeping-adelaide", label: "AI Bookkeeping" },
  { href: "/ai-receptionist-vs-virtual-receptionist", label: "AI vs Virtual Reception" },
  { href: "/missed-call-text-back-adelaide", label: "Missed-Call Text-Back" },
  { href: "/google-business-profile-optimisation-adelaide", label: "Google Business Profile" },
  { href: "/services", label: "All Services →" },
];

const industryLinks = [
  { href: "/websites-for-hairdressers-adelaide", label: "Hairdressers" },
  { href: "/websites-for-cafes-adelaide", label: "Cafes & Restaurants" },
  { href: "/websites-for-plumbers-adelaide", label: "Plumbers" },
  { href: "/websites-for-electricians-adelaide", label: "Electricians" },
  { href: "/websites-for-clinics-adelaide", label: "Clinics & Health" },
  { href: "/websites-for-beauty-salons-adelaide", label: "Beauty Salons" },
  { href: "/websites-for-retail-shops-adelaide", label: "Retail Shops" },
];

const suburbLinks = [
  { href: "/locations", label: "All 34 Adelaide suburbs →" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/ai-adelaide", label: "LinkedIn" },
  { href: "https://share.google/cpcxmI66WmeoHWMwu", label: "Google Business" },
];

const resourceLinks = [
  { href: "/marketing-adelaide", label: "Marketing Adelaide" },
  { href: "/ai-marketing-adelaide", label: "AI Marketing" },
  { href: "/digital-marketing-adelaide", label: "Digital Marketing" },
  { href: "/best-ai-receptionist-australia", label: "Best AI Receptionist 2026" },
  { href: "/blog", label: "Blog" },
  { href: "/website-cost-adelaide", label: "Website Cost Guide" },
  { href: "/seo-vs-google-ads-adelaide", label: "SEO vs Google Ads" },
  { href: "/marketing-agencies-adelaide", label: "vs Marketing Agencies" },
  { href: "/marketing-consulting-adelaide", label: "Marketing Consulting" },
  { href: "/ai-marketing-automation", label: "AI Marketing Automation" },
  { href: "/audit", label: "Free Audit" },
  { href: "/tools/ai-readiness-calculator", label: "AI Readiness Score" },
  { href: "/testimonials", label: "Client Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const marketingLinks: never[] = [];

export default function Footer() {
  return (
    <footer className="relative py-10 md:py-14">
      <div className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light overflow-hidden p-8 md:p-12">

          {/* Top grid */}
          <div className="mb-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-12">

            {/* Brand — takes 4 cols on large */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4">
              <Link href="/" className="mb-4 flex items-center gap-3" aria-label="AI Adelaide home">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white">
                  <span className="h-4 w-4 rounded-sm bg-gradient-to-br from-accent to-electric" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">AI Adelaide</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Websites, SEO &amp; AI Automation
                  </p>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-6 text-slate-600">
                {siteConfig.description} <strong>Websites from $699.</strong>
              </p>
              <div className="mt-5 space-y-1.5">
                <a href="mailto:hello@aiadelaide.com.au" className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  hello@aiadelaide.com.au
                </a>
                <a href={siteConfig.phoneHref} className="block text-sm font-semibold text-slate-700 transition-colors hover:text-accent">
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-slate-500">{siteConfig.address}</p>
              </div>
              <div className="mt-5">
                <Link href="/contact" className="btn-primary inline-flex px-5 py-3 text-sm">
                  Book Free Chat <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 items-center rounded-full border border-slate-200/80 bg-white px-3 text-xs font-medium text-slate-700 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Industries
              </h4>
              <ul className="space-y-3">
                {industryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Locations
              </h4>
              <ul className="space-y-3">
                {suburbLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Resources
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} AI Adelaide. All rights reserved.
              </p>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-slate-500 transition-colors hover:text-slate-700 underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Websites from $699
              </span>
              <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600">
                Adelaide, SA
              </span>
            </div>
          </div>

          {/* All 34 suburbs grouped by region — boosts internal linking + crawl discovery */}
          <SuburbNav variant="footer" />
        </div>
      </div>
    </footer>
  );
}
