import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for AI Adelaide — the conditions governing our website design, SEO and AI automation services, payments, and your responsibilities.",
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <section className="max-w-3xl mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <div className="mb-8">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            Last updated: 16 July 2026
          </p>

          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              <strong className="text-slate-950">AI Adelaide</strong> ("we", "our", or "us") provides website design, local SEO, and AI automation services to small businesses in Adelaide and surrounding areas. These Terms of Service govern your use of our website <a href="https://aiadelaide.com.au" className="text-accent hover:underline">aiadelaide.com.au</a> (the "Site") and services.
            </p>

            <p className="font-semibold">Please read these Terms carefully before using our services.</p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Site or services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy you have under the Australian Consumer Law that cannot lawfully be excluded.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">2. Services Provided</h2>
            <p>
              We provide the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website design and build — one-off tiers and a monthly subscription plan</li>
              <li>Local SEO services — ongoing monthly retainers</li>
              <li>AI automation — including missed-call text-back, AI receptionist, follow-up and reminder systems</li>
              <li>Free digital health checks and business audits</li>
              <li>Monthly support and optimisation</li>
            </ul>
            <p>
              The specific scope of each engagement is set out in the proposal or plan description you accept. Subject to the consumer guarantees referred to in section 1, services are otherwise provided "as is" and "as available".
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">3. Fees and Payment</h2>
            <p>
              Our services are priced as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Digital Health Check / Audit:</strong> Free</li>
              <li><strong>Website Design (one-off):</strong> From $699, tiers up to $2,499</li>
              <li><strong>Monthly Website Plan:</strong> $199 setup, then $99/month</li>
              <li><strong>Local SEO:</strong> From $399/month</li>
              <li><strong>AI Automation:</strong> From $199/month</li>
            </ul>
            <p>
              All fees are in Australian Dollars (AUD) and are due as specified in our engagement proposals. We accept payment via credit card and bank transfer. We may change the pricing of ongoing monthly services with at least 30 days written notice; any change takes effect from your next billing period after the notice period, and you may cancel before it takes effect.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">4. Monthly Website Plan</h2>
            <p>
              The Monthly Website Plan is a subscription service with the following terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Setup fee:</strong> a one-off $199 setup fee is payable before the build begins and is non-refundable once build work has started.</li>
              <li><strong>Monthly fee:</strong> $99/month, billed from the date your website goes live and then monthly in advance.</li>
              <li><strong>What's included:</strong> a Business-level website build (5-7 pages), hosting, small content edits (text and image changes to existing pages), software updates, security monitoring, and support. Structural additions (new page types, new features, redesigns) are quoted separately.</li>
              <li><strong>No lock-in:</strong> the plan is month-to-month. You may cancel at any time, effective at the end of your current billing period, with no cancellation fee. Fees already paid are not refunded on cancellation.</li>
              <li><strong>Effect of cancellation:</strong> unless you exercise the buy-out option below, the website remains our property, hosting ends at the close of your final billing period and the website is taken offline. Content you supplied to us (your logo, photos, and text) is always yours and will be returned on request. Your domain name is registered in your name and always remains yours.</li>
              <li><strong>Buy-out option:</strong> you may buy your website outright at any time. The buy-out price is the Business tier one-off price ($1,299), less the setup fee you paid, less 50% of the monthly plan fees you have paid, with a minimum buy-out price of $199. On payment, ownership of the website transfers to you as described in section 7 and we will provide the site files and reasonable assistance to move to your own hosting.</li>
              <li><strong>Non-payment:</strong> if a payment fails and is not remedied within 14 days of notice from us, we may suspend the website and, after a further 14 days, treat the plan as cancelled.</li>
            </ul>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">5. Termination</h2>
            <p>
              Monthly services (Local SEO, AI Automation, and the Monthly Website Plan) are month-to-month and may be cancelled by either party at any time, effective at the end of the current billing period. Fixed-scope project engagements may be terminated by either party with 30 days written notice. Upon termination, you remain responsible for any unpaid fees for services already rendered.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AI Adelaide shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services, even if we have been advised of the possibility of such damages. We do not guarantee any particular search-engine ranking, traffic level, or business outcome.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">7. Intellectual Property and Ownership</h2>
            <p>
              <strong>One-off website builds:</strong> on receipt of full payment, ownership of the finished website as delivered — its pages, layout, and the copy we wrote for you — transfers to you. You may host, modify, and move it freely.
            </p>
            <p>
              <strong>Monthly Website Plan:</strong> the website remains our property while the plan is active, and transfers to you only if you exercise the buy-out option in section 4.
            </p>
            <p>
              In all cases: content you supply (your business name, logo, photos, and text) remains yours; your domain name is registered in your name and remains yours; and we retain ownership of our underlying tools, templates, build systems, automation workflows, and know-how, which are protected by Australian and international copyright laws. We may display work we have built for you in our portfolio unless you ask us not to.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">8. Confidentiality</h2>
            <p>
              We agree to keep confidential all non-public information provided by you during our engagement, except as required by law or to enforce our rights.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless AI Adelaide, its owners, employees, and affiliates from any claims, losses, damages, liabilities, including attorney's fees, arising out of your use of our services or violation of these Terms, except to the extent caused by our own negligence or breach.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of South Australia, Australia. Any legal action arising from these Terms shall be brought exclusively in the courts of South Australia.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting the new terms on this page with an updated effective date. Material changes to the terms of an ongoing monthly service will be notified with at least 30 days notice as described in section 3.
            </p>

            <h2 className="text-h3-mobile text-slate-950 md:text-h3 mt-8 mb-4">12. Contact Us</h2>
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
