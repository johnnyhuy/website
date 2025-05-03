import { isTechDoc } from './techdocs'

// This is a mock implementation. In a real application, you would fetch this data from a CMS or database.

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
    title: string
  }
  tags: string[]
  image: string
  type?: string
}

// Mock blog posts data
const allPosts: BlogPost[] = [
  // Your existing blog posts...
  {
    id: 1,
    slug: 'migrating-from-jenkins-to-github-actions',
    title: 'Migrating from Jenkins to GitHub Actions',
    excerpt:
      'A comprehensive guide on how to migrate your CI/CD pipelines from Jenkins to GitHub Actions with real-world examples.',
    content: 'Full content here...',
    date: '2023-10-15',
    readTime: '8 min read',
    author: {
      name: 'Johnny Huynh',
      avatar: '/images/me.jpg',
      title: 'Principal Engineer',
    },
    tags: ['DevOps', 'CI/CD', 'GitHub'],
    image: '/placeholder.svg?height=600&width=1200',
    type: 'blog',
  },
  // Add more blog posts...
]

// Get all blog posts (excluding tech docs)
export async function getAllBlogPosts() {
  return allPosts.filter((post) => !isTechDoc(post))
}

// Get a single blog post by ID
export async function getBlogPostById(id: number) {
  return allPosts.find((post) => post.id === id && !isTechDoc(post))
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string) {
  return allPosts.filter((post) => post.tags.includes(tag) && !isTechDoc(post))
}
