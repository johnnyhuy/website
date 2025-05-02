// Project Interface
export interface Project {
  id?: number
  title: string
  description: string
  href?: string
  imgSrc?: string
  image?: string
  techStack: string[]
  githubUrl?: string | null
  demo?: string | null
  date?: string
}

// Profile
export const profile = {
  name: 'Johnny Huynh',
  avatar: '/images/me.jpg',
  occupation: 'Principal Engineer',
  company: 'Independent',
  email: '',
  twitter: '',
  linkedin: 'https://linkedin.com/in/johnnyhuy',
  github: 'https://github.com/johnnyhuy',
  description:
    'Johnny Huynh is a Principal Engineer with over 6 years of experience specializing in platform engineering, cloud infrastructure, and DevOps. He is passionate about building scalable systems, automating workflows, and sharing knowledge with the tech community.',
  siteUrl: 'https://johnnyhuy.com',
  siteRepo: 'https://github.com/johnnyhuy/website',
  siteLogo: '/favicon/favicon.svg',
  socialBanner: '/favicon/favicon-96x96.png',
  facebook: '',
  youtube: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  jobTitle: 'Principal Engineer',
  bio: 'Dynamic and skilled Principal Software Engineer with over 6 years of industry experience in platform engineering. Eager to leverage expertise in high-impact, cutting-edge technology projects.',
  title: 'Principal Engineer',
  discord: {
    username: 'johnnyhuy',
    userId: '183829779810615297',
    link: 'https://discord.com/users/183829779810615297',
  },
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/johnnyhuy',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/johnnyhuy',
      icon: 'linkedin',
    },
  ],
  contactNote: 'For recruitment and job opportunities, please contact me via LinkedIn only.',
  githubUsername: 'johnnyhuy',
}

// Projects
export const projects: Project[] = [
  {
    title: 'AI Transcription Tooling',
    description:
      'Open-source AI-powered transcription tools for converting audio to text with high accuracy.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['TypeScript', 'React', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: '2023 - Present',
  },
  {
    title: 'Markdown Extensions',
    description:
      'Custom extensions for Markdown to enhance documentation capabilities and formatting options.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['JavaScript', 'Markdown', 'Node.js'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: '2022 - 2023',
  },
  {
    title: 'Game Server Data Warehousing',
    description:
      'Solutions for collecting, storing, and analyzing data from game servers to improve performance and player experience.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['Python', 'SQL', 'AWS', 'Data Engineering'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: '2021 - 2022',
  },
  {
    title: 'Melbourne Corporate Coffee',
    description: 'JAM Stack website for a corporate coffee service in Melbourne.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://melbournecorporatecoffee.com.au',
    date: '2021',
  },
  {
    title: 'Fun Flicks',
    description: 'JAM Stack website for a movie entertainment service.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://funflicks.com.au',
    date: '2020',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and professional experience.',
    image: '/placeholder.svg?height=300&width=600',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: 'https://johnnyhuy.com',
    date: '2020 - Present',
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos\nand more. Google has many features to help you find exactly what you're looking\nfor.`,
    techStack: [],
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob\nto the desired date and press "Go". No more worrying about lost keys or\nforgotten headphones with this simple yet affordable solution.`,
    techStack: [],
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

// Experience
export const experiences = [
  {
    company: 'Sportsbet',
    logo: '/placeholder.svg?height=48&width=48',
    position: 'Lead Cloud Engineer',
    title: 'Lead Cloud Engineer',
    period: 'Dec 2021 - Present · > 2 yrs',
    startDate: 'Dec 2021',
    endDate: 'Present',
    duration: '> 2 yrs',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'GitHub', 'CI/CD', 'Docker'],
    responsibilities: [
      'Collaborated with various application development teams as a key member of the Customer Platforms team at Sportsbet, providing robust cloud technology solutions.',
      'Championed the migration of internal tools to GitHub, optimising collaboration and streamlining workflows across teams.',
      'Served as a technical lead in a key portfolio project, utilising Ping Identity authentication platforms.',
      'Lead technical initiatives for the Customer Platforms team, enhancing cloud technology solutions and fostering a culture of engineering excellence.',
      'Spearheaded strategic initiatives such as the migration from Stash to GitHub, enabling streamlined workflows and improved collaboration.',
      'Partnered with multiple teams at Sportsbet to implement and maintain critical platform technologies such as Ping Identity and Kong.',
    ],
  },
  {
    company: 'Afterpay',
    logo: '/placeholder.svg?height=48&width=48',
    position: 'Senior Cloud Engineer',
    title: 'Senior Cloud Engineer',
    period: 'Dec 2020 - Dec 2021 · 1 yr 1 mo',
    startDate: 'Dec 2020',
    endDate: 'Dec 2021',
    duration: '1 yr 1 mo',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'PCI Compliance'],
    responsibilities: [
      'Worked on enterprise cloud services to provide payment solutions to telecommunication and health services as a member of the PayNow Touchcorp project team.',
      'Lead an AWS cloud migration from VMware Cloud on AWS.',
      'Drove AWS cloud migrations and containerised legacy telecommunications applications for PCI compliance, focusing on Optus & Vodafone projects.',
      'Implemented a zero-trust mTLS infrastructure for NAB HICAPS terminal applications.',
    ],
  },
  {
    company: 'eNett International',
    logo: '/placeholder.svg?height=48&width=48',
    position: 'DevOps Engineer',
    title: 'DevOps Engineer',
    period: 'Oct 2020 - Dec 2020 · 3 mos',
    startDate: 'Oct 2020',
    endDate: 'Dec 2020',
    duration: '3 mos',
    technologies: ['Azure', 'Kubernetes', 'CI/CD', 'DevOps'],
    responsibilities: [
      'Contributed to the development of scalable cloud and DevOps engineering solutions as a member of the container platform team.',
      'Contributed to Azure cloud migrations and the automation of CI/CD pipelines using Kubernetes.',
    ],
  },
  {
    company: 'eNett International',
    logo: '/placeholder.svg?height=48&width=48',
    position: 'Developer',
    title: 'Developer',
    period: 'Oct 2019 - Oct 2020 · 1 yr 1 mo',
    startDate: 'Oct 2019',
    endDate: 'Oct 2020',
    duration: '1 yr 1 mo',
    technologies: ['Azure', 'Kubernetes', 'DevOps', 'CI/CD', 'Grafana', 'Prometheus'],
    responsibilities: [
      'Contributed as a permanent member of the internal DevOps team.',
      'Pioneered new CI/CD automation with Azure DevOps.',
      'Contributed to a Travelport cloud migration to Azure Kubernetes Services.',
      'Lead monitoring capabilities with Grafana and Prometheus on production systems.',
    ],
  },
  {
    company: 'eNett International',
    logo: '/placeholder.svg?height=48&width=48',
    position: 'Associate Developer',
    title: 'Associate Developer',
    period: 'Jan 2019 - Sep 2019 · 9 mos',
    startDate: 'Jan 2019',
    endDate: 'Sep 2019',
    duration: '9 mos',
    technologies: ['Azure', 'Terraform', 'Infrastructure as Code'],
    responsibilities: [
      'Ensured the internal DevOps team had the necessary support to provide efficient and effective solutions.',
    ],
  },
]

// Header Nav Links
export const headerNavLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Uses', path: '/uses' },
  { name: 'Blog', path: '/blog' },
  { name: 'TechDocs', path: '/techdocs' },
  { name: 'Guestbook', path: '/guestbook' },
]

// Discord Presence Data
export const statusColors: Record<string, string> = {
  online: 'bg-green-500',
  idle: 'bg-yellow-400',
  dnd: 'bg-red-500',
  offline: 'bg-muted-foreground',
}

export const lanyard = {
  data: {
    discord_user: {
      id: '183829779810615297',
      username: 'thejohnnaye',
      avatar: '14c25c04f274ac5d641d0223e3767e2b',
      display_name: 'John Doe',
    },
    discord_status: 'online',
    activities: [
      {
        id: '87cb1d50afaf131e',
        name: 'Visual Studio Code',
        type: 0,
        state: 'Workspace: cloud',
        details: 'Editing values.kube01.yaml',
        application_id: '383226320970055681',
        timestamps: {
          start: 1745678099307,
        },
        assets: {
          large_image: '1359299519124078724',
          large_text: 'Editing a YAML file',
          small_image: '1359308034446200892',
          small_text: 'Cursor',
        },
        created_at: 1745678099552,
      },
    ],
  },
  success: true,
}
