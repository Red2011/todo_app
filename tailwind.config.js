/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    backgroundSize:{
      '400%': '400%'
    },
    extend: {
      animation: {
        'bg-gradient-slow-2': 'gradient-slow 2s ease infinite',
        'bg-gradient-slow-4': 'gradient-slow 4s ease infinite',
        'bg-gradient-slow-15': 'gradient-slow 15s ease infinite',
      },
      keyframes: {
        'gradient-slow': {
          '0%': {'background-position':'0% 50%'},
          '50%': {'background-position':'100% 50%'},
          '100%': {'background-position':'0% 50%'},
        }
      },
    },
  },
  plugins: [],
}
