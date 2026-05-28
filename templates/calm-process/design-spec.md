# Calm Process · Design Spec

This is the public design contract for the `calm-process` preset in Good Looking HTML. Treat this file as the source of truth for visual direction; use `template.html` as the implementation base.

## Summary

Calm white-blue process style for step-by-step guidance, reassuring dashboards, and trustworthy onboarding.

## Metadata

- Slug: `calm-process`
- Mood: calm, reassuring, empowering, clear, trustworthy, structured
- Occasion: consumer fintech product, personal finance tool, step-by-step process deck, onboarding flow summary, mobile app presentation
- Tone: warm-professional, structured, approachable, de-anxietizing
- Formality: medium
- Density: medium
- Scheme: light
- Slide count: 3

## Best For

Consumer finance, personal tool onboarding, step-by-step process explanations, mobile app presentations. Ideal when the content needs to feel 'manageable' and non-threatening — turning complex things into clear steps.

## Avoid For

Dark-mode content, high-energy product launches, luxury or premium aesthetics. Don't use red or orange CTAs for financial content.

## Palette

- background: #FFFFFF
- surface: #F5F5F5
- text_primary: #333333
- accent_blue: #0052CC
- light_gray: #F5F5F5
- Palette rule: White and light gray base for trust and clarity; blue for CTA buttons and emphasis only; dark gray for body text; finance-appropriate restraint — no warm or alarming accent colors.

## Typography

- display: Inter
- body: Inter
- cn_sans: Noto Sans SC
- style: Modern readable sans-serif. Clear H1-H3 hierarchy. Step labels use number + short copy. No decorative type — clarity is the aesthetic.

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

- using a dark background — financial tools need light/safe visual environment
- omitting step process visualization — it's the most valuable design element here
- using red or orange for CTAs — builds distrust in finance contexts
- making the page too long without conversion points — users want fast clarity

## Reusable Prompt Frame

```text
Design this as a Calm Process HTML artifact. Preserve the preset's palette, typography, spacing, component grammar, and interaction style. Turn the source material into a useful interface rather than a normal article: use structure, visual hierarchy, charts, cards, tabs, or deck slides where they improve understanding. Keep the output self-contained and run the Good Looking HTML QA checklist before delivery.
```
