# Voice and Style Guide

## Core Voice Attributes

### Direct and Claim-Driven

Every post makes a specific claim and argues for it. The opening paragraph states the claim boldly. Every section supports it.

**Good:**
> "Most projects die. Not because the code's bad. Because the org never agreed it was done."

**Bad:**
> "In this blog post, we will explore the various factors that can contribute to project failure in large organisations."

### Australian Informality

Conversational but sharp. Short sentences. Occasional colloquialisms. Direct address.

**Good:**
> "I used to think shipping meant deploying. Tickets closed, PRs merged, CI green. That's the easy part."

**Bad:**
> "Historically, the author believed that software deployment constituted the entirety of the shipping process."

### Scannable Structure

Readers skim. Structure for skimming.

- Short paragraphs (1-3 sentences)
- Tables for comparisons
- Bullet lists for takeaways
- Bold text for key claims
- White space between sections

### Action-Oriented

Every post ends with something the reader can do. Not philosophy. Action.

**Good:**
> "Audit your last week. How many recovery activities hit all four dimensions? Replace one scrolling session with a 20-minute walk this week."

**Bad:**
> "In conclusion, recovery is an important aspect of productivity that should be considered by all professionals."

## Writing Do's and Don'ts

### Do

- Start with a bold claim or observation
- Use "I" when reflecting on personal experience (if authentic to the note)
- Write short paragraphs (1-3 sentences max)
- Use tables for comparisons and frameworks
- Use bullet lists for scannable takeaways
- End sections with a bold insight
- Close with practical "What's Next" action
- Use contractions (it's, don't, can't)
- Use active voice
- Make specific, concrete claims

### Don't

- Use formal transitions ("Furthermore", "Moreover", "It is worth noting")
- Use generic AI filler ("In today's fast-paced world", "It's important to remember", "seamless", "robust", "cutting-edge", "transformative", "game-changing", "landscape")
- Use passive voice ("It was observed that" → "Research shows")
- Write long dense paragraphs
- Make vague claims ("AI is interesting" → "AI degrades rather than replaces")
- Use "In this post I will..." openings
- End with philosophical summaries or engagement-bait questions ("What's your experience with...?")
- End with a `## References` dump - use footnotes instead
- Use jargon without explanation
- Fabricate specific scenarios or stories
- Use unspaced hyphen-dashes (`workflows-it's`) - use ` - ` or restructure
- Overuse the negation pivot ("not X, but Y") outside the thesis bookends - state the positive instead
- Use negation pairs for emphasis ("no X, no Y") when the positive sentence already carries the meaning
- Signpost every conclusion ("The common thread is...", "That's the tell") - one payoff line per post
- Repeat motif phrases in adjacent paragraphs - keep the strongest, vary or cut the rest
- Use metaphors the reader has to solve - keep them plain

## Paragraph Structure

**Ideal paragraph:** 1-3 sentences, one idea, punchy.

**Good:**
```
The question isn't "can we build this?" anymore. It's "what do we build and why will it win?"

That question got harder. Moats that lasted 6-12 months now survive 2-3 weeks.
```

**Bad:**
```
The question of whether something can be built is no longer the primary concern in modern software development, as the proliferation of tools and frameworks has made most technical implementations feasible; instead, the focus has shifted to determining what should be built and establishing a compelling rationale for why a particular product or feature will succeed in an increasingly competitive marketplace where competitive advantages are fleeting.
```

## Sentence Patterns

### The Pivot
"I used to think X. Turns out Y."

### The Reframe
"The problem wasn't X. It was Y."

### The Bold Claim
"[Strong statement]. [Supporting evidence]. [Implication]."

### The Contrast
"[What most people do]. [What actually works]. [Why]."

### The Direct Address
"Ask yourself: [provocative question]. [Answer]. [Action]."

## Voice by Section

### Hook (Opening)
- Bold, personal if authentic, under 100 words
- Make the reader feel the stakes
- No setup, no context-building — jump straight in

### Body Sections
- Claim-driven headings (not descriptive)
- Mix of analysis, evidence, and insight
- Tables and bullets for complexity
- Bold text for key takeaways

### Summary
- 4-6 bullet points
- Each starts with bold claim
- One-line elaboration
- No new information

### What's Next
- One specific action
- Start with a verb
- Measurable or time-bound if possible
- No vague advice ("think about this")

## Examples by Post Type

### Research-Based Post
Voice: Analytical but accessible. Share the research journey.

**Example:** "The Anthropic Study Does Not Prove AI Makes Devs Dumb"
- Hook: "Anthropic published a study. Within days, both skeptics and evangelists claimed it proved their point. It does neither."
- Body: Break down what was actually measured, methodological issues, practical implications
- Summary: "The study is narrow. The learning gap is real. Cognitive engagement is the key."

### Opinion/Analysis Post
Voice: Strong stance, acknowledge counterarguments briefly, double down.

**Example:** "AI Is Degrading Software Engineering, Not Replacing It"
- Hook: "The fear is that AI will replace software engineers. The reality is more subtle and, in some ways, worse."
- Body: Historical parallel, current evidence, implications
- Summary: "AI degrades rather than replaces. Writing code becomes reading code."

### Framework Post
Voice: Teacher mode. Clear structure, memorable model, practical application.

**Example:** "How to Rest So You Actually Recover"
- Hook: "I used to go to sleep tired, wake up tired, and stay tired through weekends."
- Body: Four dimensions framework, practical application, common mistakes
- Summary: "Rest is not recovery. Sleep doesn't cure cognitive fatigue."

### Career/Advice Post
Voice: Mentor mode. Direct, experienced, no sugar-coating.

**Example:** "Selecting Great Engineers Beyond Technical Skills"
- Hook: "Technical proficiency is merely a baseline."
- Body: What to look for instead, how to interview for it, creating the environment
- Summary: "Technical skills are a baseline. Rally capacity matters most."

## Common Voice Pitfalls

### The Academic Slide
Drifting into formal, passive, abstract language.

**Fix:** Read aloud. If it sounds like a textbook, rewrite it like you're explaining to a friend at a pub.

### The Generic AI Voice
Using phrases that could appear in any AI-generated content.

**Fix:** Add specific details from the note. Use personal perspective. Include an opinion.

### The Ramble
Long paragraphs that wander through multiple ideas.

**Fix:** One idea per paragraph. Break at natural pauses. Use line breaks for emphasis.

### The Setup Trap
Spending too long setting up the argument before making the claim.

**Fix:** State the claim in the first sentence. Provide context after, not before.

### The Weak Close
Ending with "In conclusion..." or vague philosophical musings.

**Fix:** Always close with "What's Next" — a specific, actionable step.

### The Negation Tic
"Not this but that" pivots and "no X, no Y" pairs are strong exactly once - at the thesis. By the third use they're a tic.

**Good:** "Some people would call that escapism. I reckon it's a return to form." (hook) and "What looks like escapism is usually a return to form." (close) - bookends only.

**Bad:** "It's not the same muscle. It stimulates rather than numbs. Sharing matters more, not less." - three pivots in one body.

**Fix:** Mid-body, state the positive: "Wrenching pulls on a different muscle to the day job." If the positive sentence already carries the meaning ("these guys genuinely enjoy it"), cut the negation ("no gimmicks, no growth-hacked persona") entirely.

### The Signpost Habit
Interpretive signposts - "The common thread is simple", "That's the tell", "Here's the point" - narrate the reader's conclusion for them. One payoff line per post earns its place; more reads as throat-clearing.

**Fix:** Let the observation land. Start the paragraph with the thing itself ("These guys genuinely enjoy...") and trust the reader.

### The Echo
Motif words are load-bearing once. Repeated in adjacent paragraphs ("airtime to go deep" twice, "juggle" three times), they read as a tic.

**Fix:** Before publishing, re-read the draft hunting for your theme words. Keep the strongest instance. Vary or cut the rest.

### The Cute Metaphor
If the reader has to solve the metaphor, it's too clever ("one of the fastest things on the pedestrian crossing of life").

**Fix:** Say it plain: "properly quick for something so pedestrian".
