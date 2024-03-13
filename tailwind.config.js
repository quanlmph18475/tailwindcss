/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      backgroundImage:{
        'slider-bg': 'url("./img/slider/slider.jpg")'
      }
    },
  },
  plugins: [],
}

