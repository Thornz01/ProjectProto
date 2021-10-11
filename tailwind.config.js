const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./**/*.html",
  "./*.html",
  "./**/*.js",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'desktop': '1280px',
      'tablet': '640px',
      'phone': '375px',
    },
    extend: {},
    colors:{
      "sidebar" : "#E8E8E8;",
      "second" : "#F5F5F5;",
      "white" : "#FFFFFF",
      "blue" : "#0000ff"
     
    },
    fontFamily:{
      Redhattext: ["Redhat, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
