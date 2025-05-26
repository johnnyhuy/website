---
mode: 'edit'
description: 'Create custom Marp theme with modern styling'
---

# Create Custom Marp Theme

Your goal is to create a professional, modern Marp theme CSS file.

## Theme Requirements

### Visual Design
- Dark theme with gradient backgrounds
- Modern color palette (blues, teals, grays)
- Professional typography using web fonts
- Subtle animations and transitions
- High contrast for readability

### CSS Structure
- Use CSS custom properties (variables) for theming
- Include responsive design considerations
- Add proper print styles for PDF export
- Implement hover effects and interactions
- Support for light/dark theme variants

### Typography Hierarchy
- Large, impactful headings for slide titles
- Clear hierarchy between h1, h2, h3 elements
- Readable body text with proper line height
- Monospace font for code elements
- Consistent spacing and margins

### Component Styling
- Styled tables with hover effects
- Professional blockquotes with visual indicators
- Enhanced list styling with custom bullets
- Code blocks with syntax highlighting support
- Consistent card-like containers

### Background and Layout
- Gradient overlays for visual interest
- Support for background image positioning
- Proper padding and spacing for content
- Responsive layout for different screen sizes
- Print-optimized styles

### Theme Variables
Include these CSS custom properties:
- `--color-background` - Main background color
- `--color-foreground` - Primary text color
- `--color-primary` - Brand/accent color
- `--color-secondary` - Secondary text color
- `--color-accent` - Highlight color
- `--font-family` - Primary font stack
- `--font-family-mono` - Monospace font stack

### Special Classes
- `.lead` class for centered title slides
- `.invert` class for high contrast slides
- Support for Marp's built-in directives
- Custom classes for specific slide types

## Technical Considerations

### Marp Compatibility
- Use `@theme themename` directive at the top
- Import base Marp styles where needed
- Ensure compatibility with Marp's slide system
- Test with different export formats

### Performance
- Optimize for fast rendering
- Minimize CSS file size
- Use efficient selectors
- Avoid complex animations that affect export

Apply modern web design principles and ensure the theme works well for professional presentations.
