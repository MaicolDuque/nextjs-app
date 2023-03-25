/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*{html,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      ...colors,
      'alo-primary': 'var(--alo-primary-color, #101827)',
      'alo-secundary': 'var(--alo-secundary-color)'
    },
    extend: {},
  },
  plugins: [],
}
