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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bastia: ['Bastia', 'sans-serif'],  // Adding Bastia font
        futura: ['Futura', 'sans-serif'],  // Adding Futura font
      },
    },
  },
  plugins: [],
};

export default config;
