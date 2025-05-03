import { normalizeDate, formatDateRange } from './utils'

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

// Projects
export const projects: Project[] = [
  {
    title: 'AI Transcription Tooling',
    description:
      'Open-source AI-powered transcription tools for converting audio to text with high accuracy.',
    tags: ['TypeScript', 'React', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2023 - Present'),
  },
  {
    title: 'Markdown Extensions',
    description:
      'Custom extensions for Markdown to enhance documentation capabilities and formatting options.',
    tags: ['JavaScript', 'Markdown', 'Node.js'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2022 - 2023'),
  },
  {
    title: 'Game Server Data Warehousing',
    description:
      'Solutions for collecting, storing, and analyzing data from game servers to improve performance and player experience.',
    tags: ['Python', 'SQL', 'AWS', 'Data Engineering'],
    githubUrl: 'https://github.com/johnnyhuy',
    demo: null,
    date: normalizeDate('2021 - 2022'),
  },
  {
    title: 'Melbourne Corporate Coffee',
    description: 'JAM Stack website for a corporate coffee service in Melbourne.',
    tags: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://melbournecorporatecoffee.com.au',
    date: normalizeDate('2021'),
  },
  {
    title: 'Fun Flicks',
    description: 'JAM Stack website for a movie entertainment service.',
    tags: ['Next.js', 'Tailwind CSS', 'JAM Stack'],
    githubUrl: null,
    demo: 'https://funflicks.com.au',
    date: normalizeDate('2020'),
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and professional experience.',
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

export interface Experience {
  company: string
  position: string
  title: string
  startDate: string
  endDate: string
  technologies: string[]
  description: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Sportsbet',
    position: 'Lead Engineer - Platform & AI Engineering',
    title: 'Lead Engineer',
    startDate: 'Dec 2024',
    endDate: 'Present',
    technologies: [
      'Artificial Intelligence (AI)',
      'Backstage',
      'Amazon Web Services (AWS)',
      'Kubernetes',
      'ServiceNow',
      'Developer Experience',
    ],
    description:
      'Lead engineering for platform and AI initiatives at Sportsbet, with a focus on enterprise-scale developer experience, cloud infrastructure, and security strategy.',
    responsibilities: [
      'Designed and delivered an enterprise AI MVP with cross-team collaboration.',
      'Established security-as-code culture through threat modeling automation.',
      'Created a standardised service documentation framework in Backstage.',
      'Led AI SDLC intake and systematic evaluation of AI tools.',
      'Pioneered production-ready AI adoption and improved developer productivity.',
      'Drove technical vision and roadmap for developer experience initiatives.',
      'Implemented automated quality gates and deployment pipelines.',
      'Pioneered ServiceNow change management automation to reduce deployment overhead.',
    ],
  },
  {
    company: 'Sportsbet',
    position: 'Lead Engineer - Cloud',
    title: 'Lead Engineer',
    startDate: 'Dec 2021',
    endDate: 'Dec 2024',
    technologies: [
      'Kubernetes',
      'Ping Identity',
      'Backstage',
      'AWS',
      'GitHub Actions',
      'Sumo Logic',
      'CloudWatch',
      'New Relic',
    ],
    description:
      'Oversaw cloud platform engineering at Sportsbet, driving the evolution of authentication, developer tooling, and infrastructure for large-scale, high-availability systems.',
    responsibilities: [
      'Spearheaded Backstage developer platform implementation.',
      'Migrated CI/CD infrastructure from Jenkins to GitHub Actions.',
      'Shipped production Kubernetes clusters for major events.',
      'Architected authentication with Ping Identity for robust security.',
      'Authored Engineering Career Framework for enterprise adoption.',
      'Advanced "shift left" security practices.',
      'Established platform reliability and observability standards.',
    ],
  },
  {
    company: 'Afterpay',
    position: 'Senior Cloud Engineer',
    title: 'Senior Cloud Engineer',
    startDate: 'Dec 2020',
    endDate: 'Dec 2021',
    technologies: ['Amazon Web Services (AWS)', 'Terraform', 'Amazon ECS', 'Confluence', 'Jira'],
    description:
      'Senior engineer responsible for cloud migration and infrastructure at Afterpay, supporting enterprise payment solutions and scalable cloud services.',
    responsibilities: [
      'Led AWS cloud migration from data centres.',
      'Containerised legacy telecom applications for AWS production.',
      'Managed highly scalable database infrastructure.',
    ],
  },
  {
    company: 'eNett International',
    position: 'DevOps Engineer',
    title: 'DevOps Engineer',
    startDate: 'Oct 2020',
    endDate: 'Dec 2020',
    technologies: [
      'DevOps',
      'Microsoft Azure',
      'Azure DevOps',
      'Terraform',
      'Confluence',
      'Jira',
      'Kubernetes',
    ],
    description:
      'DevOps engineer in the container platform team at eNett International, building and maintaining cloud-native infrastructure and automation.',
    responsibilities: [
      'Built and maintained container orchestration systems for production.',
      'Delivered key performance indicators throughout tenure.',
    ],
  },
  {
    company: 'eNett International',
    position: 'Developer',
    title: 'Developer',
    startDate: 'Oct 2019',
    endDate: 'Oct 2020',
    technologies: [
      'Microsoft Azure',
      'Azure DevOps',
      'Confluence',
      'Jira',
      'Kubernetes',
      'Grafana',
      'Prometheus',
    ],
    description:
      'Software developer in the internal DevOps team at eNett International, focusing on CI/CD, monitoring, and Kubernetes platform delivery.',
    responsibilities: [
      'Provisioned production-ready applications to Kubernetes clusters.',
      'Maintained code and built pipelines in Azure DevOps.',
      'Produced monitoring with Grafana and Prometheus.',
      'Deployed infrastructure as code for Kubernetes clusters in Azure.',
    ],
  },
  {
    company: 'eNett International',
    position: 'Associate Developer',
    title: 'Associate Developer',
    startDate: 'Jan 2019',
    endDate: 'Sep 2019',
    technologies: ['Microsoft Azure', 'Terraform', 'Jira'],
    description:
      'Associate developer supporting DevOps initiatives and infrastructure projects for eNett International.',
    responsibilities: [
      'Provisioned infrastructure with continuous delivery using Terraform.',
      'Developed infrastructure and configuration as code on Azure.',
      'Assisted as technical lead on a sponsored university project.',
    ],
  },
  {
    company: 'eNett International',
    position: 'Intern Developer',
    title: 'Intern Developer',
    startDate: 'Jan 2018',
    endDate: 'Jan 2019',
    technologies: ['C#', 'Microsoft Azure', 'Confluence', 'Jira'],
    description:
      'Intern developer at eNett International, contributing to agile software development and support for production systems.',
    responsibilities: [
      'Participated in agile development with daily standups.',
      'Developed C# software on Microsoft platform.',
      'Supported production systems within the support team.',
    ],
  },
  {
    company: 'Melbourne Open Air Cinema',
    position: 'Team Supervisor',
    title: 'Team Supervisor',
    startDate: 'Nov 2015',
    endDate: 'Feb 2018',
    technologies: ['Cinema', 'Media', 'Outdoor Entertainment'],
    description:
      'Team supervisor for Melbourne Open Air Cinema, managing event operations and technical support for outdoor cinema experiences.',
    responsibilities: [
      'Maintained cinema equipment and consulted clients on-site.',
      'Ran cinema events for local clients.',
      'Advised clients on equipment for self-hosted events.',
      'Worked under pressure with production deadlines.',
    ],
  },
  {
    company: 'Tennis Australia',
    position: 'IT Support Assistant',
    title: 'IT Support Assistant',
    startDate: 'Oct 2016',
    endDate: 'Jan 2017',
    technologies: ['Customer Service', 'Help Desk Support'],
    description:
      'IT support assistant at Tennis Australia, providing technical and customer service support for internal staff.',
    responsibilities: [
      'Managed telephone calls for online support.',
      'Set up laptops to network drives.',
      'Provided on-site support for IT devices.',
    ],
  },
]

// Header Nav Links
export const headerNavLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
]

// Navbar Data (migrated from navbar.ts)
export const navbar = {
  logo: {
    src: '/images/johnny.svg',
    alt: 'Johnny Huynh',
    width: 32,
    height: 32,
  },
  navLinks: headerNavLinks,
}

// Discord Presence Data
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
