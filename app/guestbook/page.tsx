"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import WavyLine from "@/components/wavy-line"

interface GuestbookEntry {
  id: number
  name: string
  website?: string
  message: string
  date: string
  isAnonymous: boolean
}

// Mock guestbook entries
const initialEntries: GuestbookEntry[] = [
  {
    id: 1,
    name: "Anonymous",
    message: "Great portfolio! Love the clean design and organization.",
    date: "2023-12-15",
    isAnonymous: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    website: "https://sarahchen.dev",
    message: "Your projects are inspiring. Would love to collaborate sometime!",
    date: "2023-11-28",
    isAnonymous: false,
  },
  {
    id: 3,
    name: "Mike Johnson",
    message: "The wavy lines animation on your homepage is mesmerizing. Great work!",
    date: "2023-11-10",
    isAnonymous: false,
  },
  {
    id: 4,
    name: "Anonymous",
    message: "How did you implement the Spotify integration? It's so cool!",
    date: "2023-10-25",
    isAnonymous: true,
  },
  {
    id: 5,
    name: "Priya Sharma",
    website: "https://priyadev.com",
    message: "Love your technical blog posts. They've been really helpful for my own projects!",
    date: "2023-10-12",
    isAnonymous: false,
  },
]

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries)
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")
  const [message, setMessage] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple form validation
    if ((!name && !isAnonymous) || !message) {
      return
    }

    // Create new entry
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name: isAnonymous ? "Anonymous" : name,
      website: isAnonymous ? undefined : website,
      message,
      date: new Date().toISOString().split("T")[0],
      isAnonymous,
    }

    // Add to entries
    setEntries([newEntry, ...entries])

    // Reset form
    setName("")
    setWebsite("")
    setMessage("")
    setIsAnonymous(false)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 relative">
        <WavyLine className="absolute top-0 left-0 w-full h-full opacity-5 z-0" animated={false} />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Guestbook</h1>
          <p className="text-xl text-muted-foreground mb-8">Leave a message, feedback, or just say hello!</p>

          {/* Guestbook submission form */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Sign the Guestbook</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name {!isAnonymous && <span className="text-red-500">*</span>}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    disabled={isAnonymous}
                    required={!isAnonymous}
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website/Social Media (optional)</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://"
                    type="url"
                    disabled={isAnonymous}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="h-32"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                <Label htmlFor="anonymous">Submit anonymously</Label>
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Sign Guestbook
              </Button>
            </form>
          </div>

          {/* Guestbook entries */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Recent Messages</h2>

            {entries.length > 0 ? (
              <div className="space-y-6">
                {entries.map((entry) => (
                  <div key={entry.id} className="border-b border-border pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        {entry.isAnonymous ? (
                          <span className="font-medium">{entry.name}</span>
                        ) : (
                          <>
                            {entry.website ? (
                              <a
                                href={entry.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:text-primary"
                              >
                                {entry.name}
                              </a>
                            ) : (
                              <span className="font-medium">{entry.name}</span>
                            )}
                          </>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{entry.date}</span>
                    </div>
                    <p className="text-muted-foreground">{entry.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No messages yet. Be the first to sign the guestbook!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
