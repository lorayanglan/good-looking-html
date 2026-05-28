# Raw Copy · Design Spec

This is the public design contract for the `raw-copy` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Copy-as-design style with warm cream backdrops, fragmented typography, and intentionally imperfect life-like rhythm.

## Metadata

- Slug: `raw-copy`
- Mood: humorous, authentic, chaotic-warm, raw, relatable, life-like
- Occasion: consumer app landing page, lifestyle product, parenting or family content, personal project with strong copy, anti-marketing product deck
- Tone: self-deprecating, honest, informal, emotionally resonant, minimally designed
- Formality: low
- Density: low
- Scheme: light
- Slide count: 3

## Best For

Consumer lifestyle apps, parenting/family products, personal projects with strong authentic copy voice. When the emotional resonance of the words IS the product. Anti-design product storytelling.

## Avoid For

B2B products, enterprise tools, any product needing formal credibility signals. Completely wrong for technical, financial, or professional services content.

## Palette

- background: #F8F4EE
- text_primary: #1A1A1A
- Palette rule: Off-white or warm cream background with near-black text; palette is intentionally minimal — design relies entirely on typography and copy, not color. Any single accent color should be used with extreme restraint.

## Typography

- display: System UI
- body: System UI
- cn_sans: Noto Sans SC
- style: Intentionally plain — system font or a simple display sans. Large fragmented text blocks with intentionally imperfect line breaks. Text weight and size create the visual rhythm, not decoration.

## Layout Principles

- Keep the most important content visually centered or clearly dominant.
- Use the preset's spacing rhythm rather than compressing sections to fit more copy.
- Preserve the preset's core shape language, such as cards, blocks, poster fields, note surfaces, or stage-like dark panels.
- If content overflows, shorten the copy or add another section/slide before shrinking type or padding.
- Use real structure: headings, supporting text, charts, cards, comparison areas, or media surfaces should each have a clear job.

## Components

- Start from `template.html` when available.
- Reuse existing card, button, navigation, statistic, and media patterns before inventing new ones.
- If a new component is needed, build it from the same palette, type scale, radius, border, and motion grammar.
- Do not mix component styles from another preset.

## Motion And Interaction

- Keep motion subtle and purposeful.
- Use transitions to clarify hierarchy, slide changes, hover states, or progressive disclosure.
- Do not add decorative animation that competes with the content.
- For decks, preserve horizontal paging, nav dots, and page counters.

## Chart Guidance

- Use handcrafted SVG charts when the artifact contains data.
- Choose the chart type from `chart-vocabulary.md`.
- Label every visible number with a unit or explanation.
- Match chart colors to this preset's palette.

## Anti-Patterns

- using for B2B or enterprise — emotional resonance depends on consumer context
- adding illustrations or icons — pure text voice is the entire visual system; graphics break it
- writing generic copy — each keyword must be real and resonant, weak copy makes this just look poorly designed
- creating a polished layout — the imperfect imprecision IS the style

## Reusable Prompt Frame

```text
Design this as a Raw Copy HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
