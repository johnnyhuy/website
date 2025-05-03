import { useMemo } from 'react'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import { components as MDXComponents } from './mdx-components'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'

interface MDXLayoutRendererProps {
  code: string
  components?: Record<string, React.ComponentType<any>>
  toc?: any
  [key: string]: any
}

export function MDXLayoutRenderer({
  code,
  components = {},
  toc,
  ...rest
}: MDXLayoutRendererProps) {
  const MDXLayout = useMemo(() => {
    if (!code) return null
    return getMDXComponent(code)
  }, [code])

  if (!MDXLayout) return null

  // Cast MDXComponents to the expected type
  const combinedComponents = {
    ...MDXComponents as unknown as Record<string, React.ComponentType<any>>,
    ...components
  }

  return <MDXLayout components={combinedComponents} toc={toc} {...rest} />
}
