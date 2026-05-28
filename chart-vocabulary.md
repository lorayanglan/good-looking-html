# Chart Vocabulary

Use this reference when a Good Looking HTML artifact needs a data visualization. Choose the chart type that matches the data story, then implement it as handcrafted SVG using the selected template's palette, typography, and spacing system.

## Quick Picker

| Data story | Recommended chart |
|---|---|
| Trend over time | Line chart with optional average/reference band |
| Composition across groups | Stacked bar chart |
| Two-dimensional category matrix | Bubble matrix / scatter grid |
| Ranked distribution or gap analysis | Pareto bar chart or waterfall chart |
| Positive vs negative sentiment | Diverging stacked bar chart |
| A few key numbers | Large stat cards |
| Progress or completion comparison | Horizontal progress bars |

## Chart Types

### 1. Stacked Bar

Use when each group has internal composition and total size also matters.

Required elements:

- Separate color for each segment.
- Segment labels when space allows.
- Total label above each bar.
- Legend that maps colors to categories.
- Clear group labels.

SVG notes: draw each bar as multiple stacked `<rect>` elements. Accumulate `y` values segment by segment and center labels inside segments where readable.

### 2. Line Chart With Reference Band

Use for time series where the current trend should be compared with a baseline, average, or historical range.

Required elements:

- Main line with visible data points.
- Optional dashed average/reference line.
- Optional translucent band for historical range.
- Peak/valley annotations when they matter.
- Axis or contextual labels sufficient to understand the trend.

SVG notes: use a closed `<path>` for the range band, a separate path for the line, and small circles for points.

### 3. Bubble Matrix

Use when two categorical dimensions intersect and each cell has a quantity or intensity.

Required elements:

- Rows for one category dimension.
- Columns for the second category dimension.
- Bubble size for quantity.
- Color intensity for strength or percentage.
- Legend for size and color.

SVG notes: bubble area should scale with the value, so radius should be based on `Math.sqrt(value)`.

### 4. Pareto Or Waterfall

Use for ranked distributions, positive/negative contributions, or gaps against a target.

Required elements:

- Ordered bars, usually high to low.
- Zero baseline when negative values exist.
- Target/reference line when relevant.
- Gap annotation if the main story is under/over-performance.

SVG notes: support positive and negative values around a baseline. Keep labels short and legible.

### 5. Diverging Stacked Bar

Use when showing positive and negative sentiment, agreement/disagreement, or before/after distribution shifts.

Required elements:

- Center baseline at 0.
- Positive segments on one side, negative segments on the other.
- Clear legend for intensity levels.
- Totals or net score labels where useful.

SVG notes: compute separate positive and negative stacks from the baseline.

## Dark Background Rules

For dark templates, charts should use lightened, lower-noise colors:

| Light-background color role | Dark-background replacement |
|---|---|
| Primary accent | The template's light accent or lavender/cream equivalent |
| Secondary accent | A 60-70% opacity neutral/light accent |
| Tertiary accent | A 30-45% opacity neutral/light accent |
| Axis/reference line | 10-18% opacity light neutral |
| Numeric labels | The template's primary light text color |
| Secondary labels | 30-50% opacity light neutral |

For light templates, use the template's own color variables and keep charts calmer than decorative surfaces.

## Rules

- Use SVG, not external chart libraries, unless the user explicitly asks otherwise.
- Keep the chart's main insight in the visual center of the slide or section.
- Every visible number needs a unit or label.
- Do not invent chart data that contradicts nearby headline numbers.
- Prefer fewer, clearer labels over dense unreadable annotation.
- Use `viewBox` and responsive sizing rather than fixed pixel-only layouts.
