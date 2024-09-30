/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#F5E6D3',
          500: '#8B4513',
          600: '#723A0F',
          800: '#5A2E0C',
        },
      },
    },
  },
  plugins: [],
}

