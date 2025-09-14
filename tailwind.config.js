/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // enables dark/light mode using a 'dark' class on <html> or <body>
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',   // example blue
        foreground: '#111827', // text color
      },
    },
  },
  plugins: [],
}

