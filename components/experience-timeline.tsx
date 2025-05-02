import Image from "next/image"
import TechStack from "./tech-stack"
import { experiences } from '@/data/siteData'
import type { StaticImageData } from 'next/image'
import sportsbet from '@/data/images/companies/sportsbet.png'
import afterpay from '@/data/images/companies/afterpay.png'
import enett from '@/data/images/companies/enett.png'

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

function groupConsecutiveByCompany(experiences: typeof experiences) {
  const groups: Array<{ company: string; logo: StaticImageData | string | undefined; roles: typeof experiences }> = [];
  let prevCompany = '';
  let currentGroup: any = null;
  experiences.forEach((exp) => {
    if (exp.company !== prevCompany) {
      currentGroup = {
        company: exp.company,
        logo: getLogoForCompany(exp.company) || '/placeholder.svg',
        roles: [exp],
      };
      groups.push(currentGroup);
      prevCompany = exp.company;
    } else {
      currentGroup.roles.push(exp);
    }
  });
  return groups;
}

export default function ExperienceTimeline() {
  const grouped = groupConsecutiveByCompany(experiences);
  return (
    <div className="space-y-6 md:space-y-8">
      {grouped.map((group) => (
        <div key={group.company + group.roles[0].period} className="timeline-item">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="relative h-12 w-12 shrink-0 rounded-md overflow-hidden bg-secondary">
              <Image src={group.logo} alt={group.company} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{group.company}</h3>
              {/* First role */}
              <div>
                <p className="text-lg font-medium">{group.roles[0].position}</p>
                <p className="text-sm text-muted-foreground mb-2">{group.roles[0].period}</p>
                <div className="mb-4 overflow-x-auto pb-2">
                  <TechStack technologies={group.roles[0].technologies} size="sm" />
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {group.roles[0].responsibilities.map((resp) => (
                    <li key={resp} className="text-sm">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Child roles, if any */}
              {group.roles.length > 1 && (
                <div className="mt-4 space-y-6 border-l-2 border-muted-foreground/30 pl-6">
                  {group.roles.slice(1).map((role, idx) => (
                    <div key={role.position + role.period} className="">
                      <p className="text-lg font-medium">{role.position}</p>
                      <p className="text-sm text-muted-foreground mb-2">{role.period}</p>
                      <div className="mb-4 overflow-x-auto pb-2">
                        <TechStack technologies={role.technologies} size="sm" />
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        {role.responsibilities.map((resp) => (
                          <li key={resp} className="text-sm">
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
  );
}
