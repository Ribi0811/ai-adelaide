'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AUDIT_QUESTIONS, AUDIT_STORAGE_KEY } from '@/lib/audit/questions';

export default function AuditQuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);

  const question = AUDIT_QUESTIONS[index];
  const progress = Math.round((index / AUDIT_QUESTIONS.length) * 100);
  const canContinue = Boolean(answers[question.id]);
  const isFinal = index === AUDIT_QUESTIONS.length - 1;

  const selectedLabel = useMemo(
    () => question.options.find((o) => o.value === answers[question.id])?.label,
    [answers, question],
  );

  const handleNext = () => {
    if (!canContinue) return;
    if (isFinal) {
      localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(answers));
      router.push('/audit/results');
      return;
    }

    setIndex((prev) => prev + 1);
  };

  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8 sm:px-6 sm:py-14">
      <div className="w-full max-w-2xl">
        <div className="panel-light p-5 sm:p-8">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Question {index + 1} of {AUDIT_QUESTIONS.length}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-[#00D4AA] transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{question.categoryLabel}</p>
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">{question.text}</h1>

          <div className="mt-6 space-y-3">
            {question.options.map((option) => {
              const active = answers[question.id] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                    active
                      ? 'border-[#00D4AA] bg-[#00D4AA]/10 text-slate-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {selectedLabel ? <p className="mt-4 text-xs text-slate-500">Selected: {selectedLabel}</p> : null}

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
              className="btn-secondary w-1/2"
              disabled={index === 0}
            >
              Back
            </button>
            <button type="button" onClick={handleNext} disabled={!canContinue} className="btn-primary w-1/2 disabled:opacity-50">
              {isFinal ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}