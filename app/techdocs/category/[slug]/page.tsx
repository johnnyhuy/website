import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTechDocsByCategory, getTechDocsCategories } from "@/lib/techdocs"
import { ArrowRight } from "lucide-react"
import TechIcon from "@/components/tech-icon"

interface TechDocsCategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TechDocsCategoryPageProps): Promise<Metadata> {
  const categories = await getTechDocsCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    return {
      title: "Category Not Found | Tech Docs",
    }
  }

  return {
    title: `${category.name} | Tech Docs`,
    description: `Technical documentation and resources for ${category.name}`,
  }
}

export async function generateStaticParams() {
  const categories = await getTechDocsCategories()

  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function TechDocsCategoryPage({ params }: TechDocsCategoryPageProps) {
  const { slug } = params
  const categories = await getTechDocsCategories()
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    notFound()
  }

  const docs = await getTechDocsByCategory(slug)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-muted-foreground">{category.count} documents in this category</p>
      </div>

      <div className="space-y-6">
        {docs.map((doc) => (
          <div key={doc.slug} className="border-b border-border pb-6 last:border-0">
            <h2 className="text-2xl font-medium mb-2">
              <Link href={`/techdocs/${category.slug}/${doc.slug}`} className="hover:text-accent">
                {doc.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">{doc.description}</p>
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
                href={`/techdocs/${category.slug}/${doc.slug}`}
                className="flex items-center text-accent hover:underline"
              >
                Read document
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
