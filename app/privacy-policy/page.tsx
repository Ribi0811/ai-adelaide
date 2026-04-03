import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AI Adelaide - how we collect, use, and protect your personal information when you use our AI automation services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy policy for AI Adelaide - how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Privacy Policy",
    description: "Privacy policy for AI Adelaide.",
    images: ["/twitter-image"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: March 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site").
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. Information We Collect</h2>
            <p className="font-semibold">Personal Data</p>
            <p>
              When you contact us, fill out a form, or book a consultation, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number)</li>
              <li>Business information (company name, industry)</li>
              <li>Communication content and metadata</li>
              <li>Payment information (if applicable)</li>
            </ul>

            <p className="font-semibold mt-4">Automatically Collected Data</p>
            <p>
              When you visit our Site, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on the Site</li>
              <li>Referring website or campaign</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Process payments and manage accounts</li>
              <li>Send administrative notices and updates</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. Disclosure of Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who help us operate our business (e.g., hosting, email, payment processors)</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your consent</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, contact us at <a href="mailto:hello@aiadelaide.com.au" className="text-accent hover:underline">hello@aiadelaide.com.au</a>.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our Site. For more information about our use of cookies, please see our <a href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</a>.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
