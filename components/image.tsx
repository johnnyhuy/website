'use client'

import { useEffect, useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

const basePath = process.env.BASE_PATH

const Image = ({ src, alt, className, ...rest }: ImageProps) => {
  const [open, setOpen] = useState(false)
  const fullSrc = `${basePath || ''}${src}`

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const openModal = () => setOpen(true)

  return (
    <>
      <NextImage
        src={fullSrc}
        alt={alt || ''}
        role="button"
        tabIndex={0}
        aria-label={alt ? `View full size: ${alt}` : 'View full size image'}
        onClick={openModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openModal()
          }
        }}
        className={cn('cursor-zoom-in', className)}
        {...rest}
      />
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Full size image'}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fullSrc as string}
            alt={alt || ''}
            className="max-h-[90vh] max-w-full border border-[var(--color-border)] object-contain"
          />
        </div>
      ) : null}
    </>
  )
}

export default Image
