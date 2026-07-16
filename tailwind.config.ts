import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // v4 design language (DESIGN-SYSTEM-V3.md): ink on porcelain, teal
        // accent. Tokens re-pointed 2026-07-16 so every legacy page that
        // consumes them inherits the v4 palette without any markup change.
        bgPrimary: "#FBFBFD",
        bgSecondary: "#F5F5F7",
        bgTertiary: "#E8E8ED",
        textPrimary: "#1D1D1F",
        textSecondary: "#6E6E73",
        accent: "#0E8C74",
        "accent-hover": "#0C7A63",
        electric: "#82A6FF",
        line: "#1C3444",
      },
      fontFamily: {
        inter: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        h1: ["64px", { lineHeight: "1.05", fontWeight: "600", letterSpacing: "-0.03em" }],
        "h1-mobile": ["38px", { lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.02em" }],
        h2: ["44px", { lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.02em" }],
        "h2-mobile": ["30px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.02em" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-mobile": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1", fontWeight: "600" }],
      },
      padding: {
        section: "88px",
        "section-mobile": "48px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(29, 29, 31, 0.05)",
        glow: "0 0 0 1px rgba(14,140,116,0.18), 0 12px 48px rgba(14,140,116,0.12)",
        "light-card": "0 2px 12px rgba(29, 29, 31, 0.05)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(130,166,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(130,166,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
