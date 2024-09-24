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
            lineHeight: "1.17em",
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
        m1: "0.9em",
        m2: "1.8em",
        m4: "3.6em",
        m6: "5.4em",
        r1: "0.875em",
        r2: "1.75em",
        r4: "3.5em",
        r6: "5.25em",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
