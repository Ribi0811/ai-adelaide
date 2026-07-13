import Link from "next/link";
import { legalLinks, siteConfig } from "@/lib/constants";
import SuburbNav from "@/components/SuburbNav";

// v3/v4 design language: quiet, editorial, hairline-separated. This block is
// an internal-linking asset, so columns get re-skinned, never trimmed. Every
// href must point at a live route — never at a redirect source (Tier 12 audit
// found 6 footer links leaking equity through 308 hops).
const serviceLinks = [
  { href: "/website-design-adelaide", label: "Website design Adelaide" },
  { href: "/website-pricing", label: "Website pricing" },
  { href: "/seo", label: "SEO services Adelaide" },
  { href: "/local-seo-adelaide", label: "Local SEO Adelaide" },
  { href: "/ai-automation-adelaide", label: "AI automation" },
  { href: "/ai-receptionist-adelaide", label: "AI receptionist" },
  { href: "/virtual-receptionist-adelaide", label: "Virtual receptionist" },
  { href: "/answering-service-adelaide", label: "24/7 answering service" },
  { href: "/bookkeeping-adelaide", label: "AI bookkeeping" },
  { href: "/missed-call-text-back-adelaide", label: "Missed-call text-back" },
  { href: "/google-business-profile-optimisation-adelaide", label: "Google Business Profile" },
  { href: "/services", label: "All services ›" },
];

const industryLinks = [
  { href: "/websites-for-hairdressers-adelaide", label: "Hairdressers" },
  { href: "/websites-for-cafes-adelaide", label: "Cafes & restaurants" },
  { href: "/websites-for-plumbers-adelaide", label: "Plumbers" },
  { href: "/websites-for-electricians-adelaide", label: "Electricians" },
  { href: "/websites-for-builders-adelaide", label: "Builders" },
  { href: "/websites-for-landscapers-adelaide", label: "Landscapers" },
  { href: "/websites-for-painters-adelaide", label: "Painters" },
  { href: "/websites-for-clinics-adelaide", label: "Clinics & health" },
  { href: "/websites-for-beauty-salons-adelaide", label: "Beauty salons" },
  { href: "/websites-for-retail-shops-adelaide", label: "Retail shops" },
];

const resourceLinks = [
  { href: "/website-cost-adelaide", label: "Website cost guide" },
  { href: "/seo-vs-google-ads-adelaide", label: "SEO vs Google Ads" },
  { href: "/seo-for-tradies-adelaide", label: "SEO for tradies" },
  { href: "/ai-seo-adelaide", label: "AI SEO Adelaide" },
  { href: "/ai-marketing-adelaide", label: "AI marketing" },
  { href: "/ai-consulting-adelaide", label: "AI consulting Adelaide" },
  { href: "/ai-app-development-adelaide", label: "AI app development" },
  { href: "/automotive-seo-services", label: "Automotive SEO" },
  { href: "/hotel-seo-services", label: "Hotel SEO" },
  { href: "/aged-care-seo-services", label: "Aged care SEO" },
  { href: "/ai-receptionist-vs-virtual-receptionist", label: "AI vs virtual reception" },
  { href: "/best-ai-receptionist-australia", label: "Best AI receptionist 2026" },
  { href: "/blog", label: "Blog" },
];

const companyLinks = [
  { href: "/audit", label: "Free audit" },
  { href: "/tools/ai-readiness-calculator", label: "AI readiness score" },
  { href: "/testimonials", label: "Client reviews" },
  { href: "/locations", label: "All Adelaide suburbs ›" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/ai-adelaide", label: "LinkedIn" },
  { href: "https://share.google/cpcxmI66WmeoHWMwu", label: "Google Business" },
];

const columns = [
  { title: "Services", links: serviceLinks },
  { title: "Industries", links: industryLinks },
  { title: "Guides", links: resourceLinks },
  { title: "Company", links: companyLinks },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#FAFAF8]">
      <div className="mx-auto max-w-container px-6 pb-10 pt-16 md:pt-20">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="AI Adelaide home">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#0E8C74] opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#0E8C74]" />
              </span>
              <span className="text-[17px] font-bold tracking-tight text-[#1D1D1F]">
                AI Adelaide
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#6E6E73]">
              Website design, local SEO and AI automation for Adelaide small
              businesses. Websites from $699 — yours in 48 hours, yours
              forever.
            </p>
            <div className="mt-6 space-y-2 text-[14px]">
              <a
                href="mailto:hello@aiadelaide.com.au"
                className="block text-[#6E6E73] transition-colors hover:text-[#0E8C74]"
              >
                hello@aiadelaide.com.au
              </a>
              <a
                href={siteConfig.phoneHref}
                data-track="tel_footer"
                className="block font-mono text-[13px] font-semibold text-[#1D1D1F] transition-colors hover:text-[#0E8C74]"
              >
                {siteConfig.phone} — AI answers 24/7
              </a>
              <p className="text-[#98989D]">{siteConfig.address}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/contact#send-message"
                data-track="quote_footer"
                className="rounded-full bg-[#0E8C74] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,140,116,0.35)]"
              >
                Get a quote
              </Link>
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/[0.1] px-4 py-2.5 text-[13px] font-medium text-[#6E6E73] transition-colors hover:border-black/25 hover:text-[#1D1D1F]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#98989D]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#6E6E73] transition-colors hover:text-[#0E8C74]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Suburbs grouped by region — internal linking + crawl discovery */}
        <div className="mt-14 border-t border-black/[0.06] pt-8">
          <SuburbNav variant="footer" />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/[0.06] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#98989D]">
            <span>© {new Date().getFullYear()} AI Adelaide</span>
            {/* HUMAN INPUT NEEDED: add ABN — e.g. <span>ABN 00 000 000 000</span> */}
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-offset-4 transition-colors hover:text-[#1D1D1F] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#98989D]">
            Adelaide owned &amp; operated · No lock-in · From $699
          </p>
        </div>
      </div>
    </footer>
  );
}
