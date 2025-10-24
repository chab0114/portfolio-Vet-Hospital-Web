/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e40af',
        },
        // Secondary/accent colors
        secondary: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          dark: '#334155',
        },
        // Utility colors
        accent: '#10b981',
        danger: '#ef4444',
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Source Sans Pro', 'sans-serif'],
        logo: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}