/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#86efac",
      },
      borderRadius: {
        button: "8px"
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
} 