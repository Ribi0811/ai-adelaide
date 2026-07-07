"use client";

// Day-aware glass navbar (Phase A + A1b of docs/PROMOTE-V2-PLAN.md).
// Three tricks, one component:
//   1. Transparent over the dawn hero, frosts to glass once you scroll.
//   2. Inverts to dark glass while any [data-nav-dark] section (dusk, night,
//      new-dawn) is under it — light nav never goes invisible again.
//   3. The bottom hairline is a day-progress bar: fills dawn-amber → teal →
//      midnight-blue as you scroll, echoing the homepage's 24-hour arc.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";

const LINKS = navLinks.filter((l) => l.href !== "/" && l.href !== "/contact");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const darkCount = useRef(0);

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
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#0E8C74] opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#0E8C74]" />
            </span>
            <span className={`text-[17px] font-bold tracking-tight transition-colors duration-500 ${ink}`}>
              AI Adelaide
            </span>
            <span
              className={`hidden font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 lg:block ${dark ? "text-[#5EF2D6]" : "text-[#0E8C74]"}`}
            >
              · Open 24 hrs
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[14px] font-medium transition-colors duration-300 ${sub}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className={`hidden font-mono text-[13px] font-semibold transition-colors duration-500 lg:block ${sub}`}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact#send-message"
              className="hidden rounded-full bg-[#0E8C74] px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,140,116,0.4)] sm:block"
            >
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors md:hidden ${dark ? "text-white" : "text-[#1D1D1F]"}`}
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
          className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#F5B96E] via-[#5EF2D6] to-[#8FA8D8] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-[#FBFBFD] transition-opacity duration-300 md:hidden ${
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
                  className={`border-b border-black/[0.05] py-4 text-[26px] font-semibold tracking-tight text-[#1D1D1F] transition-all duration-300 ${
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
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-[#0E8C74] px-6 py-4 text-[16px] font-semibold text-white"
            >
              Get a fixed quote →
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-6 py-4 text-[16px] font-semibold text-[#1D1D1F]"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#0E8C74] opacity-50" />
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
