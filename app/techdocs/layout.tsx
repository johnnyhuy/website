import type React from "react"
import type { Metadata } from "next"
import TechDocsSidebar from "@/components/techdocs/sidebar"
import { getTechDocsCategories } from "@/lib/techdocs"

export const metadata: Metadata = {
  title: "Tech Docs | Johnny Huynh",
  description: "Technical documentation and developer resources",
}

export default async function TechDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getTechDocsCategories()

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-16">
      <TechDocsSidebar categories={categories} />
      <div className="flex-1 md:pl-[250px] pt-8">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Add padding for mobile sidebar toggle */}
          <div className="md:hidden h-10"></div>
          {children}
        </main>
      </div>
    </div>
  )
}
