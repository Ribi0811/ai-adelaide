'use client';

import { FormEvent, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { READINESS_QUESTIONS, scoreAnswers } from './questions';

type Answers = Record<string, string>;

type LeadForm = {
  name: string;
  email: string;
  businessName: string;
  phone: string;
};

const initialLeadForm: LeadForm = {
  name: '',
  email: '',
  businessName: '',
  phone: '',
};

const readinessBreakdown = [
  {
    title: 'AI Novice',
    range: '0-20',
    description: 'You rely heavily on manual processes. AI can save you 10+ hours a week.',
  },
  {
    title: 'AI Explorer',
    range: '21-40',
    description: "Free AI readiness score for your Adelaide small business. Get a PDF report in 5 minutes covering website, SEO, automation gaps.",
  },
  {
    title: 'AI Ready',
    range: '41-60',
    description: 'You have AI foundations in place. Small improvements can yield big results.',
  },
  {
    title: 'AI Leader',
    range: '61-80',
    description: "You're ahead of most. Focus on advanced automation and AI strategy.",
  },
  {
    title: 'AI Master',
    range: '81-100',
    description: "You're an AI leader. Consider consulting others or scaling your operations.",
  },
];

export default function AIReadinessCalculatorPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [leadForm, setLeadForm] = useState<LeadForm>(initialLeadForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const totalQuestions = READINESS_QUESTIONS.length;
  const currentQuestion = READINESS_QUESTIONS[step];
  const isResultsStep = step >= totalQuestions;
  const progress = isResultsStep ? 100 : Math.round((step / totalQuestions) * 100);
  const canContinue = currentQuestion ? Boolean(answers[currentQuestion.id]) : false;

  const result = useMemo(() => scoreAnswers(answers), [answers]);

  const handleNext = () => {
    if (!currentQuestion || !canContinue) return;
    setStep((prev) => Math.min(prev + 1, totalQuestions));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadForm,
          tool: 'ai-readiness-calculator',
          answers,
          score: result.score,
          rawScore: result.rawScore,
          tier: result.tier.key,
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || 'Could not save your details. Please try again.');
      }

      setSubmitSuccess(true);
      setSubmittedEmail(leadForm.email);
      setLeadForm(initialLeadForm);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bgPrimary text-textPrimary">
      <section className="section-shell relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef5fb_100%)] px-4 py-section-mobile sm:px-6 lg:px-8 md:py-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,242,214,0.18),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(130,166,255,0.18),transparent_24%)]" />
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(130,166,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,166,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="space-y-6 pt-3 lg:pr-4">
            <span className="inline-flex rounded-full border border-[#bfeee6] bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#00b899] shadow-sm backdrop-blur-sm">
              Free AI Adelaide Tool
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-h1-mobile font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[56px] lg:text-h1">
                Find out how ready your business really is for AI.
              </h1>
              <p className="max-w-2xl text-body-mobile leading-7 text-slate-700 sm:text-body">
                Answer a few practical questions about your systems, data, team, and decision-making. We’ll score your AI readiness, show your tier instantly, then offer a detailed report you can use to plan the next step.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#cfe9f7] bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,29,43,0.08)] backdrop-blur-sm sm:p-7">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00b899]">
                <span>🤖 How AI-Ready Is Your Business?</span>
                <span className="rounded-full bg-[#ecfffb] px-3 py-1 text-[11px] tracking-[0.2em] text-[#0B7F6B]">
                  5-minute quiz
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                Take our free 5-minute quiz and get a personalised AI readiness score. Find out exactly where you stand — and what to do next.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#quiz-card"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-[#0B1929] transition hover:bg-accent-hover"
                >
                  Start Quiz <span aria-hidden className="ml-2">↓</span>
                </a>
                <p className="text-sm text-slate-600">Join 50+ Adelaide businesses who trust AI Adelaide</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['9 questions', 'Built for Adelaide businesses'],
                ['0–100 score', 'Mapped to clear readiness tiers'],
                ['Detailed report', 'Delivered after lead capture'],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_14px_40px_rgba(15,29,43,0.08)] backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" id="quiz-card">
            <div className="rounded-[28px] border border-slate-200/80 bg-white/92 p-5 shadow-[0_24px_90px_rgba(15,29,43,0.12)] backdrop-blur-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00b899]">
                    {isResultsStep ? 'Your result' : `Question ${step + 1} of ${totalQuestions}`}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {isResultsStep
                      ? 'You’re done. Review your score and request the detailed report.'
                      : 'Choose the option that best reflects your business today.'}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-slate-950">{progress}%</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Complete</div>
                </div>
              </div>

              <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-200/80">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#5EF2D6_0%,#82A6FF_100%)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />
              </div>

              <AnimatePresence mode="wait">
                {!isResultsStep && currentQuestion ? (
                  <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                  >
                    <div className="mb-6">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2a7abf]">
                        {currentQuestion.category}
                      </p>
                      <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2rem]">
                        {currentQuestion.question}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => {
                        const active = answers[currentQuestion.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.value }))}
                            className={`group w-full rounded-2xl border px-4 py-4 text-left transition duration-200 sm:px-5 ${
                              active
                                ? 'border-[#8ddfce] bg-[#ecfffb] shadow-[0_0_0_1px_rgba(94,242,214,0.2),0_16px_40px_rgba(94,242,214,0.12)]'
                                : 'border-slate-200 bg-white hover:border-[#82A6FF]/40 hover:bg-[#f8fbff] hover:shadow-[0_12px_30px_rgba(130,166,255,0.10)]'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className={`text-sm font-medium sm:text-base ${active ? 'text-slate-950' : 'text-slate-800'}`}>
                                  {option.label}
                                </p>
                                {option.hint ? <p className="mt-1 text-xs leading-5 text-slate-500">{option.hint}</p> : null}
                              </div>
                              <span
                                className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[10px] ${
                                  active
                                    ? 'border-[#00b899] bg-[#5EF2D6] text-[#0B1929]'
                                    : 'border-slate-300 text-transparent group-hover:text-slate-400'
                                }`}
                              >
                                ●
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex gap-3">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={step === 0}
                        className="inline-flex w-1/2 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canContinue}
                        className="inline-flex w-1/2 items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#0B1929] transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {step === totalQuestions - 1 ? 'See My Score' : 'Next Question'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="space-y-6"
                  >
                    <div className="rounded-[28px] border border-[#cfe9f7] bg-[linear-gradient(180deg,#f7fdff_0%,#eef8ff_100%)] p-6 text-center shadow-[0_18px_50px_rgba(130,166,255,0.10)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00b899]">AI readiness score</p>
                      <motion.div
                        initial={{ scale: 0.75, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="mt-4"
                      >
                        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#bfeee6] bg-white shadow-[0_0_0_10px_rgba(94,242,214,0.10),0_20px_50px_rgba(15,29,43,0.10)]">
                          <span className="text-4xl font-semibold text-slate-950">{result.score}</span>
                        </div>
                      </motion.div>
                      <h2 className="mt-5 text-3xl font-semibold text-slate-950">{result.tier.key}</h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{result.tier.subtitle}</p>
                      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
                        {result.tier.summary}
                      </p>
                      <p className="mt-5 text-sm font-medium text-slate-600">
                        Join 50+ Adelaide businesses who trust AI Adelaide
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-[#fafdff] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b899]">What this means</p>
                        <p className="mt-3 text-sm leading-7 text-slate-700">{result.tier.nextStep}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-[#fafdff] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b899]">Your next move</p>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          Get the detailed report and AI Adelaide can follow up with tailored recommendations for your business.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-[#fbfeff] p-5 shadow-[0_18px_50px_rgba(15,29,43,0.05)] sm:p-6">
                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00b899]">Readiness tiers explained</p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-950">See where your score sits</h3>
                      </div>

                      <div className="grid gap-3">
                        {readinessBreakdown.map((tier) => {
                          const isActive = tier.title === result.tier.key;

                          return (
                            <div
                              key={tier.title}
                              className={`rounded-2xl border p-4 transition ${
                                isActive
                                  ? 'border-[#8ddfce] bg-[#ecfffb] shadow-[0_0_0_1px_rgba(94,242,214,0.18)]'
                                  : 'border-slate-200 bg-white'
                              }`}
                            >
                              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <p className="text-base font-semibold text-slate-950">
                                    {tier.title} <span className="text-slate-500">({tier.range})</span>
                                  </p>
                                  <p className="mt-1 text-sm leading-6 text-slate-700">{tier.description}</p>
                                </div>
                                {isActive ? (
                                  <span className="inline-flex w-fit rounded-full bg-[#d8fbf3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B7F6B]">
                                    Your tier
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,29,43,0.08)] sm:p-6">
                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00b899]">Get Your Detailed Report</p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-950">Send my breakdown</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Leave your details and we’ll store your result for follow-up with a deeper AI readiness breakdown.
                        </p>
                      </div>

                      {submitSuccess ? (
                        <div className="rounded-2xl border border-[#bfeee6] bg-[#ecfffb] p-5 text-sm leading-7 text-slate-800">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b899]">📧 Check Your Inbox</p>
                          <p className="mt-3">
                            We&apos;ve sent your detailed AI Readiness Report to <strong>{submittedEmail}</strong>. It includes:
                          </p>
                          <ul className="mt-3 space-y-1 text-slate-700">
                            <li>• Your full score breakdown</li>
                            <li>• 3 personalised next steps</li>
                            <li>• Specific tools we recommend for your business type</li>
                          </ul>
                          <p className="mt-4">
                            In the meantime, explore our AI receptionist solutions or book a free consultation.
                          </p>
                        </div>
                      ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                              <span className="mb-2 block text-sm font-medium text-slate-800">Name</span>
                              <input
                                required
                                value={leadForm.name}
                                onChange={(event) => setLeadForm((prev) => ({ ...prev, name: event.target.value }))}
                                className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#5EF2D6] focus:bg-white"
                                placeholder="Jane Smith"
                              />
                            </label>
                            <label className="block">
                              <span className="mb-2 block text-sm font-medium text-slate-800">Business name</span>
                              <input
                                required
                                value={leadForm.businessName}
                                onChange={(event) => setLeadForm((prev) => ({ ...prev, businessName: event.target.value }))}
                                className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#5EF2D6] focus:bg-white"
                                placeholder="Acme Electrical"
                              />
                            </label>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                              <span className="mb-2 block text-sm font-medium text-slate-800">Email</span>
                              <input
                                type="email"
                                required
                                value={leadForm.email}
                                onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                                className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#5EF2D6] focus:bg-white"
                                placeholder="jane@acme.com.au"
                              />
                            </label>
                            <label className="block">
                              <span className="mb-2 block text-sm font-medium text-slate-800">Phone (optional)</span>
                              <input
                                value={leadForm.phone}
                                onChange={(event) => setLeadForm((prev) => ({ ...prev, phone: event.target.value }))}
                                className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#5EF2D6] focus:bg-white"
                                placeholder="08 7000 0000"
                              />
                            </label>
                          </div>

                          {submitError ? <p className="text-sm text-[#c24141]">{submitError}</p> : null}

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-[#0B1929] transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSubmitting ? 'Saving your result…' : 'Get Your Detailed Report'}
                          </button>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
