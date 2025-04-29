import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock blog posts data for the homepage
const featuredPosts = [
  {
    id: 1,
    title: "Migrating from Jenkins to GitHub Actions",
    excerpt:
      "A comprehensive guide on how to migrate your CI/CD pipelines from Jenkins to GitHub Actions with real-world examples.",
    date: "2023-10-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["DevOps", "CI/CD", "GitHub"],
  },
  {
    id: 2,
    title: "Implementing Zero-Trust mTLS in Kubernetes",
    excerpt:
      "Learn how to implement a zero-trust mutual TLS infrastructure for your applications running in Kubernetes.",
    date: "2023-09-22",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Kubernetes", "Security", "mTLS"],
  },
  {
    id: 3,
    title: "Cloud-Agnostic Architecture: Best Practices",
    excerpt:
      "Explore the best practices for designing cloud-agnostic solutions that can run on any cloud provider without major modifications.",
    date: "2023-08-10",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Cloud", "Architecture", "AWS", "Azure", "GCP"],
  },
]

export default function BlogPostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="mr-1 h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link href={`/blog/${post.id}`}>
              <div className="flex items-center text-sm font-medium hover:underline">
                Read more
                <svg
                  className="ml-1 h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
