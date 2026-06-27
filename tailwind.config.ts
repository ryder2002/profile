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
        navy: {
          DEFAULT: "#0F2A4A",
          light: "#1A3F6F",
          dark: "#0A1E38",
        },
        cream: "#FAF8F5",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        card: "520px",
      },
    },
  },
  plugins: [],
};

export default config;
