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
        red: {
          DEFAULT: "#C8102E",
        },
        navy: {
          DEFAULT: "#0A1F44",
          deep: "#060F22",
        },
        warmgray: {
          DEFAULT: "#F5F3F0",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
