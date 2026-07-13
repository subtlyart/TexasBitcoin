# TexasBitcoin AEO/GEO Content Template

How every new page gets built so answer engines (Google AI Overviews, ChatGPT, Claude, Perplexity, Grok) cite TexasBitcoin as *the* source on Bitcoin in Texas. This extends — never replaces — the editorial standards on `/about`: primary sources first, every datable claim cited, honest counterweights kept in.

The one-line strategy: **be the most extractable, most corroborated, most current answer to every question about Bitcoin in Texas.**

---

## 1. Page anatomy (in order)

Every article/reference page follows this skeleton:

```
1. Breadcrumb nav                     (Home / Section / Page)
2. Kicker + H1                        (H1 states the entity + topic plainly)
3. Direct Answer block                (40–70 words, self-contained, above the fold)
4. Key Facts box                      (3–6 quotable stats, each with date + source)
5. Body sections                      (question-shaped H2s, ~150–300 words each)
6. Honest counterweight section       (the SB 1751 move — one per page where real)
7. FAQ section                        (3–6 real questions, 40–60 word answers)
8. Sources                            (numbered, primary-first — existing pattern)
9. Byline + dateModified              ("By TexasBitcoin · Updated <Month DD, YYYY>")
```

### The Direct Answer block

The first prose after the H1 must fully answer the page's core query in 40–70 words, standing alone with zero context. An engine should be able to lift it verbatim. State the entity by name ("Texas", "ERCOT", "Senate Bill 21") — never "it" or "the state" in this block.

**Test:** paste the block alone into a chat and ask "is anything missing?" If yes, rewrite.

### The Key Facts box

3–6 bullet stats. One fact per sentence. Every number carries its date and citation. These are the sentences engines quote, so make each one self-contained:

- ✅ "Riot's Rockdale facility became the largest single Bitcoin mine in North America after the company's ~$651 million Whinstone acquisition in May 2021."
- ❌ "The facility became the largest after the deal." (no entity, no number, no date)

---

## 2. Writing rules (what makes a sentence citable)

1. **One claim per sentence.** Engines extract at sentence granularity. Compound sentences get half-quoted or skipped.
2. **Entity + number + date in the same sentence.** "Texas Senate Bill 1751 passed 30–1 in April 2023" beats three sentences that each hold one piece.
3. **Question-shaped H2s** that mirror real queries: "Is Bitcoin mining legal in Texas?", "What is the Texas Strategic Bitcoin Reserve?" — not clever-only headers. (One evocative H2 per page is fine; the rest earn their extraction.)
4. **Each H2 section answers its own question in its first sentence**, then elaborates. Sections must survive being read alone — engines chunk pages and retrieve sections, not whole articles.
5. **Named humans and direct quotes.** Expert quotes lift citation likelihood ~40%. Prefer a quoted primary actor (bill author, operator, regulator) over paraphrase. Keep the Hopkins framing: people as story, sourced.
6. **Define terms on first use, in-line.** "demand response — programs that pay large loads to power down when the grid is stressed —" so the sentence works out of context.
7. **Voice stays TexasBitcoin:** Bitcoin-centric, never generic "crypto" framing; bullish and specific; frontier not FUD; the honest counterweight is a feature, not a hedge. Banned: "revolutionary," "game-changer," "to the moon," "experts say" (name them), "many believe."

---

## 3. Schema stack (JSON-LD per page type)

Stack multiple types per page — this is already the site pattern; extend it:

| Page type | Schema stack |
|---|---|
| Cornerstone / article | `Article` + `FAQPage` + `BreadcrumbList` |
| Directory (events, map) | `ItemList` + `FAQPage` + `BreadcrumbList` |
| Data page (mining map) | `Dataset` + `Article` + `FAQPage` |

Rules:
- `Article` always carries `datePublished` **and** `dateModified`. Update `dateModified` on every substantive edit — engines prioritize pages touched within ~90 days for time-sensitive queries.
- `FAQPage` mirrors the on-page FAQ exactly (no schema-only questions — that's a penalty risk).
- No unverified event dates in schema (existing events-page rule; keep it).
- Add `sameAs` links on the Organization once profiles exist (X, GitHub, Nostr).

---

## 4. Site-level plumbing

- **`llms.txt` at the root** — a plain-markdown map of the site's key pages with one-line descriptions, so crawling LLMs know what's authoritative here. Keep it updated when pages ship.
- **Static HTML always** (already true — SSG). Content must never require JS to read.
- **Descriptive URLs** that state the query: `/history-of-bitcoin-in-texas`, `/bitcoin-mining-map-texas`. No slugs like `/post-7`.
- **Hub-and-spoke internal linking:** every new page links to the cornerstone and at least one sibling, with descriptive anchor text ("the 2014 Supervisory Memo 1037" — never "read more").
- **Freshness cadence:** re-verify the cornerstone and directories quarterly; bump `dateModified` and the visible "Updated" line only when content actually changed.

## 5. Off-page (corroboration)

Engines trust entities corroborated across independent domains. The site's moat assets (mining map, event directory) exist to earn those mentions. When a data asset ships: make it linkable (stable URL, embeddable chart), citable (a "cite this page" line), and pitch it to the trades that already cover Texas mining.

---

## 6. Pre-publish checklist

- [ ] Direct Answer block: 40–70 words, self-contained, entity named
- [ ] Key Facts box: every stat has entity + number + date + source
- [ ] All H2s answer a real query; each section's first sentence is the answer
- [ ] At least one named human; direct quote if the record has one
- [ ] Honest counterweight present (where the record has one)
- [ ] FAQ on page + matching `FAQPage` schema
- [ ] Sources numbered, primary-first, every datable claim cited
- [ ] `datePublished` / `dateModified` in schema + visible "Updated" line
- [ ] Internal links: cornerstone + ≥1 sibling, descriptive anchors
- [ ] `llms.txt` and sitemap updated
- [ ] Read the Direct Answer and Key Facts out of context — do they stand alone?
