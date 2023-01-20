/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{html,ts}",
    "./src/**/*.{html,ts}",
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'secondary' : '#1E1E1E',
        'primary' : '#3b82f6',
        'secondary-text' : 'rgb(115,115,115)'
      },
    },
  },
  plugins: [],
}
