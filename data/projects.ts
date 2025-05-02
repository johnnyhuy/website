// Unified project type combining all fields from both files
export interface Project {
  id?: number;
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
  image?: string;
  techStack?: string[];
  githubUrl?: string | null;
  demo?: string | null;
  date?: string;
}

export const projects: Project[] = [
  // Existing detailed projects
  {
    id: 1,
    title: "AI Transcription Tooling",
    description: "Open-source AI-powered transcription tools for converting audio to text with high accuracy.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["TypeScript", "React", "Node.js", "AI"],
    githubUrl: "https://github.com/johnnyhuy",
    demo: null,
    date: "2023 - Present",
  },
  {
    id: 2,
    title: "Markdown Extensions",
    description: "Custom extensions for Markdown to enhance documentation capabilities and formatting options.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["JavaScript", "Markdown", "Node.js"],
    githubUrl: "https://github.com/johnnyhuy",
    demo: null,
    date: "2022 - 2023",
  },
  {
    id: 3,
    title: "Game Server Data Warehousing",
    description: "Solutions for collecting, storing, and analyzing data from game servers to improve performance and player experience.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["Python", "SQL", "AWS", "Data Engineering"],
    githubUrl: "https://github.com/johnnyhuy",
    demo: null,
    date: "2021 - 2022",
  },
  {
    id: 4,
    title: "Melbourne Corporate Coffee",
    description: "JAM Stack website for a corporate coffee service in Melbourne.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["Next.js", "Tailwind CSS", "JAM Stack"],
    githubUrl: null,
    demo: "https://melbournecorporatecoffee.com.au",
    date: "2021",
  },
  {
    id: 5,
    title: "Fun Flicks",
    description: "JAM Stack website for a movie entertainment service.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["Next.js", "Tailwind CSS", "JAM Stack"],
    githubUrl: null,
    demo: "https://funflicks.com.au",
    date: "2020",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and professional experience.",
    image: "/placeholder.svg?height=300&width=600",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/johnnyhuy",
    demo: "https://johnnyhuy.com",
    date: "2020 - Present",
  },
  // Additional projects from projectsData.ts
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos\nand more. Google has many features to help you find exactly what you're looking\nfor.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob\nto the desired date and press "Go". No more worrying about lost keys or\nforgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
];
