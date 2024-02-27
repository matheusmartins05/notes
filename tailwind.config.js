/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        teste: '#B257e6'
      },

      fontFamily:{
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

