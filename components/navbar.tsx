'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code, Laptop, BookOpen, MessageSquare, Mail, Book } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { EnhancedGlassEffect } from './enhanced-glass-effect'
import { navbar } from '@/data/navbar'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = navbar.navLinks

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <EnhancedGlassEffect isActive={isScrolled} />
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/images/johnny.svg"
            alt="Johnny Huynh"
            width={32}
            height={32}
            className={`transition-all duration-300 ${isScrolled ? 'rounded-full' : 'rounded-md'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center rounded-full px-3 py-2 transition-colors ${
                pathname === link.path || pathname.startsWith(`${link.path}/`)
                  ? 'bg-secondary/70 font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-lg">{link.name}</span>
            </Link>
          ))}
          <Link href="https://linkedin.com/in/johnnyhuy" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/80 ml-2">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Improved for better mobile experience */}
      {isMenuOpen && (
        <div className="bg-background/95 animate-in fixed inset-0 top-16 z-40 backdrop-blur-xs md:hidden">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className={`flex items-center rounded-full px-4 py-3 transition-colors ${
                pathname === '/'
                  ? 'bg-secondary/70 font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">Home</span>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center rounded-full px-4 py-3 transition-colors ${
                  pathname === link.path || pathname.startsWith(`${link.path}/`)
                    ? 'bg-secondary/70 font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg">{link.name}</span>
              </Link>
            ))}
            <Link
              href="https://linkedin.com/in/johnnyhuy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="default" className="bg-accent hover:bg-accent/80 w-full py-3">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
