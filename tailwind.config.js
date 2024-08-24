/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        palyfair:"'playfair Display', serif",
        lato:"'lato',sans-serif",
      }
    },
  },
  plugins: [],
}

