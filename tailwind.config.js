/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#49274a',
        secondary: '#94618e',
        accent: '#F4DECB',
        light: '#f8eee7',
      },
    },
  },
  plugins: [],
}
