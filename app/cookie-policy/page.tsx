import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for AI Adelaide - how we use cookies and similar tracking technologies on our website.",
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
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: March 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") uses cookies and similar tracking technologies to enhance your experience on our website <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site"). This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Essential Cookies</h3>
            <p>
              Essential cookies are necessary for the operation of our Site. They enable basic functions such as page navigation and access to secure areas. You cannot opt-out of essential cookies as they are required for the Site to function properly.
            </p>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Analytics Cookies</h3>
            <p>
              Analytics cookies help us understand how visitors interact with our Site by collecting and reporting information anonymously. We use Google Analytics to track:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pages visited and time spent on the Site</li>
              <li>Referring websites and marketing campaigns</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/city level)</li>
            </ul>

            <h3 className="text-h4-mobile text-slate-950 md:text-h4 mt-6 mb-3 font-semibold">Functionality Cookies</h3>
            <p>
              Functionality cookies allow our Site to remember choices you make (such as your language preference or region) and provide enhanced, more personal features.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. How We Use Analytics Cookies</h2>
            <p>
              We use Google Analytics with the following configuration:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We anonymize IP addresses before processing</li>
              <li>We do not share data with third parties except Google</li>
              <li>We use data to improve user experience and site performance</li>
              <li>You can opt-out of Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Your Choices</h2>
            <p>
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies or notify you when cookies are sent. Please note that if you disable cookies, some features of our Site may not function properly.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Third-Party Cookies</h2>
            <p>
              We may also allow third-party service providers to place cookies on your device to help us analyze our traffic and deliver targeted advertising. These third parties have their own privacy policies regarding the use of cookies.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. How to Manage Cookie Preferences</h2>
            <p>To manage your cookie preferences:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-950">Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong className="text-slate-950">Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong className="text-slate-950">Firefox:</strong> Preferences &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong className="text-slate-950">Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">7. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">8. Contact Us</h2>
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
