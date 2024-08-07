/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color' : '#E3E4E6',
        'blue-green' : 'rgba(78, 205, 196, 1)',
      },
      fontFamily: {
        'Monoton' :['Monoton'],
        'Manrope' :['Manrope']
      },
    },
  },
  plugins: [],
}

