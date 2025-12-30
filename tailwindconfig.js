/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    colors: {
      mutedTeal: '#6B9797', // adjust if Figma shows a different hex
    },
    },
  },
  plugins: [],
}
