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
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
        primary: colors.amber,
        // backtheme: colors.sky,
        gray: colors.gray,
        backtheme: {
          "50": "#fff7f0",
          "100": "#f5e4d3",
          "200": "#f2d3b3",
          "300": "#edc39f",
          "400": "#db9960",
          "500": "#c27e44",
          "600": "#945b29",
          "700": "#73441a",
          "800": "#522f10",
          "900": "#301b08",
          "950": "#1f1105",
        },
        productCard: {
          light: "#fffcf6",
          dark: "#111827",
        },
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
