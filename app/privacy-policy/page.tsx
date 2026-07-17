import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AI Adelaide — how we collect, use, store and protect your personal information, and your rights under Australian privacy law.",
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: 16 July 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") provides website design, local SEO, and AI automation services to small businesses in Adelaide. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site"), our chat assistant, or our phone line. We handle personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. Information We Collect</h2>
            <p className="font-semibold">Information you give us</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Enquiry forms:</strong> your name, business name, email, phone number, the service or plan you're interested in, and your message.</li>
              <li><strong>Chat assistant:</strong> the messages you type into the chat widget on our Site.</li>
              <li><strong>Phone calls:</strong> if you call us, your call may be answered by our AI voice assistant. Calls answered by the assistant are recorded and transcribed — this is how the assistant understands and responds to you, and how we take your message accurately and follow up.</li>
              <li><strong>Email and other correspondence</strong> you send us.</li>
              <li><strong>Payment details</strong> if you become a client (processed by our payment providers — we do not store card numbers).</li>
            </ul>

            <p className="font-semibold mt-4">Information collected automatically</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics:</strong> pages visited, time on site, device and browser type, and approximate location (city level) via Google Analytics 4. You can opt out — see our Cookie Policy.</li>
              <li><strong>Marketing attribution:</strong> the page you landed on, the site that referred you, and any campaign tags in the link you clicked. This is stored in your own browser and attached to your enquiry if you submit one, so we know how you found us.</li>
              <li><strong>Server logs:</strong> our hosting provider records standard technical logs (such as IP address and requests) to keep the Site secure and running.</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Take messages and book appointments via our AI assistants</li>
              <li>Understand how visitors use the Site and how our marketing performs</li>
              <li>Process payments and manage client accounts</li>
              <li>Send administrative notices about services you've engaged us for</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell or rent your personal information, and we do not use it for third-party advertising.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. Who We Share Information With</h2>
            <p>
              We share information only with the service providers we use to run the business:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hosting:</strong> our Site runs on Vercel's infrastructure.</li>
              <li><strong>Analytics:</strong> Google Analytics (you can opt out — see our Cookie Policy).</li>
              <li><strong>Lead notifications:</strong> when you submit an enquiry or use the chat, the details are sent to our team by email and via Telegram so we can reply quickly.</li>
              <li><strong>AI processing:</strong> chat messages and phone conversations are processed by the AI model and voice providers that power our assistants, solely to generate responses and transcripts.</li>
              <li><strong>Payments:</strong> card and bank payments are handled by our payment providers.</li>
              <li><strong>Legal authorities</strong> when required by law.</li>
            </ul>
            <p>
              Some of these providers store data on servers located outside Australia (for example, in the United States). Where that happens, we take reasonable steps to ensure your information is handled consistently with Australian privacy law.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Data Security and Retention</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We keep enquiry and client records only as long as needed to serve you and meet our legal obligations — you can ask us to delete your details at any time.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or ask us to delete your personal information, and to ask how it has been handled. To exercise these rights, contact us at <a href="mailto:hello@aiadelaide.com.au" className="text-accent hover:underline">hello@aiadelaide.com.au</a> — we'll respond within a reasonable time. If you're not satisfied with our response, you can complain to the Office of the Australian Information Commissioner (<a href="https://www.oaic.gov.au" className="text-accent hover:underline">oaic.gov.au</a>).
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. Cookies</h2>
            <p>
              We use Google Analytics and simple first-touch attribution to understand how the Site is used and how visitors find us. Australia doesn't require a cookie consent banner, so we don't use one, but you can opt out anytime. For full details, including exactly what is stored in your browser and how to opt out, see our <a href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</a>.
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
