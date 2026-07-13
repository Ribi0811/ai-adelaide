"use client";

// Focused inline lead capture for the tradie SEO landing page (T3 / handoff Q3).
// Posts to the same durable channel as the contact form (/api/contact-submit →
// Telegram + email), tagged service:"seo", with first-touch attribution.
// The endpoint requires an email OR phone; we ask for both but validate for one.
import { FormEvent, useState } from "react";
import { track } from "@/lib/track";
import { getAttribution } from "@/lib/attribution";

export default function TradieLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (website.trim()) {
      setStatus("success");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setStatus("error");
      setError("Add an email or phone so we can send your review.");
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: "seo",
          message: "Free tradie visibility review request (SEO for tradies page)",
          source: "/seo-for-tradies-adelaide",
          attribution: getAttribution(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) throw new Error("Request failed");
      track("tradie_lead_submit", { page: "seo-for-tradies-adelaide" });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
    } catch {
      setStatus("error");
      setError("Something went wrong — please call (08) 7100 9788 or email hello@aiadelaide.com.au.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 md:p-8">
        <p className="text-lg font-semibold">Thanks — request received.</p>
        <p className="mt-1 text-sm">
          We&apos;ll review where your business ranks now and reply within 2 business hours with
          the quick wins.
        </p>
      </div>
    );
  }

  return (
    <div className="panel-light p-6 md:p-8">
      <span className="eyebrow-light">Free, no obligation</span>
      <h2 className="mt-3 text-h3-mobile text-slate-950 md:text-h3">
        Get a free tradie visibility review
      </h2>
      <p className="mt-2 max-w-xl text-body-mobile text-slate-600 md:text-body">
        Tell us your trade and where you work — we&apos;ll show you where you rank now, what your
        competitors are doing, and the fastest wins. No pitch unless you want one.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-3">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label="Email"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          aria-label="Phone"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent/40 focus:shadow-[0_0_0_4px_rgba(94,242,214,0.12)]"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary px-6 py-3 disabled:opacity-70 sm:col-span-3 sm:justify-self-start"
        >
          {status === "submitting" ? "Sending…" : "Get my free review →"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-rose-700">{error}</p>
      )}
    </div>
  );
}
