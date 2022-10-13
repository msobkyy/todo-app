/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rgba(26,28,29,1)",
        "secondary-dark": "rgba(48,49,52,1)",
      },
    },
  },
  plugins: [],
};
