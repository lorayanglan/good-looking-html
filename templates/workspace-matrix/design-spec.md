# Workspace Matrix · Design Spec

This is the public design contract for the `workspace-matrix` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Systematic workspace matrix with dark-to-light rhythm, functional color blocks, and feature-suite storytelling.

## Metadata

- Slug: `workspace-matrix`
- Mood: smart, systematic, playful-productive, capable, gamified-work, modern
- Occasion: AI workspace product, team collaboration deck, product suite showcase, knowledge management presentation, SaaS feature matrix
- Tone: modern, slightly-playful, professional, product-led, self-confident
- Formality: medium
- Density: medium-high
- Scheme: mixed
- Slide count: 3

## Best For

AI workspace products, team collaboration suites, productivity app matrices. When you need to show how many different things work together as a unified system. Strong for feature-rich product storytelling with a slightly playful edge.

## Avoid For

Single-feature tools, high-luxury minimal aesthetics, content needing dark immersion throughout. The hero-to-white transition is essential — don't keep the dark hero for the whole deck.

## Palette

- hero_blue: #001040
- active_blue: #60B0F0
- background: #FFFFFF
- surface: #F0F0F0
- text_primary: #101010
- cyan_block: #30A0A0
- warm_brown: #B08060
- yellow_dot: #FFD060
- Palette rule: Dark midnight-blue hero contrasts with clean white workspace body; functional color blocks (cyan, sky-blue, warm brown, coral, yellow) each map to a specific tool or workflow category — they are information-coded, not decorative.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Rounded compact sans-serif. Bold black headlines, short punchy copy. Product UI text is dense but hierarchically clear. No serifs, no decorative type.

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

- using color blocks as pure decoration — in Workspace Matrix's system each color represents a specific function
- extending the midnight-blue hero for the full page — the day/night narrative rhythm requires the transition
- making cards too round or glassy — Workspace Matrix's shape language resembles real software blocks, not consumer UI
- overusing the agent/emoji icon motif without accompanying product substance

## Reusable Prompt Frame

```text
Design this as a Workspace Matrix HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
