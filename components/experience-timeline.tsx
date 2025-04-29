import Image from "next/image"
import TechStack from "./tech-stack"

const experiences = [
  {
    company: "Sportsbet",
    logo: "/placeholder.svg?height=48&width=48",
    position: "Lead Cloud Engineer",
    period: "Dec 2021 - Present · > 2 yrs",
    technologies: ["AWS", "Kubernetes", "Terraform", "GitHub", "CI/CD", "Docker"],
    responsibilities: [
      "Collaborated with various application development teams as a key member of the Customer Platforms team at Sportsbet, providing robust cloud technology solutions.",
      "Championed the migration of internal tools to GitHub, optimising collaboration and streamlining workflows across teams.",
      "Served as a technical lead in a key portfolio project, utilising Ping Identity authentication platforms.",
      "Lead technical initiatives for the Customer Platforms team, enhancing cloud technology solutions and fostering a culture of engineering excellence.",
      "Spearheaded strategic initiatives such as the migration from Stash to GitHub, enabling streamlined workflows and improved collaboration.",
      "Partnered with multiple teams at Sportsbet to implement and maintain critical platform technologies such as Ping Identity and Kong.",
    ],
  },
  {
    company: "Afterpay",
    logo: "/placeholder.svg?height=48&width=48",
    position: "Senior Cloud Engineer",
    period: "Dec 2020 - Dec 2021 · 1 yr 1 mo",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "PCI Compliance"],
    responsibilities: [
      "Worked on enterprise cloud services to provide payment solutions to telecommunication and health services as a member of the PayNow Touchcorp project team.",
      "Lead an AWS cloud migration from VMware Cloud on AWS.",
      "Drove AWS cloud migrations and containerised legacy telecommunications applications for PCI compliance, focusing on Optus & Vodafone projects.",
      "Implemented a zero-trust mTLS infrastructure for NAB HICAPS terminal applications.",
    ],
  },
  {
    company: "eNett International",
    logo: "/placeholder.svg?height=48&width=48",
    position: "DevOps Engineer",
    period: "Oct 2020 - Dec 2020 · 3 mos",
    technologies: ["Azure", "Kubernetes", "CI/CD", "DevOps"],
    responsibilities: [
      "Contributed to the development of scalable cloud and DevOps engineering solutions as a member of the container platform team.",
      "Contributed to Azure cloud migrations and the automation of CI/CD pipelines using Kubernetes.",
    ],
  },
  {
    company: "eNett International",
    logo: "/placeholder.svg?height=48&width=48",
    position: "Developer",
    period: "Oct 2019 - Oct 2020 · 1 yr 1 mo",
    technologies: ["Azure", "Kubernetes", "DevOps", "CI/CD", "Grafana", "Prometheus"],
    responsibilities: [
      "Contributed as a permanent member of the internal DevOps team.",
      "Pioneered new CI/CD automation with Azure DevOps.",
      "Contributed to a Travelport cloud migration to Azure Kubernetes Services.",
      "Lead monitoring capabilities with Grafana and Prometheus on production systems.",
    ],
  },
  {
    company: "eNett International",
    logo: "/placeholder.svg?height=48&width=48",
    position: "Associate Developer",
    period: "Jan 2019 - Sep 2019 · 9 mos",
    technologies: ["Azure", "Terraform", "Infrastructure as Code"],
    responsibilities: [
      "Ensured the internal DevOps team had the necessary support to provide efficient and effective solutions.",
      "Gained proficiency in building Infra as Code (IaC) with Terraform and Azure Resource Manager.",
      "Developed infrastructure and configuration as code, architected with Microsoft Azure as the cloud vendor.",
    ],
  },
]

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
