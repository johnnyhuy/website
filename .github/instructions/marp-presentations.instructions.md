---
applyTo: "**/*.md"
---

# Marp Presentation Instructions

When working with Marp presentation files (`.md` files for presentations):

## Marp-Specific Guidelines

### Frontmatter Requirements
- Always include `marp: true` to enable Marp processing
- Specify a theme (use custom themes when available)
- Include `paginate: true` for slide numbers
- Set appropriate `size` (16:9 for widescreen, 4:3 for standard)
- Use `class: lead` for title slides

### Slide Structure
- Use `---` to separate slides (not `# New Slide`)
- Keep one main concept per slide
- Limit text to 6-8 lines maximum per slide
- Use visual hierarchy with proper heading levels

### Content Best Practices
- Use bullet points with emoji bullets for visual appeal
- Include background images with proper positioning
- Apply opacity to background images (0.6-0.8) for readability
- Use blockquotes for important tips and callouts

### Styling
- Prefer dark themes for technical presentations
- Use consistent color schemes throughout
- Apply proper contrast for readability
- Include animations sparingly

### Background Images
- Use Unsplash URLs for professional stock photos
- Position backgrounds with `left:30%`, `right:40%`, etc.
- Apply opacity with `opacity:0.8` for better text readability
- Choose images that enhance, not distract from content

### Typography
- Use **bold** for emphasis and key terms
- Use *italics* for quotes and secondary information
- Apply proper heading hierarchy (h1 for slide titles, h2 for sections)
- Keep code blocks minimal and well-formatted

### Export Considerations
- Test exports in both HTML and PDF formats
- Ensure images load properly in exported versions
- Verify that custom themes work in exports
- Check that text remains readable in all formats
