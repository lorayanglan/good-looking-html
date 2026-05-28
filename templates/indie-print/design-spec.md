# Indie Print · Design Spec

This is the public design contract for the `indie-print` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Indie creator print style with white base, thick black borders, hard shadows, and direct handmade energy.

## Metadata

- Slug: `indie-print`
- Mood: grassroots, authentic, indie, unpretentious, direct, handmade
- Occasion: creator marketplace deck, digital product showcase, indie publishing summary, creator monetization presentation, personal project launch
- Tone: blunt, warm, accessible, no-nonsense, anti-corporate
- Formality: low
- Density: low
- Scheme: light
- Slide count: 3

## Best For

Creator economy showcases, independent maker presentations, digital product launches, personal project pages. For content where 'anyone can do this' accessibility is the message. Works for portfolios, indie tool pages, anti-SaaS product storytelling.

## Avoid For

B2B enterprise, luxury brands, products needing visual sophistication or multi-color expression. Don't use for content requiring formality or corporate trust signals.

## Palette

- background: #FFFFFF
- text_primary: #1A1A1A
- border: #1A1A1A
- shadow: #1A1A1A
- accent_gold: #F0B429
- Palette rule: Black-and-white dominant system with zero decorative color; only warm gold used as accent (coin illustrations, one emphasis element); hard drop shadows and thick black borders replace gradient depth; no soft shadows or glassmorphism.

## Typography

- display: DM Sans
- body: DM Sans
- cn_sans: Noto Sans SC
- style: Bold geometric sans-serif. Large headlines with direct short copy. Button text is small and bold matching thick border buttons. No decorative type, no cursive, no serif.

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

- adding soft gradients or glow effects — immediately destroys the zine/indie print feel
- mixing hard shadows with complex multi-color palettes — power comes from extreme restraint
- making the layout too dense — wide whitespace is a core component, not optional
- replacing thick black borders with soft drop shadows — the border IS the identity

## Reusable Prompt Frame

```text
Design this as a Indie Print HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
