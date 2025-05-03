import Image from 'next/image'
import React from 'react'
import { companyLogos, normalizeCompanyName } from '@/lib/company-logos'
import { LuBriefcase } from 'react-icons/lu'

interface CompanyLogoProps {
  companyName: string
  className?: string
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyName, className }) => {
  const normalizedName = normalizeCompanyName(companyName)
  const logo = companyLogos[normalizedName]

  if (!logo) {
    console.warn(`Logo not found for company: ${companyName} (normalized: ${normalizedName})`)
    return (
      <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-md ${className}`}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
          <LuBriefcase className="h-full w-full p-2 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    )
  }

  return (
    <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-md ${className}`}>
      {React.isValidElement(logo) ? (
        logo
      ) : (
        <Image src={logo} alt={companyName} fill className="object-cover" />
      )}
    </div>
  )
}
