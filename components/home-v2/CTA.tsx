"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = true;

  return (
    <>
      {/* Dark CTA band */}
      <section className="relative overflow-hidden bg-[#0A0F1C] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/15 blur-[100px]" />
          <div className="absolute right-[-5%] bottom-0 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/10 blur-[100px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-container px-6 text-center"
        >
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Ready to get online, get ranked, and stop losing leads?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            Book a free 15-minute chat. We'll tell you exactly which service makes sense first.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact#send-message"
              className="inline-flex items-center justify-center rounded-xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#E55A2B] active:scale-[0.98]"
            >
              Send a Message →
            </Link>
            <a
              href="tel:+61871009788"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              📞 08 7100 9788
            </a>
          </div>
          <p className="mt-4 text-sm text-white/40">
            We reply within 2 business hours · No pressure · Fixed quote on the spot
          </p>
        </motion.div>
      </section>

      {/* Demo line CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-container px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Want to hear the AI receptionist in action?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-600">
              Call <strong>(08) 7100 9788</strong> anytime — it's live 24/7. Ask about pricing, booking a job, or anything else. See how AI handles real conversations.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+61871009788"
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
        </div>
      </section>
    </>
  );
}