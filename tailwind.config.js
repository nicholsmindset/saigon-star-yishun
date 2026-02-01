/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'brand-nude': '#FAF8F5',
        'brand-blush': '#F5E6E8',
        'brand-gold': '#C5A572',
        'brand-dark': '#2C2C2C',
        'brand-accent': '#DCC9B6',
      },
    },
  },
  plugins: [],
}
