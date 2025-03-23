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
        primary: {
          DEFAULT: "#2E6C5D",
          hover: "#4B6F5D",
        },
        secondary: {
          DEFAULT: "#F0F8FF",
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};

export default config;
