/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enables dark/light mode using a 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',   // example blue
        foreground: '#111827', // text color
      },
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        scalePulse: 'scalePulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
