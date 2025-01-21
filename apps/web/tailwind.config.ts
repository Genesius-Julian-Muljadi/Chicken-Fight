import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = withMT({
  content: [
    "./src/node_modules/pliny/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
    },
  },
  plugins: [],
});

export default config;
