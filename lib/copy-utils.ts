/**
 * Copies text to clipboard and returns a promise
 * @param text Text to copy to clipboard
 * @returns Promise that resolves when text is copied
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error("Failed to copy text: ", err)
    return false
  }
}

/**
 * Generates a shareable URL for the blog post
 * @param baseUrl Base URL of the blog post
 * @param tldr Whether to include TLDR parameter
 * @returns Shareable URL
 */
export const generateShareableUrl = (baseUrl: string, tldr = false): string => {
  const url = new URL(baseUrl)

  // Remove any existing tldr parameter
  url.searchParams.delete("tldr")

  // Add tldr parameter if needed
  if (tldr) {
    url.searchParams.set("tldr", "true")
  }

  return url.toString()
}

/**
 * Generates social sharing text
 * @param platform Social platform (twitter, linkedin, facebook)
 * @param title Title of the content
 * @param url URL to share
 * @returns Formatted sharing text
 */
export const generateSocialShareText = (
  platform: "twitter" | "linkedin" | "facebook",
  title: string,
  url: string,
): string => {
  switch (platform) {
    case "twitter":
      return `Check out this article: ${title} ${url}`
    case "linkedin":
      return `I found this interesting article: ${title} ${url}`
    case "facebook":
      return url
    default:
      return url
  }
}
