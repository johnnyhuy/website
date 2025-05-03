'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'
import { EnhancedGlassEffect } from './enhanced-glass-effect'
import { navbar } from '@/data/siteData'
import { profile } from '@/data/siteData'
import Johnny from '@/data/images/johnny.svg'

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
      className={`fixed top-0 right-0 left-0 z-50 duration-300 ${
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <EnhancedGlassEffect isActive={isScrolled} />
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src={Johnny}
            alt={navbar.logo.alt}
            width={32}
            height={32}
            className={`duration-300 ${isScrolled ? 'rounded-lg' : 'rounded-md'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center rounded-lg px-3 py-2 duration-200 ${
                pathname === link.path || pathname.startsWith(`${link.path}/`)
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-gray-400 hover:text-gray-900 focus:outline-none dark:text-gray-200 dark:hover:text-gray-100'
              } `}
            >
              <span>{link.name}</span>
            </Link>
          ))}
          <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="sm"
              className="ml-2 cursor-pointer bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500"
            >
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
              className={`flex items-center rounded-lg px-4 py-3 duration-200 ${
                pathname === '/'
                  ? 'bg-secondary/70 font-medium text-gray-900 dark:text-gray-900'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-yellow-500 focus:ring-yellow-400 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-yellow-600'
              } `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="">Home</span>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center rounded-lg px-4 py-3 duration-200 ${
                  pathname === link.path || pathname.startsWith(`${link.path}/`)
                    ? 'bg-secondary/70 font-medium text-gray-900 dark:text-gray-900'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-yellow-500 focus:ring-yellow-400 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-yellow-600'
                } `}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="">{link.name}</span>
              </Link>
            ))}
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                variant="default"
                className="w-full bg-yellow-500 py-3 text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:ring-yellow-400 focus:outline-none dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500"
              >
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
