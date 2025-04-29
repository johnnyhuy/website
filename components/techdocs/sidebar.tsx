'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Search, Book, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface TechDocsCategory {
  name: string
  slug: string
  count: number
  docs: {
    title: string
    slug: string
  }[]
}

interface TechDocsSidebarProps {
  categories: TechDocsCategory[]
}

export default function TechDocsSidebar({ categories }: TechDocsSidebarProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Initialize expanded state based on current path
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {}

    categories.forEach((category) => {
      // Check if any doc in this category is active
      const isActive = category.docs.some(
        (doc) => pathname === `/techdocs/${category.slug}/${doc.slug}`
      )
      initialExpandedState[category.slug] = isActive
    })

    setExpandedCategories(initialExpandedState)
  }, [categories, pathname])

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Toggle category expansion
  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  // Filter categories and docs based on search query
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      docs: category.docs.filter((doc) =>
        doc.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) || category.docs.length > 0
    )

  // Extract current category and doc from pathname
  const currentCategory = pathname.split('/')[2]
  const currentDoc = pathname.split('/')[3]

  return (
    <>
      {/* Mobile menu toggle - Fixed position for better mobile UX */}
      <div className="fixed top-20 left-4 z-30 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle documentation menu"
          className="bg-background/80 backdrop-blur-xs"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar - Overlay style for mobile */}
      <aside
        className={cn(
          'bg-background/95 border-border fixed inset-0 top-16 z-20 overflow-y-auto border-r backdrop-blur-xs transition-all duration-300 ease-in-out md:right-auto md:left-0 md:z-10 md:w-[250px] md:bg-transparent md:backdrop-blur-none',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="bg-background border-border sticky top-0 z-10 border-b p-4">
          <Link href="/techdocs" className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Book className="h-5 w-5" />
            <span>Tech Docs</span>
          </Link>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
            <Input
              type="search"
              placeholder="Search docs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/techdocs"
                className={cn(
                  'hover:bg-secondary flex items-center rounded-md px-2 py-2.5 text-base md:text-sm',
                  pathname === '/techdocs' ? 'bg-secondary font-medium' : ''
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Overview
              </Link>
            </li>

            {filteredCategories.map((category) => (
              <li key={category.slug} className="mt-4">
                <div
                  className="hover:bg-secondary flex cursor-pointer items-center justify-between rounded-md px-2 py-2.5 text-base font-medium md:text-sm"
                  onClick={() => toggleCategory(category.slug)}
                >
                  <Link
                    href={`/techdocs/category/${category.slug}`}
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {category.name}
                    <span className="text-muted-foreground ml-1 text-xs">({category.count})</span>
                  </Link>
                  {expandedCategories[category.slug] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>

                {expandedCategories[category.slug] && category.docs.length > 0 && (
                  <ul className="border-border mt-1 ml-4 space-y-1 border-l pl-2">
                    {category.docs.map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          href={`/techdocs/${currentCategory}/${doc.slug}`}
                          className={`flex items-center rounded-full px-3 py-2 text-sm transition-colors ${
                            currentDoc === doc.slug
                              ? 'bg-secondary/70 font-medium'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {doc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
