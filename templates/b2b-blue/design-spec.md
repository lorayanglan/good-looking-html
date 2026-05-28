# B2B Blue · Design Spec

This is the public design contract for the `b2b-blue` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

High-conversion B2B style with white/pale-blue surfaces, bright action blue, and structured credibility sections.

## Metadata

- Slug: `b2b-blue`
- Mood: trustworthy, clear, enterprise, conversion-focused, structured, ROI-visible
- Occasion: B2B SaaS landing deck, sales presentation, enterprise collaboration tool, pricing and plan comparison, lead generation deck
- Tone: professional, conversion-optimized, enterprise-grade, structured, clear
- Formality: high
- Density: high
- Scheme: light
- Slide count: 3

## Best For

B2B SaaS, enterprise collaboration, sales decks with clear pricing and ROI messaging. When conversion is the primary goal and structural completeness (form, pricing, ROI, FAQ, testimonials) matters more than aesthetic personality.

## Avoid For

Consumer products, content needing strong personality or artistic expression, anything requiring warmth or playfulness. This is an enterprise conversion machine, not a creative showcase.

## Palette

- background: #FFFFFF
- surface_pale_blue: #F0F0FF
- surface_light_blue: #E0F0FF
- brand_blue: #1060FF
- navy: #000040
- neon_green: #00FF90
- accent_orange: #FF8000
- Palette rule: White and pale blue for information density; bright brand blue for all clickable elements; deep navy for credibility and ROI sections; neon green only for the primary lead form border and conversion focus elements; orange for statistical emphasis lines.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Clean professional sans-serif. Compact bold headlines (38-44px equivalent) for efficient scanning. Dense form labels and feature lists. No decorative type, no serifs.

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

- hiding the lead form until the bottom — the dual-column hero with front-and-center form is structural
- copying only the blue-white palette without the ROI calculator, pricing cards, and FAQ components — it's the complete structure that converts
- using for artistic or personality-driven content — this is a sales tool
- removing the navy deep-credibility sections — they are the trust anchor in an otherwise light page

## Reusable Prompt Frame

```text
Design this as a B2B Blue HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
