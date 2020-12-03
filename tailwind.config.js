const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.ts"],
  },
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.warmGray,
      amber: colors.amber
    }
  },
  variants: {},
  plugins: [],
};
