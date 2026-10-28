import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cerulean: "#0073B7",
          "cerulean-dark": "#00588D",
          marine: "#0D3B66",
          "marine-deep": "#082542",
          gold: "#C99738",
          bronze: "#8B601C",
          "gold-light": "#FDF8EC",
          emerald: "#0A8754",
          "emerald-dark": "#076740",
          "emerald-light": "#E8F5EE",
          slate: "#1E293B",
          mist: "#F1F5F9",
          canvas: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        btn: "6px",
        card: "12px",
      },
      boxShadow: {
        "subtle-card": "0 10px 30px -5px rgba(13, 59, 102, 0.07)",
        "subtle-gold": "0 4px 20px -2px rgba(201, 151, 56, 0.22)",
        "subtle-glow": "0 0 25px rgba(0, 115, 183, 0.15)",
      },
      maxWidth: {
        "7xl": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
