import type { StaticImageData } from 'next/image'
import sportsbet from '@/data/images/companies/sportsbet.png'
import afterpay from '@/data/images/companies/afterpay.png'
import enett from '@/data/images/companies/enett.png'

const companyLogoMap: Record<string, StaticImageData> = {
  sportsbet,
  afterpay,
  enett,
}

export function getLogoForCompany(company: string): StaticImageData | undefined {
  if (!company) return undefined
  const normalized = company
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes

  return companyLogoMap[normalized]
}

export { companyLogoMap }
