/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  // Only include the variants you use to reduce CSS size
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active', 'hover', 'focus'],
      textColor: ['active', 'hover', 'focus'],
      borderColor: ['active', 'hover', 'focus'],
      ringWidth: ['hover', 'active'],
    },
  },
  // Remove unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      safelist: ['dark'], // Add any classes that should never be purged
    },
  },
}
