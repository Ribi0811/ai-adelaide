import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Digital Health Check for Adelaide Small Businesses',
  description: 'Take our free 3-minute digital health check to find where you\'re losing customers online. Get an instant score across website, SEO, lead capture, and bookings — with tailored recommendations for your Adelaide business.',
  alternates: {
    canonical: '/audit',
  },
  openGraph: {
    title: 'Free Digital Health Check | AI Adelaide',
    description: 'Take our free 3-minute digital health check to find where you\'re losing customers online. Get an instant score with tailored recommendations for your Adelaide business.',
    url: 'https://aiadelaide.com.au/audit',
  },
};

export default function AuditLandingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Free Digital Health Check" },
        ]}
      />
      <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:py-20">
      <div className="w-full max-w-5xl">
        <section className="panel-light p-6 sm:p-10">
          <p className="eyebrow-light">Free Self-Assessment</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Find where you&apos;re losing customers online — in 3 minutes
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Take the free digital health check, get your score instantly, then unlock a full personalised PDF action plan for $47.
          </p>
          <Link href="/audit/quiz" className="btn-primary mt-8 inline-block">
            Start Free Health Check →
          </Link>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="panel-light-soft p-5">
            <h2 className="text-lg font-semibold text-slate-900">Built for Adelaide small businesses</h2>
            <p className="mt-2 text-sm text-slate-600">Mobile-first and practical — perfect for busy tradies, clinics, and shop owners.</p>
          </div>
          <div className="panel-light-soft p-5">
            <h2 className="text-lg font-semibold text-slate-900">Why this matters</h2>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>70% of customers click the first 3 Google results</li>
              <li>Quote follow-ups improve conversion by 25%</li>
            </ul>
          </div>
        </section>

        <section className="panel-light mt-8 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">What you&apos;ll learn</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
            <li>• Your Digital Health Score (out of 100)</li>
            <li>• Which areas are losing the most customers</li>
            <li>• 3 recommendations tailored to your business type (website, SEO, or automation)</li>
            <li>• Estimated ROI for each recommendation</li>
          </ul>
        </section>
      </div>
    </main>
    </>
  );
}
