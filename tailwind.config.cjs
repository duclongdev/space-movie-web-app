/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '6rem',
        }
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
