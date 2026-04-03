"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type LostLeadsCalculatorProps = {
  compact?: boolean;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const MISSED_CALLS_MIN = 1;
const MISSED_CALLS_MAX = 30;
const JOB_VALUE_MIN = 100;
const JOB_VALUE_MAX = 2000;

const DEFAULT_MISSED_CALLS = 8;
const DEFAULT_JOB_VALUE = 450;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LostLeadsCalculator({ compact = false }: LostLeadsCalculatorProps) {
  const HeadingTag = compact ? "h2" : "h1";
  const [missedCalls, setMissedCalls] = useState(DEFAULT_MISSED_CALLS);
  const [jobValue, setJobValue] = useState(DEFAULT_JOB_VALUE);
  const [animatedLeakage, setAnimatedLeakage] = useState(0);
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  const lostLeadsPerWeek = useMemo(() => missedCalls * 0.85, [missedCalls]);

  // Live leakage — recalculates instantly on every slider change
  const calculatedLeakage = useMemo(
    () => Math.round(lostLeadsPerWeek * jobValue * 52),
    [lostLeadsPerWeek, jobValue],
  );

  // Animate the number whenever it changes
  // On first render, skip animation and jump straight to the default value
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setAnimatedLeakage(calculatedLeakage);
      return;
    }

    if (animationRef.current) clearInterval(animationRef.current);

    const target = calculatedLeakage;
    const duration = 600;
    const frameRate = 1000 / 30;
    const steps = Math.max(1, Math.floor(duration / frameRate));
    let currentStep = 0;
    const startValue = animatedLeakage;

    animationRef.current = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setAnimatedLeakage(Math.round(startValue + (target - startValue) * eased));
      if (progress >= 1) {
        clearInterval(animationRef.current!);
      }
    }, frameRate);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedLeakage]);

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (calculatedLeakage === null) return;

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/lost-leads-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          missed_calls: missedCalls,
          job_value: jobValue,
          annual_leakage: calculatedLeakage,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Could not submit right now. Please try again.");
      }

      setSubmitStatus("success");
      setName("");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Could not submit right now.");
    }
  }

  return (
    <section className="max-w-container mx-auto px-6">
      <div className="panel-light grid-overlay-light p-6 md:p-10">
        <div className="mb-6">
          <span className="eyebrow-light">Free Calculator</span>
          <HeadingTag className="mt-4 text-h1-mobile text-slate-950 md:text-h1">
            How Much Are Missed Calls Costing You?
          </HeadingTag>
          <p className="mt-3 max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Enter your numbers below — see your annual revenue leakage instantly.
          </p>
        </div>

        <div className="panel-light-soft p-4 md:p-6">
          <div className="space-y-6">
            <label className="block">
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-800">Missed calls per week</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900">
                  {missedCalls}
                </span>
              </div>
              <input
                type="range"
                min={MISSED_CALLS_MIN}
                max={MISSED_CALLS_MAX}
                value={missedCalls}
                onChange={(event) =>
                  setMissedCalls(
                    clamp(Number(event.target.value), MISSED_CALLS_MIN, MISSED_CALLS_MAX),
                  )
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#0f766e]"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-800">Average job value</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900">
                  {formatCurrency(jobValue)}
                </span>
              </div>
              <input
                type="range"
                min={JOB_VALUE_MIN}
                max={JOB_VALUE_MAX}
                step={50}
                value={jobValue}
                onChange={(event) =>
                  setJobValue(clamp(Number(event.target.value), JOB_VALUE_MIN, JOB_VALUE_MAX))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#0f766e]"
              />
            </label>

          </div>
        </div>

        <div className="mt-6 panel-light-soft border border-rose-200 bg-rose-50/70 p-5 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">
              You&apos;re losing an estimated
            </p>
            <p className="mt-2 break-words text-5xl font-black leading-tight text-rose-600 md:text-6xl">
              {formatCurrency(animatedLeakage)}
              <span className="ml-2 text-2xl font-bold md:text-3xl">/ year</span>
            </p>
            <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
              Based on {missedCalls} missed calls/week × {formatCurrency(jobValue)} job value × 85% never-call-back
              rate × 52 weeks.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <h3 className="text-h4-mobile text-slate-950 md:text-h4">
                Want to recover part of this within your first week?
              </h3>

              {submitStatus === "success" ? (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Done — we&apos;ll be in touch within 24 hours.
                </div>
              ) : (
                <form className="mt-4 space-y-4" onSubmit={handleLeadSubmit}>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">First name</span>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
                      placeholder="Mateo"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
                      placeholder="you@business.com.au"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className="btn-primary px-6 py-3 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitStatus === "submitting"
                      ? "Sending..."
                      : "Get My Free Missed-Calls Audit →"}
                  </button>

                  {submitStatus === "error" && (
                    <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                      {submitError}
                    </p>
                  )}
                </form>
              )}

              {!compact && (
                <p className="mt-4 text-sm text-slate-600">
                  Not ready yet? <Link href="/contact" className="underline">Book a free call</Link> and we&apos;ll map this out with you.
                </p>
              )}
            </div>
          </div>
      </div>
    </section>
  );
}
