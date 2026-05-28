---
name: good-looking-html
description: Create good-looking self-contained HTML artifacts, single-file HTML pages, visual reports, interactive review surfaces, and PPT-like web decks from notes, outlines, source material, or a topic. Use when the user asks for "Good Looking HTML", "beautiful HTML", "make this into HTML", "HTML artifact", "single-file HTML", "visual report", "interactive page", "web deck", "slide deck", "slides", "presentation", or asks to choose from reusable visual templates. Do not use for ordinary summaries, Markdown-only notes, or generic app development unless the user explicitly wants an HTML artifact or deck.
metadata:
  short-description: Make polished HTML artifacts
---

# Good Looking HTML

Good Looking HTML is a Codex skill for turning source material into polished single-file HTML artifacts: pages, visual reports, interactive review surfaces, learning dashboards, and PPT-like web decks.

The skill includes:

- A reusable visual template catalog in `templates/<slug>/`
- A mood-based style router in `style-router.md`
- A build and QA workflow in `AGENTS.md`
- A chart selection guide in `chart-vocabulary.md`

## When To Use

Use this skill when the user asks for:

- a good-looking or beautiful HTML page
- a self-contained / single-file HTML artifact
- a visual report, review page, learning page, dashboard, or comparison interface
- a web deck, slide deck, presentation, or PPT-like HTML deck
- help choosing a visual template or design style for an HTML output

Do not use this skill for ordinary Markdown summaries, note maintenance, or generic web application development unless the user explicitly asks for an HTML artifact or deck.

## Source Of Truth

- `index.json` is the live template catalog.
- `style-router.md` groups templates into human-friendly moods.
- `AGENTS.md` is the operating manual for template selection, building, and QA.
- Each template's `design-spec.md` is the aesthetic contract.
- Each template's `template.html` is the implementation base when present.
- `chart-vocabulary.md` is required when creating data/chart slides.

## Working Modes

Pick the lightest mode that fits the request.

| Mode | Use When | Behavior |
|---|---|---|
| Fast | The user names a template or the style is obvious | Choose one template, build, QA, deliver |
| Curated | The artifact matters and the style is unclear | Ask 1-2 questions, offer 2-3 style candidates, then build |
| Showcase | External-facing deck/report or important presentation | Create 2-3 real title/cover previews, let the user choose, then build |

## Build Workflow

1. Identify artifact type: page, report, review surface, dashboard, learning page, deck, or presentation.
2. Identify content state: complete source material, rough outline, or only a topic.
3. If needed, ask only the missing high-value question: audience, occasion, or mood.
4. Select a template using `index.json` + `style-router.md`, unless the user named one.
5. Read the chosen template's `template.json`, `design-spec.md`, and `template.html` if present.
6. Build a self-contained HTML file in the working directory or the user's requested output folder.
7. Preserve the chosen template's tokens: colors, fonts, spacing rhythm, decorative vocabulary, navigation behavior, and component grammar.
8. Run the QA checklist in `AGENTS.md` before final delivery. For substantial decks/pages, open or screenshot with a browser tool when available.

## Delivery

Return the finished file path and the template used. Mention any important QA limitation, such as browser screenshot unavailable or external assets intentionally left as local paths.
