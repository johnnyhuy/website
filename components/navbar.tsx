'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Car, Menu, X, type LucideIcon } from 'lucide-react'
import { allBlogs } from 'contentlayer/generated'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { navbar } from '@/data/siteData'

const ICON_MAP: Record<string, LucideIcon> = { Car }

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isMenuOpen])

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

  // Navbar logo: home -> yellow square, blog post -> post.frontmatter.icon (default Car),
  // otherwise -> Car fallback.
  const logoNode = useMemo(() => {
    if (pathname === '/') {
      return <span className="block h-3 w-3 bg-yellow-500" aria-hidden="true" />
    }
    let iconName: string | undefined
    if (pathname && pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '').split('/')[0]
      const post = allBlogs.find((b) => b.slug === slug)
      if (post?.icon) iconName = post.icon
    }
    const Icon: LucideIcon = (iconName && ICON_MAP[iconName]) || Car
    return (
      <Icon className="h-4 w-4 fill-yellow-500 text-yellow-500" strokeWidth={1.5} aria-hidden="true" />
    )
  }, [pathname])

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-6">
        <Link href="/" aria-label="Home">
          {logoNode}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navbar.navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={isActive(link.path) ? 'page' : undefined}
              className={`font-mono text-sm tracking-wide lowercase transition-colors ${
                isActive(link.path)
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="bg-background flex flex-col border-t md:hidden">
          {navbar.navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`border-b px-6 py-4 font-mono text-sm tracking-wide lowercase ${
                isActive(link.path)
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
