// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6B5EFF", // Vibrant purple
          accent: "#3ECF8E"   // Contrasting green
        }
      }
    }
  },
  plugins: []
};


