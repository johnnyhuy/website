// Utility to normalize and format dates
export function normalizeDate(input: string): string | undefined {
  if (!input) return undefined
  // Try to parse common formats: 'Dec 2021', '2021', 'Present', etc.
  if (/present/i.test(input)) return 'Present'
  // Try month-year (e.g. Dec 2021)
  const monthYearMatch = input.match(
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[ .-]*(\d{4})$/i
  )
  if (monthYearMatch) {
    const date = new Date(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`)
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
  }
  // Try year only
  const yearMatch = input.match(/^\d{4}$/)
  if (yearMatch) return input
  // Fallback: return as-is
  return input
}

export function formatDateRange(start: string, end: string): string {
  const normStart = normalizeDate(start)
  const normEnd = normalizeDate(end)
  // If both are present and in the same year, show as "Jan–Mar 2021"
  if (normStart && normEnd && normStart !== 'Present' && normEnd !== 'Present') {
    // Try to extract years
    const startYear = normStart.match(/\d{4}$/)?.[0]
    const endYear = normEnd.match(/\d{4}$/)?.[0]
    if (startYear && endYear && startYear === endYear) {
      // Try to extract months
      const startMonth = normStart.match(/^[A-Za-z]{3}/)?.[0]
      const endMonth = normEnd.match(/^[A-Za-z]{3}/)?.[0]
      if (startMonth && endMonth) {
        return `${startMonth} – ${endMonth} ${startYear}`
      }
    }
    return `${normStart} – ${normEnd}`
  }
  if (normStart && normEnd && normEnd === 'Present') {
    // "Jan 2021 – Present" or "2021 – Present"
    return `${normStart} – Present`
  }
  if (normStart) return normStart
  if (normEnd) return normEnd
  return ''
}

export function formatDuration(start: string, end: string, now: Date = new Date()): string {
  // Normalize dates
  const normStart = normalizeDate(start)
  const normEnd = normalizeDate(end)
  if (!normStart) return ''
  // Parse start
  let startDate: Date | undefined
  let endDate: Date | undefined
  // Try parsing as "Mon YYYY" or "YYYY"
  const parse = (str: string): Date | undefined => {
    if (str === 'Present') return undefined
    const monthYear = str.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/)
    if (monthYear) return new Date(`${monthYear[1]} 1, ${monthYear[2]}`)
    const year = str.match(/^(\d{4})$/)
    if (year) return new Date(`${year[1]}-01-01`)
    return undefined
  }
  startDate = parse(normStart)
  endDate = normEnd === 'Present' ? now : parse(normEnd ?? '')
  if (!startDate || !endDate) return ''
  // Calculate diff
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  let years = Math.floor(months / 12)
  months = months % 12
  if (years >= 3 && months === 0) return `>${years} years`
  if (years >= 2) return `${years} yrs${months > 0 ? ` ${months} mos` : ''}`
  if (years === 1) return months > 0 ? `1 yr ${months} mos` : '1 yr'
  if (months > 0) return `${months} mos`
  return '<1 mo'
}

/**
 * Generates a background color based on a string seed (like a project name)
 * Returns a tailwind-compatible background color class for both light and dark modes
 * @param seed The string to use as a seed (e.g., project name)
 * @param opacity Optional opacity value (0-100)
 * @returns A string with Tailwind CSS classes for background
 */
export function generateBackgroundColor(seed: string, opacity: number = 10): string {
  // Generate a hash from the seed string
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Define color palettes for light and dark modes
  // Using pastel colors for light mode and deeper colors for dark mode
  const lightColors = [
    'bg-blue-50',
    'bg-indigo-50',
    'bg-purple-50',
    'bg-pink-50',
    'bg-red-50',
    'bg-orange-50',
    'bg-amber-50',
    'bg-yellow-50',
    'bg-lime-50',
    'bg-green-50',
    'bg-emerald-50',
    'bg-teal-50',
    'bg-cyan-50',
    'bg-sky-50',
  ]

  const darkColors = [
    'dark:bg-blue-900',
    'dark:bg-indigo-900',
    'dark:bg-purple-900',
    'dark:bg-pink-900',
    'dark:bg-red-900',
    'dark:bg-orange-900',
    'dark:bg-amber-900',
    'dark:bg-yellow-900',
    'dark:bg-lime-900',
    'dark:bg-green-900',
    'dark:bg-emerald-900',
    'dark:bg-teal-900',
    'dark:bg-cyan-900',
    'dark:bg-sky-900',
  ]

  // Use the hash to select a color from each palette
  const index = Math.abs(hash) % lightColors.length

  // Return the combined classes for light and dark mode
  return `${lightColors[index]} ${darkColors[index]}`
}
