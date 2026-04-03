import { ImageResponse } from "next/og";

export const alt = "AI Adelaide automation workflows for Adelaide small businesses";
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
          background:
            "linear-gradient(135deg, #f0f7ff 0%, #f6fffd 45%, #eef4ff 100%)",
          color: "#0f172a",
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
              background: "#14b8a6",
            }}
          />
          Adelaide AI Automation
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ margin: 0, fontSize: 68, lineHeight: 1.04, fontWeight: 700 }}>
            Stop Losing Leads
          </p>
          <p style={{ margin: 0, fontSize: 38, lineHeight: 1.15, color: "#334155" }}>
            AI workflows for tradies and service businesses
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
