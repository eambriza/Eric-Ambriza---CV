# COMPLETE PROJECT RECREATION PROMPT FOR KIRO

## PROJECT OVERVIEW
Create a Next.js 14 portfolio website with Neo-Brutalist design featuring:
- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom Brutalist design system
- **Animations**: Framer Motion
- **Deployment**: Static export for Vercel/GitHub Pages/Netlify

## DESIGN SYSTEM - NEO-BRUTALIST PRINCIPLES
- Flat colors (no gradients)
- Bold 3-4px borders (always #0f2e5a Deep Navy)
- Sharp shadows (shadow-brutal, shadow-pixel)
- High contrast text
- Geometric shapes (no rounded corners)
- Massive uppercase typography
- Functional color-coded sections

## COLOR PALETTE (CRITICAL - USE EXACT HEX CODES)
```css
--deep-navy: #0f2e5a;        /* Primary borders and text */
--teal: #2EC4B6;             /* Primary accent */
--teal-accent: #7EA3BD;      /* Secondary accent */
--lime-accent: #B8E6B8;      /* Success/highlights */
--mint: #E8F5E8;             /* Fresh backgrounds */
--warm-orange: #FF7A18;      /* CTAs and highlights */
--label-purple: #8B5CF6;     /* Interactive elements */
--sky-blue: #87CEEB;         /* Light backgrounds */
--butter-yellow: #F4E4BC;    /* Warm sections */
--peach: #FFCBA4;            /* Soft cards */
--lime: #32CD32;             /* Bright accents */
--royal-blue: #4169E1;       /* Hover states */
--text-cream: #FFF8DC;       /* Light text */
--matrix-black: #000000;     /* Pure black */
```

## SECTION COLOR STRATEGY
- HOME: Deep Navy bg, Teal/Purple accents
- EXPERIENCE: Mint/Lime cards, Teal accents
- EDUCATION: Sky Blue cards, Purple/Orange accents
- SKILLS: Blue gradient scheme (#DDEAF0, #7EA3BD, #3B648C)
- PORTFOLIO: Peach bg, Warm Orange cards
- CONTACT: Butter Yellow bg, Teal/Orange/Purple cards

## PROJECT STRUCTURE
```
eric-ambriza-cv/
├── src/
│   ├── app/
│   │   ├── contact/page.tsx
│   │   ├── portfolio/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── resume/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx (HOME - 1502 lines)
│   ├── components/
│   │   ├── BrutalistNavigation.tsx
│   │   ├── BrutalistSectionBand.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingOverlay.tsx
│   │   ├── MantraRotator.tsx
│   │   ├── Navigation.tsx
│   │   ├── RecommendationsRotator.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── SplitTabs.tsx
│   │   ├── Timeline.tsx
│   │   ├── TimelineItem.tsx
│   │   └── Typewriter.tsx
│   ├── contexts/
│   │   └── LoadingContext.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── resume.ts
│   │   └── timeline.ts
│   └── hooks/
│       └── useScrollReveal.ts
├── public/
│   └── images/
│       ├── portfolio/
│       └── profilepic.jpg
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── .eslintrc.json
```

## INSTALLATION STEPS
```bash
# 1. Create Next.js project
npx create-next-app@latest eric-ambriza-cv --typescript --tailwind --app

# 2. Install dependencies
npm install framer-motion react-icons

# 3. Install dev dependencies
npm install -D @types/node @types/react @types/react-dom
```

## CRITICAL FILES TO CREATE (IN ORDER)

### 1. package.json
See dependencies section below

### 2. next.config.js
See configuration section below

### 3. tailwind.config.js
See configuration section below

### 4. tsconfig.json
See configuration section below

### 5. src/app/globals.css
COMPLETE FILE - See globals.css section below

### 6. src/app/layout.tsx
See layout section below

### 7. src/data/ files (CUSTOMIZE WITH YOUR INFO)
- resume.ts
- projects.ts
- timeline.ts

### 8. src/contexts/LoadingContext.tsx
See contexts section below

### 9. src/components/ (ALL COMPONENTS)
See components section below

### 10. src/app/page.tsx (MAIN HOME PAGE - 1502 LINES)
See page.tsx section below

### 11. Other pages
- src/app/resume/page.tsx
- src/app/portfolio/page.tsx
- src/app/portfolio/[slug]/page.tsx
- src/app/contact/page.tsx

---

## DEPENDENCIES & CONFIGURATION

### package.json
```json
{
  "name": "eric-ambriza-cv",
  "version": "0.2.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^10.16.0",
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0"
  }
}
```

---

THIS IS PART 1 OF THE PROMPT. THE COMPLETE CODE FOR ALL FILES FOLLOWS IN SUBSEQUENT SECTIONS.
CONTINUE READING FOR FULL IMPLEMENTATION DETAILS.
