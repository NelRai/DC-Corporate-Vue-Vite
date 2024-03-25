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
      },
      borderRadius: {
        '4xl': '4rem',
      },
      fontSize: {
        '1xl': ['1.5rem', {
          lineHeight: '2rem',
        }],
        '2xl': ['1.65rem', {
          lineHeight: '2.5rem',
        }],
        '4xl': ['2.5rem', {
          lineHeight: '4rem',
        }],
        '7xl': ['5rem', {
          lineHeight: '6rem',
        }],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } 
    },
    fontFamily: {
      'blinker': ['Blinker', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'source': ['Source Sans 3', 'ui-sans-serif', 'system-ui', 'sans-serif']
    }
  },
  plugins: [],
}

