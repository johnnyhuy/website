import Image from "next/image"
import TechStack from "./tech-stack"
import { experiences } from "@/data/experience"

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6 md:space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="relative h-12 w-12 shrink-0 rounded-md overflow-hidden bg-secondary">
              <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-lg font-medium">{exp.position}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>

              {/* Tech Stack */}
              <div className="mb-4 overflow-x-auto pb-2">
                <TechStack technologies={exp.technologies} size="sm" />
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
