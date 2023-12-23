/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'sidebar': '880px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
}

