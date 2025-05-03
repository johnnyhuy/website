'use client'

import React from 'react'
import Pre from 'pliny/ui/Pre.js'
import { MermaidDiagram } from './mermaid-diagram'

interface CodeProps {
  children: React.ReactNode
  className?: string
}

interface ElementWithChildren {
  children?: React.ReactNode
  [key: string]: unknown
}

interface CustomPreProps {
  children: React.ReactNode
  className?: string
}

const extractTextContent = (node: React.ReactNode): string => {
  if (typeof node === 'string') {
    return node
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join('')
  }

  if (React.isValidElement(node)) {
    const props = node.props as ElementWithChildren
    return props.children ? extractTextContent(props.children) : ''
  }

  return ''
}

export function CustomPre({ children, ...props }: CustomPreProps) {
  const childrenArray = React.Children.toArray(children)
  const codeElement = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === 'code'
  ) as React.ReactElement<CodeProps> | undefined

  // Handle Mermaid diagrams
  if (
    codeElement &&
    codeElement.props.className &&
    codeElement.props.className.includes('language-mermaid')
  ) {
    // Extract the content from the code element using our helper function
    const content = extractTextContent(codeElement.props.children)

    if (content && content.trim()) {
      return <MermaidDiagram chart={content.trim()} {...props} />
    }
  }

  // Use the default Pre component for all other code blocks
  return <Pre {...props}>{children}</Pre>
}
