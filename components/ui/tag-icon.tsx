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
} from 'react-icons/si'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'
import { LuFilm, LuPersonStanding, LuPhoneCall } from 'react-icons/lu'

export const tagIconsMap: { [key: string]: IconType } = {
  azure: VscAzure,
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
      {...props}
    >
      {Icon && typeof Icon === 'function' && <Icon className={iconSizeClass} />}
      {Icon &&
        typeof Icon !== 'function' &&
        React.isValidElement(Icon) &&
        React.cloneElement(Icon as React.ReactElement<any>, {
          className: `${(Icon.props as any).className || ''} ${iconSizeClass}`.trim(),
        })}
      {label && (
        <span className={`${Icon ? 'ml-1' : ''} align-middle whitespace-nowrap`}>{label}</span>
      )}
    </span>
  )
}
