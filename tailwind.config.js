/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'secondary' : '#1E1E1E',
        'primary' : '#00C0CC',
        'secondary-text' : '#979797'
      },
    },
  },
  plugins: [],
}
