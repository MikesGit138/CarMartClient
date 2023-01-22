/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,ts}", "./src/**/*.{html,ts}"],
  darkMode: true,
  theme: {
    screens: {
      laptop: { max: "1280px" },
      tablet: { max: "1025px" },
      phone: { max: "615px" },
      "laptop-min": { min: "1280px" },
      "tablet-min": { min: "1025px" },
      "phone-min": { min: "615px" },
    },
    extend: {
      colors: {
        secondary: "#1E1E1E",
        primary: "#3b82f6",
        "secondary-text": "rgb(115,115,115)",
      },
    },
  },
  plugins: [],
};
