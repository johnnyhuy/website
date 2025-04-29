import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTechDoc, getAllTechDocs } from "@/lib/techdocs"
import { ArrowLeft, Calendar, Clock, FileText } from "lucide-react"
import TechIcon from "@/components/tech-icon"
import TableOfContents from "@/components/techdocs/table-of-contents"

interface TechDocPageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateMetadata({ params }: TechDocPageProps): Promise<Metadata> {
  const doc = await getTechDoc(params.category, params.slug)

  if (!doc) {
    return {
      title: "Document Not Found | Tech Docs",
    }
  }

  return {
    title: `${doc.title} | Tech Docs`,
    description: doc.description,
  }
}

export async function generateStaticParams() {
  const docs = await getAllTechDocs()

  return docs.map((doc) => ({
    category: doc.category,
    slug: doc.slug,
  }))
}

export default async function TechDocPage({ params }: TechDocPageProps) {
  const { category, slug } = params
  const doc = await getTechDoc(category, slug)

  if (!doc) {
    notFound()
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <article className="flex-1">
        <Link
          href={`/techdocs/category/${category}`}
          className="inline-flex items-center text-sm mb-6 hover:text-accent transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {doc.categoryName}
        </Link>

        <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Calendar className="mr-1 h-3 w-3" />
          <span>{doc.date}</span>
          <span className="mx-2">•</span>
          <Clock className="mr-1 h-3 w-3" />
          <span>{doc.readTime}</span>
          <span className="mx-2">•</span>
          <FileText className="mr-1 h-3 w-3" />
          <span>Last updated: {doc.updatedAt}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {doc.tags.map((tag) => (
            <div key={tag} className="flex items-center px-2 py-1 bg-secondary/50 text-xs rounded-md">
              <TechIcon name={tag} size="sm" className="mr-1" />
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
      </article>

      <aside className="w-full lg:w-64 lg:shrink-0">
        <div className="sticky top-24">
          <TableOfContents headings={doc.headings} />
        </div>
      </aside>
    </div>
  )
}
