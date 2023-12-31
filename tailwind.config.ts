import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        highlighter: "var(--color-highlighter)",
        "faded": "var(--color-faded)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        fill: "var(--color-fill)",
        highlighter: "var(--color-highlighter)",
      },
    },
  },
  plugins: [],
};
export default config;
