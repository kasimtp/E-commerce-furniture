// tailwind.config.js
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        Ephesis: ['Ephesis', 'cursive'],
        Outfit: ['Outfit', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
};
