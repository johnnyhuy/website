import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type IconType } from 'react-icons/lib'
import {
  FaBook,
  FaBookmark,
  FaCalculator,
  FaCode,
  FaImage,
  FaPenSquare,
  FaStar,
} from 'react-icons/fa'
import {
  SiAstro,
  SiAmazon,
  SiAmazoncloudwatch,
  SiAuth0,
  SiBackstage,
  SiC,
  SiCplusplus,
  SiConfluence,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGrafana,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiJenkins,
  SiJira,
  SiJavascript,
  SiJson,
  SiKubernetes,
  SiLatex,
  SiLinkedin,
  SiMarkdown,
  SiMdx,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNewrelic,
  SiOpenai,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiSharp,
  SiSumologic,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiYaml,
  SiPhp,
  SiLaravel,
  SiCommonworkflowlanguage,
  SiHugo,
  SiGooglecloud,
  SiDiscord,
} from 'react-icons/si'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'
import {
  LuBook,
  LuCodesandbox,
  LuFilm,
  LuPersonStanding,
  LuPhoneCall,
  LuServer,
} from 'react-icons/lu'

export const tagIconsMap: { [key: string]: IconType } = {
  azure: VscAzure,
  discord: SiDiscord,
  persona: LuPersonStanding,
  'web development': LuCodesandbox,
  'digital garden': LuBook,
  homelab: LuServer,
  'microsoft azure': VscAzure,
  'azure-devops': VscAzureDevops,
  'azure devops': VscAzureDevops,
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
  linkedin: SiLinkedin,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  'next.js': SiNextdotjs,
  'next js': SiNextdotjs,
  'node.js': SiNodedotjs,
  'node js': SiNodedotjs,
  tailwindcss: SiTailwindcss,
  python: SiPython,
  c: SiC,
  'c++': SiCplusplus,
  'c#': SiSharp,
  markdown: SiMarkdown,
  mdx: SiMdx,
  json: SiJson,
  yaml: SiYaml,
  tex: SiLatex,
  latex: SiLatex,
  ai: SiOpenai,
  artificialintelligence: SiOpenai,
  'artificial intelligence': SiOpenai,
  'artificial intelligence (ai)': SiOpenai,
  'ai/ml': SiOpenai,
  'customer service': LuPhoneCall,
  'help desk support': LuPersonStanding,
  cinema: LuFilm,
  sql: SiMysql,
  backstage: SiBackstage,
  security: SiAuth0,
  githubactions: SiGithubactions,
  devops: SiGitlab,
  'ci/cd': SiJenkins,
  sumologic: SiSumologic,
  cloudwatch: SiAmazoncloudwatch,
  newrelic: SiNewrelic,
  docker: SiDocker,
  figma: SiFigma,
  git: SiGit,
  vercel: SiVercel,
  postgresql: SiPostgresql,
  aws: SiAmazon,
  amazonwebservicesaws: SiAmazon,
  amazonecs: SiAmazon,
  'amazon web services (aws)': SiAmazon,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  github: SiGithub,
  confluence: SiConfluence,
  jira: SiJira,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  guide: FaBookmark,
  feature: FaStar,
  features: FaStar,
  code: FaCode,
  math: FaCalculator,
  images: FaImage,
  book: FaBook,
  writings: FaPenSquare,
  php: SiPhp,
  laravel: SiLaravel,
  commonmark: SiCommonworkflowlanguage,
  hugo: SiHugo,
  gcp: SiGooglecloud,
  mysql: SiMysql,
}

export type TagColor = string | { light: string; dark: string }

export const tagColorMap: { [key: string]: TagColor } = {
  azure: '#0078D4',
  discord: '#5865F2',
  'microsoft azure': '#0078D4',
  'azure-devops': '#0078D4',
  'azure devops': '#0078D4',
  astro: { light: '#BC52EE', dark: '#BC52EE' },
  html: '#E34F26',
  css: '#1572B6',
  linkedin: '#0A66C2',
  javascript: { light: '#D4B830', dark: '#F7DF1E' }, // Darker yellow for light mode
  typescript: '#3178C6',
  react: { light: '#00B4D8', dark: '#61DAFB' }, // Slightly darker blue for light mode
  tailwindcss: '#06B6D4',
  python: { light: '#306998', dark: '#3776AB' },
  c: { light: '#5C6BC0', dark: '#A8B9CC' },
  'c++': '#00599C',
  'c#': '#239120',
  yaml: '#CB171E',
  ai: '#00A67E',
  artificialintelligence: '#00A67E',
  'artificial intelligence': '#00A67E',
  'artificial intelligence (ai)': '#00A67E',
  'ai/ml': '#00A67E',
  sql: '#4479A1',
  backstage: '#9BF0E1',
  security: '#EB5424',
  githubactions: '#2088FF',
  devops: '#FC6D26',
  'ci/cd': '#D24939',
  sumologic: { light: '#000099', dark: '#8282FF' },
  cloudwatch: '#FF9900',
  newrelic: '#008C99',
  docker: '#2496ED',
  figma: '#F24E1E',
  git: '#F05032',
  postgresql: '#4169E1',
  aws: { light: '#232F3E', dark: '#FF9900' }, // AWS Orange for dark mode, Dark Blue for light
  amazonwebservicesaws: { light: '#232F3E', dark: '#FF9900' },
  amazonecs: { light: '#232F3E', dark: '#FF9900' },
  'amazon web services (aws)': { light: '#232F3E', dark: '#FF9900' },
  kubernetes: '#326CE5',
  terraform: '#7B42BC',
  graphql: '#E10098',
  mongodb: '#47A248',
  confluence: { light: '#172B4D', dark: '#2684FF' },
  jira: '#0052CC',
  grafana: '#F46800',
  prometheus: '#E6522C',
  php: '#777BB4',
  laravel: '#FF2D20',
  hugo: '#FF4088',
  gcp: '#4285F4',
  mysql: '#4479A1',
  github: { light: '#181717', dark: '#ffffff' },
  'next.js': { light: '#000000', dark: '#ffffff' },
  'next js': { light: '#000000', dark: '#ffffff' },
}

export const getTagIcon = (tag: string): IconType => {
  const lowerCaseTag = tag.toLowerCase()
  const normalizedTag = lowerCaseTag.replace(/ /g, '').replace('dot', '.')
  const Icon = tagIconsMap[normalizedTag] ?? tagIconsMap[lowerCaseTag]
  return Icon
}

// New function to check if an icon exists for a tag
export const hasIcon = (tag: string): boolean => {
  const lowerCaseTag = tag.toLowerCase()
  const normalizedTag = lowerCaseTag.replace(/ /g, '').replace('dot', '.')
  return !!(tagIconsMap[normalizedTag] ?? tagIconsMap[lowerCaseTag])
}

export const getTagColor = (tag: string): TagColor | undefined => {
  const lowerCaseTag = tag.toLowerCase()
  const normalizedTag = lowerCaseTag.replace(/ /g, '').replace('dot', '.')
  return tagColorMap[normalizedTag] ?? tagColorMap[lowerCaseTag]
}

export const tagIconVariants = cva('inline-flex items-center justify-center rounded', {
  variants: {
    variant: {
      solid: 'bg-gray-100 text-gray-900 dark:text-gray-100',
      outline:
        'rounded-md border border-gray-900 px-2 py-1 text-gray-900 dark:border-gray-100 dark:text-gray-100',
      ghost: 'bg-transparent text-gray-900 dark:text-gray-100',
      label: 'bg-transparent text-gray-900 gap-1 px-1 py-0.5 font-medium',
      carousel:
        'rounded-lg p-2 text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-xl',
      xl2: 'text-2xl',
    },
    colorVariant: {
      gray: 'text-gray-700',
      yellow: 'text-yellow-500',
      green: 'text-green-500',
      blue: 'text-blue-500',
      red: 'text-red-500',
      white: 'text-white',
      default: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    colorVariant: 'default',
  },
})

export interface TagIconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof tagIconVariants> {
  icon?: React.ReactNode
  tag?: string
  label?: string
}

export const TagIcon: React.FC<TagIconProps> = ({
  icon,
  tag,
  label,
  variant,
  size,
  colorVariant,
  className,
  ...props
}) => {
  const Icon = icon ?? (tag ? getTagIcon(tag) : undefined)
  const tagColor = tag ? getTagColor(tag) : undefined

  const lightColor =
    typeof tagColor === 'object' ? tagColor.light : tagColor ? tagColor : undefined
  const darkColor =
    typeof tagColor === 'object' ? tagColor.dark : tagColor ? tagColor : undefined

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    xl2: 'h-10 w-10',
  }

  const iconSizeClass = size ? sizeClasses[size] : sizeClasses.md

  return (
    <span
      className={tagIconVariants({ variant, size, colorVariant, className })}
      role="img"
      aria-label={label}
      title={label}
      style={
        {
          '--icon-color-light': lightColor,
          '--icon-color-dark': darkColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {Icon && typeof Icon === 'function' && (
        <Icon
          className={`${iconSizeClass} ${lightColor ? 'text-[var(--icon-color-light)]' : ''} ${darkColor ? 'dark:text-[var(--icon-color-dark)]' : ''}`}
        />
      )}
      {Icon &&
        typeof Icon !== 'function' &&
        React.isValidElement(Icon) &&
        React.cloneElement(Icon as React.ReactElement<any>, {
          className: `${(Icon.props as any).className || ''} ${iconSizeClass} ${lightColor ? 'text-[var(--icon-color-light)]' : ''} ${darkColor ? 'dark:text-[var(--icon-color-dark)]' : ''}`.trim(),
        })}
      {label && (
        <span className={`${Icon ? 'ml-1' : ''} align-middle whitespace-nowrap`}>{label}</span>
      )}
    </span>
  )
}
