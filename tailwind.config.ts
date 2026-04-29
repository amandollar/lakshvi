import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#e9b7bd",
        petal: "#f8e8e5",
        sand: "#d8c7b3",
        ivory: "#fffaf5",
        ink: "#312827",
        clay: "#9f746b",
        mist: "#f4efea",
        linen: "#ebe0d2",
        cocoa: "#5e4540",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        accent: ["Trebuchet MS", "Segoe UI", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(49, 40, 39, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
