/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#b91c1c',
        'dark-brown': '#2f241f',
        'young-brown': '#817253',
        'teal' : '#E5F0B6',
        'dark-teal': '#cad19f',
        'broken-white' : '#FCFAFA',
      },
    },
  },
  plugins: [],
})

