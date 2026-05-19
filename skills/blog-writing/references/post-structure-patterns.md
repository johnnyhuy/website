# Post Structure Patterns

## Standard Structure (Default)

Use for most posts. Flexible, proven, scannable.

```
---
frontmatter
---

[Hook paragraph]

## [Claim-driven heading 1]

[Body with evidence, analysis, insight]
[Table or bullets]

## [Claim-driven heading 2]

[Body]
[Table or bullets]

## [Claim-driven heading 3]

[Body]

## Summary

- **[Bold takeaway]** [Elaboration]
- **[Bold takeaway]** [Elaboration]
- **[Bold takeaway]** [Elaboration]

## What's Next

[Specific action item]
```

**Best for:** Most essay-style posts, research-based posts, opinion pieces.

**Example posts:**
- "Shipping Projects at Big Tech Is a Social Outcome"
- "AI Product Engineering Is Lego Assembly, Not Invention"
- "The Real AI Skill Isn't Prompting — It's Loop-Closing"

## Framework Structure

Use when the note presents a model, framework, or structured thinking tool.

```
---
frontmatter
---

[Hook: The problem the framework solves]

## The [Framework Name]

[Overview of the framework]
[Visual representation (table, diagram, list)]

### [Dimension 1]
[Description, examples, why it matters]

### [Dimension 2]
[Description, examples, why it matters]

### [Dimension 3]
[Description, examples, why it matters]

## [Application Section]
[How to apply the framework]
[Common mistakes]

## Summary

- **[Framework insight]** [Elaboration]

## What's Next

[How to start using the framework today]
```

**Best for:** Models, frameworks, methodologies, structured advice.

**Example posts:**
- "How to Rest So You Actually Recover" (Four Dimensions of Recovery)
- "AI Product Engineering Is Lego Assembly, Not Invention" (Lego Framework)

## Analysis Structure

Use when examining a trend, research, or industry development.

```
---
frontmatter
---

[Hook: The surprising claim about the trend]

## What [They] Actually [Did/Found]

[Break down the research/trend/evidence]
[Table: What was measured, what was found, implications]

## Why [Common Interpretation] Is [Wrong/Incomplete]

[Counter-argument to common takes]
[Methodological issues or missing context]

## [Deeper Insight]

[The real implication]
[Historical parallel or pattern]

## Summary

- **[Key finding]** [Elaboration]

## What's Next

[How to respond to this trend]
```

**Best for:** Research breakdowns, trend analysis, debunking common misconceptions.

**Example posts:**
- "The Anthropic Study Does Not Prove AI Makes Devs Dumb"
- "Software Engineering at the Tipping Point"
- "DHH's Standards Didn't Change, the Tools Did"

## Advice/How-To Structure

Use for practical guidance, career advice, skill development.

```
---
frontmatter
---

[Hook: The common mistake or misconception]

## [The Real Problem]

[What's actually going wrong]
[Why common solutions fail]

## [Principle 1]
[Explanation]
[Example or application]

## [Principle 2]
[Explanation]
[Example or application]

## [Principle 3]
[Explanation]
[Example or application]

## Implementation

[Step-by-step guide]
[Checklist or criteria]

## Summary

- **[Key principle]** [Elaboration]

## What's Next

[First step to take today]
```

**Best for:** Career advice, skill guides, productivity tips, hiring guidance.

**Example posts:**
- "Selecting Great Engineers Beyond Technical Skills"
- "Just Talk To It"
- "How to Rest So You Actually Recover"

## Historical Parallel Structure

Use when drawing lessons from history, industry evolution, or pattern recognition.

```
---
frontmatter
---

[Hook: The historical pattern and its modern parallel]

## The [Historical] Pattern

[What happened before]
[Key dynamics]

## The Same Pattern in [Current Context]

[How it's playing out now]
[Specific examples]

## What [Group] Gets Wrong

[Common misconceptions]
[Why they're wrong]

## Implications for [Audience]

[What to do about it]
[Strategic considerations]

## Summary

- **[Pattern insight]** [Elaboration]

## What's Next

[Action based on historical lesson]
```

**Best for:** Industry analysis, trend prediction, strategy posts.

**Example posts:**
- "AI Is Degrading Software Engineering, Not Replacing It"
- "Software Engineering at the Tipping Point"

## Comparison Structure

Use when comparing approaches, tools, or philosophies.

```
---
frontmatter
---

[Hook: The comparison and what's at stake]

## [Approach A]

[Description]
[Pros and cons]
[When it works]

## [Approach B]

[Description]
[Pros and cons]
[When it works]

## [The Real Difference]

[What actually separates them]
[Table: side-by-side comparison]

## Which to Choose

[Decision framework]
[Criteria]

## Summary

- **[Comparison insight]** [Elaboration]

## What's Next

[How to evaluate your current approach]
```

**Best for:** Tool comparisons, methodology comparisons, philosophical debates.

**Example posts:**
- "AI CLI Battles: Cursor vs Claude Code vs GitHub Copilot"

## Claim-Evidence-Implication Pattern (Micro-Structure)

Use within sections, not as overall structure. The building block of strong body paragraphs.

```
## [Claim as heading]

[Bold claim statement].

[Evidence: research, data, example, observation].

[Implication: why this matters, what to do about it].
```

**Example:**
```markdown
## Projects Fail by Default

Left alone, every project drifts, gets blocked, or hits an invisible dependency.

The pattern repeats everywhere. A project looks simple on paper. Three sprints. One engineer. Straightforward. Then you discover the security review wasn't scheduled, the dependency team has a six-week backlog, and the RFC never reached the people who needed to see it.

Someone has to drag it across the line. Usually one engineer who holds the whole picture in their head — not doing all the work, but noticing the missing review, the unowned dependency, the team that assumed someone else was handling it.
```

## Section Heading Patterns

### Claim-Driven Headings (Preferred)
State the section's argument in the heading.

- "Projects Fail by Default"
- "Technical Skill Is the Multiplier"
- "Gains Accrue Unevenly"
- "The Inflection Point: Workflow + Model Quality"

### Descriptive Headings (Avoid)
These are weaker. Use only if claim-driven doesn't fit.

- "Project Management"
- "Technical Skills"
- "Conclusion"
- "Background"

## Table Patterns

### Comparison Table
| Lens | What I Used to Think | What Actually Matters |
|------|---------------------|------------------------|
| Definition of shipped | Code deployed | Leadership says it's done |
| Success metric | Technical completeness | Business purpose achieved |

### Framework Table
| Dimension | What it means | Examples |
|-----------|---------------|----------|
| Relaxation | Low demand on depleted system | Walking, nature |
| Detachment | Mental switch-off | No after-hours messages |

### Decision Table
| Choice | When It Wins | Hidden Cost | Default |
|--------|-------------|-------------|---------|
| Plan mode | Complex redesigns | Slower iteration | Discuss options first |
| Short prompts | Strong models | None | Prefer this |

## Summary Patterns

### Bullet Takeaways
- **[Bold claim]** [One-line elaboration]
- **[Bold claim]** [One-line elaboration]

### Checklist Style
- [ ] [Action item]
- [ ] [Action item]

### Table Summary
| Theme | Claim | Implication |
|-------|-------|-------------|
| X | Y | Z |

## What's Next Patterns

### Audit Pattern
"Audit your [thing]. How many [criteria]? Replace one [bad thing] with [good thing] this week."

### Question Pattern
"Next time you [situation], ask: [provocative question]? If [condition], [action]."

### Action Pattern
"[Verb] your [thing]: [specific step]. [Timeframe]."

### Experiment Pattern
"Try this for [timeframe]: [specific change]. Notice [what to observe]."

## Anti-Patterns to Avoid

### The Encyclopedia
Every section is equally long and detailed. No hierarchy of importance.

**Fix:** Lead with the most important insight. Expand the sections that matter. Keep supporting sections brief.

### The Listicle
Post is just a numbered list with minimal elaboration.

**Fix:** Use tables and bullets for scannability, but ensure each point has analysis and insight.

### The Book Report
Summarises the source note without adding insight or perspective.

**Fix:** Extract the thesis. Argue for it. Add your own analysis and implications.

### The Ramble
Sections don't clearly build on each other. The argument meanders.

**Fix:** Write the thesis first. Ensure every section directly supports it. Remove tangents.

### The Cliffhanger
Ends without resolution or action.

**Fix:** Always include Summary and What's Next. Never end on an open question without guidance.
