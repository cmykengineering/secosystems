import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a43700",
        "primary-container": "#cd4700",
        "on-primary": "#ffffff",
        "inverse-surface": "#2f3131",
        secondary: "#5f5e5e",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f3",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        background: "#f9f9f9",
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#5a4138",
        "tertiary-fixed-dim": "#c8c6c5",
        "outline-variant": "#e3bfb2",
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
