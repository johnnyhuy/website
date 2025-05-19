'use client'

import { useState, useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import { getTagIcon } from '@/components/ui/tag-icon'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { LuFileText } from 'react-icons/lu'

export interface WakaTimeChartProps {
  omitLanguages?: string[]
}

interface Language {
  name: string
  percent: number
  fill: string
}

const chartConfig: ChartConfig = {}

const WakaTimeChart = ({ omitLanguages = [] }: WakaTimeChartProps) => {
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
          .map((lang: { name: string; percent: number; color: string }) => ({
            name: lang.name,
            percent: Math.round(lang.percent),
            fill: lang.color,
          }))
        setLanguages(filteredLanguages)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setIsLoading(false)
      })
  }, [omitLanguages])

  const CustomYAxisTick = (props: { x: number; y: number; payload: { value: string } }) => {
    const { x, y, payload } = props
    const IconComponent = getTagIcon(payload.value.toLowerCase())
    return (
      <g transform={`translate(${x},${y})`}>
        <title>{payload.value}</title>
        <circle cx="-18" cy="0" r="14" fill="#1A1A1A" />
        <foreignObject width={16} height={16} x={-26} y={-8}>
          {IconComponent ? (
            <IconComponent size={16} color="white" />
          ) : (
            <LuFileText
              className="h-3 w-3 text-white"
              style={{
                position: 'absolute',
                left: -22,
                top: -6,
              }}
            />
          )}
        </foreignObject>
      </g>
    )
  }

  if (isLoading) {
    return (
      <div className="h-32 w-full">
        <div className="h-full w-full animate-pulse bg-gray-100 dark:bg-gray-800" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-32 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
        <div className="text-center text-sm text-gray-500">Unable to load coding activity</div>
      </div>
    )
  }

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
            tick={(props) => <CustomYAxisTick {...props} />}
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
      <div className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
        languages all time spent
      </div>
    </div>
  )
}

export default WakaTimeChart
