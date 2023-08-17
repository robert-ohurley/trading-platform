/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
      'special-orange':'#fbb142',
      'special-green':'#4fdfb1',
      'special-red':'#ed5b75',
      }
    },
    fontFamily: {
      'raleway': ["Raleway"]
    },
  },
  plugins: [],
}

