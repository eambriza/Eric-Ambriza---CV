# **COMPLETE COLOR CONFIGURATION GUIDE**

## **🎨 GLOBAL COLOR PALETTE**

### **Tailwind Config (`tailwind.config.js`)**
```javascript
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
}
```

### **Global CSS Variables (`src/app/globals.css`)**
```css
:root {
  --accent: #2EC4B6;
  --primary: #0F2E5A;
  --secondary: #2D6AE3;
  --nav-h: 80px;
  --band-surface: #EAF4FF;
  
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

---

## **📍 SECTION-BY-SECTION COLOR BREAKDOWN**

### **🏠 HERO SECTION**
**Location:** `src/app/page.tsx` - Lines 650-720

**Main Container:**
- Background: `bg-deep-navy` (#0f2e5a)
- Text: `soft-text` (#FFF8DC)
- Border: `global-border` (#0f2e5a)

**"Available for Hire" Badge:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `global-border` (#0f2e5a)
- Shadow: `shadow-brutal`

**Name Typography:**
- Main text: `soft-text` (#FFF8DC)
- Shadow effect: `text-teal-accent` (#7EA3BD) with opacity-70
- Second shadow: `text-label-purple` (#8B5CF6) with opacity-70

**Subtitle:**
- Color: `text-teal` (#2EC4B6)

**Contact Cards:**
- Location card: `bg-teal text-deep-navy` (#2EC4B6 bg, #0f2e5a text)
- Email card: `backgroundColor: '#7EA3BD'` with `boxShadow: 'inset 0 0 0 2px var(--text-cream)'`
- Phone card: `bg-teal text-deep-navy` (#2EC4B6 bg, #0f2e5a text)

---

### **💼 EXPERIENCE SECTION**
**Location:** `src/app/page.tsx` - Lines 15-350 (experienceTabs) & 720-750

**Section Band:**
- Background: `bg-lime-accent` (#B8E6B8)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-deep-navy` (#0f2e5a)

**Main Section:**
- Background: `bg-mint` (#E8F5E8)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-b-8 border-lime-accent` (#B8E6B8)

**Experience Cards (All Jobs):**
- Card background: `bg-lime-accent` (#B8E6B8)
- Card text: `text-deep-navy` (#0f2e5a)
- Card border: `border-4 border-deep-navy` (#0f2e5a)

**Job Headers:**
- Background: `bg-teal-accent` (#7EA3BD)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-b-4 border-deep-navy` (#0f2e5a)

**Date Badges:**
- Background: `bg-lime-accent` (#B8E6B8)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-2 border-deep-navy` (#0f2e5a)

**Key Achievements Badges:**
- Background: `bg-warm-orange` (#FF7A18)
- Text: `text-deep-navy` (#0f2e5a)

**Reference Letter Links:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-2 border-deep-navy` (#0f2e5a)
- Hover: `hover:bg-deep-navy hover:text-teal`

**Bullet Points:**
- Icon: `bg-label-purple` (#8B5CF6)
- Icon border: `border-2 border-white`

**Tab Styling:**
- Buttons: `bg-lime-accent text-deep-navy border-deep-navy`
- Active buttons: `bg-teal-accent text-deep-navy`
- Tab panels: `bg-mint`

---

### **🎓 EDUCATION SECTION**
**Location:** `src/app/page.tsx` - Lines 750-950

**Section Band:**
- Background: `bg-label-purple` (#8B5CF6)
- Text: `text-text-cream` (#FFF8DC)
- Border: `border-deep-navy` (#0f2e5a)

**Main Section:**
- Background: `bg-sky-blue` (#87CEEB)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-b-8 border-label-purple` (#8B5CF6)

**Degrees Header:**
- Background: `bg-warm-orange` (#FF7A18)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-4 border-deep-navy` (#0f2e5a)

**Primary Degree Card:**
- Background: `bg-text-cream` (#FFF8DC)
- Text: `text-deep-navy` (#0f2e5a)
- "Graduated with Honors": `text-warm-orange` (#FF7A18)
- Institution badge: `bg-warm-orange text-deep-navy` (#FF7A18 bg, #0f2e5a text)
- Date badge: `bg-teal text-deep-navy` (#2EC4B6 bg, #0f2e5a text)
- Gradient area: `bg-gradient-to-br from-warm-orange/10 to-teal/10`

**MBA Card:**
- Background: `bg-mint` (#E8F5E8)
- Text: `text-deep-navy` (#0f2e5a)
- "Incomplete" label: `text-label-purple` (#8B5CF6)
- Institution badge: `bg-label-purple text-text-cream` (#8B5CF6 bg, #FFF8DC text)
- Date badge: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- Gradient area: `bg-gradient-to-br from-label-purple/10 to-deep-navy/10`

**Certifications Header:**
- Background: `bg-label-purple` (#8B5CF6)
- Text: `text-text-cream` (#FFF8DC)
- Border: `border-4 border-deep-navy` (#0f2e5a)

**Certification Cards (Alternating):**
- Card 1: `bg-text-cream text-deep-navy` (#FFF8DC bg, #0f2e5a text)
- Card 2: `bg-mint text-deep-navy` (#E8F5E8 bg, #0f2e5a text)
- Card 3: `bg-teal-accent text-deep-navy` (#7EA3BD bg, #0f2e5a text)

**Certification Elements:**
- Issuer badge: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- Date badge: `bg-warm-orange text-deep-navy` (#FF7A18 bg, #0f2e5a text)
- View button: `bg-label-purple text-text-cream` (#8B5CF6 bg, #FFF8DC text)
- View button hover: `hover:bg-warm-orange hover:text-deep-navy`

**Expandable Content:**
- Background: `bg-deep-navy` (#0f2e5a)
- Text: `text-text-cream` (#FFF8DC)
- Description header: `text-warm-orange` (#FF7A18)
- Skills header: `text-teal` (#2EC4B6)
- Skill tags: `bg-text-cream text-deep-navy` (#FFF8DC bg, #0f2e5a text)

---

### **🛠️ SKILLS SECTION**
**Location:** `src/app/page.tsx` - Lines 950-1000

**Section Band:**
- Background: `bg-deep-navy` (#0f2e5a)
- Text: `soft-text` (#FFF8DC)
- Border: `border-color-border` (#0f2e5a)

**Main Section:**
- Background: `backgroundColor: '#DDEAF0'` (inline style)
- Border: `borderTop: '6px solid #3B648C'` (inline style)

**Skill Cards (Alternating Pattern):**
- Card 1 (index % 3 === 0): 
  - Background: `backgroundColor: '#7EA3BD'` (teal-accent)
  - Text: `color: '#fff6ee'` (cream)
  - Border: `border: '6px solid #0f2e5a'` (deep-navy)
- Card 2 (index % 3 === 1):
  - Background: `backgroundColor: '#3B648C'` (darker blue)
  - Text: `color: '#fff6ee'` (cream)
  - Border: `border: '6px solid #0f2e5a'` (deep-navy)
- Card 3 (index % 3 === 2):
  - Background: `backgroundColor: '#fff6ee'` (cream)
  - Text: `color: '#0f2e5a'` (deep-navy)
  - Border: `border: '6px solid #0f2e5a'` (deep-navy)

**Category Headers:**
- Background: `backgroundColor: '#0f2e5a'` (deep-navy)
- Text: `color: '#fff6ee'` (cream)
- Accent dot: `backgroundColor: '#7EA3BD'` (teal-accent)

**Skill Items:**
- Bullet dots (cards 1&2): `backgroundColor: '#DDEAF0'` (light blue)
- Bullet dots (card 3): `backgroundColor: '#3B648C'` (darker blue)
- Text color matches card text color

---

### **💼 PORTFOLIO SECTION**
**Location:** `src/app/page.tsx` - Lines 300-600 (portfolioTabs) & 1000-1200

**Section Band:**
- Background: `bg-warm-orange` (#FF7A18)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-deep-navy` (#0f2e5a)

**Main Section:**
- Background: `bg-peach` (#FFCBA4)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-b-8 border-warm-orange` (#FF7A18)

**Left Sidebar:**
- Background: `bg-white`
- Border: `border-4 border-t-0 border-deep-navy` (#0f2e5a)

**Main Project Buttons:**
- Default: `bg-warm-orange text-deep-navy` (#FF7A18 bg, #0f2e5a text)
- Hover: `hover:bg-teal-accent` (#7EA3BD)
- Selected: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- Selected indicator: `bg-warm-orange` (#FF7A18)

**Old Projects Header:**
- Background: `bg-deep-navy` (#0f2e5a)
- Text: `text-text-cream` (#FFF8DC)
- Border: `border-b-4 border-deep-navy` (#0f2e5a)

**Old Projects Grid:**
- Container: `bg-mint` (#E8F5E8)

**Old Project Cards:**
- Image Slider: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
  - Title: `text-teal` (#2EC4B6)
  - Description/Key Points: `text-teal` (#2EC4B6)
  - Button: `bg-text-cream text-deep-navy` hover `bg-teal hover:text-text-cream`
- Wine Quality: `bg-teal-accent text-deep-navy` (#7EA3BD bg, #0f2e5a text)
  - Title/Description/Key Points: `text-deep-navy` (#0f2e5a)
  - Button: `bg-deep-navy text-text-cream` hover `bg-teal hover:text-deep-navy`
- Coronagora: `bg-teal text-deep-navy` (#2EC4B6 bg, #0f2e5a text)
  - Title/Description/Key Points: `text-deep-navy` (#0f2e5a)
  - Button: `bg-text-cream text-deep-navy` hover `bg-deep-navy hover:text-text-cream`
- Python Reports: `bg-mint text-deep-navy` (#E8F5E8 bg, #0f2e5a text)
  - Title/Description/Key Points: `text-deep-navy` (#0f2e5a)
  - Button: `bg-deep-navy text-text-cream` hover `bg-teal-accent hover:text-deep-navy`

**Right Panel:**
- Background: `bg-peach` (#FFCBA4)
- Border: `border-4 border-t-0 border-l-0 border-deep-navy` (#0f2e5a)

**Portfolio Tab Panels:**

**Global Env Calculator:**
- Main: `bg-warm-orange text-deep-navy` (#FF7A18 bg, #0f2e5a text)
- Header: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- View Code button: `bg-deep-navy text-text-cream` hover `bg-label-purple` (#8B5CF6)
- Demo section: `bg-text-cream text-deep-navy` (#FFF8DC bg, #0f2e5a text)
- Demo link hover: `hover:text-warm-orange` (#FF7A18)
- Details section: `bg-warm-orange/10` (#FF7A18 with 10% opacity)

**PMP Drill Coach:**
- Main: `bg-teal-accent text-deep-navy` (#7EA3BD bg, #0f2e5a text)
- Header: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- Decorative element: `bg-teal-accent` (#7EA3BD)
- Date badge: `bg-teal-accent text-deep-navy` (#7EA3BD bg, #0f2e5a text)
- Key Features badge: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- Bullet points: `bg-warm-orange` (#FF7A18)
- View Code button: `bg-deep-navy text-text-cream` hover `bg-label-purple` (#8B5CF6)
- Live Demo button: `bg-warm-orange text-deep-navy` hover `bg-lime-accent` (#B8E6B8)
- Decorative elements: `bg-warm-orange` (#FF7A18), `bg-teal-accent` (#7EA3BD)
- Gradient area: `bg-gradient-to-br from-teal-accent/10 to-deep-navy/10`

**Portfolio Website:**
- Main: `bg-label-purple text-text-cream` (#8B5CF6 bg, #FFF8DC text)
- Header: `bg-deep-navy text-text-cream` (#0f2e5a bg, #FFF8DC text)
- View Code button: `bg-deep-navy text-text-cream` hover `bg-warm-orange hover:text-deep-navy`
- Demo section: `bg-text-cream text-deep-navy` (#FFF8DC bg, #0f2e5a text)
- Demo link hover: `hover:text-label-purple` (#8B5CF6)
- Details section: `bg-label-purple/10` (#8B5CF6 with 10% opacity)

---

### **📞 CONTACT SECTION**
**Location:** `src/app/page.tsx` - Lines 1230-1250

**Section Band:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-deep-navy` (#0f2e5a)

**Scrolling Mantra Banner:**
- Background: `bg-deep-navy` (#0f2e5a)
- Border: `border-y-4 border-accent-orange` (#ff7a18)
- Text: `text-accent-orange` (#ff7a18)

---

### **🦶 FOOTER SECTION**
**Location:** `src/app/page.tsx` - Lines 1250-1320

**Main Footer:**
- Background: `bg-deep-navy` (#0f2e5a)
- Text: `text-text-cream` (#FFF8DC)
- Border: `border-t-8 border-teal` (#2EC4B6)

**Section Headers:**
- Color: `text-warm-orange` (#FF7A18)

**Links:**
- Default: `text-text-cream` (#FFF8DC)
- Hover: `hover:text-teal` (#2EC4B6)

**Contact Info Icons:**
- Email icon: `bg-teal` (#2EC4B6)
- Phone icon: `bg-warm-orange` (#FF7A18)
- Location icon: `bg-label-purple` (#8B5CF6)
- All icons: `border border-text-cream` (#FFF8DC)

**Copyright Badge:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-2 border-text-cream` (#FFF8DC)

**Decorative Elements:**
- Element 1: `bg-teal-accent` (#7EA3BD)
- Element 2: `bg-deep-navy` (#0f2e5a)
- Element 3: `bg-teal` (#2EC4B6)
- All elements: `border-2 border-text-cream shadow-pixel` (#FFF8DC border)

---

### **🧭 NAVIGATION**
**Location:** `src/components/BrutalistNavigation.tsx`

**Main Navigation:**
- Background: `bg-deep-navy` (#0f2e5a)
- Border: `border-b-4 border-teal` (#2EC4B6)
- Shadow: `shadow-brutal`

**Logo:**
- Default: `text-teal` (#2EC4B6)
- Hover: `hover:text-lime-accent` (#B8E6B8)
- Clicked: `text-warm-orange` (#FF7A18)

**Navigation Items:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-2 border-deep-navy` (#0f2e5a)
- Hover: `hover:bg-lime-accent` (#B8E6B8)

**Download CV Button:**
- Background: `bg-teal` (#2EC4B6)
- Text: `text-deep-navy` (#0f2e5a)
- Border: `border-2 border-deep-navy` (#0f2e5a)
- Hover: `hover:bg-warm-orange` (#FF7A18)

---

## **📁 FILE LOCATIONS**

### **Primary Color Configuration Files:**
1. **`tailwind.config.js`** - Main color palette definitions
2. **`src/app/globals.css`** - CSS custom properties and additional colors
3. **`src/app/page.tsx`** - All section implementations
4. **`src/components/BrutalistNavigation.tsx`** - Navigation colors
5. **`src/components/BrutalistSectionBand.tsx`** - Section band component (receives colors as props)

### **Color Usage Patterns:**
- **Consistent Border Color:** `border-deep-navy` (#0f2e5a) used throughout
- **Primary Background Colors:** `bg-deep-navy`, `bg-mint`, `bg-sky-blue`, `bg-peach`
- **Accent Colors:** `teal`, `warm-orange`, `label-purple`, `teal-accent`
- **Text Colors:** `text-deep-navy`, `text-text-cream`, `soft-text`

---

## **🎯 QUICK REFERENCE**

### **Most Used Colors:**
- **Deep Navy:** `#0f2e5a` - Primary dark color, borders, text
- **Teal:** `#2EC4B6` - Primary accent, buttons, highlights
- **Text Cream:** `#FFF8DC` - Light text on dark backgrounds
- **Warm Orange:** `#FF7A18` - Secondary accent, badges
- **Mint:** `#E8F5E8` - Light background sections
- **Label Purple:** `#8B5CF6` - Tertiary accent color

### **Section Color Themes:**
- **Hero:** Deep navy + teal + cream
- **Experience:** Mint + lime-accent + teal-accent
- **Education:** Sky-blue + warm-orange + label-purple
- **Skills:** Custom blue palette (inline styles)
- **Portfolio:** Peach + warm-orange + mixed project colors
- **Footer:** Deep navy + teal + warm-orange