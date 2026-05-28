# Warm Team · Design Spec

This is the public design contract for the `warm-team` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Warm professional team style with navy/off-white rhythm and friendly geometric accents.

## Metadata

- Slug: `warm-team`
- Mood: warm, friendly, human, professional, approachable, balanced
- Occasion: HR tech product deck, people management tool, SMB SaaS presentation, team product showcase, company culture deck
- Tone: warm-professional, human, trustworthy, not-corporate-cold, relatable
- Formality: medium
- Density: medium
- Scheme: mixed
- Slide count: 3

## Best For

HR tech, people management, SMB SaaS products, team culture and engagement presentations. Best when the content needs to feel professional but warm — 'built for real teams, not cold enterprise software'.

## Avoid For

Consumer products (too formal) or large enterprise products (too intimate). The three accent colors are calibrated for SMB HR emotional register.

## Palette

- navy: #0C1D31
- off_white: #F7F5F2
- accent_orange: #F4874B
- accent_blue: #4B8CF4
- accent_purple: #C57BF4
- Palette rule: Deep navy and off-white backgrounds alternate for rhythm; three geometric accent colors each carry an emotional role: orange (energy/action), blue (reliability/tech), purple (warmth/care) — never mixed in one section.

## Typography

- display: DM Sans
- body: DM Sans
- cn_sans: Noto Sans SC
- style: Rounded geometric sans-serif. Friendly and approachable rather than strictly formal. Bold headlines without being aggressive. Single typeface family.

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

- placing all three geometric accent colors in the same section — they need to each own their area
- making geometric shapes too large or dominant — they are supporting cast, not the lead
- using for consumer lifestyle or large enterprise content — it's precisely calibrated for SMB HR

## Reusable Prompt Frame

```text
Design this as a Warm Team HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
