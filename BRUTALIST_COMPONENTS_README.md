# Brutalist Components Documentation

## BrutalistSectionBand Component

A bold, full-width band header component designed to separate sections in a one-page scroll layout.

### Features
- **Typography-Led Design**: Massive display fonts with brutalist styling
- **High Contrast**: Thick borders and bold colors
- **Customizable**: Configurable colors, rotation, and styling
- **Animated**: Framer Motion scroll-triggered animations
- **Accessible**: Proper anchor scrolling with scroll-margin-top

### Props
```typescript
interface BrutalistSectionBandProps {
  title: string;                    // Section title text
  backgroundColor?: string;         // Tailwind background class
  textColor?: string;              // Tailwind text color class
  borderColor?: string;            // Tailwind border color class
  rotation?: number;               // Rotation angle (-3 to 3)
  id?: string;                     // HTML id for anchor scrolling
}
```

### Usage Examples
```tsx
// Experience section with green background
<BrutalistSectionBand 
  id="experience"
  title="EXPERIENCE"
  backgroundColor="bg-neon-green"
  textColor="text-matrix-black"
  borderColor="border-matrix-black"
  rotation={-1}
/>

// Skills section with pink background
<BrutalistSectionBand 
  id="skills"
  title="SKILLS"
  backgroundColor="bg-hot-pink"
  textColor="text-screen-white"
  borderColor="border-matrix-black"
  rotation={1}
/>
```

## BrutalistNavigation Component

A sticky navigation bar with smooth scrolling and active section tracking.

### Features
- **Sticky Positioning**: Fixed at top with slide-in animation
- **Active Section Tracking**: Automatically highlights current section
- **Smooth Scrolling**: Respects sticky navbar height (80px offset)
- **Brutalist Styling**: Bold colors, thick borders, pixel shadows
- **Responsive**: Adapts to different screen sizes
- **Interactive**: Hover and tap animations

### Navigation Items
```typescript
const navItems = [
  { id: 'hero', label: 'HOME', color: 'bg-cyber-blue' },
  { id: 'experience', label: 'EXPERIENCE', color: 'bg-neon-green' },
  { id: 'skills', label: 'SKILLS', color: 'bg-hot-pink' },
  { id: 'portfolio', label: 'PORTFOLIO', color: 'bg-electric-yellow' },
  { id: 'education', label: 'EDUCATION', color: 'bg-terminal-green' },
  { id: 'contact', label: 'TALK', color: 'bg-pixel-red' }
];
```

### Behavior
- **Auto-hide**: Hidden until user scrolls past hero section (100px)
- **Section Detection**: Updates active state based on scroll position
- **Smooth Scrolling**: Accounts for 80px navbar height offset
- **Visual Feedback**: Active section gets colored background and indicator dot

## CSS Enhancements

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for sticky nav */
}
```

### Scroll Margin for Sections
All sections with IDs automatically get:
```css
.scroll-mt-20 {
  scroll-margin-top: 5rem; /* 80px */
}
```

## Integration with Existing Pages

### Resume Page
```tsx
import BrutalistSectionBand from '@/components/BrutalistSectionBand';

// Add section bands between content blocks
<BrutalistSectionBand 
  id="experience"
  title="WORK HISTORY"
  backgroundColor="bg-neon-green"
  textColor="text-matrix-black"
/>
```

### Portfolio Page
```tsx
// Project showcase section
<BrutalistSectionBand 
  id="projects"
  title="MY CODE"
  backgroundColor="bg-cyber-blue"
  textColor="text-matrix-black"
  rotation={-2}
/>
```

### Contact Page
```tsx
// Contact form section
<BrutalistSectionBand 
  id="contact-form"
  title="GET IN TOUCH"
  backgroundColor="bg-hot-pink"
  textColor="text-screen-white"
  rotation={1}
/>
```

## Design System Colors

### Available Background Colors
- `bg-matrix-black` - Pure black
- `bg-screen-white` - Off-white (#F0F0F0)
- `bg-cyber-blue` - Cyan (#00FFFF)
- `bg-neon-green` - Bright green (#00FF00)
- `bg-hot-pink` - Magenta (#FF00FF)
- `bg-electric-yellow` - Yellow (#FFFF00)
- `bg-terminal-green` - Matrix green (#00FF41)
- `bg-pixel-red` - Bright red (#FF0040)

### Text Colors
- `text-matrix-black` - Black text
- `text-screen-white` - White text
- `text-cyber-blue` - Cyan text
- `text-neon-green` - Green text
- `text-hot-pink` - Pink text

### Border Colors
- `border-matrix-black` - Black borders
- `border-screen-white` - White borders

## Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Clear focus states with brutalist styling
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Screen Reader Support**: Meaningful labels and ARIA attributes
- **Reduced Motion**: Respects user's motion preferences

## Performance Considerations

- **Lazy Loading**: Animations only trigger when sections come into view
- **Optimized Animations**: Uses transform and opacity for smooth performance
- **Minimal Re-renders**: Efficient scroll event handling with throttling
- **CSS-in-JS**: Tailwind classes for optimal bundle size