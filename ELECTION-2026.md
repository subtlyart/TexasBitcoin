# November 3, 2026 — same-day update playbook

*Internal doc. Pre-staged so the post-election edit is a find-and-replace
against the primary record, not a research day. Nothing here is published
until results are in; every outcome line below is conditional.*

## Sources to add on the day

Cite results to the primary record first, then one wire story:

- Texas Secretary of State election-night returns (linked from sos.texas.gov)
  (the unofficial canvass; label it "unofficial" until the canvass is complete).
- Texas Tribune race pages (one per race) as the secondary.
- For the comptroller race, also the Comptroller's own release if the office
  posts one; the reserve pages cite comptroller.texas.gov first by rule.

Add the source to the page's `src/lib/<person>.ts` sources array, then cite
it with `<C n={…} />` on every sentence that changes. Bump the file's
`*_LAST_VERIFIED`, the header comment's "Verified" line, and the page's
`dateModified` together.

## The races on the site

| Race | R | D | Pages that carry it | Why it matters here |
|---|---|---|---|---|
| Comptroller | Don Huffines (incumbent, appointed Aug 1) | Sarah Eckhardt | huffines, hegar, hancock (FAQ), reserve, who-holds, schwertner, capriglione, ken-king, middleton, angela-paxton, law-timeline figure | Custody of the reserve and the committee chair pass with the office (§ 403.703, § 403.707). The Dec 31 report is due under whoever holds the desk on that date, which is Huffines either way (the term begins January 2027). |
| Attorney General | Mayes Middleton | Nathan Johnson | middleton, johnson, ag, kolkhorst/schwertner cross-links | First change of hands since January 2015. Both voted for SB 21; neither has stated a digital-asset position. |
| House District 88 | Ken King (incumbent) | Heather Wallace | ken-king | State Affairs chair; SB 6 sponsor. |
| Senate District 5 | Charles Schwertner (incumbent) | (opponent per Ballotpedia source 20) | schwertner | SB 21 author. |
| Senate District 18 | Lois Kolkhorst (incumbent) | Erica Gillum | kolkhorst | The large-load brake. |
| House District 98 (open) | Armin Mizani | Cate Brennan | capriglione | Capriglione's seat; he leaves in January regardless. |
| Not on the ballot | — | — | angela-paxton (SD-8, 2028), tan-parker (SD-12, 2028), ted-cruz (2030), abbott, patrick | Confirm no edit needed; the Paxton page already states she is not up. |

## Per-page edits

Each entry lists the exact passages, then the two outcome variants. Keep the
house voice: entity + number + date in one sentence, primary source cited,
counterweight retained.

### `/don-huffines-bitcoin` — `src/lib/huffines.ts`, `src/app/don-huffines-bitcoin/page.tsx`

Passages: FAQ "Was Don Huffines elected comptroller?"; Key Facts bullet
"Huffines faces Democrat Sarah Eckhardt…"; timeline entry `2026-11-03`
(`kind: "watch"` → `"event"` or the file's equivalent, `detail` rewritten);
closing section "Where does the Huffines record stand today?" (the
"three clocks" paragraph); header comment "Re-verify…".

- **Huffines wins.** FAQ: "Yes. On November 3, 2026 Huffines won the full
  four-year term beginning January 2027 with X% to Eckhardt's Y% (unofficial
  results), having held the office by appointment since August 1, 2026." Closing:
  two clocks remain (custody award, December 31 report); the reserve's manager
  now holds a mandate of his own. Remove "either way" hedges.
- **Eckhardt wins.** FAQ: "No. On November 3, 2026 Democratic state Senator
  Sarah Eckhardt won the full term with X% to Y%; Huffines remains comptroller
  until the term begins in January 2027, so the December 31 report is still
  published under his name." Closing: the December 31 report becomes the last
  act of the Huffines tenure; add the Eckhardt reserve record (statements, SB 21
  vote — she sat in the Senate when SB 21 passed in 2025; check the
  bill's record vote before writing). Open a `/sarah-eckhardt-bitcoin` page
  only if her record supports one; otherwise add her to the who-holds
  "Who signs" row with a January 2027 effective date.

### `/who-holds-the-texas-bitcoin-reserve` — `src/lib/custody.ts`

Passages: status row "Who signs"; the "Who decides, who watches" figure
caption; the "Who signs the award?" prose. Change only if Eckhardt wins:
append "; Sarah Eckhardt takes the office in January 2027 and inherits
whatever is or is not under contract by then." If Huffines wins, no change
beyond the stamp.

### `/texas-strategic-bitcoin-reserve` — `src/lib/reserve.ts`

Passages: status row "Manager"; the "What comes next" figure caption
("the November 3 general decides who holds the desk for a full term"); the
biennial-report section's "whatever the November 3 election decides".
Replace the conditional with the result in one clause.

### `/kelly-hancock-bitcoin` — FAQ "Who manages the Texas Bitcoin Reserve after Hancock?"

Append one sentence with the result. No other change.

### `/glenn-hegar-bitcoin` — closing section

"The office he ran is Don Huffines's until November 3 and, if the voters
agree, after" → state the result. Bump `HEGAR_LAST_VERIFIED`.

### `/mayes-middleton-bitcoin`, `/nathan-johnson-bitcoin`, `/texas-attorney-general-bitcoin`

Passages: Middleton hero paragraph ("On November 3 Texas will choose…"),
Key Facts bullet, closing section ("polling within one point"); Johnson Key
Facts bullet and closing; AG page intro ("on November 3 it passes to someone
new") and closing ("On November 3 the office changes hands…"); `ag.ts` and
`middleton.ts`/`johnson.ts` header comments.

- **Middleton wins.** AG page: "On November 3, 2026 Mayes Middleton won the
  office with X%, the first change of hands since January 2015; he takes
  office January 2027." Winner's page closing: "Attorney General-elect";
  loser's page: returns to the Senate seat (Johnson, SD-16, term to 2028;
  Middleton holds SD-11 through the campaign and would keep it on a loss).
- **Johnson wins.** Mirror. Note on the AG page that the office passes to a
  Democrat for the first time since Dan Morales left in 1999 (verify the date
  before writing).
- Either way: the AG page's "what the office has and has not done" record is
  unchanged until the new occupant acts. Do not speculate on kiosk suits or
  the SEC case.

### `/ken-king-bitcoin`, `/charles-schwertner-bitcoin`, `/lois-kolkhorst-bitcoin`

One Key Facts bullet and one closing-section clause each. Winner: "re-elected
on November 3, 2026 with X%". Loser: "lost on November 3, 2026, X% to Y%;
leaves office when the 90th Legislature convenes January 12, 2027" and
re-write the closing's forward-looking clause (chair of State Affairs, the
author's committee chair, the brake) in the past tense. Schwertner's page
also drives the reserve's "author" framing: if he loses, the 90th's reserve
bills need a new sponsor — say so, don't guess who.

### `/giovanni-capriglione-bitcoin`

Closing section: "the general is November 3" → "Armin Mizani (R) / Cate
Brennan (D) won House District 98 on November 3 with X%". Nothing else
changes; he leaves in January regardless.

### `/texas-bitcoin-law-timeline`, `/texas-bitcoin-bills-2027`

The "road to the 90th" figure caption lists dates, not races; no change.
`lege-90.ts` gains nothing until pre-filing opens November 9.

## After the edit

1. `npx tsc --noEmit && npm run lint`.
2. Re-run the November-3 grep and confirm every hit is past tense or cited:
   `grep -rn "November 3" src --include=*.ts --include=*.tsx`.
3. One PR, titled "November 3 results: <winner list>", one commit per page
   cluster (comptroller, AG, Legislature).
4. Leave the `2026-12-31` entries alone; the report has its own frame on the
   reserve page and its own edit day.

## December 31, 2026 — the report

The reserve page now carries "What must the first biennial report contain?"
(§ 403.708, source 16 in `reserve.ts`) and a status row that reads "none
posted as of <date>". On the day the report posts:

- Replace the status row with the four statutory figures (amount, estimated
  value, changes by asset, actions), each cited to the report's URL on
  comptroller.texas.gov.
- Resolve the measuring-date question the section raises (whether the office
  reported as of August 31, 2025 or as of publication) in one sentence.
- Flip the `2026-12-31` timeline entries in `reserve.ts` and `huffines.ts` to
  `done: true`, and bump `RESERVE_LAST_VERIFIED`, `HUFFINES_LAST_VERIFIED`,
  `CUSTODY_LAST_VERIFIED`, `HANCOCK_LAST_VERIFIED` and the four `dateModified`
  values.
- If the report names the custodian, the custody-watch pages update first.
