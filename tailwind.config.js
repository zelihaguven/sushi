/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nori: '#141A17',
        maguro: '#8E1C24',
        sake: '#FF6F59',
        wasabi: '#CADB66',
        shari: '#FCF8F2',
        mahogany: {
          DEFAULT: '#141A17',
          2: '#8E1C24',
        },
        cherry: '#8E1C24',
        wine: '#8E1C24',
        ember: '#FF6F59',
        cream: '#FCF8F2',
        lime: '#CADB66',
        paper: {
          50: '#FCF8F2',
          100: '#f4efe4',
          200: '#e8dfcc',
        },
        ink: {
          500: '#8a9390',
          700: '#FCF8F2',
          900: '#141A17',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        type: ['"Courier Prime"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        burst: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        bounce: 'cubic-bezier(0.34, 1.7, 0.64, 1)',
      },
      boxShadow: {
        paper: '0 24px 48px -20px rgba(20, 26, 23, 0.55), 0 1px 0 rgba(255,255,255,0.65) inset',
        desk: '0 40px 80px -28px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
}
