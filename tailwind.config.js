/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#171e19',
        sage: '#b7c6c2',
        taupe: '#9f8d8b',
        beige: '#d7c5b2',
        cyan: '#d5f4f9',
        softblue: '#bbe2f5',
        charcoal: '#302b2f',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        hero: '18vw',
      },
      transitionTimingFunction: {
        fluid: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        bounceArrow: 'bounceArrow 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
