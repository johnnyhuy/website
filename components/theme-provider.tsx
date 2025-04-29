"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force a re-render on the client side to prevent hydration issues
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      {...props}
      enableSystem={true}
      enableColorScheme={true}
      attribute="class"
      storageKey="johnny-theme-preference"
    >
      {mounted ? children : null}
    </NextThemesProvider>
  )
}
