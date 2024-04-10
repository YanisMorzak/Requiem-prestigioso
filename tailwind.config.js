/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#1D1F23",
        primary: "#151618",
        emeraude: "#13514C",
        gold: "#EFDF6C",
        accent: {
          DEFAULT: "#F6CD46",
          hover: "#E1B72E",
        },
      },
    },
  },
  plugins: [],
};
