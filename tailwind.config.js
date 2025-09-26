/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#0a0b0e',
        'back-card': '#2b2d31',
        'text-primary': '#e6e6e6',
        'text-secondary': '#a3a3a3',
        'accent-orange': '#ff7a18'
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'sans': ['Roboto', 'Inter', 'sans-serif']
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em'
      },
      animation: {
        'typing': 'typing 2s steps(20, end) infinite alternate',
        'blink': 'blink 1s infinite'
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}