/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors:{
        primary:"#18003d",
        secondary:"#aaf296",
        accent:"#27035d",
        white:"#dddddd",
      }
    },
  },
  plugins: [],
}