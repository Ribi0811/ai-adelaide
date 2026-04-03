import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for AI Adelaide - the terms and conditions governing your use of our AI automation services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service",
    description: "Terms of service for AI Adelaide.",
    url: "/terms",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Terms of Service",
    description: "Terms of service for AI Adelaide.",
    images: ["/twitter-image"],
  },
};

export default function TermsPage() {
  return (
    <div className="section-shell pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: March 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") provides AI automation services to small businesses in Adelaide and surrounding areas. These Terms of Service govern your use of our website <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site") and services.
            </p>

            <p className="font-semibold">Please read these Terms carefully before using our services.</p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Site or services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. Services Provided</h2>
            <p>
              We provide AI automation services including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business efficiency audits</li>
              <li>Workflow automation implementation</li>
              <li>AI assistant setup and integration</li>
              <li>Monthly support and optimization</li>
            </ul>
            <p>
              All services are provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. Fees and Payment</h2>
            <p>
              Our services are priced as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Efficiency Audit:</strong> $247 (one-time fee)</li>
              <li><strong>Implementation:</strong> Custom quote based on scope</li>
              <li><strong>Monthly Support:</strong> $500-$1,500/month based on service level</li>
            </ul>
            <p>
              All fees are in Australian Dollars (AUD) and are due as specified in our engagement proposals. We accept payment via credit card and bank transfer.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Termination</h2>
            <p>
              Either party may terminate an engagement agreement with 30 days written notice. Upon termination, you will remain responsible for any unpaid fees for services already rendered.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AI Adelaide shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content, code, and materials provided by AI Adelaide as part of our services (including automation workflows, documentation, and custom software) are the intellectual property of AI Adelaide and are protected by Australian and international copyright laws.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">7. Confidentiality</h2>
            <p>
              We agree to keep confidential all non-public information provided by you during our engagement, except as required by law or to enforce our rights.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless AI Adelaide, its owners, employees, and affiliates from any claims, losses, damages, liabilities, including attorney's fees, arising out of your use of our services or violation of these Terms.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of South Australia, Australia. Any legal action arising from these Terms shall be brought exclusively in the courts of South Australia.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting the new terms on this page with an updated effective date.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
