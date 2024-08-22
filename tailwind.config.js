/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "noto-kr": ["Noto Sans Korean", "sans-serif"],
      },
    },
  },
  plugins: [],
};
