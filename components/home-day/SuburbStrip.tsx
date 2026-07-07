// Crawlable local-SEO footprint for the day page: every suburb page linked
// in plain text. Quiet, editorial, morning-light styling.
import Link from "next/link";
import suburbs from "@/data/suburbs.json";
import Reveal from "@/components/home-v3/Reveal";

export default function SuburbStrip() {
  return (
    <section className="bg-[#FDF6EC] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-container">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[22px] font-bold tracking-tight text-[#1D1D1F]">
              Website design &amp; SEO across {suburbs.length} Adelaide suburbs
            </h2>
            <Link
              href="/locations"
              className="text-[14px] font-semibold text-[#0E8C74] hover:opacity-70"
            >
              All locations ›
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
            {suburbs.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-[13px] text-[#8A7A66] underline-offset-4 transition hover:text-[#0E8C74] hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
