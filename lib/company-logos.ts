import sportsbet from '@/data/images/companies/sportsbet.png'
import afterpay from '@/data/images/companies/afterpay.png'
import enett from '@/data/images/companies/enett.png'
import funflicks from '@/data/images/companies/funflicks.png'
import tennisaustralia from '@/data/images/companies/tennis-australia.png'
import type { StaticImageData } from 'next/image'
import React from 'react'

interface CompanyLogoMap {
  [key: string]: StaticImageData | React.ReactElement
}

// Use lowercase, alphanumeric keys for robust matching
export const companyLogos: CompanyLogoMap = {
  sportsbet: sportsbet,
  afterpay: afterpay,
  enett: enett,
  tennisaustralia: tennisaustralia,
  funflicks: funflicks,
  // Add other company logos here, using lowercase alphanumeric keys
}

export function normalizeCompanyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}
