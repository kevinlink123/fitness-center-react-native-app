/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/auth/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'button-color': '#30E3DF'
      }
    },
  },
  plugins: [],
}

