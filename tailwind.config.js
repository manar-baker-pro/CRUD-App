/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      colors: {
        "dark-aqua": "#4fdfde",
        "dark-blue": "#25369a",
        "med-blue": "#88e2da",
        "purple-blue": "#7e83f7",
        "light-white": "rgba(255,255,255,0.17)",
        "white-f8f9fb": "#f8f9fb",
      },
    },
  },
  plugins: [],
};
