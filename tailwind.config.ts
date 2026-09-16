import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F3EE",
        "cream-alt": "#F3F1EA",
        ink: "#101710",
        night: "#0E1410",
        "night-alt": "#16211A",
        "night-soft": "#1A2A21",
        green: {
          DEFAULT: "#2E6B3E",
          hover: "#38824B",
          deep: "#16401F",
          soft: "#8FBF9B",
          light: "#8FBF6B",
          mid: "#5D8F2E",
        },
        blue: {
          DEFAULT: "#2F7FA8",
        },
        lime: "#C6D93B",
        line: {
          DEFAULT: "#DCD8CE",
          soft: "#E7E3D9",
          mid: "#E2DED4",
        },
        text: {
          body: "#4E554C",
          muted: "#5A6158",
          label: "#4A5149",
          onDark: "#E2E5DE",
          onDarkMuted: "#C3C9BF",
          onDarkFaint: "#9DA69B",
          onDarkFainter: "#98A596",
          onDarkSoft: "#AFB8AD",
          onDarkSofter: "#A3AEA1",
          onDarkStrong: "#D3D9CE",
          onDarkStrong2: "#D7D9D2",
          onDarkLine: "#B6BEB4",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        rtdrip: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        rtmarqA: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        rtmarqB: {
          from: { transform: "translate3d(-50%,0,0)" },
          to: { transform: "translate3d(0,0,0)" },
        },
        rtken: {
          "0%": { transform: "scale(1.04) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.14) translate3d(-1.5%,-1%,0)" },
        },
        rtreveal: {
          from: { clipPath: "inset(0 0 100% 0)", opacity: "0", transform: "scale(1.04)" },
          to: { clipPath: "inset(0 0 0 0)", opacity: "1", transform: "none" },
        },
      },
      animation: {
        rtken: "rtken 26s ease-in-out infinite alternate",
        rtmarqA: "rtmarqA 44s linear infinite",
        rtmarqB: "rtmarqB 56s linear infinite",
        rtreveal: "rtreveal 1.05s cubic-bezier(.22,.61,.36,1) both",
      },
      maxWidth: {
        content: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
