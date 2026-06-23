'use client';

import Link from 'next/link';
import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { AUDIT_EMAIL_KEY, AUDIT_STORAGE_KEY } from '@/lib/audit/questions';
import { calculateAuditScore, type AuditAnswers } from '@/lib/audit/scoring';
import { getRecommendations } from '@/lib/audit/recommendations';

const PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL ?? 'https://buy.stripe.com/test_placeholder_ai_adelaide_47';

export default function AuditResultsPage() {
  const [answers, setAnswers] = useState<AuditAnswers | null>(null);
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(AUDIT_STORAGE_KEY);
    const storedEmail = localStorage.getItem(AUDIT_EMAIL_KEY);
    if (stored) setAnswers(JSON.parse(stored));
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const score = useMemo(() => (answers ? calculateAuditScore(answers) : null), [answers]);
  const recommendations = useMemo(() => (score && answers ? getRecommendations(score, answers) : []), [score, answers]);

  useEffect(() => {
    if (!score) return;
    let start = 0;
    const target = score.totalScore;
    const step = () => {
      start += 2;
      if (start >= target) {
        setDisplayScore(target);
        return;
      }
      setDisplayScore(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [score]);

  if (!score) {
    return (
      <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8 sm:px-6 sm:py-14">
        <div className="w-full max-w-3xl">
          <section className="panel-light grid-overlay-light p-8 text-center sm:p-12">
            <span className="eyebrow-light">Free AI Audit</span>
            <h1 className="mt-4 text-h1-mobile text-slate-950 md:text-h1">
              Your AI Audit Results
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-body-mobile text-slate-600 md:text-body">
              Take the 15-question AI readiness audit to see your personalised score, recommendations, and ROI estimates for your Adelaide business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/audit/quiz" className="btn-primary inline-flex px-6 py-3 text-base">
                Start the Free Audit <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-accent/40 bg-white px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent/5"
              >
                Book a Free Chat
              </Link>
            </div>
          </section>

          <section className="panel-light mt-6 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">What you&apos;ll get</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                <span><strong>Scored AI readiness</strong> across website, SEO, automation, and review presence (0-100).</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                <span><strong>Personalised recommendations</strong> prioritised by ROI for your specific business type.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                <span><strong>Free PDF report</strong> ($47 paid option) with detailed action plan and dollar estimates.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }

  const handleSaveEmail = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem(AUDIT_EMAIL_KEY, email);
    setSaved(true);
  };

  const paymentUrl = `${PAYMENT_LINK}${PAYMENT_LINK.includes('?') ? '&' : '?'}prefilled_email=${encodeURIComponent(email)}`;

  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8 sm:px-6 sm:py-14">
      <div className="w-full max-w-3xl">
        <section className="panel-light p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Free Results</p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Your Digital Health Score</h1>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-5xl font-bold text-[#00B894] sm:text-6xl">{displayScore}</span>
            <span className="mb-2 text-lg text-slate-500">/100</span>
          </div>
          <p className="mt-3 text-sm text-slate-700"><strong>{score.band}:</strong> {score.interpretation}</p>

          <div className="mt-6 space-y-3">
            {score.categoryScores.map((category) => (
              <div key={category.key}>
                <div className="mb-1 flex justify-between text-xs text-slate-600">
                  <span>{category.label}</span>
                  <span>{category.score}/25</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-[#00D4AA]" style={{ width: `${(category.score / 25) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-light mt-6 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Top recommendations to focus on</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {recommendations.map((item) => (
              <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel-light mt-6 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Save your results</h3>
          <p className="mt-1 text-sm text-slate-600">Enter your email to prefill checkout and your report.</p>

          <form onSubmit={handleSaveEmail} className="mt-4 space-y-3">
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@business.com.au"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-[#00D4AA] focus:ring"
            />
            <button type="submit" className="btn-secondary w-full">Save My Results</button>
            {saved && <p className="text-xs text-[#00B894]">Saved — you&apos;re ready for checkout.</p>}
          </form>

          <div className="mt-6 rounded-2xl border border-[#00D4AA]/30 bg-[#00D4AA]/10 p-4">
            <p className="text-sm text-slate-800">
              Your score is free. Want the full personalised PDF with detailed ROI estimates and an action plan for websites, SEO, and AI automation? Unlock it for <strong>$47 AUD</strong>.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={paymentUrl}
                className="btn-primary w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay $47 for Full PDF →
              </a>
              <Link href="/audit/report" className="btn-secondary w-full text-center">
                Already paid? Generate Report
              </Link>
            </div>
          </div>
        </section>

        {/* Next-step CTA — after results render */}
        <section className="panel-light mt-6 p-6 text-center sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Ready to act on your results?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Free 15-minute chat. We&apos;ll walk through your score and tell you which fixes will actually move the needle.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary inline-flex px-5 py-3 text-sm">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
            <Link
              href="/ai-automation-adelaide"
              className="inline-flex items-center rounded-xl border border-accent/40 bg-white px-5 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/5"
            >
              See AI Automation Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

