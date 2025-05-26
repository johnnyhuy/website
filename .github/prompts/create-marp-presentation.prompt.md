---
mode: 'agent'
tools: ['codebase']
description: 'Create a new Marp presentation from blog content'
---

# Create Marp Presentation from Blog Content

Your goal is to convert blog post content into a professional Marp presentation.

## Requirements

### Content Structure
- Extract key concepts from the blog post
- Create one slide per main idea (typically 15-25 slides)
- Include a compelling title slide
- Add section dividers for major topics
- End with a summary or call-to-action slide

### Slide Design
- Use the custom theme if available
- Apply `class: lead` for title and section slides
- Include background images from Unsplash for visual interest
- Use proper opacity (0.6-0.8) on background images
- Maintain consistent visual hierarchy

### Content Guidelines
- Limit text to 6-8 lines per slide maximum
- Use bullet points with emoji markers
- Include relevant quotes as blockquotes
- Highlight key terms with **bold** formatting
- Use tables for structured comparisons

### Technical Requirements
- Set frontmatter with proper Marp configuration
- Use 16:9 aspect ratio for modern displays
- Enable pagination for slide numbers
- Apply dark theme for professional appearance

### Visual Elements
- Choose background images that enhance the message
- Position images with proper percentages (left:30%, right:40%, etc.)
- Use consistent emoji choices throughout
- Apply proper contrast for readability

### Flow and Pacing
- Start with a strong hook
- Build concepts progressively
- Include transition slides between sections
- End with memorable takeaways

## Background Image Guidelines

Use Unsplash URLs with these parameters:
- Width: 800px for side backgrounds, 1200px for full backgrounds
- Choose professional, high-quality images
- Prefer images that complement the content theme
- Avoid overly busy or distracting visuals

Example background syntax:
```markdown
![bg right:40% opacity:0.8](https://images.unsplash.com/photo-ID?w=800)
```

Apply the [Marp presentation guidelines](../instructions/marp-presentations.instructions.md) for all styling decisions.
