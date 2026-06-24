import { ImageResponse } from "next/og";
import suburbs from "@/data/suburbs.json";

// Default fallback alt. Per-suburb alt is set explicitly via generateMetadata
// in page.tsx (openGraph.images[0].alt) so it's accurate on every suburb page.
export const alt = "AI Adelaide — Websites, SEO & AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const suburbList = suburbs as Array<{
  slug: string;
  name: string;
  postcode: string;
  heroLine: string;
}>;

export default async function Image({ params }: { params: { suburb: string } }) {
  const suburb = suburbList.find((s) => s.slug === params.suburb);

  if (!suburb) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0A0F1C",
            color: "white",
            fontSize: 48,
          }}
        >
          AI Adelaide
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0A0F1C 0%, #1E3A5F 60%, #FF6B35 130%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo + brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #5EF2D6 0%, #3B82F6 100%)",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
              AI Adelaide
            </div>
            <div
              style={{
                fontSize: 14,
                opacity: 0.7,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Websites · SEO · AI Automation
            </div>
          </div>
        </div>

        {/* Hero text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: 3,
              color: "#FF6B35",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {suburb.name} · {suburb.postcode}
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
              display: "flex",
            }}
          >
            {suburb.heroLine}
          </div>
          <div
            style={{
              fontSize: 22,
              opacity: 0.85,
              maxWidth: 900,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            From $699 websites · SEO from $399/mo · Automation from $199/mo
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            opacity: 0.7,
          }}
        >
          <div style={{ display: "flex" }}>(08) 7100 9788 · hello@aiadelaide.com.au</div>
          <div style={{ display: "flex" }}>aiadelaide.com.au/{suburb.slug}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
