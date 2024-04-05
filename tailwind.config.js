const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.html",
      "./public/index.html",
    ],
    options: {
      blocklist: [/^debug-/],
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "340px",
        ...defaultTheme.screens,
      },
      colors: {
        aboutus: "#f2f5fw",
        about: "#013575",
        para: "#707070",
        tick: "#0080ff",
        readMore: "#0080ff",
        stars: "#ffd700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
