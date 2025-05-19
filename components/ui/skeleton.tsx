import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-gray-300 dark:bg-gray-700', className)}
      {...props}
    />
  )
}

export { Skeleton }
