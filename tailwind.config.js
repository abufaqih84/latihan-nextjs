// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Pastikan Next.js App Router tercakup
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js', // Untuk Flowbite JS jika diinstal
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        merriweather: ['var(--font-merriweather)', ...fontFamily.serif],
      },
      // Tambahkan warna dinamis untuk kategori jika diperlukan
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcffe6',
          200: '#a7f3d0',
          // ... tambahkan shades lainnya
          600: '#16a34a',
          700: '#15803d',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          // ... tambahkan shades lainnya
          600: '#eab308',
          700: '#a16207',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          // ... tambahkan shades lainnya
          600: '#dc2626',
          700: '#b91c1c',
        },
        blue: { // Contoh warna tambahan untuk kategori baru
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        purple: { // Contoh warna tambahan untuk kategori baru
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          600: '#9333ea',
          700: '#7e22ce',
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Jika Flowbite diinstal sebagai plugin
    require('@tailwindcss/typography'), // Untuk styling konten artikel dengan `prose` class
  ],
};