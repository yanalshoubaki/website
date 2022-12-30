/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts}",
    "./blogs/**/*.mdx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        primary: {
          main: "#214f50",
          light: "#4e7b7c",
          dark: "#002628",
        },
        secondary: {
          main: "#d4ecdd",
          light: "#ffffff",
          dark: "#a3baab",
        },
      },
      backgroundImage: {
        pattern: "url('/bg-light.svg')",
        "pattern-dark": "url('/bg-dark.svg')",
      },
    },
  },
};
