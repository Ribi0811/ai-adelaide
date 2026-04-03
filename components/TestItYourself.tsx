export default function TestItYourself() {
  return (
    <section className="w-full bg-[#e6f7f5] py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-teal-600">
          Live demo — right now
        </span>

        <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
          Don&apos;t Take Our Word For It —{" "}
          <span className="text-accent">Test It Right Now</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
          Call our AI receptionist and see how it handles a real enquiry. No
          signup needed. No sales pitch. Just dial the number and have a
          conversation.
        </p>

        {/* Big phone CTA */}
        <a
          href="tel:0871009788"
          className="inline-flex items-center gap-3 rounded-2xl border-2 border-accent bg-white px-8 py-5 text-2xl font-bold text-slate-900 shadow-lg transition-all hover:bg-accent/5 hover:shadow-xl active:scale-[0.98] md:text-3xl"
        >
          <span className="text-3xl md:text-4xl">📞</span>
          <span>08 7100 9788</span>
        </a>

        <p className="mt-5 text-sm italic text-slate-500">
          Go on — ask about pricing, availability, or an emergency callout. See
          how it handles it.
        </p>

        {/* Challenge badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-50 px-5 py-2 text-sm font-medium text-teal-700">
          <span>🤖</span>
          <span>Bet you can&apos;t tell it&apos;s AI</span>
        </div>
      </div>
    </section>
  );
}
