import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <Link href="/audit" className="btn-primary w-full justify-center py-3 text-center">
        Book Free Chat
      </Link>
    </div>
  );
}
