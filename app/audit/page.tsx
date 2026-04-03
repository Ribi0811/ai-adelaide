import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Readiness Quiz for Adelaide Small Businesses',
  description: 'Take our free 3-minute quiz to find your biggest workflow leaks. Get an instant AI readiness score with tailored recommendations for your Adelaide business.',
  alternates: {
    canonical: '/audit',
  },
  openGraph: {
    title: 'Free AI Readiness Quiz | AI Adelaide',
    description: 'Take our free 3-minute quiz to find your biggest workflow leaks. Get an instant AI readiness score with tailored recommendations for your Adelaide business.',
    url: 'https://aiadelaide.com.au/audit',
  },
};

export default function AuditLandingPage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:py-20">
      <div className="w-full max-w-5xl">
        <section className="panel-light p-6 sm:p-10">
          <p className="eyebrow-light">Free Self-Assessment</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Find your biggest workflow leaks in 3 minutes
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Take the free quiz, get your score instantly, then unlock a full personalised PDF action plan for $47.
          </p>
          <Link href="/audit/quiz" className="btn-primary mt-8 inline-block">
            Start Free Quiz →
          </Link>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="panel-light-soft p-5">
            <h2 className="text-lg font-semibold text-slate-900">Built for Adelaide small businesses</h2>
            <p className="mt-2 text-sm text-slate-600">Mobile-first and practical — perfect for busy tradies on-site.</p>
          </div>
          <div className="panel-light-soft p-5">
            <h2 className="text-lg font-semibold text-slate-900">Why this matters</h2>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>Average tradie misses 30-50% of calls</li>
              <li>Quote follow-ups improve conversion by 25%</li>
            </ul>
          </div>
        </section>

        <section className="panel-light mt-8 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">What you&apos;ll learn</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
            <li>• Your AI Readiness Score (out of 100)</li>
            <li>• Which areas are losing the most revenue</li>
            <li>• 3 recommendations tailored to your business type</li>
            <li>• Estimated ROI for each recommendation</li>
          </ul>
        </section>
      </div>
    </main>
  );
}