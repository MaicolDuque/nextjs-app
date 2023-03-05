/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*{html,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
