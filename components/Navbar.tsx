"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`max-w-container mx-auto px-4 sm:px-6 transition-all duration-300 ${
            isScrolled ? "scale-[0.99]" : "scale-100"
          }`}
        >
          <div
            className={`rounded-2xl border border-slate-200/80 backdrop-blur-xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/92 shadow-card"
                : "bg-white/80 shadow-[0_8px_40px_rgba(15,23,42,0.08)]"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-5">
              <Link href="/" className="flex items-center gap-3" aria-label="AI Adelaide home">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white">
                  <span className="h-4 w-4 rounded-sm bg-gradient-to-br from-accent to-electric shadow-glow" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-semibold tracking-tight text-textPrimary">
                    AI Adelaide
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-textSecondary">
                    Websites, SEO &amp; AI Automation
                  </span>
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent animate-[pulseGlow_2.5s_ease-in-out_infinite]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-textSecondary">
                    Adelaide support | 2-5 day setups
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 lg:gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-textSecondary transition-colors hover:text-textPrimary"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="/contact" className="btn-primary ml-1 px-4 py-2">
                  Book Free Chat
                </a>
              </div>

              <button
                type="button"
                aria-label="Open menu"
                className="flex flex-col gap-1.5 rounded-lg border border-slate-200/80 bg-white/90 p-2.5 md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="h-0.5 w-5 bg-textPrimary" />
                <span className="h-0.5 w-5 bg-textPrimary" />
                <span className="h-0.5 w-5 bg-textPrimary" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              className="relative mx-5 mt-24 panel-light p-6"
            >
              <button
                type="button"
                aria-label="Close menu"
                className="absolute right-6 top-6 rounded-lg border border-slate-200/80 bg-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-textSecondary">
                Navigation
              </p>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 text-xl font-medium text-textPrimary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="/contact#send-message"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-6 w-full justify-center py-3"
              >
                Send a Message
              </a>
              <a
                href="tel:+61871009788"
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-accent/10 py-4 text-base font-semibold text-textPrimary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-accent">📞</span>
                <span>08 7100 9788</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}