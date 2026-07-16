import { ImageResponse } from "next/og";

export const alt = "AI Adelaide — Websites, SEO & AI Automation for Adelaide Small Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFBFD",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(94,242,214,0.35) 0%, rgba(251,251,253,0) 52%)",
          color: "#1D1D1F",
          padding: "56px 64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderRadius: 999,
            border: "1px solid rgba(15, 23, 42, 0.12)",
            background: "rgba(255,255,255,0.8)",
            padding: "10px 18px",
            fontSize: 22,
            letterSpacing: 0.5,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#0E8C74",
            }}
          />
          AI Adelaide
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ margin: 0, fontSize: 68, lineHeight: 1.04, fontWeight: 600, letterSpacing: -1.5 }}>
            Stop Losing Leads
          </p>
          <p style={{ margin: 0, fontSize: 38, lineHeight: 1.15, color: "#6E6E73" }}>
            Websites, SEO & AI Automation for Adelaide Small Business
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#334155",
          }}
        >
          <span>aiadelaide.com.au</span>
          <span>2-5 day setup</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
