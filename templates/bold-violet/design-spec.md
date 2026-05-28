# Bold Violet · Design Spec

This is the public design contract for the `bold-violet` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Bold violet product system with cream/lavender surfaces, floating dashboard cards, and confident brand-scale typography.

## Metadata

- Slug: `bold-violet`
- Mood: bold, vibrant, modern, distinctive, energetic, product-forward
- Occasion: SaaS tool landing page, e-commerce analytics product, high-recognition brand report, annual report deck, product launch, brand growth summary
- Tone: confident, assertive, professional, non-generic, memorable
- Formality: medium
- Density: medium
- Scheme: mixed
- Slide count: 3

## Best For

Decks that need high visual identity and brand confidence. SaaS product reports, e-commerce annual summaries, brand growth presentations. Strong when you want to commit fully to a single bold color system rather than generic blue-white SaaS.

## Avoid For

Multi-color rainbow schemes, luxury minimal aesthetics, finance content requiring trust through restraint. Don't mix violet with other strong accent colors.

## Palette

- violet: #5B3FF8
- deep_violet: #4B35D8
- cream: #F5F0E8
- cream_2: #EDE8DC
- lavender: #D8D0F8
- soft_purple: #E8E4FA
- footer_bg: #9080D8
- dark: #1A1A2E
- Palette rule: Full violet/purple system throughout; cream and lavender as warm neutral base; depth achieved through purple hue variation (violet → deep violet → footer medium purple); no competing accent colors.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Bold geometric sans-serif. Single typeface family; hierarchy via weight and size. Large display titles in violet. No serifs, no decorative type.

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

- mixing violet with orange, green, or other strong accent colors — Bold Violet's power comes from single-color system discipline
- omitting the oversized brand-name footer texture — it's the highest-memory visual component
- overcomplicating floating dashboard cards — simple numbers + one chart is enough
- using soft pastel violet instead of bold saturated violet — the energy depends on commitment to the hue

## Reusable Prompt Frame

```text
Design this as a Bold Violet HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
