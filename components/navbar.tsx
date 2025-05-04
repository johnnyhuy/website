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

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if mobile and handle resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Handle resize events
    const handleResize = () => {
      checkIfMobile()

      // Close menu if screen becomes desktop size
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  // Handle body overflow
  useEffect(() => {
    // Only apply overflow hidden on mobile when menu is open
    if (isMenuOpen && isMobile) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup function to ensure we remove the class when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen, isMobile])

  const toggleMenu = (open: boolean): void => {
    setIsMenuOpen(open)
  }

  const navLinks = navbar.navLinks

  return (
    <header className="glass-nav fixed top-0 right-0 left-0 z-50 py-2">
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
        <nav className="hidden items-center space-x-1 text-sm md:flex">
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
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center rounded-md bg-yellow-500 px-3 py-2 text-sm text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-900 dark:hover:text-gray-100"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleMenu(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Improved for better mobile experience */}
      {isMenuOpen && (
        <nav className="inset-0 z-40 container flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`rounded-md px-4 py-3 text-center text-sm ${
                pathname === link.path || pathname.startsWith(`${link.path}/`)
                  ? 'bg-gray-100 font-medium text-gray-900 dark:text-gray-100'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-yellow-500 focus:ring-yellow-400 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-yellow-600'
              } `}
              onClick={() => toggleMenu(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => toggleMenu(false)}
          >
            <Button
              variant="default"
              className="w-full bg-yellow-500 py-3 text-gray-900 hover:bg-yellow-400 hover:text-gray-900 focus:ring-yellow-400 focus:outline-none dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-900"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
