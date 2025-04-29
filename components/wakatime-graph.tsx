'use client'

import React, { useState, useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton'
import { getLanguageIcon } from '@/components/language-icons'

interface Language {
  name: string
  percent: number
  fill: string
}

interface Props {
  omitLanguages?: string[]
}

const chartConfig: ChartConfig = {}

const WakatimeGraph = ({ omitLanguages = [] }: Props) => {
  const [languages, setLanguages] = useState<Language[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const languageLimit = 3

  useEffect(() => {
    fetch('https://wakatime.com/share/@johnnyhuy/78a8132a-040a-46ff-9002-a79120541a01.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data')
        return response.json()
      })
      .then((data) => {
        const filteredLanguages = data.data
          .filter((lang: { name: string }) => !omitLanguages.includes(lang.name))
          .slice(0, languageLimit)
          .map((lang: { name: string; percent: number; color: string }, index: number) => ({
            name: lang.name,
            percent: Math.round(lang.percent), // round percentage
            fill: lang.color,
          }))
        setLanguages(filteredLanguages)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setIsLoading(false)
      })
  }, [])

  const CustomYAxisTick = ({ x, y, payload }: any) => {
    const icon = getLanguageIcon(payload.value.toLowerCase())
    return (
      <g transform={`translate(${x},${y})`}>
        <title>{payload.value}</title>
        <circle cx="-18" cy="0" r="14" fill="#1A1A1A" />
        <foreignObject width={16} height={16} x={-26} y={-8}>
          {icon ? React.cloneElement(icon, { size: 16, color: 'white' }) : null}
        </foreignObject>
        {!icon && (
          <text
            x={-18}
            y={4}
            fill="white"
            fontSize="12"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {payload.value.charAt(0).toUpperCase()}
          </text>
        )}
      </g>
    )
  }

  if (isLoading)
    return (
      <div className="size-full rounded-3xl p-4">
        <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          languages all time spent
        </div>
        <div className="space-y-1.5">
          {[...Array(languageLimit)].map((_, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <Skeleton className="size-7 rounded-full" />
              <div className="flex-1">
                <Skeleton
                  className="h-8 w-full rounded-lg"
                  style={{ width: `${100 * Math.pow(0.6, index)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  if (error) return <div>Error: {error}</div>

  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="h-32 w-full p-4">
        <BarChart
          accessibilityLayer
          data={languages}
          layout="vertical"
          margin={{ left: -10, right: 10 }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            width={50}
            tick={<CustomYAxisTick />}
          />
          <XAxis type="number" hide />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="percent"
            fill="var(--color-hours)"
            radius={[14, 14, 14, 14]}
            isAnimationActive={false}
            barSize={14}
          >
            <LabelList
              dataKey="percent"
              position="right"
              formatter={(value: number) => `${Math.round(value)}%`}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        languages all time spent
      </div>
    </div>
  )
}

export default WakatimeGraph
