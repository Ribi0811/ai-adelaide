"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (form.website.trim()) {
      setStatus("success");
      setForm(initialState);
      return;
    }

    try {
      const payload = {
        _subject: `New enquiry from ${form.name.trim()} — AI Adelaide`,
        _captcha: "false",
        _template: "table",
        _replyto: form.email.trim(),
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || "Not provided",
        business: form.business.trim() || "Not provided",
        service: form.service.trim() || "Not provided",
        message: form.message.trim(),
      };

      const res = await fetch("https://formsubmit.co/ajax/hello@aiadelaide.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let data = {} as { success?: string | boolean; message?: string };
      try {
        data = (JSON.parse(raw) as { success?: string | boolean; message?: string }) || {};
      } catch {
        data = {};
      }

      const failed = !res.ok || data.success === "false" || data.success === false;
      if (failed) {
        const activationDetected = /needs\s*Activation|Activate Form/i.test(`${data.message || ""} ${raw}`);
        const message = activationDetected
          ? 'Form is awaiting activation. Open the FormSubmit email sent to hello@aiadelaide.com.au and click "Activate Form", then try again.'
          : data.message || "Something went wrong. Please email us instead.";
        throw new Error(message);
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please email us instead.",
      );
    }
  }

  return (
    <div className="panel-light p-6 md:p-8">
      <div className="mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
          Prefer a form?
        </p>
        <h2 className="mt-2 text-h3-mobile md:text-h3 text-slate-950">Send your details</h2>
        <p className="mt-2 text-body-mobile md:text-body text-slate-600">
          Tell us what is slowing the business down. We&apos;ll reply within 2 business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Name *</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
              placeholder="Jane Smith"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Business name</span>
            <input
              type="text"
              value={form.business}
              onChange={(e) => setForm((prev) => ({ ...prev, business: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
              placeholder="Smith Plumbing"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email *</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
              placeholder="you@business.com.au"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
              placeholder="0400 000 000"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">What do you need help with?</span>
          <select
            value={form.service}
            onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
          >
            <option value="">Select an option</option>
            <option value="missed-calls">Missed call follow-up / lead capture</option>
            <option value="admin">Admin / reminders / workflows</option>
            <option value="bookkeeping">Bookkeeping prep automation</option>
            <option value="audit">Efficiency Audit (Free)</option>
            <option value="other">Something else</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">What is the biggest bottleneck right now? *</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
            placeholder="Example: We miss calls while on-site and lose leads because we reply too late."
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={status === "submitting"} className="btn-primary inline-flex items-center gap-2 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-70">
            {status === "submitting" ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "Send enquiry"
            )}
          </button>
          <p className="text-sm text-slate-600">We reply within 2 business hours.</p>
        </div>

        {status === "success" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <span className="mr-2">✅</span>
            Thanks! We&apos;ll get back to you within 2 business hours.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            Something went wrong — please try hello@aiadelaide.com.au directly.
            {errorMessage ? ` (${errorMessage})` : ""}
          </div>
        )}
      </form>
    </div>
  );
}
