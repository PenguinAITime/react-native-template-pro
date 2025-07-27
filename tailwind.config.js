/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',      // Emerald Green
        secondary: '#3B82F6',    // Blue
        accent: '#F59E0B',       // Amber
        charcoal: '#1F2937',
        softGray: '#F9FAFB',
        lightGray: '#E5E7EB',
        error: '#EF4444',
        success: '#10B981',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['System', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};