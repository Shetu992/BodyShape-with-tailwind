/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        'sen-regular': ['"Sen"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

