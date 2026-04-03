import Link from "next/link";
import { navLinks, legalLinks, siteConfig } from "@/lib/constants";

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
                    AI Automation for Adelaide Businesses
                  </p>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-6 text-slate-600">{siteConfig.description}</p>
              <div className="mt-5 space-y-1.5">
                <a href="mailto:hello@aiadelaide.com.au" className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  hello@aiadelaide.com.au
                </a>
                <a href={siteConfig.phoneHref} className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-slate-500">{siteConfig.address}</p>
              </div>
            </div>

            {/* Services */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Services
              </h4>
              <ul className="space-y-3">
                <li><a href="/ai-receptionist-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">AI Receptionist</a></li>
                <li><a href="/missed-call-answering-service-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Missed Call Answering</a></li>
                <li><a href="/after-hours-answering-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">After-Hours Answering</a></li>
                <li><a href="/seo" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Local SEO</a></li>
                <li><a href="/website-design-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Website Design</a></li>
                <li><a href="/services" className="text-sm text-slate-700 transition-colors hover:text-slate-950">All Services →</a></li>
              </ul>
            </div>

            {/* Resources + Company */}
            <div className="col-span-2 lg:col-span-6">
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li><a href="/ai-receptionist-cost-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">AI Receptionist Cost</a></li>
                    <li><a href="/ai-automation-vs-hiring-staff-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">AI vs Hiring Staff</a></li>
                    <li><a href="/missed-call-text-back-adelaide" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Missed Call Text Back</a></li>
                    <li><a href="/blog" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Blog</a></li>
                    <li><a href="/faq" className="text-sm text-slate-700 transition-colors hover:text-slate-950">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li><a href="/about" className="text-sm text-slate-700 transition-colors hover:text-slate-950">About</a></li>
                    <li><a href="/locations" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Locations</a></li>
                    <li><a href="/contact" className="text-sm text-slate-700 transition-colors hover:text-slate-950">Contact</a></li>
                    {legalLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} AI Adelaide. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                AI Automation for Adelaide Tradies
              </span>
              <span className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600">
                Adelaide, SA
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
