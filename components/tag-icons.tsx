import { JSX } from 'react'
import { type IconType } from 'react-icons/lib'
import {
  SiAstro,
  SiAmazon,
  SiC,
  SiCplusplus,
  // SiCsharp,
  SiCss3,
  SiDocker,
  SiFigma,
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

export const languageIcons: { [key: string]: IconType } = {
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
}

export const getTagIcon = (language: string): IconType | null => {
  // Normalize the language string: lowercase and handle common variations
  const normalizedLanguage = language.toLowerCase().replace(/ /g, '').replace('dot', '.')
  const Icon =
    languageIcons[normalizedLanguage] ||
    // Attempt lookup with original lowercase if normalized fails (e.g., 'c++')
    languageIcons[language.toLowerCase()]

  return Icon ? Icon : null
}
