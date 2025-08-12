/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.js" // مهم جدًا ليدعم Flowbite
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // ضروري
  plugins: [
    require('flowbite/plugin') // لو لسه مش ضايفه
  ],
}
