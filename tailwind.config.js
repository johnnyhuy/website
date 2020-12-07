const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.ts", "./src/**/*.css", "./src/**/*.js"],
  },
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.warmGray,
      amber: colors.amber
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1164px'},
    }
  },
  variants: {},
  plugins: [],
};
