# Good Looking HTML

A Codex skill for turning notes, outlines, source material, and rough topics into polished self-contained HTML artifacts.

Good Looking HTML helps Codex produce:

- single-file HTML pages
- visual reports
- interactive review pages
- learning dashboards
- comparison interfaces
- PPT-like web decks and presentations

The project is built around reusable visual presets rather than one-off prompts. Each preset has a style contract, implementation base, and metadata so Codex can choose an aesthetic intentionally and keep it consistent.

## Install

Copy this folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R good-looking-html ~/.codex/skills/good-looking-html
```

Restart Codex or reload your skills if needed.

## Example Prompts

```text
Use Good Looking HTML to turn this Markdown into a polished visual report.
```

```text
Make a single-file HTML artifact that helps me compare these three product ideas.
```

```text
Create a web deck from this outline. Pick a quiet paper-like style.
```

```text
Make this into a good-looking HTML learning page with tabs and examples.
```

## Template Catalog

The live catalog is in `index.json`. Current visual presets include:

- `bright-lab`
- `quiet-paper`
- `literary-flow`
- `enterprise-dark`
- `knowledge-night`
- `dark-utility`
- `workspace-matrix`
- `b2b-blue`
- `warm-team`
- `bold-violet`
- `calm-process`
- `editorial-minimal`
- `photo-editorial`
- `indie-print`
- `cinematic-dark`
- `raw-copy`

When the user does not name a preset, Codex uses `style-router.md` to choose 1-3 candidates by mood, audience, and artifact type.

## Template Structure

Each preset lives under:

```text
templates/<slug>/
├── template.html
├── template.json
└── design-spec.md
```

- `template.json` describes mood, tone, density, scheme, and use cases.
- `design-spec.md` is the aesthetic contract.
- `template.html` is the implementation base.

## Add A New Preset

1. Create `templates/<new-slug>/`.
2. Add `template.json` with mood, occasion, tone, density, scheme, and usage guidance.
3. Add `design-spec.md` with the preset's color, type, layout, component, and motion rules.
4. Add `template.html` as a self-contained starter implementation.
5. Add the preset to `index.json`.
6. Add it to `style-router.md` if it introduces a new mood category.

## Quality Bar

Generated artifacts should be useful interfaces, not normal articles wrapped in HTML. The skill asks Codex to check:

- content completeness
- placeholder cleanup
- responsive layout
- text overflow
- deck navigation
- page counters
- local image paths
- template fidelity

See `AGENTS.md` for the full workflow and QA checklist.

## License

MIT
