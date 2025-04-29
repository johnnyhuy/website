import Link from "next/link"
import type { Metadata } from "next"
import { getAllTechDocs, getTechDocsCategories } from "@/lib/techdocs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Book, FileText } from "lucide-react"
import TechIcon from "@/components/tech-icon"

export const metadata: Metadata = {
  title: "Tech Docs | Johnny Huynh",
  description: "Technical documentation and developer resources",
}

export default async function TechDocsPage() {
  const categories = await getTechDocsCategories()
  const recentDocs = await getAllTechDocs(5)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Technical Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Explore guides, tutorials, and technical documentation for developers.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <Card key={category.slug} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <CardDescription>{category.count} documents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 mb-4">
                {category.docs.slice(0, 3).map((doc) => (
                  <li key={doc.slug} className="text-sm">
                    <Link
                      href={`/techdocs/${category.slug}/${doc.slug}`}
                      className="flex items-center hover:text-accent"
                    >
                      <FileText className="h-3 w-3 mr-2" />
                      {doc.title}
                    </Link>
                  </li>
                ))}
                {category.docs.length > 3 && (
                  <li className="text-sm text-muted-foreground">+ {category.docs.length - 3} more</li>
                )}
              </ul>
              <Link
                href={`/techdocs/category/${category.slug}`}
                className="text-sm flex items-center text-accent hover:underline"
              >
                View all
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Documents */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Book className="h-5 w-5 mr-2" />
          Recently Updated
        </h2>
        <div className="space-y-4">
          {recentDocs.map((doc) => (
            <div key={doc.slug} className="border-b border-border pb-4 last:border-0">
              <h3 className="text-lg font-medium mb-1">
                <Link href={`/techdocs/${doc.category}/${doc.slug}`} className="hover:text-accent">
                  {doc.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {doc.tags.map((tag) => (
                    <div key={tag} className="flex items-center px-2 py-1 bg-secondary/50 text-xs rounded-md">
                      <TechIcon name={tag} size="sm" className="mr-1" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/techdocs/${doc.category}/${doc.slug}`}
                  className="text-sm flex items-center text-accent hover:underline"
                >
                  Read
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
