# Quiet Paper · Design Spec

This is the public design contract for the `quiet-paper` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Paper-like productivity style with warm white surfaces, subtle borders, serif titles, and highlighter-like accents.

## Metadata

- Slug: `quiet-paper`
- Mood: quiet, intelligent, light, paper-like, low-pressure, trustworthy
- Occasion: AI productivity tool, meeting notes app, knowledge work product, personal workflow summary, writing tool presentation, light B2B SaaS
- Tone: calm, understated, smart, personal, non-corporate
- Formality: medium
- Density: medium
- Scheme: light
- Slide count: 3

## Best For

AI writing, meeting notes, knowledge work, personal productivity tools. Products that want to feel like 'a clean native notes app that became intelligent' rather than an AI dashboard. Before/after comparisons, testimonial walls, note-card UI language.

## Avoid For

High-energy launches, colorful brand identity, dark/cinematic experiences. Don't use for B2B data platforms needing high-density dashboards.

## Palette

- background: #FFFFFF
- surface: #F0F0E0
- text_primary: #101010
- text_secondary: #909090
- accent_olive: #B0C050
- border: #D0D0D0
- Palette rule: Large white/near-white paper base; muted grays for borders and secondary text; one acidic olive-green used like a highlighter — only on AI emphasis, download buttons, and key highlights; never large-area.

## Typography

- display: Georgia
- body: Inter
- cn_sans: Noto Sans SC
- style: Warm editorial serif for display headlines (brand storytelling and section titles); clean sans-serif for UI text, captions, buttons. Serif signals 'writing and notes'; sans signals 'tool and function'.

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

- using blue-purple gradients, glassmorphism, or 3D spheres — kills the notebook feel
- spreading olive-green over large background areas — it must work like a highlighter pen only
- overcomplicating the product screenshots — 'fewer, more precise' is the aesthetic contract
- replacing serif display with modern sans — the serif is what gives it warmth and literary identity

## Reusable Prompt Frame

```text
Design this as a Quiet Paper HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
