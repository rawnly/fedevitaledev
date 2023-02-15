const { fontFamily } = require("tailwindcss/defaultTheme");
const tc = require("tailwind-radix-colors");

const palette = {
  ...tc.createAlias("neutral", "slate"),
  ...tc.createAlias("primary", "cyan"),
  ...tc.createAlias("danger", "crimson"),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        transparent: "#00000000",
        ...tc.colors,
        ...palette,
      },
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    tc.plugin({
      properties: [
        "outline",
        "bg",
        "placeholder",
        "ring-offset",
        "divide",
        "shadow",
        "text",
        "border",
        "ring",
        "divide",
      ],
      colors: {
        ...tc.colors,
        ...palette,
      },
    }),
  ],
};
