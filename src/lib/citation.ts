/**
 * Article `citation` builder.
 *
 * Every editorial page already carries a sourced reference list — each datable
 * claim ties to a primary document or reputable report. This turns that list
 * into machine-readable `schema.org/citation` on the page's Article node, so
 * search engines and LLM answer engines can see what the page is grounded in.
 * Being visibly, structurally sourced is what makes a page safe for an answer
 * engine to cite back to — our strongest differentiator, made legible.
 *
 * Accepts any of the per-topic source arrays structurally (all are
 * `{ url, label }` with an id we don't need here), so one helper serves every
 * page. Entries without a URL are dropped; the label becomes the citation's
 * human-readable name.
 */
type SourceLike = { url?: string | null; label?: string | null };

export type Citation = {
  "@type": "CreativeWork";
  name?: string;
  url: string;
};

export function citations(...sources: SourceLike[][]): Citation[] {
  const seen = new Set<string>();
  const out: Citation[] = [];
  for (const list of sources) {
    for (const s of list) {
      if (!s.url || seen.has(s.url)) continue;
      seen.add(s.url);
      out.push(
        s.label
          ? { "@type": "CreativeWork", name: s.label, url: s.url }
          : { "@type": "CreativeWork", url: s.url },
      );
    }
  }
  return out;
}
