const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.ts", "./src/**/*.css", "./src/**/*.js"],
  },
  theme: {
    colors: {
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      gray: colors.warmGray,
      amber: colors.amber
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1164px'},
    },
    container: {
      screens: {
         sm: "560px",
         md: "620px",
         lg: "870px",
         xl: "900px"
      }
    }
  },
  variants: {},
  plugins: [],
};
