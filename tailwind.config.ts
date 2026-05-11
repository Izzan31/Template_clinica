import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 70px rgba(6, 42, 56, 0.10)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
