/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,yaml}",
  ],
  safelist: [
    'bg-white/10',
    'text-blue-100',
    'font-semibold',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
