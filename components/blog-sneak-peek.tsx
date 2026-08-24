import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { resolvePostIcon } from '@/lib/post-icons'

interface BlogSneakPeekProps {
  images: string[]
  iconName?: string | null
}

const ROTATIONS = ['-rotate-[10deg]', '-rotate-[2deg]', 'rotate-[3deg]', 'rotate-[12deg]']

// Hand of cards: middle card lifted most, outer cards step down/out.
// Reads as a focal point sitting on top of the fanned deck.
function tiltY(i: number, total: number): string {
  if (total <= 1) return ''
  const mid = (total - 1) / 2
  const dist = i - mid // 0 at centre, ±1, ±2, ...
  const abs = Math.abs(dist)
  if (abs === 0) return '-translate-y-3' // middle: lifted
  if (abs === 1) return '-translate-y-1' // next to middle: lightly lifted
  if (abs === 2) return '-translate-y-0'
  return 'translate-y-2' // outermost: dropped a touch
}

export default function BlogSneakPeek({ images, iconName }: BlogSneakPeekProps) {
  if (images.length === 0 && !iconName) return null

  // Build the deck: photo cards first (cap so the hand doesn't overflow),
  // then a topic icon card to round out the hand if a post icon is set.
  const photoCards = images.slice(0, 6).map((src, i) => ({ kind: 'photo' as const, src, idx: i }))
  const iconCard = iconName ? [{ kind: 'icon' as const, Icon: resolvePostIcon(iconName) as LucideIcon }] : []

  // Intersperse the icon card at the end so it acts as a topic badge in the hand.
  const deck = [...photoCards, ...iconCard]
  if (deck.length < 2) return null

  // Card footprint tightens when the deck is bigger so it always fits the container.
  const size =
    deck.length <= 4 ? 'h-[120px] w-[84px] md:h-[140px] md:w-[98px]'
    : deck.length === 5 ? 'h-[110px] w-[76px] md:h-[128px] md:w-[90px]'
    : 'h-[100px] w-[68px] md:h-[118px] md:w-[80px]'
  const containerW =
    deck.length <= 4 ? 'w-[230px] md:w-[260px]'
    : deck.length === 5 ? 'w-[260px] md:w-[290px]'
    : 'w-[290px] md:w-[320px]'

  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto hidden h-[160px] shrink-0 sm:block md:h-[180px] ${containerW}`}
    >
      {deck.map((card, i) => {
        const rot = ROTATIONS[i % ROTATIONS.length]
        const ty = tiltY(i, deck.length)
        const left = `${(deck.length === 1 ? 50 : (i * 100) / (deck.length - 1))}%`
        const z = String(10 + i)
        const base = `absolute top-1/2 ${size} -translate-x-1/2 -translate-y-1/2 border bg-white object-cover shadow-md`

        if (card.kind === 'photo') {
          return (
            <Image
              key={`p-${card.src}`}
              src={card.src}
              alt=""
              width={200}
              height={266}
              style={{ left, zIndex: z }}
              className={`${base} ${rot} ${ty}`}
            />
          )
        }
        const Icon = card.Icon
        return (
          <div
            key="icon-card"
            style={{ left, zIndex: z }}
            className={`${base} flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${rot} ${ty}`}
          >
            <Icon
              className="h-7 w-7 text-yellow-500 md:h-8 md:w-8"
              strokeWidth={1.5}
            />
          </div>
        )
      })}
    </div>
  )
}
