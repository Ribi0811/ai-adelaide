// Giant ghosted timecode watermark — the editorial stamp on each scene.
export default function TimeStamp({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute right-2 top-6 select-none text-[72px] font-bold leading-none tracking-[-0.04em] md:right-8 md:top-10 md:text-[160px] ${
        tone === "dark" ? "text-white/[0.06]" : "text-[#1D1D1F]/[0.05]"
      }`}
    >
      {label}
    </span>
  );
}
