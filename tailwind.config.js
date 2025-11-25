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
        'accent-orange': '#ff7a18',
        // Brutalist Design Colors
        'deep-navy': '#0f2e5a',
        'teal': '#2EC4B6',
        'teal-accent': '#7EA3BD',
        'lime-accent': '#B8E6B8',
        'mint': '#E8F5E8',
        'warm-orange': '#FF7A18',
        'label-purple': '#8B5CF6',
        'sky-blue': '#87CEEB',
        'butter-yellow': '#F4E4BC',
        'peach': '#FFCBA4',
        'lime': '#32CD32',
        'royal-blue': '#4169E1',
        'text-cream': '#FFF8DC',
        'color-border': '#0f2e5a',
        'matrix-black': '#000000'
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
        'blink': 'blink 1s infinite',
        'scroll-left': 'scroll-left 20s linear infinite'
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}