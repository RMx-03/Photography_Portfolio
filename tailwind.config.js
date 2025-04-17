/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1a1a1a',
        'light': '#f5f5f5',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'nothingyoucoulddo' : ['Nothing You Could Do']
      }
    },
  },
  plugins: [],
}