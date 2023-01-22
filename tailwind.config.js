/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    colors: {
      'gold': '#EBB062',
      'white': '#FFFFFF',
      'lgray': '#DDDDDD',
      'bgray': '#91A2AE',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
