"use client";

// Shared navigation. Dark-section awareness supports existing interior pages.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/constants";

const LINKS = [
  { href: "/website-design-adelaide", label: "Websites" },
  { href: "/website-pricing", label: "Pricing" },
  { href: "/seo", label: "SEO" },
  { href: "/ai-automation-adelaide", label: "Automation" },
  { href: "/testimonials", label: "Our work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const darkCount = useRef(0);
  const sheetRef = useRef<HTMLDivElement>(null);

  // `inert` isn't a first-class React 18 prop (added in 19), so set it
  // imperatively on the mobile sheet so keyboard users can't tab into the
  // closed menu's links. Also makes GSC accessibility check happy.
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return;
    if (!open) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }, [open]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Dark-section awareness — re-observe on every route change.
  useEffect(() => {
    darkCount.current = 0;
    setDark(false);
    const sections = document.querySelectorAll("[data-nav-dark]");
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) darkCount.current += e.isIntersecting ? 1 : -1;
        setDark(darkCount.current > 0);
      },
      // Only the band the navbar actually occupies matters.
      { rootMargin: "0px 0px -92% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const toggle = document.querySelector<HTMLButtonElement>('[aria-controls="site-mobile-menu"]');
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle?.focus(); }
      if (event.key === "Tab") {
        const links = Array.from(sheetRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
        const first = links[0];
        const last = links[links.length - 1];
        if (!event.shiftKey && (document.activeElement === last || document.activeElement === toggle)) {
          event.preventDefault();
          (document.activeElement === last ? toggle : first)?.focus();
        } else if (event.shiftKey && (document.activeElement === first || document.activeElement === toggle)) {
          event.preventDefault();
          (document.activeElement === first ? toggle : last)?.focus();
        }
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const ink = dark ? "text-white" : "text-[#1D1D1F]";
  const sub = dark ? "text-white/70 hover:text-white" : "text-[#6E6E73] hover:text-[#1D1D1F]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          dark
            ? "border-white/10 bg-[#0B111F]/60 backdrop-blur-xl"
            : scrolled
              ? "border-black/[0.06] bg-white/75 backdrop-blur-xl"
              : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="AI Adelaide home">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute h-full w-full rounded-full bg-[#0E8C74] opacity-20" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#0E8C74]" />
            </span>
            <span className={`text-[17px] font-bold tracking-tight transition-colors duration-500 ${ink}`}>
              AI Adelaide
            </span>
            <span
              className={`hidden font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 lg:block ${dark ? "text-[#5EF2D6]" : "text-[#0E8C74]"}`}
            >
              Adelaide, SA
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`text-[13px] font-medium transition-colors duration-300 ${sub}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              data-track="tel_nav"
              className={`hidden font-mono text-[12px] font-semibold transition-colors duration-500 xl:block ${sub}`}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact#send-message"
              data-track="quote_nav"
              className="hidden rounded-full bg-[#0E8C74] px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,140,116,0.4)] sm:block"
            >
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-controls="site-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors lg:hidden ${dark ? "text-white" : "text-[#1D1D1F]"}`}
            >
              <span
                className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span className={`h-[1.5px] w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* Day-progress hairline: dawn → day → night as you scroll */}
        <div
          className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[#0E8C74] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
      </header>

      {/* Mobile sheet */}
      <div
        id="site-mobile-menu"
        ref={sheetRef}
        className={`fixed inset-0 z-40 bg-[#FBFBFD] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-28">
          <nav className="flex flex-col gap-1">
            {[{ href: "/", label: "Home" }, ...LINKS, { href: "/contact", label: "Contact" }].map(
              (l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={`border-b border-black/[0.05] py-3 text-[24px] font-semibold tracking-tight text-[#1D1D1F] transition-all duration-300 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-auto space-y-3 pt-8">
            <Link
              href="/contact#send-message"
              data-track="quote_nav"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-[#0E8C74] px-6 py-4 text-[16px] font-semibold text-white"
            >
              Get a fixed quote →
            </Link>
            <a
              href={siteConfig.phoneHref}
              data-track="tel_nav"
              className="flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-6 py-4 text-[16px] font-semibold text-[#1D1D1F]"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute h-full w-full rounded-full bg-[#0E8C74] opacity-20" />
                <span className="relative h-2 w-2 rounded-full bg-[#0E8C74]" />
              </span>
              {siteConfig.phone} — AI answers now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
