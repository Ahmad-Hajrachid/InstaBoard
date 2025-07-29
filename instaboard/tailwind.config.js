/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        brush:['"Brush Script MT"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #A6E3E9, #71C9CE, #222831)',
      }
    },
  },
  plugins: [],
}