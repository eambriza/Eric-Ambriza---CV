# CONFIGURATION FILES - COPY THESE EXACTLY

## next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals"],
  "env": { 
    "browser": true, 
    "es2022": true 
  },
  "rules": { 
    "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }],
    "react/no-unescaped-entities": "off"
  }
}
```

## .prettierrc
```json
{
  "singleQuote": true,
  "semi": true,
  "printWidth": 100
}
```

## postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## tailwind.config.js
```javascript
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
```
