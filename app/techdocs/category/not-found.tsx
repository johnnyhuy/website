import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FolderX } from "lucide-react"

export default function CategoryNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FolderX className="h-20 w-20 text-muted-foreground mb-6" />
      <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
        We couldn't find the documentation category you're looking for. It may have been moved or doesn't exist.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/techdocs">Browse All Categories</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
