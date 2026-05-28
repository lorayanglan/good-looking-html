# Bright Lab Template

> **Source aesthetic**: public visual preset
> **Canonical spec**: [`design-spec.md`](./design-spec.md) — read this before modifying anything
> **Implementation**: [`template.html`](./template.html)

## What it is

A 6-slide horizontal deck in Bright Lab' candy-bright product-gallery aesthetic. Bubblegum pink intro, deep blue-black hero, colorful product cards, blob shapes, pill CTAs, friendly Sans typography, no shadows, no italics.

## When to pick it

- Personal reviews, year-end recaps, wellness, hobby, or learning summaries
- AI tool galleries, creative project showrooms
- Course / workshop / experiment recaps
- Anything that should feel **bright, exploratory, approachable** — not corporate, not somber, not futuristic
- the user's default style for personal content

## When NOT to pick it

- High-luxury brand decks (use a future `editorial` template)
- Long-form essays / single-narrative content
- Dark cinematic / sombre material
- Anything formal, austere, or that needs a serif voice → use an editorial or literary preset instead

## Slide types included

| # | Type | Bg | Use for |
|---|---|---|---|
| 1 | COVER | pink | Title + tagline + decorative blobs |
| 2 | STATS | ink | 4 big stat blocks on a dark stage |
| 3 | FEATURED | paper | 1 big featured + 4 supporting colored cards |
| 4 | DIRECTORY | cream | Compact pill grid for long-tail items |
| 5 | THEMES | paper | 3×3 colored theme cards with bars |
| 6 | CLOSING | ink | Hero text + tilted ribbon stickers |

## Adapting the template

1. **Read [`design-spec.md`](./design-spec.md) first.** The spec is the contract. Every hex value, font size, and ratio in `template.html` traces back to a spec rule.
2. Clone `template.html` into the user's workspace.
3. Replace every `[PLACEHOLDER]` token with real content. Keep all class names, color tokens, and structure.
4. To add more slides: duplicate an existing `<section class="slide ...">` and update the bottom counter (`N / TT`). The engine auto-builds the nav-dot count from `.slide` elements.
5. To add a layout that isn't here: follow AGENTS.md §5 — same fonts, same palette, same decorative vocabulary, same spacing. Do not introduce a new system.

## What never changes

- The 14 `:root` color tokens (every hex)
- Font family declarations
- `clamp()` values in the type scale and spacing
- The `overflow: hidden + flex:1 + min-height:0` formula that makes content fit a fixed viewport
- The `cubic-bezier(0.77, 0, 0.175, 1) · 0.85s` slide pan curve
- All decorative shapes: blobs, ribbons, pill outlines

## Worked examples

- Add public examples here using fictional or permission-safe content only.

## Anti-patterns (refuse to apply)

- Drop shadows for depth → Bright Lab is shadow-free
- Italic emphasis → Bright Lab has no italic language
- ALL-CAPS CTAs → use short title-case
- Substituting Inter / Helvetica for Plus Jakarta Sans → fix the import instead
- Recoloring the palette → if you need a new accent, pick the closest existing token
- Leaking developer chrome (module numbers, export timestamps, schema notes) into user-facing slides
