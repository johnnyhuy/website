import Image from 'next/image'
import TechStack from './tech-stack'
import { experiences, formatDateRange } from '@/data/siteData'
import type { StaticImageData } from 'next/image'
import type { JSX } from 'react'
import sportsbet from '@/data/images/companies/sportsbet.png'
import afterpay from '@/data/images/companies/afterpay.png'
import enett from '@/data/images/companies/enett.png'
import { FaReact } from 'react-icons/fa'
import * as React from 'react'

interface Experience {
  company: string
  position: string
  title: string
  startDate: string
  endDate: string
  technologies: string[]
  responsibilities: string[]
}

// Function to map company to logo
const companyLogoMap: Record<string, StaticImageData> = {
  sportsbet,
  afterpay,
  enett,
}

function getLogoForCompany(company: string): StaticImageData | undefined {
  if (!company) return undefined
  const normalized = company.toLowerCase().replace(/[^a-z0-9]/g, '')
  return companyLogoMap[normalized]
}

function groupConsecutiveByCompany(experiences: Experience[]) {
  const groups: Array<{ company: string; logo: StaticImageData | React.ReactElement; roles: Experience[] }> = []
  let prevCompany = ''
  let currentGroup: any = null
  experiences.forEach((exp) => {
    if (exp.company !== prevCompany) {
      const logo = getLogoForCompany(exp.company)
      currentGroup = {
        company: exp.company,
        logo: logo ? logo : <FaReact className="text-2xl text-gray-400" />,
        roles: [exp],
      }
      groups.push(currentGroup)
      prevCompany = exp.company
    } else {
      currentGroup.roles.push(exp)
    }
  })
  return groups
}

export default function ExperienceTimeline() {
  const grouped = groupConsecutiveByCompany(experiences as Experience[])
  return (
    <div className="space-y-6 md:space-y-8">
      {grouped.map((group) => (
        <div key={group.company + group.roles[0].startDate} className="timeline-item">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="bg-secondary relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
              {React.isValidElement(group.logo) ? (
                group.logo
              ) : (
                <Image src={group.logo} alt={group.company} fill className="object-cover" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{group.company}</h3>
              {/* First role */}
              <div>
                <p className="text-lg font-medium">{group.roles[0].position}</p>
                <p className="text-muted-foreground mb-2 text-sm">{formatDateRange(group.roles[0].startDate, group.roles[0].endDate)}</p>
                <div className="mb-4 overflow-x-auto pb-2">
                  <TechStack technologies={group.roles[0].technologies} size="sm" />
                </div>
                <ul className="list-disc space-y-2 pl-5">
                  {group.roles[0].responsibilities.map((resp, index) => (
                    <li key={index} className="text-sm">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Child roles, if any */}
              {group.roles.length > 1 && (
                <div className="border-muted-foreground/30 mt-4 space-y-6 border-l-2 pl-6">
                  {group.roles.slice(1).map((role, index) => (
                    <div key={index} className="">
                      <p className="text-lg font-medium">{role.position}</p>
                      <p className="text-muted-foreground mb-2 text-sm">{formatDateRange(role.startDate, role.endDate)}</p>
                      <div className="mb-4 overflow-x-auto pb-2">
                        <TechStack technologies={role.technologies} size="sm" />
                      </div>
                      <ul className="list-disc space-y-2 pl-5">
                        {role.responsibilities.map((resp, index) => (
                          <li key={index} className="text-sm">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
