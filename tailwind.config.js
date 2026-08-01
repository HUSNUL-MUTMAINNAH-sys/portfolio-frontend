/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        black: ['"Archivo Black"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        mist: '#faf6ec',
        accent: {
          DEFAULT: '#f2b705',
          light: '#ffd94d',
          dark: '#c99400',
        },
        line: '#ece4d2',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,10,0.04), 0 8px 24px -8px rgba(10,10,10,0.08)',
        card: '0 1px 1px rgba(10,10,10,0.03), 0 20px 40px -20px rgba(10,10,10,0.15)',
        glow: '0 0 0 1px rgba(242,183,5,0.25), 0 8px 30px -8px rgba(242,183,5,0.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '33%': { transform: 'translate(30px,-20px)' },
          '66%': { transform: 'translate(-20px,20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
