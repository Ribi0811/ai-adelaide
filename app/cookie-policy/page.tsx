import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for AI Adelaide — how we use cookies and similar tracking technologies on our website, what they do, and how you can manage or disable them.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy",
    description: "Cookie policy for AI Adelaide.",
    url: "/cookie-policy",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Cookie Policy",
    description: "Cookie policy for AI Adelaide.",
    images: ["/twitter-image"],
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="section-shell pb-section-mobile pt-28 md:pb-section md:pt-32">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: 16 July 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") uses a small number of cookies and browser-storage technologies on <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site"). This policy explains exactly what we store, why, and how you can control it. The short version: we use Google Analytics to understand how the Site is used, we use no advertising or cross-site tracking cookies at all, and you can opt out at any time using the methods below.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. What Are Cookies and Browser Storage?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. Browser storage (localStorage) works similarly but stays in your browser and is never sent automatically to servers. We use both, sparingly.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. What We Actually Use</h2>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Analytics — Google Analytics 4</h3>
            <p>
              We use Google Analytics 4, which sets its own cookies and collects:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pages visited and time spent on the Site</li>
              <li>Referring websites and marketing campaigns</li>
              <li>Device and browser information</li>
              <li>Approximate location (city level) — Google Analytics 4 does not log or store individual IP addresses</li>
            </ul>
            <p>
              You can opt out of Google Analytics in any browser via <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline">Google's opt-out add-on</a>, or block cookies using your browser settings (see below).
            </p>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Marketing attribution</h3>
            <p>
              We note the first page you landed on, the site that referred you, and any campaign tags in the link you clicked. This stays in your own browser (localStorage) and is only sent to us if you submit an enquiry — it tells us how you found us so we know which marketing actually works.
            </p>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Chat assistant history</h3>
            <p>
              If you use the chat widget, your conversation and a random session ID are kept in your own browser's localStorage so the chat remembers where you were if you reload the page. Messages you send are processed as described in our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
            </p>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">What we don't use</h3>
            <p>
              No advertising cookies, no remarketing pixels, no cross-site tracking, no social media trackers. If that ever changes, this policy will be updated first.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. Your Choices</h2>
            <p>
              Australia does not require a cookie consent banner, so we don't interrupt your visit with one. If you'd rather not be included in analytics, you can opt out with <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline">Google's opt-out add-on</a> or block cookies in your browser settings (see below) — the Site works fine either way.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Managing Cookies in Your Browser</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-950">Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong className="text-slate-950">Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong className="text-slate-950">Firefox:</strong> Preferences &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong className="text-slate-950">Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:hello@aiadelaide.com.au" className="text-accent hover:underline">hello@aiadelaide.com.au</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
