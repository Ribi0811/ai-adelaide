"use client";

// The sky gets a body: a sun that arcs across the viewport as the visitor
// scrolls through the day, sets at dusk, and hands over to a rising moon.
// Pure scroll-driven positioning; pointer-events none; hidden for
// reduced-motion users.
import { useEffect, useState } from "react";

export default function Celestial() {
  const [p, setP] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = document.getElementById("day-wrapper");
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (reduce) return null;

  // Sun: dawn → golden hour (p 0–0.62). Rises, arcs, sets.
  const sunP = Math.min(1, p / 0.62);
  const sunX = 6 + sunP * 74; // vw
  const sunY = 26 - 20 * Math.sin(Math.PI * sunP); // vh, peak ~6vh at noon
  const sunOpacity = p < 0.56 ? 1 : Math.max(0, 1 - (p - 0.56) / 0.08);

  // Moon: dusk → new dawn (p 0.64–0.97). Rises from the left.
  const moonP = Math.min(1, Math.max(0, (p - 0.64) / 0.33));
  const moonX = 10 + moonP * 76;
  const moonY = 24 - 16 * Math.sin(Math.PI * moonP);
  const moonOpacity =
    p < 0.64 ? 0 : p > 0.94 ? Math.max(0, 1 - (p - 0.94) / 0.05) : Math.min(1, (p - 0.64) / 0.06);

  return (
    <div className="pointer-events-none fixed inset-0 z-10" aria-hidden>
      {/* sun */}
      <div
        className="absolute h-16 w-16 rounded-full md:h-20 md:w-20"
        style={{
          left: `${sunX}vw`,
          top: `${sunY}vh`,
          opacity: sunOpacity,
          background: "radial-gradient(circle at 38% 35%, #FFE7BC, #F6A54C 70%)",
          boxShadow: "0 0 60px 26px rgba(246,165,76,0.38)",
          transition: "opacity 0.3s linear",
        }}
      />
      {/* moon */}
      <div
        className="absolute h-12 w-12 rounded-full md:h-14 md:w-14"
        style={{
          left: `${moonX}vw`,
          top: `${moonY}vh`,
          opacity: moonOpacity,
          background:
            "radial-gradient(circle at 62% 38%, #FFFFFF, #DCE4F2 55%, #B9C6DE 100%)",
          boxShadow:
            "0 0 40px 14px rgba(220,228,242,0.25), inset -10px -7px 0 0 rgba(12,17,32,0.22)",
          transition: "opacity 0.3s linear",
        }}
      />
    </div>
  );
}
