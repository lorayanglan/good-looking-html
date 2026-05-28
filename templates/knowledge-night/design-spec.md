# Knowledge Night · Design Spec

This is the public design contract for the `knowledge-night` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Focused night-workspace style for knowledge systems, private research, and graph-like thinking surfaces.

## Metadata

- Slug: `knowledge-night`
- Mood: deep, focused, private, technical, contemplative, night-workspace
- Occasion: knowledge tool product, PKM app showcase, writing or research tool deck, developer tool with depth, dark personal OS presentation
- Tone: serious, focused, intellectual, developer-adjacent, high-trust
- Formality: medium-high
- Density: medium
- Scheme: dark
- Slide count: 3

## Best For

Personal knowledge bases, PKM tools, writing apps, developer tools with depth. When the product is a private thinking space and long-term ownership of information is the value proposition. Dark, focused, intellectual content.

## Avoid For

Light consumer products, social entertainment, high-conversion sales pages, warm personal narratives. This is too serious and focused for light content.

## Palette

- background: #101010
- surface: #202020
- text_primary: #FFFFFF
- text_secondary: #C0C0C0
- purple_primary: #8040F0
- purple_soft: #A090FF
- graph_green: #40B080
- Palette rule: Near-black background with slightly lighter gray cards; white headlines and muted gray body text; purple used exclusively for brand identity (buttons, icons, crystal motif, selected graph nodes); green only appears in graph node states.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Compact bold sans-serif. Short confident brand statements like 'Sharpen your thinking.' Narrow centered content column. Dark background requires careful contrast management for body text.

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

- making purple a full-screen gradient or large-area background — it must be a focused glow in the dark
- replacing real product screenshots with generic illustrations — credibility comes from the actual tool
- making cards too round or light — small-radius deep-gray cards match the tool identity
- adding more than one accent color beyond purple (graph green counts as functional, not decorative)

## Reusable Prompt Frame

```text
Design this as a Knowledge Night HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
