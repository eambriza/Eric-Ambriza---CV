# COMPLETE COLOR REFERENCE - Eric Ambriza CV Project

**Last Updated:** November 19, 2025 at 23:46:13

---

## 🎨 PRIMARY COLOR PALETTE

### Hero Section Colors
| Color Name | Hex Code | Usage | Location |
|------------|----------|-------|----------|
| **Deep Navy Blue** | `#0F2A4A` | Hero background | Hero section background |
| **Light Cream** | `#fff6ee` | Hero text | "ERIC AMBRIZA" name, description text |
| **Warm Orange** | `#FF7F27` | Accent/Badge | "AVAILABLE FOR HIRE" badge, subtitle |
| **Soft Blue Shadow** | `#8EABC8` | Text shadow | "ERIC" shadow effect |
| **Purple Shadow** | `#B088E0` | Text shadow | "AMBRIZA" shadow effect |
| **Medium Blue** | `#6D8CAE` | Contact cards | Location, Email, Phone cards background |
| **Light Beige** | `#F5F0DC` | Contact cards text | Text on contact cards |
| **Cream Border** | `#F8ECC2` | Inner border | Email card inner border |

---

## 🎯 SECTION BAND COLORS

### Section Title Bands (Experience, Education, Skills, Portfolio, Contact)
| Section | Background | Text Color | Border Color |
|---------|------------|------------|--------------|
| **Experience** | `#3B648C` (Darker Blue) | `#FFF8DC` (Cream) | `#3B648C` |
| **Education** | `#0f2e5a` (Deep Navy) | `#FFF8DC` (Cream) | `#3B648C` |
| **Skills** | `#0f2e5a` (Deep Navy) | `#FFF8DC` (Cream) | `#3B648C` |
| **Portfolio** | `#0f2e5a` (Deep Navy) | `#FFF8DC` (Cream) | `#3B648C` |
| **Contact** | `#0f2e5a` (Deep Navy) | `#FFF8DC` (Cream) | `#3B648C` |

---

## 📋 SECTION CONTENT COLORS

### Experience Section
| Element | Background | Text Color | Border |
|---------|------------|------------|--------|
| Main section | `#0F2E5A` | `#0F2E5A` | `8px solid #0F2E5A` |
| Tab buttons | `#7EA3BD` | `#0F2E5A` | `#0F2E5A` |
| Secondary elements | `#B8E6B8` | `#0F2E5A` | - |
| Panel background | `#7EA3BD` | - | - |

### DIMAGI Company Card
| Element | Background | Text Color |
|---------|------------|------------|
| Card background | `#fff6ee` | `#0f2e5a` |
| Header | `#7EA3BD` | `#0f2e5a` |
| Date badge | `#fff6ee` | `#0f2e5a` |
| View button | `#FF7A18` | `#0f2e5a` |

### Education Section
| Element | Background | Text Color | Border |
|---------|------------|------------|--------|
| Main section | `#DDEAF0` | `#0f2e5a` | `8px solid #0f2e5a` |

### Skills Section
| Element | Background | Text Color | Border |
|---------|------------|------------|--------|
| Main section | `#DDEAF0` | - | `6px solid #3B648C` |
| Skill card (type 1) | `#7EA3BD` | `#fff6ee` | `6px solid #0f2e5a` |
| Skill card (type 2) | `#3B648C` | `#fff6ee` | `6px solid #0f2e5a` |
| Skill card (type 3) | `#fff6ee` | `#0f2e5a` | `6px solid #0f2e5a` |

### Portfolio Section
| Element | Background | Text Color | Border |
|---------|------------|------------|--------|
| Main section | `#DDEAF0` | `#0f2e5a` | `8px solid #0f2e5a` |
| Coronagora card | `#3B648C` | `#fff6ee` | `4px solid #0f2e5a` |

---

## 🧭 NAVIGATION COLORS

### Brutalist Navigation
| Element | Background | Text Color | Border | Hover |
|---------|------------|------------|--------|-------|
| Nav bar | `#0f2e5a` (bg-deep-navy) | - | `4px solid #FFF8DC` | - |
| Logo default | - | `#fff6ee` | - | `#7EA3BD` |
| Logo clicked | - | `#FF7A18` | - | - |
| Nav buttons | `#fff6ee` | `#0f2e5a` | `2px solid #0f2e5a` | `#7EA3BD` |
| Download CV button | `#FF7A18` | `#0f2e5a` | `2px solid #0f2e5a` | - |

---

## 🎮 CUBE GAME COLORS

### Game Colors Array (30 colors)
```javascript
'#FF6B35', // warm-orange
'#4ECDC4', // teal
'#95E1D3', // mint
'#F7DC6F', // butter-yellow
'#BB8FCE', // label-purple
'#85C1E2', // sky-blue
'#7EA3BD', // medium-blue
'#FF5733', // red-orange
'#C70039', // crimson
'#900C3F', // burgundy
'#581845', // dark-purple
'#FFC300', // golden-yellow
'#DAF7A6', // lime-green
'#33FF57', // bright-green
'#33FFF5', // cyan
'#3357FF', // royal-blue
'#8E44AD', // purple
'#E74C3C', // red
'#F39C12', // orange
'#16A085', // turquoise
'#27AE60', // green
'#2980B9', // blue
'#D35400', // pumpkin
'#C0392B', // dark-red
'#BDC3C7', // silver
'#7F8C8D', // gray
'#E67E22', // carrot
'#1ABC9C', // aqua
'#9B59B6', // amethyst
'#34495E'  // wet-asphalt
```

### Game States
| State | Background Color |
|-------|------------------|
| Default | `#0f2e5a` |
| After win | Random from array |

---

## 🎨 TAILWIND CONFIG COLORS

### Extended Colors (tailwind.config.js)
```javascript
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
}
```

---

## 🌐 CSS VARIABLES (globals.css)

### Root Variables
```css
:root {
  --nav-h: 80px;
  --band-surface: #EAF4FF;
  --accent: #2EC4B6;
  --primary: #0F2E5A;
  --secondary: #2D6AE3;
  
  /* Global Color System */
  --deep-navy: #0f2e5a;
  --teal: #2EC4B6;
  --teal-accent: #7EA3BD;
  --lime-accent: #B8E6B8;
  --mint: #E8F5E8;
  --warm-orange: #FF7A18;
  --label-purple: #8B5CF6;
  --sky-blue: #87CEEB;
  --butter-yellow: #F4E4BC;
  --peach: #FFCBA4;
  --lime: #32CD32;
  --royal-blue: #4169E1;
  --text-cream: #FFF8DC;
  --color-border: #0f2e5a;
  --matrix-black: #000000;
}
```

### Custom Cursor Colors
```css
--accent: #f0791f; /* Cursor accent color */
```

---

## 🎭 ANIMATION & EFFECT COLORS

### Glitch Effect
| Effect | Color |
|--------|-------|
| Glitch layer 1 | `#22d3ee` (Cyan) |
| Glitch layer 2 | `#e879f9` (Pink) |
| Glitch layer 3 (before) | `#ff0000` (Red) |
| Glitch layer 4 (after) | `#00ff00` (Green) |

### Typing Cursor
| Element | Color |
|---------|-------|
| Cursor caret | `#ff7a18` |

### Animated Buttons
| Element | Color |
|---------|-------|
| Gradient background | `rgba(240, 121, 31, 0.1-0.2)` |
| Shimmer effect | `rgba(240, 121, 31, 0.4)` |
| Pulse dot | `#f0791f` |

---

## 📊 COLOR USAGE SUMMARY

### Most Used Colors
1. **`#0f2e5a`** (Deep Navy) - Primary background, borders, text
2. **`#fff6ee`** (Light Cream) - Primary text, card backgrounds
3. **`#7EA3BD`** (Teal Accent) - Secondary backgrounds, buttons
4. **`#3B648C`** (Darker Blue) - Section bands, skill cards, borders
5. **`#FF7A18` / `#FF7F27`** (Warm Orange) - Accent buttons, highlights
6. **`#FFF8DC`** (Text Cream) - Section band text
7. **`#DDEAF0`** (Light Blue) - Section backgrounds
8. **`#6D8CAE`** (Medium Blue) - Contact cards
9. **`#B8E6B8`** (Lime Accent) - Secondary elements
10. **`#0F2E5A`** (Deep Navy variant) - Experience section

---

## 🔍 COLOR RELATIONSHIPS

### Color Families

#### Navy Blues
- `#0F2A4A` - Hero background (darkest)
- `#0f2e5a` - Primary navy (deep-navy)
- `#0F2E5A` - Experience section variant
- `#3B648C` - Darker blue (section bands)
- `#6D8CAE` - Medium blue (contact cards)
- `#7EA3BD` - Teal accent (lightest)

#### Creams & Whites
- `#fff6ee` - Light cream (primary text)
- `#FFF8DC` - Text cream (section bands)
- `#F5F0DC` - Light beige (contact cards)
- `#F8ECC2` - Cream border (inner borders)

#### Oranges
- `#FF7F27` - Warm orange (hero badge)
- `#FF7A18` - Warm orange variant (buttons)
- `#f0791f` - Orange variant (cursor)

#### Greens
- `#B8E6B8` - Lime accent (secondary)
- `#E8F5E8` - Mint (backgrounds)

#### Purples
- `#B088E0` - Purple shadow (hero)
- `#8B5CF6` - Label purple (accent)

#### Light Blues
- `#DDEAF0` - Light blue background (sections)
- `#8EABC8` - Soft blue shadow (hero)
- `#87CEEB` - Sky blue (accent)

---

## 🎯 ACCESSIBILITY NOTES

### High Contrast Pairs (WCAG AA Compliant)
- `#0f2e5a` on `#fff6ee` ✅
- `#fff6ee` on `#0f2e5a` ✅
- `#0F2A4A` on `#fff6ee` ✅
- `#3B648C` on `#FFF8DC` ✅
- `#FF7A18` on `#0f2e5a` ✅

### Medium Contrast (Use with caution)
- `#7EA3BD` on `#fff6ee` ⚠️
- `#6D8CAE` on `#F5F0DC` ⚠️

---

## 📝 USAGE GUIDELINES

### When to Use Each Color

#### Primary Actions
- Use `#FF7A18` or `#FF7F27` (Warm Orange)

#### Primary Text
- Use `#fff6ee` (Light Cream) on dark backgrounds
- Use `#0f2e5a` (Deep Navy) on light backgrounds

#### Backgrounds
- Dark sections: `#0f2e5a`, `#0F2A4A`, `#0F2E5A`
- Light sections: `#DDEAF0`, `#fff6ee`
- Medium sections: `#7EA3BD`, `#3B648C`, `#6D8CAE`

#### Borders
- Primary: `#0f2e5a` (4px-8px)
- Section bands: `#3B648C`
- Accents: `#FFF8DC`, `#F8ECC2`

#### Shadows
- Text shadows: `#8EABC8`, `#B088E0`
- Box shadows: `#0f2e5a` (brutal shadows)

---

## 🔄 RECENT CHANGES

### November 19, 2025
1. Hero section name "ERIC AMBRIZA" changed to `#fff6ee`
2. Hero description text changed to `#fff6ee`
3. All section band borders changed to `#3B648C`
4. Borders now match Coronagora section background

---

## 📦 EXPORT FOR DESIGN TOOLS

### Figma/Sketch Color Palette
```
Deep Navy: #0F2A4A
Deep Navy Alt: #0f2e5a
Darker Blue: #3B648C
Medium Blue: #6D8CAE
Teal Accent: #7EA3BD
Light Blue BG: #DDEAF0

Light Cream: #fff6ee
Text Cream: #FFF8DC
Light Beige: #F5F0DC
Cream Border: #F8ECC2

Warm Orange: #FF7F27
Orange Alt: #FF7A18
Orange Cursor: #f0791f

Lime Accent: #B8E6B8
Mint: #E8F5E8

Purple Shadow: #B088E0
Label Purple: #8B5CF6

Blue Shadow: #8EABC8
Sky Blue: #87CEEB
```

---

**Total Unique Colors in Project:** ~60+ colors
**Primary Palette:** 15 core colors
**Extended Palette:** 30+ game colors
**Effect Colors:** 10+ animation colors

