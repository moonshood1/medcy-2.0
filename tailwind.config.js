/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        medBlue: "#4AAAE1",
        medGray: "#F4F5F9",
        medDark: "#2D2D2D",
        medDarkGray: "#969696",
        medGreen: "#366D6D",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
