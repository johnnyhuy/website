'use client'
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
  SiC,
  SiCplusplus,
  // SiCsharp,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGithub,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiKubernetes,
  SiLatex,
  SiMarkdown,
  SiMdx,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiYaml,
} from 'react-icons/si'

export const tagIconsMap: { [key: string]: IconType } = {
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
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
  // 'c#': SiCsharp,
  markdown: SiMarkdown,
  mdx: SiMdx,
  json: SiJson,
  yaml: SiYaml,
  tex: SiLatex,
  latex: SiLatex,
  docker: SiDocker,
  figma: SiFigma,
  git: SiGit,
  vercel: SiVercel,
  postgresql: SiPostgresql,
  aws: SiAmazon,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  github: SiGithub,
  guide: FaBookmark,
  feature: FaStar,
  features: FaStar,
  code: FaCode,
  math: FaCalculator,
  images: FaImage,
  book: FaBook,
  writings: FaPenSquare,
}

export const getTagIcon = (tag: string): IconType | null => {
  const lowerCaseTag = tag.toLowerCase()
  const normalizedTag = lowerCaseTag.replace(/ /g, '').replace('dot', '.')

  const Icon = tagIconsMap[normalizedTag] ?? tagIconsMap[lowerCaseTag]

  return Icon ?? null
}
