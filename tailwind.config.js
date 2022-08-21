/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '600px',
      // => @media (min-width: 600px) { ... }

      'laptop': '900px',
      // => @media (min-width: 900px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
