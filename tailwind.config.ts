import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "m-base": [
          "20px",
          {
            lineHeight: "1.2em",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "m-lg": [
          "48px",
          {
            lineHeight: "1em",
            letterSpacing: "-0.05em",
            fontWeight: "400",
          },
        ],
        "r-base": [
          "24px",
          {
            lineHeight: "1.1667em",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          },
        ],
        "r-lg": [
          "64px",
          {
            lineHeight: "0.875em",
            letterSpacing: "-0.05em",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        m1: "0.9rem",
        m2: "1.8rem",
        m4: "3.6rem",
        m6: "5.4rem",
        r1: "1.75rem",
        r2: "3.5rem",
        r4: "7rem",
        r6: "10.5rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midground: "var(--midground)",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
