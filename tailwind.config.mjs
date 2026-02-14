/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#003366', // CKB Firm Blue
          secondary: '#E0E0E0', // Light Gray
          accent: '#D4A017',   // Gold/Accent
          dark: '#1a1a1a',      // Near Black
          light: '#F5F5F5'     // Off-White
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}