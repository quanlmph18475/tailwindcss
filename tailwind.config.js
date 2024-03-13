/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-coffee': '#C89F94'
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

