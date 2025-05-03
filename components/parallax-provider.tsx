"use client"

import { ParallaxProvider } from 'react-scroll-parallax'
import type { ReactNode } from 'react'

export interface ParallaxProviderWrapperProps {
  children: ReactNode
}

export function ParallaxProviderWrapper({ children }: ParallaxProviderWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

export default ParallaxProviderWrapper
