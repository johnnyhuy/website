'use client'

import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

const lightVars = {
  background: 'transparent',
  primaryColor: '#f2f2f2',
  primaryBorderColor: '#737373',
  primaryTextColor: '#0d0d0d',
  secondaryColor: '#e5e5e5',
  tertiaryColor: '#fafafa',
  lineColor: '#595959',
  textColor: '#0d0d0d',
  nodeBorder: '#595959',
  clusterBkg: '#f7f7f7',
  clusterBorder: '#a3a3a3',
  edgeLabelBackground: '#ffffff',
  actorBkg: '#f2f2f2',
  actorBorder: '#595959',
  actorTextColor: '#0d0d0d',
  signalColor: '#0d0d0d',
  signalTextColor: '#0d0d0d',
  labelBoxBkgColor: '#f2f2f2',
  labelTextColor: '#0d0d0d',
  loopTextColor: '#404040',
  noteBkgColor: '#fef08a',
  noteTextColor: '#0d0d0d',
  noteBorderColor: '#a16207',
}

const darkVars = {
  background: 'transparent',
  primaryColor: '#1a1a1a',
  primaryBorderColor: '#737373',
  primaryTextColor: '#e8e8e8',
  secondaryColor: '#262626',
  tertiaryColor: '#141414',
  lineColor: '#a3a3a3',
  textColor: '#e8e8e8',
  nodeBorder: '#a3a3a3',
  clusterBkg: '#1a1a1a',
  clusterBorder: '#525252',
  edgeLabelBackground: '#141414',
  actorBkg: '#1a1a1a',
  actorBorder: '#a3a3a3',
  actorTextColor: '#e8e8e8',
  signalColor: '#e8e8e8',
  signalTextColor: '#e8e8e8',
  labelBoxBkgColor: '#1a1a1a',
  labelTextColor: '#e8e8e8',
  loopTextColor: '#a3a3a3',
  noteBkgColor: '#a16207',
  noteTextColor: '#0d0d0d',
  noteBorderColor: '#eab308',
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const { resolvedTheme } = useTheme()
  const uniqueId = `mermaid-${useId().replace(/:/g, '')}`

  useEffect(() => {
    const isDark = resolvedTheme === 'dark'

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        ...(isDark ? darkVars : lightVars),
        fontFamily: 'var(--font-plex-mono), ui-monospace, monospace',
        fontSize: '14px',
      },
      flowchart: { curve: 'linear', htmlLabels: true },
      securityLevel: 'loose',
    })

    const renderChart = async () => {
      if (!chart || typeof chart !== 'string' || chart.trim() === '') {
        setError('Empty or invalid diagram content')
        return
      }

      try {
        setError(null)
        const { svg } = await mermaid.render(uniqueId, chart.trim())
        setSvgContent(svg)
      } catch (err) {
        console.error('Mermaid rendering error:', err)
        setError(`Failed to render diagram: ${err instanceof Error ? err.message : 'Unknown error'}`)
      }
    }

    renderChart()
  }, [chart, resolvedTheme, uniqueId])

  if (error) {
    return (
      <div className="border border-red-500 p-4 text-red-800 dark:text-red-200">
        <p className="font-mono text-sm font-medium">Error rendering diagram</p>
        <pre className="mt-2 overflow-x-auto text-sm">{error}</pre>
        <pre className="mt-2 overflow-x-auto text-sm">{chart}</pre>
      </div>
    )
  }

  return (
    <div className={`mermaid-diagram overflow-auto ${className}`} role="img" aria-label="Diagram">
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <div className="flex h-20 items-center justify-center">
          <span className="mono-label">rendering diagram</span>
        </div>
      )}
    </div>
  )
}
