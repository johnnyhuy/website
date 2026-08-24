// Shared registry of icon names usable in Blog frontmatter (`icon: Car`).
// Consumers (navbar, blog index, sneak peek) resolve a string against this
// map; posts without a registered icon fall back to FileText.
//
// Add new post icons here once and every consumer picks them up.
import {
  Award,
  Bed,
  Blocks,
  BookOpen,
  Bot,
  Bug,
  Car,
  Compass,
  FileText,
  Flame,
  MessageCircle,
  Mountain,
  Package,
  RefreshCw,
  Terminal,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export const POST_ICONS: Record<string, LucideIcon> = {
  Award,
  Bed,
  Blocks,
  BookOpen,
  Bot,
  Bug,
  Car,
  Compass,
  Flame,
  MessageCircle,
  Mountain,
  Package,
  RefreshCw,
  Terminal,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
}

export const POST_ICON_DEFAULT: LucideIcon = FileText

export function resolvePostIcon(name: string | undefined | null): LucideIcon {
  if (name && POST_ICONS[name]) return POST_ICONS[name]
  return POST_ICON_DEFAULT
}