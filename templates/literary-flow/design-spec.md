# Literary Flow · Design Spec

This is the public design contract for the `literary-flow` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Warm editorial flow style with cream paper, deep green anchors, serif headlines, and calm motion cues.

## Metadata

- Slug: `literary-flow`
- Mood: calm, editorial, dreamy, confident, warm, voice-like, unhurried
- Occasion: AI writing or voice tool, personal productivity product, creative workflow deck, writer or maker tool, calm productivity landing
- Tone: literary, calm, self-confident, personal, anti-SaaS-generic
- Formality: medium
- Density: medium
- Scheme: mixed
- Slide count: 3

## Best For

AI writing, voice dictation, personal workflow, creator-adjacent productivity tools. When the product needs to feel warm and human rather than cold and technical. Calm productivity content, writing tools, voice products.

## Avoid For

Enterprise B2B, heavy data dashboards, high-density technical content, formal financial presentations. The warmth and editorial quality clash with corporate seriousness.

## Palette

- cream: #FFFFEB
- forest_green: #034F46
- green_black: #122927
- soft_black: #1A1A1A
- lavender_cta: #F0D7FF
- accent_orange: #FF8040
- Palette rule: Warm cream paper background for human warmth; deep forest green as brand anchor and trust signal; soft black for product stage (not harsh pure black); pale lavender as a tactile pastel CTA that works on both cream and dark backgrounds; orange only as micro-annotation in product UI.

## Typography

- display: Georgia
- body: Inter
- cn_sans: Noto Sans SC
- style: High-contrast Didone/editorial serif for display and section headlines (brand storytelling, emotional resonance); modern sans for body copy, captions, buttons. The serif-sans combination creates 'literary tool' rather than 'generic SaaS'.

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

- using generic SaaS blue gradients, glassmorphism, or dense dashboard heroes
- only taking the serif headline and cream background without the voice-trail motion cues — the combination is the identity
- making colors muddy — cream must be bright, green must be steady, black must be soft, lavender must be pale
- stacking traditional cards instead of large whitespace editorial text blocks

## Reusable Prompt Frame

```text
Design this as a Literary Flow HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
