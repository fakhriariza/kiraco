import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1EA",
        beige: "#E6DDCF",
        taupe: "#928377",
        "charcoal-grey": "#646467",
        "ink-black": "#1F1F1F",
        "warm-sand-rose": "#E6CCBE",
        blush: "#D6B8B0",
        "rose-gold": "#D4937B",
        copper: "#A67C5B",
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Playfair Display", "Georgia", "serif"],
        body: ["Lora", "EB Garamond", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        wide: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
