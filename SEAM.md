# The Seam — hidden journey architecture

*Internal doc. The reader-facing rule: never explain the seam in page copy.
Discovery is the product.*

## What it is

A site-wide hidden layer that turns the existing editorial thread — "the
seam" between state law, federal law, the grid, and the money — into a
walkable trail. It backgrounds the mining and law verticals (per editorial
direction: **no prominent nav links**; context lives in body copy) and
rewards attentive readers with a terminal lore page.

Two mechanisms:

1. **Ambient copy** — short, quiet paragraphs woven into pages that lack
   mining/law texture, with low-key inline links (muted color, faint accent
   underline — never buttons, never cards). Example: the closing paragraph
   of `/events`.
2. **The trail** — five small lone-star glyphs (`SeamMark`), one per stop,
   each linking to the next stop. Each glyph is rotated 72° further than the
   last (a fifth of a turn; five stops close the circle).

## The trail

| Step | Rotation | Page (glyph location) | Links to |
|---|---|---|---|
| 0 | 0° | `/` — end of hero paragraph | `/texas-bitcoin-law-timeline` |
| 1 | 72° | Law timeline — end of the FinCEN-seam paragraph | `/texas-bitcoin-case-tracker` |
| 2 | 144° | Case tracker — end of the "What is § 1960?" section | `/bitcoin-mining-map-texas` |
| 3 | 216° | Mining map — end of "How to cite this map" | `/rockdale-texas-bitcoin` |
| 4 | 288° | Rockdale — end of the closing narrative paragraph | `/the-seam` (terminal) |

**Terminal:** `/the-seam` — five stanzas (Memo, Docket, Grid, Town, Reserve),
an animated star-trace SVG (stroke-draw, stilled under
`prefers-reduced-motion`), the October 23 coda (**no year** — the record
gives none; keep it that way), and a quiet pointer to the Tapes. It is
deliberately **unlisted**: `robots: { index: false }`, absent from the
sitemap, nav, and llms.txt. Do not "fix" that.

## Conventions

- `SeamMark` (`src/components/seam-mark.tsx`): always placed *after the
  period* of a load-bearing sentence; `ml-1.5`, muted at rest
  (`text-muted-2/50`), accent on hover/focus. Real link with
  `aria-label="Follow the seam"` — hidden from skimmers, not from screen
  readers or keyboards.
- One glyph per page, maximum. The trail is a single path, not confetti.
- Ambient-copy links use `text-muted-2` + `decoration-accent/30` — visible
  if you're reading, invisible if you're scanning.
- Voice for seam/lore surfaces: the Tapes register — journalist-lore,
  cryptic but factually exact, bullish-not-FUD. Every claim on the terminal
  page must stay true to the sourced record on the linked pages.

## Extending

When a new page earns a place on the seam (e.g. a future Voices profile or
the 2027 session tracker), re-route ONE existing glyph rather than adding a
sixth — the star has five points. Update the table above and keep rotations
consistent with position in the walk (step × 72°). If the trail changes,
update the stanza order on `/the-seam` to match the walk.
