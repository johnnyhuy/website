"use client"

import { useTheme } from "next-themes"

export default function GitHubActivityGraph() {
  const { theme } = useTheme()

  // Placeholder colors based on theme
  const colors = {
    bg: theme === "dark" ? "#1e1e2e" : "#f8f9fa",
    less: theme === "dark" ? "#2a2a3c" : "#ebedf0",
    more: theme === "dark" ? "#4c4c6d" : "#c6e48b",
    most: theme === "dark" ? "#7272a5" : "#196127",
  }

  return (
    <div className="w-full h-full">
      <div className="text-xs text-muted-foreground mb-2">GitHub contributions in the last year</div>

      {/* Placeholder for GitHub activity graph */}
      <div className="w-full h-24 rounded-md overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 52 7">
          {Array.from({ length: 52 }).map((_, weekIndex) => (
            <g key={weekIndex} transform={`translate(${weekIndex}, 0)`}>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                // Generate random activity level
                const activityLevel = Math.floor(Math.random() * 4)
                let fillColor

                switch (activityLevel) {
                  case 0:
                    fillColor = colors.bg
                    break
                  case 1:
                    fillColor = colors.less
                    break
                  case 2:
                    fillColor = colors.more
                    break
                  case 3:
                    fillColor = colors.most
                    break
                  default:
                    fillColor = colors.bg
                }

                return (
                  <rect
                    key={dayIndex}
                    width="0.8"
                    height="0.8"
                    x="0.1"
                    y={dayIndex}
                    rx="0.2"
                    ry="0.2"
                    fill={fillColor}
                  />
                )
              })}
            </g>
          ))}
        </svg>
      </div>

      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.less }}></div>
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.more }}></div>
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.most }}></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
