/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top3xl': '0px 0px 40px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

