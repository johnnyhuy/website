'use client'
// react-scan must be imported before react
import { scan } from 'react-scan'
import { JSX, useEffect } from 'react'

export interface ReactScanProps {}

export function ReactScan(_: ReactScanProps): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true,
    })
  }, [])
  return <></>
}
