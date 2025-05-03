# JohnnyHuy.com

A modern, responsive personal website and digital garden built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Blog Platform**: Share articles and experiences with MDX support
- **Project Showcase**: Display personal and professional projects
- **Professional Experience**: Timeline of work history and skills
- **Discord Integration**: Real-time Discord activity display with visual assets
- **GitHub Integration**: Calendar contributions visualization
- **Dark Mode Support**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Comments System**: Giscus integration for blog post discussions
- **Search Functionality**: Kbar-powered site search
- **TypeScript**: Full type safety throughout the codebase

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [ContentLayer](https://contentlayer.dev/) for MDX processing
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/johnnyhuy/website.git
cd website
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy the environment variables file and configure as needed:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable UI components
- `data/`: Site metadata, blog posts, and other content
- `public/`: Static assets (images, fonts, etc.)
- `styles/`: Global CSS and Tailwind configuration
- `lib/`: Utility functions and shared code
- `hooks/`: Custom React hooks

## Customization

To customize this website for your own use:

1. Update site metadata in `data/siteMetadata.js`
2. Modify personal information in `data/siteData.ts`
3. Replace blog content in `data/blog/`
4. Update projects in the projects array in `data/siteData.ts`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ContentLayer](https://contentlayer.dev/) - Content SDK for Next.js
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
