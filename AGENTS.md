# Agent Instructions · Good Looking HTML

You are working with **Good Looking HTML**: a system for turning material into polished self-contained HTML pages, visual reports, interactive review surfaces, and PPT-like web decks.

The goal is not to make a generic webpage. The goal is to pick the right aesthetic from the template library, build a useful human-facing artifact, and QA it before delivery.

## 1. Operating Modes

Pick the lightest mode that fits the request.

| Mode | Use when | What to do |
|---|---|---|
| Fast | The user names a template or gives a clear artifact request | Pick one template, build, QA, deliver |
| Curated | The artifact matters and the style is unclear | Ask 1-2 questions, offer 2-3 candidate templates, then build |
| Showcase | External-facing deck/report, important presentation, or the user explicitly wants options | Build 2-3 real cover/title previews, open them, wait for the user's choice, then build |

Do not force previews for routine work. Do not skip previews for Showcase work.

## 2. Template Selection

If the user named a template slug, use it.

If they did not:

1. Read `index.json`.
2. Read `style-router.md`.
3. Match by mood, occasion, tone, density, scheme, and audience.
4. Prefer a small choice set: 1 template for Fast, 2-3 candidates for Curated/Showcase.

Template selection is tone-first, not industry-first. The user's requested feeling wins.

## 3. Files To Read

For the selected template, read:

1. `templates/<slug>/template.json`
2. `templates/<slug>/design-spec.md`
3. `templates/<slug>/template.html` when it exists

When designing data/chart slides, also read `chart-vocabulary.md`.

`design-spec.md` is the aesthetic contract. `template.html` is the implementation base. If no `template.html` exists, build from the spec rather than borrowing another template's layout.

## 4. Build Rules

- Preserve all template tokens: hex colors, fonts, spacing rhythm, decorative vocabulary, border/shadow language, navigation behavior, and component grammar.
- Replace placeholder content with the user's real content: titles, numbers, labels, dates, examples, images, and captions.
- Preserve source Markdown/material. HTML is an output/companion surface unless the user explicitly asks otherwise.
- For a deck, use horizontal scroll-snap, bottom-center dot navigation, and a bottom-right page counter.
- If a needed layout is missing, design a new one using the chosen template's own system. Do not switch templates mid-build.
- If content overflows, reduce content or add a slide. Do not shrink type and padding until the design becomes cramped.
- If the page contains real data, use a real chart or meaningful visualization. Do not use decorative bars that pretend to be data.

## 5. Artifact Type Guidance

| Artifact type | Design for |
|---|---|
| HTML page | Scannable first screen, clear sections, mobile readability |
| Visual report | Data hierarchy, narrative flow, meaningful charts, source labels |
| Review surface | Comparison, filters/tabs, checklists, collapsible detail where useful |
| Learning page | Progressive disclosure, examples, diagrams, memory anchors |
| Web deck / presentation | One clear point per slide, strong title slides, page counters, keyboard navigation |

## 6. Visual QA Checklist

Run this before delivery. For substantial artifacts, open/screenshot in a browser when available.

Content:

- All user-provided core material is represented.
- No placeholder copy remains: `Lorem`, `TODO`, `placeholder`, `sample`, `Module 01` unless it is intentional content.
- Viewer-facing language does not leak builder terms such as `schema`, `selected node`, `data source`, `single-label rule`, or raw export jargon.
- Every visible number has a unit or label.

Layout:

- Desktop viewport has no obvious overlap, clipped headings, broken navigation, or unreadably tiny text.
- Mobile viewport remains readable and does not require horizontal scrolling unless the artifact is intentionally deck-only.
- Cards/sections have breathing room; content does not touch viewport edges.
- Long Chinese and English strings wrap cleanly inside their containers.

Deck mechanics:

- `.slide` count matches nav-dot count and page counter total.
- Keyboard and dot navigation work.
- Dark/light slides keep nav dots and page counter legible.
- Slide order and section labels are coherent after adding/removing pages.

Assets:

- Local image paths exist.
- If the file is meant to be shared outside the user's machine, embed small local images as base64 or clearly note that local paths will not travel.
- No unexpected external network dependency unless the user asked for it.

Template fidelity:

- The chosen template's fonts, colors, decorative motifs, and component grammar are intact.
- No visual elements from another template were mixed in accidentally.

## 7. Browser Verification

Use the best available local browser path:

- For simple static HTML, open the file directly.
- For substantial decks/pages, use Browser/Playwright-style screenshot checks when available.
- If browser verification is blocked, inspect the file and state that visual browser QA could not be completed.

Do not leave a dev server running unless the artifact requires one.

## 8. Output Contract

Save artifacts in the working directory or the output path requested by the user.

Final response should include:

- Absolute file path.
- Template used and why it fit the tone.
- QA performed, plus any limitation.

Keep the handoff concise. The user wants the artifact, the path, and the useful caveat.

## 9. Common Pitfalls

- Do not ask style questions when the user already named a template or gave a routine request.
- Do not dump every template as a choice. Route them into 2-3 meaningful options.
- Do not recolor or substitute fonts casually.
- Do not strip "decorations" that are actually the template's identity.
- Do not make a normal article in HTML clothing; use HTML as a thinking, reviewing, presenting, or interacting surface.
- Do not overwrite source Markdown unless explicitly requested.
