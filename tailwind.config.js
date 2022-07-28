/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class" ,
  theme: {
    extend: {
      colors: {
        primary: '#EEEEEE',
        secondary:'#393E46',
        third:'#00ADB5',
      }
    },
  },
  plugins: [],
}
