// Project Interface
export interface Project {
  id?: number
  title: string
  description: string
  href?: string
  imgSrc?: string
  image?: string
  tags: string[]
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

// Utility to normalize and format dates
function normalizeDate(input: string): string | undefined {
  if (!input) return undefined
  // Try to parse common formats: 'Dec 2021', '2021', 'Present', etc.
  if (/present/i.test(input)) return 'Present'
  // Try month-year (e.g. Dec 2021)
  const monthYearMatch = input.match(
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[ .-]*(\d{4})$/i
  )
  if (monthYearMatch) {
    const date = new Date(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`)
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
  }
  // Try year only
  const yearMatch = input.match(/^\d{4}$/)
  if (yearMatch) return input
  // Fallback: return as-is
  return input
}

function formatDateRange(start: string, end: string): string {
  const normStart = normalizeDate(start)
  const normEnd = normalizeDate(end)
  // If both are present and in the same year, show as "Jan–Mar 2021"
  if (normStart && normEnd && normStart !== 'Present' && normEnd !== 'Present') {
    // Try to extract years
    const startYear = normStart.match(/\d{4}$/)?.[0]
    const endYear = normEnd.match(/\d{4}$/)?.[0]
    if (startYear && endYear && startYear === endYear) {
      // Try to extract months
      const startMonth = normStart.match(/^[A-Za-z]{3}/)?.[0]
      const endMonth = normEnd.match(/^[A-Za-z]{3}/)?.[0]
      if (startMonth && endMonth) {
        return `${startMonth}–${endMonth} ${startYear}`
      }
    }
    return `${normStart} – ${normEnd}`
  }
  if (normStart && normEnd && normEnd === 'Present') {
    // "Jan 2021 – Present" or "2021 – Present"
    return `${normStart} – Present`
  }
  if (normStart) return normStart
  if (normEnd) return normEnd
  return ''
}

// Returns a human-readable duration, e.g. "6 mos", ">3 years"
export function formatDuration(start: string, end: string, now: Date = new Date()): string {
  // Normalize dates
  const normStart = normalizeDate(start)
  const normEnd = normalizeDate(end)
  if (!normStart) return ''
  // Parse start
  let startDate: Date | undefined
  let endDate: Date | undefined
  // Try parsing as "Mon YYYY" or "YYYY"
  const parse = (str: string): Date | undefined => {
    if (str === 'Present') return undefined
    const monthYear = str.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/)
    if (monthYear) return new Date(`${monthYear[1]} 1, ${monthYear[2]}`)
    const year = str.match(/^(\d{4})$/)
    if (year) return new Date(`${year[1]}-01-01`)
    return undefined
  }
  startDate = parse(normStart)
  endDate = normEnd === 'Present' ? now : parse(normEnd ?? '')
  if (!startDate || !endDate) return ''
  // Calculate diff
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  let years = Math.floor(months / 12)
  months = months % 12
  if (years >= 3 && months === 0) return `>${years} years`
  if (years >= 2) return `${years} yrs${months > 0 ? ` ${months} mos` : ''}`
  if (years === 1) return months > 0 ? `1 yr ${months} mos` : '1 yr'
  if (months > 0) return `${months} mos`
  return '<1 mo'
}

// Projects
export const projects: Project[] = [
  {
    title: 'AI Transcription Tooling',
    description:
      'Open-source AI-powered transcription tools for converting audio to text with high accuracy.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['TypeScript', 'React', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2023 - Present'),
  },
  {
    title: 'Markdown Extensions',
    description:
      'Custom extensions for Markdown to enhance documentation capabilities and formatting options.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['JavaScript', 'Markdown', 'Node.js'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2022 - 2023'),
  },
  {
    title: 'Game Server Data Warehousing',
    description:
      'Solutions for collecting, storing, and analyzing data from game servers to improve performance and player experience.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['Python', 'SQL', 'AWS', 'Data Engineering'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2021 - 2022'),
  },
  {
    title: 'Melbourne Corporate Coffee',
    description: 'JAM Stack website for a corporate coffee service in Melbourne.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://melbournecorporatecoffee.com.au',
    date: normalizeDate('2021'),
  },
  {
    title: 'Fun Flicks',
    description: 'JAM Stack website for a movie entertainment service.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://funflicks.com.au',
    date: normalizeDate('2020'),
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and professional experience.',
    image: '/placeholder.svg?height=300&width=600',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: 'https://johnnyhuy.com',
    date: normalizeDate('2020 - Present'),
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos\nand more. Google has many features to help you find exactly what you're looking\nfor.`,
    tags: [],
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob\nto the desired date and press "Go". No more worrying about lost keys or\nforgotten headphones with this simple yet affordable solution.`,
    tags: [],
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

// Experience
export const experiences = [
  {
    company: 'Sportsbet',
    position: 'Lead Cloud Engineer',
    title: 'Lead Cloud Engineer',
    startDate: 'Dec 2021',
    endDate: 'Present',
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
    position: 'Senior Cloud Engineer',
    title: 'Senior Cloud Engineer',
    startDate: 'Dec 2020',
    endDate: 'Dec 2021',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'PCI Compliance'],
    responsibilities: [
      'Worked on enterprise cloud services to provide payment solutions to telecommunication and health services as a member of the PayNow Touchcorp project team.',
      'Lead an AWS cloud migration from VMware Cloud on AWS.',
      'Drove AWS cloud migrations and containerised legacy telecommunications applications for PCI compliance, focusing on Optus & Vodafone projects.',
      'Implemented a zero-trust mTLS infrastructure for NAB HICAPS terminal applications.',
    ],
  },
  {
    company: 'eNett',
    position: 'DevOps Engineer',
    title: 'DevOps Engineer',
    startDate: 'Oct 2020',
    endDate: 'Dec 2020',
    technologies: ['Azure', 'Kubernetes', 'CI/CD', 'DevOps'],
    responsibilities: [
      'Contributed to the development of scalable cloud and DevOps engineering solutions as a member of the container platform team.',
      'Contributed to Azure cloud migrations and the automation of CI/CD pipelines using Kubernetes.',
    ],
  },
  {
    company: 'eNett',
    position: 'Developer',
    title: 'Developer',
    startDate: 'Oct 2019',
    endDate: 'Oct 2020',
    technologies: ['Azure', 'Kubernetes', 'DevOps', 'CI/CD', 'Grafana', 'Prometheus'],
    responsibilities: [
      'Contributed as a permanent member of the internal DevOps team.',
      'Pioneered new CI/CD automation with Azure DevOps.',
      'Contributed to a Travelport cloud migration to Azure Kubernetes Services.',
      'Lead monitoring capabilities with Grafana and Prometheus on production systems.',
    ],
  },
  {
    company: 'eNett',
    position: 'Associate Developer',
    title: 'Associate Developer',
    startDate: 'Jan 2019',
    endDate: 'Sep 2019',
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

// Only export the new utilities here to avoid redeclaration errors
export { normalizeDate, formatDateRange }
