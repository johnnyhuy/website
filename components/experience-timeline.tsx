import Image from 'next/image'
import { TagIconGroup } from '@/components/tag-icon-group'
import type { StaticImageData } from 'next/image'
import sportsbet from '@/data/images/companies/sportsbet.png'
import afterpay from '@/data/images/companies/afterpay.png'
import enett from '@/data/images/companies/enett.png'
import { FaReact } from 'react-icons/fa'
import * as React from 'react'
import { experiences, formatDateRange } from '@/data/siteData'
import { formatDuration } from '@/data/utils'

interface Experience {
  company: string
  position: string
  title: string
  startDate: string
  endDate: string
  technologies: string[]
  description: string
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
  const groups: Array<{
    company: string
    logo: StaticImageData | React.ReactElement
    roles: Experience[]
  }> = []
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
      <ul className="pl-4">
        {grouped.map((group, index) => (
          <li
            key={group.company + group.roles[0].startDate}
            className="relative border-l-2 border-l-gray-900 pb-8 pl-8 dark:border-l-gray-600"
          >
            {/* Timeline circle */}
            <div
              className={
                `absolute top-[14px] left-[-10px] flex items-center justify-center rounded-full ` +
                (index === 0
                  ? 'border-2 border-gray-900 bg-yellow-500 dark:border-gray-600'
                  : 'border-2 border-gray-900 bg-white dark:border-gray-600 dark:bg-gray-800')
              }
              aria-hidden="true"
              style={{ width: 18, height: 18 }}
            ></div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                {React.isValidElement(group.logo) ? (
                  group.logo
                ) : (
                  <Image src={group.logo} alt={group.company} fill className="object-cover" />
                )}
              </div>
              <div className="flex-1 pt-3 md:max-w-3xl">
                <h3 className="mb-2 text-xl font-bold">{group.company}</h3>
                {/* First role */}
                <div>
                  <p className="text-lg font-medium">{group.roles[0].position}</p>
                  <p className="mb-4 text-sm text-gray-400">
                    {formatDateRange(group.roles[0].startDate, group.roles[0].endDate)}
                    {(() => {
                      const duration = formatDuration(
                        group.roles[0].startDate,
                        group.roles[0].endDate
                      )
                      return duration ? ` · ${duration}` : ''
                    })()}
                  </p>
                  <div className="mb-4 overflow-x-auto pb-2">
                    <TagIconGroup technologies={group.roles[0].technologies} size="md" />
                  </div>
                  <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
                    {group.roles[0].description}
                  </p>
                  <ul className="ml-5 list-disc space-y-1">
                    {group.roles[0].responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                {/* Child roles, if any */}
                {group.roles.length > 1 && (
                  <div className="mt-8 flex flex-col gap-8">
                    {group.roles.slice(1).map((role, index) => (
                      <div key={index} className="">
                        <p className="text-lg font-medium">{role.position}</p>
                        <p className="mb-4 text-sm text-gray-500">
                          {formatDateRange(role.startDate, role.endDate)}
                          {(() => {
                            const duration = formatDuration(role.startDate, role.endDate)
                            return duration ? ` · ${duration}` : ''
                          })()}
                        </p>
                        <div className="mb-4 overflow-x-auto pb-2">
                          <TagIconGroup technologies={role.technologies} size="md" />
                        </div>
                        <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
                          {role.description}
                        </p>
                        <ul className="ml-5 list-disc space-y-1">
                          {role.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
