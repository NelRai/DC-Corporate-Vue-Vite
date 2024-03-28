/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        dc: {
          400: '#FF646F',
          500: '#F34B57',
          neutral50: '#FCFCFD',
          neutral900: '#191D2E',
          neutral200: '#DFE2EC',
          blue: '#385CFA',
        }
      },
      boxShadow: {
        'top3xl': '0px 0px 40px 0px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '4xl': '4rem',
        'images': '3rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '99': '99',
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
  plugins: [require('tailwind-hamburgers')],
}

