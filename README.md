# Eric Ambriza - Portfolio & CV

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a Glitche-inspired dark theme design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with sticky sidebar navigation
- **Dark Theme**: Professional dark color scheme with cyan and magenta accents
- **Smooth Animations**: 
  - Glitch text effect on hero heading
  - Scroll-reveal animations with fade and slide effects
  - Card hover animations with lift and shadow effects
  - Link underline swipe animations
- **Optimized Performance**: Static site generation for fast loading
- **Accessibility**: Respects `prefers-reduced-motion` settings

## 🎨 Design System

- **Colors**:
  - Background: `#0a0a0a`
  - Text: `#e5e5e5`
  - Accent Cyan: `#22d3ee`
  - Accent Magenta: `#e879f9`
  - Border: `#262626`
- **Typography**: Inter (body) and Space Grotesk (headings)
- **Layout**: 260px sidebar on desktop, collapsible top nav on mobile

## 📱 Pages

- **Home**: Hero section with glitch effect and about section
- **Experience**: Work history and education timeline
- **Skills**: Technical skills with progress bars and additional expertise
- **Projects**: Portfolio gallery with detailed project pages
- **Contact**: Contact information and social links

## 🛠 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📦 Dependencies

### Core
- `next`: ^14.0.0 - React framework
- `react`: ^18.0.0 - UI library
- `react-dom`: ^18.0.0 - React DOM renderer
- `framer-motion`: ^10.16.0 - Animation library

### Development
- `typescript`: ^5.0.0 - Type safety
- `tailwindcss`: ^3.3.0 - Utility-first CSS
- `eslint`: ^8.0.0 - Code linting
- `autoprefixer`: ^10.0.0 - CSS vendor prefixes
- `postcss`: ^8.0.0 - CSS processing

## 🚀 Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push to main branch (with GitHub Actions)
- **Netlify**: Connect repository and deploy

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects pages
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Sidebar.tsx        # Navigation sidebar
├── data/                  # Data files
│   ├── projects.ts        # Project information
│   └── resume.ts          # Personal and resume data
└── hooks/                 # Custom React hooks
    └── useScrollReveal.ts # Scroll animation hook
```

## 🎯 Key Features Implemented

### Animations & Interactions
- ✅ CSS-only glitch text animation for hero heading
- ✅ IntersectionObserver-based scroll reveal animations
- ✅ Card hover effects with transform and shadow
- ✅ Link underline swipe animations
- ✅ Smooth scroll for anchor links
- ✅ Respects `prefers-reduced-motion`

### Navigation & Layout
- ✅ Sticky sidebar (260px) on desktop
- ✅ Collapsible mobile navigation
- ✅ Active page highlighting
- ✅ Responsive design breakpoints

### Content Management
- ✅ TypeScript data structures for type safety
- ✅ Centralized data in `/src/data/` directory
- ✅ Dynamic project pages with slug routing
- ✅ External link and embed support for projects

### Performance & SEO
- ✅ Static site generation
- ✅ Optimized for Vercel/GitHub Pages deployment
- ✅ Proper meta tags and titles
- ✅ Fast loading with minimal JavaScript

## 📝 Content Updates

To update your information:

1. **Personal Info**: Edit `src/data/resume.ts`
2. **Projects**: Edit `src/data/projects.ts`
3. **Add New Pages**: Create in `src/app/[page-name]/page.tsx`

## 🔧 Customization

The design system is fully customizable through `tailwind.config.js`:
- Colors, fonts, animations, and spacing
- Custom CSS classes in `globals.css`
- Component styling in individual files

## 🔧 Recent Updates (feat/layout-routes-fix)

### Layout Finalization
- **2 Layers Only**: BACK FRAME (fixed dark border) + INFO GLASS CARD (scrollable content)
- **Glass Effect**: Enhanced with `shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]` for proper glass appearance
- **Scrolling**: INFO card properly scrolls on long pages like `/resume`
- **Navigation**: Clean top-right nav without "Landing" item

### Interactions Added
- **Typing Animation**: Landing page shows typing effect under main heading
- **Loading Overlay**: Route changes show animated loading with dots inside INFO card
- **Cursor Animation**: Blinking cursor effects on landing page

### Route & Link Cleanup
- **Clean Routing**: `/`, `/resume`, `/portfolio`, `/contact`
- **LinkedIn Added**: Contact page includes LinkedIn link under "Connect"
- **No Localhost**: All localhost:3002 references removed

---

**Branches**: 
- `backup-pre-glitche` - Original backup
- `feat/glitche-reskin` - Initial redesign  
- `feat/layout-routes-fix` - Current with layout fixes