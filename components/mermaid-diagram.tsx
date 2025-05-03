'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const { resolvedTheme } = useTheme()
  const mermaidRef = useRef<HTMLDivElement>(null)
  const uniqueId = useRef(`mermaid-${Math.random().toString(36).substring(2, 11)}`)

  useEffect(() => {
    // Configure Mermaid with theme support
    const theme = resolvedTheme === 'dark' ? 'dark' : 'default'
    
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme,
        securityLevel: 'loose',
        fontFamily: 'inherit',
      })
    } catch (err) {
      console.error('Mermaid initialization error:', err)
    }

    const renderChart = async () => {
      if (!chart || typeof chart !== 'string' || chart.trim() === '') {
        setError('Empty or invalid diagram content')
        return
      }

      try {
        setError(null)
        
        // Clean up the chart content
        const cleanChart = chart.trim()
        
        // Render the Mermaid diagram
        const { svg } = await mermaid.render(uniqueId.current, cleanChart)
        setSvgContent(svg)
      } catch (err) {
        console.error('Mermaid rendering error:', err)
        setError(`Failed to render diagram: ${err instanceof Error ? err.message : 'Unknown error'}`)
      }
    }

    renderChart()
  }, [chart, resolvedTheme])

  if (error) {
    return (
      <div className="rounded-md border border-red-500 bg-red-100 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300">
        <p className="font-medium">Error rendering diagram</p>
        <pre className="mt-2 overflow-x-auto text-sm">{error}</pre>
        <pre className="mt-2 overflow-x-auto text-sm">{chart}</pre>
      </div>
    )
  }

  return (
    <div className={`mermaid-diagram overflow-auto ${className}`}>
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <div ref={mermaidRef} className="flex h-20 items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
        </div>
      )}
    </div>
  )
}
