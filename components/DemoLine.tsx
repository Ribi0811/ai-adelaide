// DemoLine — "call and hear the AI receptionist live" proof block.
// Extracted from components/home-v2/CTA.tsx (Phase 4.5) so it can be reused
// on every receptionist/answering-service survivor page, not just the
// homepage. This is the strongest proof asset the site has — no Adelaide
// competitor lets a prospect call a live number and talk to the actual
// product before buying — so it belongs on every page selling that product,
// not buried in one homepage section.

export default function DemoLine() {
  return (
    <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
        <h2 className="mb-4 text-h2-mobile font-bold text-slate-950 md:text-h2">
          Want to Hear the AI Receptionist in Action?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
          Call <strong>(08) 7100 9788</strong> anytime — it&apos;s live 24/7. Ask about pricing, booking a job, or anything else. See how AI handles real conversations.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+61871009788"
            data-track="tel_demo_line"
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
          >
            Call Demo Line Now →
          </a>
          <a
            href="/contact#send-message"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-white"
          >
            Or Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
