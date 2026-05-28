# Editorial Minimal · Design Spec

This is the public design contract for the `editorial-minimal` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Premium editorial restraint: pure white, near-black type, extreme whitespace, and typography-led hierarchy.

## Metadata

- Slug: `editorial-minimal`
- Mood: quiet, premium, editorial, authoritative, focused, literary
- Occasion: publishing platform presentation, content creator deck, newsletter product, editorial design showcase, writing tool summary, long-form content product
- Tone: understated, confident, editorial, developer-friendly, high-trust
- Formality: medium-high
- Density: medium
- Scheme: light
- Slide count: 3

## Best For

Publishing, newsletter, creator economy, open-source developer products. For content where the message itself is the product. Strong when real numbers and real testimonials replace visual decoration.

## Avoid For

Products needing visual energy, color-driven brand identity, dark or immersive experiences. The restraint is the identity — don't try to 'liven it up' with color.

## Palette

- background: #FFFFFF
- text_primary: #111111
- text_secondary: #888888
- divider: #CCCCCC
- cta: #111111
- Palette rule: Two-color system: black and white only. All color is used exclusively for the CTA button. Hierarchy achieved entirely through type size, weight, and gray-scale values.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Modern geometric sans-serif. Large headlines at 48-64px equivalent with loose line-height. Body at 16-18px with 1.6-1.7 line-height for reading comfort. No serifs, no decorative type.

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

- adding color background blocks or colorful cards — the premium feel comes from restraint
- stacking too many product screenshots — two or three carefully selected real examples beat a full gallery
- adding animations — this style's trust is built on 'we don't need flash'
- using serif display fonts — Editorial Minimal is pure sans throughout

## Reusable Prompt Frame

```text
Design this as a Editorial Minimal HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
