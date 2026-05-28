# Cinematic Dark · Design Spec

This is the public design contract for the `cinematic-dark` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Cinematic dark stage with near-black immersion, one vivid action color, and content-wall drama.

## Metadata

- Slug: `cinematic-dark`
- Mood: intense, immersive, cinematic, nocturnal, high-conversion, dramatic
- Occasion: entertainment product deck, subscription service landing, content-heavy presentation, dark immersive showcase, cinematic brand summary
- Tone: bold, direct, entertainment-grade, high-contrast, conversion-focused
- Formality: medium
- Density: medium
- Scheme: dark
- Slide count: 3

## Best For

Entertainment, media, subscription products. Dark immersive experiences where content is the desire. Strong for high-conversion pages where the content library itself is the argument. Cinematic brand summaries.

## Avoid For

Quiet knowledge tools, personal notes products, content requiring warmth or approachability. This is a night-mode, conversion-machine aesthetic — wrong for calm or literary content.

## Palette

- background: #000000
- surface_dark: #101010
- card_dark_purple: #1B1633
- text_primary: #FFFFFF
- text_secondary: #AAAAAA
- cta_red: #E50914
- Palette rule: Near-pure black base; white for all readable content; single vivid red used exclusively for CTA and logo; dark purple-black cards for secondary content blocks; no competing accent colors.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Heavy bold sans-serif. Hero titles at very large size (56-64px equivalent), high font-weight, centered alignment. Short punchy copy. Ranking numbers in outlined/giant style for content lists.

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

- letting the poster/content colors explode without the dark overlay mask — the unified black veil is critical
- adding a second brand action color alongside red — red must be the only CTA color
- using for calm productivity or personal tools — this is too 'nighttime and high-conversion'
- softening the black background — the stark black is what creates the cinema stage

## Reusable Prompt Frame

```text
Design this as a Cinematic Dark HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
