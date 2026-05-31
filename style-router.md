# Style Router

Use this router when the user has not named a template. Read `index.json` for exact metadata after choosing candidates.

## Mood Entrypoints

| Desired feeling | Start with | Good for | Avoid when |
|---|---|---|---|
| Bright, playful, colorful, personal | `bright-lab` | personal reviews, wellness summaries, tool galleries, creative showcases | somber, austere, luxury, or text-only work |
| Quiet, paper-like, intelligent | `quiet-paper`, `literary-flow` | AI productivity, writing, meeting notes, personal workflow, knowledge work | high-energy launches or dense technical dashboards |
| Serious, technical, focused | `enterprise-dark`, `knowledge-night`, `dark-utility` | AI infrastructure, developer tools, research summaries, private knowledge systems, utility products | warm personal stories or consumer lifestyle content |
| Product/SaaS/systematic | `workspace-matrix`, `b2b-blue`, `warm-team`, `bold-violet`, `calm-process` | product feature matrices, B2B/SaaS reports, onboarding flows, team tools, finance/process clarity | literary essays, cinematic showcases, or highly emotional personal pages |
| Editorial, creator, content-led | `editorial-minimal`, `photo-editorial`, `indie-print` | newsletters, creator economy, visual portfolios, photography/media, indie project pages | enterprise trust decks or calm personal productivity |
| Cinematic or entertainment | `cinematic-dark` | media, content libraries, dramatic subscription/product showcases | knowledge tools, warm personal notes, or low-pressure learning surfaces |
| Raw, humorous, life-like | `raw-copy` | lifestyle, family/parenting, anti-marketing personal projects with strong copy | B2B, technical, financial, or formal credibility work |

## Candidate Routing

- If the user asks for an HTML artifact with no style: do not pick a standing default. Offer 2-3 candidates matched to the material and ask the user to choose.
- If the output is a PPT-like deck and the topic is broad: offer three candidates with different moods instead of one narrow cluster.
- If the content contains strong personal data or emotional reflection: include `bright-lab`, `literary-flow`, or `quiet-paper` as candidates before corporate templates.
- If the content is external-facing business material: include `enterprise-dark`, `workspace-matrix`, `b2b-blue`, `warm-team`, or `bold-violet` candidates depending on formality and warmth.

## Candidate Language

When offering choices, describe the feeling, not the internals:

- `bright-lab`: bright, colorful, exhibition-like, good for personal summaries and tool galleries.
- `quiet-paper`: quiet and paper-like, like an intelligent working note.
- `literary-flow`: warm and editorial, good for writing, creative work, and personal workflows.
- `enterprise-dark`: dark, serious, technically authoritative, good for AI/infrastructure.
- `workspace-matrix`: systematic product matrix, good for feature-rich tools and workflows.
- `editorial-minimal`: restrained and editorial; typography and whitespace carry the message.

Keep the choice set small: 2 candidates for routine work, 3 for important artifacts.
