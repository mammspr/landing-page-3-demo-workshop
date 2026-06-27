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
        matcha: {
          deep: "#1E2D24",
          ceremonial: "#2A3F33",
          medium: "#4D6756",
          soft: "#8EA595",
          accent: "#A3B899",
          tint: "#EBF0EC"
        },
        linen: {
          light: "#FAF8F5",
          card: "#F4F0E9",
          warm: "#E8E1D7",
          border: "#E2DACD"
        },
        earth: {
          charcoal: "#1A1A18",
          muted: "#63615C",
          sand: "#C4B5A0",
          gold: "#B89D73"
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(30, 45, 36, 0.07)',
        'luxury': '0 30px 60px -12px rgba(28, 28, 26, 0.08)',
        'card-hover': '0 20px 35px -10px rgba(42, 63, 51, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
