# Bright Lab · Design Spec

This is the public design contract for the `bright-lab` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Bright candy-colored gallery system with playful blocks, pill CTAs, organic shapes, and generous whitespace.

## Metadata

- Slug: `bright-lab`
- Mood: bright, experimental, friendly, exploratory, playful, candy
- Occasion: personal review deck, AI tool gallery, creative project showroom, wellness review, course or workshop summary, tools collection page, experimental product launch
- Tone: warm, open, approachable, modern, non-corporate
- Formality: medium
- Density: medium
- Scheme: mixed
- Slide count: 6

## Best For

Decks and pages that want to feel bright, exploratory, and approachable rather than corporate or futuristic. Personal reviews, wellness summaries, AI tool galleries, creative project showrooms, experimental product launches. Strong when many items need their own identity within a unified container system.

## Avoid For

High-luxury brand decks, dark-mood cinematic narratives, single long-form essays, somber or austere material. The candy palette commits to a playful, experimental voice.

## Palette

- pink: #f5a5e6
- pink_alt: #f3a2e3
- pink_soft: #ffd9f3
- ink: #00171c
- ink_alt: #001b20
- ink_soft: #0a2228
- paper: #ffffff
- cream: #f7f5ef
- violet: #6b5bff
- azure: #2a7bff
- orange: #ff6f3c
- neon: #c6f053
- lemon: #ffe45c
- coral: #ff8a7a
- text: #0f1112
- cream_text: #f3efe2
- Palette rule: Bubblegum pink intro band paired with deep blue-black hero stage; product cards in blue-violet / bright blue / pink / orange / neon green / lemon yellow / coral. White as stable canvas, cream as secondary light surface. Black 1.5px outlines on pills. No shadows — layers come from color blocks, rounded shapes, and blob masks.

## Typography

- display: Plus Jakarta Sans
- body: Plus Jakarta Sans
- cn_sans: Noto Sans SC
- fallback_intent: Friendly product sans; Plus Jakarta Sans is the free implementation used here — preserve the import as-is
- weights: 300 / 400 / 500 / 600 / 700 / 800
- italic: never
- style: Friendly geometric sans-serif. No serifs. No decorative type. Large but never shouty. Letter-spacing slightly negative on display, normal on body.

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

- dark neon / purple gradient AI cliché — Bright Lab intentionally rejects this look
- drop shadows for depth — Bright Lab uses color blocks instead
- uppercase ALL-CAPS CTAs — Bright Lab uses short title-case
- serifs or decorative display fonts — Bright Lab is Sans-only
- italic emphasis — Bright Lab has no italic language
- thumbnail rows of identical-color cards — Bright Lab gives each item its own color
- leaking developer chrome (module numbers, export timestamps, schema notes)

## Reusable Prompt Frame

```text
Design this as a Bright Lab HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
