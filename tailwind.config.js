/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#228B22',
          light: '#90EE90',
        },
        secondary: {
          DEFAULT: '#FFD700',
        },
        accent: {
          DEFAULT: '#DC143C',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#A9A9A9',
          300: '#666666',
          400: '#333333',
        },
        background: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};