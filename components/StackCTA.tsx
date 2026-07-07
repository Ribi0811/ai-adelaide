import Link from "next/link";

// StackCTA — cross-sell block for "harvest" pages (a page ranking for one
// piece of the stack — usually automation/receptionist — that should also
// point back at the other two). Per IMPLEMENTATION-PLAN.md 4.4: place above
// the final CTA on every harvest page. `variant` bolds whichever leg of the
// stack matches the page it's placed on; the body copy itself is fixed
// (matches the plan's approved wording exactly) so it stays consistent
// sitewide regardless of which page is doing the cross-selling.

export type StackCTAVariant = "website" | "seo" | "automation";

type StackCTAProps = {
  variant: StackCTAVariant;
  className?: string;
};

export default function StackCTA({ variant, className = "" }: StackCTAProps) {
  const website = (
    <strong className={variant === "website" ? "text-accent" : "text-slate-950"}>
      a $699 website that&apos;s live in 48 hours
    </strong>
  );
  const seo = (
    <strong className={variant === "seo" ? "text-accent" : "text-slate-950"}>
      local SEO from $399/mo so Adelaide customers actually find it
    </strong>
  );
  const automation = (
    <strong className={variant === "automation" ? "text-accent" : "text-slate-950"}>
      automation from $199/mo so no lead slips through
    </strong>
  );

  return (
    <section className={`max-w-container mx-auto px-6 pt-12 md:pt-16 ${className}`}>
      <div className="panel-light grid-overlay-light p-6 md:p-10">
        <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
          This Works Best as Part of the Full Stack
        </h2>
        <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
          A missed-call system bolted onto a website nobody finds is half a fix. Most clients start with{" "}
          {website}, add {seo}, and switch on {automation}. Pick one, or stack all three — no lock-in.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary px-8 py-4">
            Get a Fixed Quote <span aria-hidden>→</span>
          </Link>
          <Link href="/website-pricing" className="btn-secondary px-8 py-4">
            See Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
