# CV Website Architecture Documentation

## Overview

This documentation covers the modernized architecture of Eric Ambriza's CV website, built with Next.js and React.

## Project Structure

```
├── content/
│   └── content.json          # Internationalized content data
├── src/
│   ├── app/                  # Next.js app directory
│   ├── components/           # React components
│   ├── contexts/             # React contexts
│   ├── hooks/                # Custom React hooks
│   ├── styles/
│   │   └── variables.css     # Design tokens and CSS variables
│   ├── i18n.js              # Internationalization helper
│   └── sanitize.js          # HTML sanitization utilities
├── docs/                     # Documentation
└── public/                   # Static assets
```

## Architecture Components

### 1. Content Management (`content/content.json`)

- Centralized content storage for all visible text
- Multi-language support (English, Portuguese, German)
- Structured data format for easy maintenance
- Separation of content from presentation logic

### 2. Internationalization (`src/i18n.js`)

- Lightweight translation system
- Browser language detection
- Dynamic language switching
- Fallback handling for missing translations

### 3. Security (`src/sanitize.js`)

- HTML escaping to prevent XSS attacks
- URL validation and sanitization
- Email address validation
- Safe text processing utilities

### 4. Design System (`src/styles/variables.css`)

- CSS custom properties for consistent theming
- Dark mode support via `prefers-color-scheme`
- Accessibility considerations (reduced motion, high contrast)
- Scalable design tokens (spacing, typography, colors)

## Usage Guidelines

### Adding New Content

1. Add new keys to `content/content.json`
2. Provide translations for all supported languages
3. Use the `t()` function to access translations in components

### Styling Components

1. Use CSS custom properties from `variables.css`
2. Follow the established design token system
3. Ensure dark mode compatibility
4. Consider accessibility requirements

### Security Best Practices

1. Always sanitize user input with `sanitize.js` functions
2. Validate URLs before using them
3. Escape HTML content when rendering dynamic text
4. Use type checking for data validation

## Migration Notes

- This modernization maintains all existing visuals and layouts
- New architecture provides foundation for future enhancements
- Content is now easily translatable and maintainable
- Security and accessibility have been improved

## Analytics & Privacy

- Analytics stays off by default for privacy
- Plausible analytics is available but commented out in HTML
- To enable: uncomment the script tag and set your data-domain
- No PII collection or invasive tracking

## Future Enhancements

- Dynamic content loading
- Advanced internationalization features
- Enhanced accessibility features
- Performance optimizations
