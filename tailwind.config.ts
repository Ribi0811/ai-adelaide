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
        bgPrimary: "#F7FBFF",
        bgSecondary: "#EEF5FB",
        bgTertiary: "#E4EEF7",
        textPrimary: "#0F1D2B",
        textSecondary: "#53697A",
        accent: "#5EF2D6",
        "accent-hover": "#3FE4C7",
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
        h1: ["72px", { lineHeight: "1.02", fontWeight: "700" }],
        "h1-mobile": ["40px", { lineHeight: "1.05", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "1.1", fontWeight: "600" }],
        "h2-mobile": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
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
        card: "0 18px 60px rgba(15, 23, 42, 0.10)",
        glow: "0 0 0 1px rgba(94,242,214,0.14), 0 12px 48px rgba(94,242,214,0.12)",
        "light-card": "0 18px 60px rgba(15, 23, 42, 0.08)",
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
