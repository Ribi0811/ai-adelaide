import type { Metadata } from "next";
import Link from "next/link";

const suburb = "Norwood";
const pageUrl = `https://aiadelaide.com.au/ai-automation-norwood`;

export const metadata: Metadata = {
  title: `AI Automation for ${suburb} Small Businesses & Tradies | AI Adelaide`,
  description:
    `Local AI automation for tradies and small businesses in Norwood. We answer missed calls, follow up quotes, and book jobs automatically so you stop leaking revenue.`,
  keywords: [
    "norwood AI automation",
    "tradies norwood",
    "AI receptionist norwood",
    "small business automation norwood",
  ],
  alternates: {
    canonical: `/ai-automation-norwood`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI Adelaide",
  url: pageUrl,
  telephone: "+61871009788",
  email: "hello@aiadelaide.com.au",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Norwood, SA",
  },
  serviceType: [
    "AI call answering",
    "Quote follow-up automation",
    "Job booking automation",
  ],
};

export default function Page() {
  return (
    <main className="bg-white pb-16 pt-28 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="section-shell px-6 md:px-8">
        <div className="mx-auto max-w-5xl sky-panel p-8 md:p-12">
          <p className="section-eyebrow">Norwood AI automation services</p>
          <h1 className="section-title mt-4">
            AI Automation for Norwood Small Businesses & Tradies
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-[#4a607d] md:text-[19px]">
            Tradies and owner-operators in Norwood are flat out on-site, then buried in admin after hours. If your calls, quote follow-ups, and booking messages are handled manually, leads slip through the cracks before you even get back to the ute.
          </p>
          <p className="mt-4 text-[16px] leading-8 text-[#566985]">
            AI Adelaide builds practical automation that plugs into your existing workflow, so your team responds faster and converts more jobs without hiring extra office staff.
          </p>
        </div>
      </section>

      <section className="section-shell px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl sky-card p-8 md:p-12 text-[#3a4f6a]">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#0c1930]">What we do for Norwood businesses</h2>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-[16px] leading-8 text-[#425a79]">
            <li><strong>Answer calls instantly:</strong> AI handles missed calls and after-hours enquiries so every prospect gets a fast first response.</li>
            <li><strong>Follow up quotes automatically:</strong> We trigger SMS/email follow-up sequences that keep quotes warm and reduce ghosting.</li>
            <li><strong>Book jobs into your calendar:</strong> Qualified leads are pushed into your schedule with the details your team needs to act quickly.</li>
          </ul>

          <h2 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-[#0c1930]">Why Norwood tradies use automation now</h2>
          <p className="mt-5 leading-8">
            Most small teams in Norwood do not have a dedicated admin person monitoring every channel all day. Calls come in while you are quoting, texts pile up during installs, and follow-up tasks sit in notebooks until the end of the week. This is exactly where revenue leakage happens.
          </p>
          <p className="mt-4 leading-8">
            Our approach is simple: start with one workflow that has clear ROI, then layer in the next improvement once your team sees results. For many businesses, that first win is missed-call text back. For others, it is quote reminders or automated booking confirmations.
          </p>
          <p className="mt-4 leading-8">
            Because the automation runs 24/7, your business looks responsive even when you are on tools. You can keep your focus on delivery while the system keeps nurturing leads, collecting job details, and pushing qualified enquiries through your funnel.
          </p>

          <h2 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-[#0c1930]">Built for real-world Adelaide operations</h2>
          <p className="mt-5 leading-8">
            We do not deliver generic templates and disappear. We map how your business currently wins work in Norwood, then tailor the automation around that process. If your jobs come from Google, referrals, or repeat clients, we can design different follow-up paths for each channel.
          </p>
          <p className="mt-4 leading-8">
            You also stay in control. We set confidence thresholds, escalation rules, and human handoff points, so AI supports your team rather than replacing judgment. Everything is measurable: response times, lead-to-quote rates, and bookings created.
          </p>

          <div className="mt-10 rounded-2xl border border-[#dce8f7] bg-[#f7fbff] p-6 md:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0c1930]">Book Free Audit</h3>
            <p className="mt-3 leading-7 text-[#4f647f]">
              We will review your current lead flow, identify the biggest automation opportunities, and give you a practical rollout plan for Norwood.
            </p>
            <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-[#244a74] hover:text-accent">
              Book Free Audit →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
