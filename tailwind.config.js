/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'normal': '100%',
      'lg': '110%',
    },
    extend: {
      fontFamily: {
        special: ['Josefin Sans', 'Open Sans', 'serif'],
        normal: ['Arial', 'Helvetica', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 2s',
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}

