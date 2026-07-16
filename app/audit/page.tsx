import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/home-v3/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Audit for Adelaide SMBs',
  description: 'Free AI readiness audit for Adelaide small businesses. Get a scored PDF report on website, SEO, automation in 15 minutes.',
  alternates: {
    canonical: '/audit',
  },
  openGraph: {
    title: 'Free Digital Health Check ',
    description: 'Take our free 3-minute digital health check to find where you\'re losing customers online. Get an instant score with tailored recommendations for your Adelaide business.',
    url: 'https://aiadelaide.com.au/audit',
  },
};

const learnItems = [
  'Your Digital Health Score (out of 100)',
  'Which areas are losing the most customers',
  '3 recommendations tailored to your business type (website, SEO, or automation)',
  'Estimated ROI for each recommendation',
];

const INK = '#1D1D1F';

export default function AuditLandingPage() {
  return (
    <div className="bg-[#FBFBFD]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-16 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Free Digital Health Check' },
            ]}
          />
          <div className="mt-10">
            <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
              Free Self-Assessment
            </p>
            <h1
              className="v3-rise mt-4 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[60px]"
              style={{ color: INK }}
            >
              Find where you&apos;re losing customers online — in 3 minutes
            </h1>
            <p className="v3-rise mt-6 max-w-2xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-lg">
              Take the free digital health check, get your score instantly,
              then get your full personalised PDF action plan — free, no card
              required.
            </p>
            <div className="v3-rise mt-9 [animation-delay:.36s]">
              <Link
                href="/audit/quiz"
                data-track="audit_start"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Start Free Health Check
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two cards */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-container">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
                <h2 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                  Built for Adelaide small businesses
                </h2>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#6E6E73]">
                  Mobile-first and practical — perfect for busy tradies,
                  clinics, and shop owners.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)]">
                <h2 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                  Why this matters
                </h2>
                <ul className="mt-2.5 space-y-2">
                  <li className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#6E6E73]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8C74]" aria-hidden />
                    70% of customers click the first 3 Google results
                  </li>
                  <li className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#6E6E73]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8C74]" aria-hidden />
                    Quote follow-ups improve conversion by 25%
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you'll learn — the dark moment */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-9 text-white md:p-14">
              <div
                className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5EF2D6]/[0.13] blur-[90px]"
                aria-hidden
              />
              <h3 className="relative text-[26px] font-semibold leading-tight tracking-[-0.02em] md:text-[32px]">
                What you&apos;ll learn
              </h3>
              <ul className="relative mt-7 grid gap-4 md:grid-cols-2">
                {learnItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-[18px] bg-white/[0.05] p-5 text-[15px] leading-relaxed text-white/80">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
