/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google_blue: '#4285F4',
        google_red: '#DB4437',
        google_yellow: '#F4B400',
        google_green: '#0F9D58',
        google_grey: '#F1F3F4',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
