# Image Sourcing and Generation

Decision rules for blog illustrations: when to source, when to generate, which provider to use, and how to caption each.

## Decision Rule

```
Need an illustration for a post
├── Does an xkcd / meme exist that nails the point?
│   └── YES → source via scripts/blog-image.mjs (xkcd, memegen)
├── Is there a clear Wikimedia diagram already drawn?
│   └── YES → source with attribution caption
├── Do you need real brand logos, accurate labels, editorial polish?
│   └── YES → generate via Codex CLI (gpt-image-1)
└── Just need a clean abstract diagram?
    └── YES → generate via OpenRouter Gemini 2.5 Flash Image (cheap, clean text)
```

Default order: source first. Generate only when sourcing can't land the point.

## Provider Comparison

Empirical results from running the same prompt (knowledge accumulation diagram, ~1024px landscape) across providers.

| Provider | Model | Time | Size | Cost | Result |
|---|---|---|---|---|---|
| **Codex CLI** | OpenAI `gpt-image-1` (high) | ~6s | 1.2MB | $0.19 | Best. Clean text, real logos, editorial layout, annotations |
| **OpenRouter** | `google/gemini-2.5-flash-image` | 6.6s | 174KB | $0.03 | Best value. Correct layout, clean text, may miss detail counts |
| **Cursor CLI** | Google image model | ~70s | 228KB | ~$0.05-0.08 | Minimal but accurate. Loses narrative annotations |
| **fal.ai** | `fal-ai/flux-pro/v1.1` | 6.3s | 118KB | $0.05 | Decent but misses structure (no per-row layout, no labels) |
| **fal.ai** | `fal-ai/ideogram/v2` | 22.5s | 706KB | $0.08 | Decorative only. Text glitches ("YEAR"+"OLIO"), wrong structure |
| **mmx-cli** | `image-01` | 19.8s | 81KB | $0.02-0.05 | Avoid for editorial. Garbled text ("ANNIIIMERS", "IFEOID"), wrong composition |

**Verdict:**
- Editorial quality (logos, text, annotations): Codex/gpt-image-1
- Budget default: OpenRouter Gemini 2.5 Flash Image at $0.03
- Avoid for diagrams: mmx-cli, fal.ai flux-pro

Provider availability caveat: Codex can run out of workspace credits; Cursor CLI hits team rate limits that reset monthly. OpenRouter has the most reliable availability.

## Source Patterns

### xkcd

```bash
node scripts/blog-image.mjs xkcd-search "keyword"     # find IDs by title
node scripts/blog-image.mjs xkcd 1772 neo-enterprises-startup-opportunity
```

Script downloads and prints the MDX snippet with attribution. License: CC BY-NC 2.5. One comic per post is usually enough.

### Wikimedia Commons

```bash
curl -sI "https://upload.wikimedia.org/wikipedia/commons/path/to/file.svg"   # check headers
curl -s "https://upload.wikimedia.org/wikipedia/commons/path/to/file.svg" -o public/images/blog/post-name-diagram.svg
```

Always verify the file's license on the Wikimedia file page before downloading. Common licenses: CC BY-SA, CC BY, CC0, Public Domain.

### Backstage / CNCF / other CNCF project social cards

```bash
curl -s "https://backstage.io/img/sharing-opengraph.png" -o public/images/blog/post-name-banner.png
```

Official project OG cards are clean, license-clear, and high-res. Check the project's press kit / assets page for them.

## Generate Patterns

### Codex CLI (best quality)

```bash
codex exec --skip-git-repo-check --yolo "Generate ONE image using your image generation tool. [prompt]. Save to /absolute/path.png"
```

Works non-interactively. The agent picks the path even when told; check the output to confirm it saved where expected. Returns ~1.2MB PNG.

### OpenRouter (best value)

```python
import os, json, urllib.request, base64
req = urllib.request.Request(
    "https://openrouter.ai/api/v1/chat/completions",
    data=json.dumps({
        "model": "google/gemini-2.5-flash-image",
        "modalities": ["image", "text"],
        "messages": [{"role": "user", "content": PROMPT}],
    }).encode(),
    headers={
        "Authorization": "Bearer " + os.environ["OPENROUTER_API_KEY"],
        "Content-Type": "application/json",
    },
)
with urllib.request.urlopen(req, timeout=120) as resp:
    data = json.loads(resp.read())
for img in data["choices"][0]["message"].get("images", []):
    url = img["image_url"]["url"]
    if url.startswith("data:image"):
        Path(out).write_bytes(base64.b64decode(url.split(",", 1)[1]))
        break
```

Returns inline base64 in `message.images[].image_url.url` (data URI). ~$0.03 per call.

### Cursor CLI (minimal but accurate)

```bash
cursor agent -p --auto-review --trust --add-dir "$(pwd)" "Generate ONE image with your image generation tool. [prompt]. Save to /absolute/path.png"
```

Verbose output, slow (60-90s), but produces minimal/accurate visuals. Good when you want a clean abstract without editorial noise.

## Caption Formats

Captions describe what the diagram shows, not how it was made. For AI-generated images, skip the "AI-generated illustration" meta-statement - keep the caption plain.

### AI-generated (plain description, no meta-statement)

```mdx
![Description](images/blog/post-name-diagram.png)

*Team vs solo knowledge after 10 years. Spotify, Adobe and JPMorgan on the team side; Backstage and WordPress on the solo side.*
```

The caption reads like a sourced-image caption - a short factual description of what the diagram shows. The reader doesn't need to know it was AI-generated.

### Sourced (Wikimedia)

```mdx
![Description](images/blog/post-name-diagram.png)

*Author Name, License Name, via Wikimedia Commons.*
```

Example: `*Paul Baran, CC BY-SA 4.0, via Wikimedia Commons.*` Check the file page for the exact author + license.

### Sourced (xkcd)

The `blog-image.mjs xkcd` command prints a snippet with the attribution already filled in. Use that.

### Sourced (project OG card)

Project OG cards are typically the project's brand asset - attribution as `[Project Name](https://project-url)` link is enough. No license caption needed unless the project explicitly requires one.

## Text Overlay Fallback

When generation produces a good base diagram but garbled text (e.g. Codex gave clean layout but labels like "YEAR" rendered as "YEA R"), regenerate without text then overlay using PIL + the site's fonts:

```python
from PIL import Image, ImageDraw, ImageFont

# Site fonts (from /Users/johnny/Library/Fonts/)
inter_bold = ImageFont.truetype("/Users/johnny/Library/Fonts/Inter-Bold.otf", 32)
inter_med = ImageFont.truetype("/Users/johnny/Library/Fonts/Inter-Medium.otf", 16)
mono = ImageFont.truetype("/Users/johnny/Library/Fonts/SFMono-Regular.otf", 14)

img = Image.open("base.png")
draw = ImageDraw.Draw(img)
draw.text((x, y), "OUTPUT", fill="#666", font=mono)
img.save("final.png")
```

This works because the site's typography is Inter (display) + IBM Plex Mono (labels). Re-rendering with the real fonts fixes garbled text and ties the diagram to the site's voice.

## Mermaid vs Generated Diagrams

Mermaid wins for:
- Flowcharts / pipelines (`flowchart LR/TD`)
- Sequence diagrams
- State machines
- Any diagram where node labels are short text (the renderer can't garble them)

Generated images win for:
- Charts with data (curves, scatter, etc.)
- Diagrams with realistic spatial arrangement (timeline layouts, comparisons)
- Anything that needs logos, icons, or photographic elements

Default: try Mermaid first. Move to generated images only when Mermaid can't express the layout.
