/**
 * Entity `sameAs` registry.
 *
 * `sameAs` is the single strongest entity-disambiguation signal in structured
 * data: it tells search engines and LLM answer engines that the Person or
 * Organization named on one of our pages is the *same* real-world entity as a
 * canonical reference elsewhere (Wikipedia, an official .gov site, a company's
 * own domain). That is what lets a model confirm "the Greg Abbott on this page
 * is the Governor of Texas" and reconcile our page into its knowledge graph.
 *
 * Editorial rule — correctness over coverage. A `sameAs` pointing at the wrong
 * or a dead URL is worse than none: it actively misinforms the graph. So this
 * map carries ONLY entries whose target has been verified to be the canonical,
 * unambiguous identity page for that exact entity. Entities we could not verify
 * with confidence are intentionally absent; add them here (one source of truth)
 * as they are confirmed, rather than scattering URLs across page files.
 *
 * Keys MUST match the `name` string used in each page's JSON-LD entity node
 * exactly (that is how `aboutGraph`/`withSameAs` attach the links).
 */
export const SAME_AS: Record<string, string[]> = {
  // People — statewide / federal officials and nationally notable figures
  // (canonical Wikipedia entries; the Governor is disambiguated from the
  // sportscaster via the "(politician)" slug).
  "Greg Abbott": ["https://en.wikipedia.org/wiki/Greg_Abbott"],
  "Ted Cruz": ["https://en.wikipedia.org/wiki/Ted_Cruz"],
  "Dan Patrick": ["https://en.wikipedia.org/wiki/Dan_Patrick_(politician)"],
  "Angela Paxton": ["https://en.wikipedia.org/wiki/Angela_Paxton"],
  "Glenn Hegar": ["https://en.wikipedia.org/wiki/Glenn_Hegar"],
  "Kelly Hancock": ["https://en.wikipedia.org/wiki/Kelly_Hancock"],
  "Don Huffines": ["https://en.wikipedia.org/wiki/Don_Huffines"],
  "Charles Schwertner": ["https://en.wikipedia.org/wiki/Charles_Schwertner"],
  "Mayes Middleton": ["https://en.wikipedia.org/wiki/Mayes_Middleton"],
  "Elon Musk": ["https://en.wikipedia.org/wiki/Elon_Musk"],
  "Ross Ulbricht": ["https://en.wikipedia.org/wiki/Ross_Ulbricht"],
  // State legislators without a canonical encyclopedia entry (or with an
  // ambiguous one) — the official Texas Legislature member page is the
  // authoritative, district-unambiguous identity page. Senate member pages are
  // keyed by district (member.php?d=NN); House pages by member id.
  "Giovanni Capriglione": ["https://house.texas.gov/members/2345/biography"],
  "Phil King": ["https://www.senate.texas.gov/member.php?d=10"],
  "Lois Kolkhorst": ["https://www.senate.texas.gov/member.php?d=18"],
  "Tan Parker": ["https://www.senate.texas.gov/member.php?d=12"],
  "Nathan Johnson": ["https://www.senate.texas.gov/member.php?d=16"],
  "Ken King": ["https://house.texas.gov/members/2455/biography"],

  // Institutions — official sites (unambiguous government and industry bodies).
  "Electric Reliability Council of Texas": ["https://www.ercot.com"],
  ERCOT: ["https://www.ercot.com"],
  "Texas Comptroller of Public Accounts": ["https://comptroller.texas.gov"],
  "Office of the Attorney General of Texas": ["https://www.texasattorneygeneral.gov"],
  "Texas Department of Banking": ["https://www.dob.texas.gov"],
  "Texas State Securities Board": ["https://www.ssb.texas.gov"],
  "Public Utility Commission of Texas": ["https://www.puc.texas.gov"],
  "Texas Blockchain Council": ["https://texasblockchaincouncil.org"],
  "Satoshi Nakamoto Institute": ["https://nakamotoinstitute.org"],
  "Tesla, Inc.": ["https://en.wikipedia.org/wiki/Tesla,_Inc.", "https://www.tesla.com"],

  // Companies — official domains (+ a verified encyclopedia entry where one
  // exists for the exact entity).
  "Riot Platforms, Inc.": ["https://www.riotplatforms.com"],
  "MARA Holdings, Inc.": ["https://www.mara.com"],
  "Core Scientific, Inc.": ["https://www.corescientific.com"],
  "Bitdeer Technologies Group": [
    "https://www.bitdeer.com",
    "https://en.wikipedia.org/wiki/Bitdeer",
  ],
  "Lancium LLC": ["https://www.lancium.com"],
};

/** The verified `sameAs` URLs for an entity name, or `undefined` if none. */
export function sameAs(name: string | undefined): string[] | undefined {
  return name ? SAME_AS[name] : undefined;
}

/**
 * Return a copy of an entity JSON-LD node with `sameAs` attached when the
 * node's `name` is in the registry; otherwise the node is returned unchanged.
 */
export function withSameAs<T extends { name?: string }>(node: T): T {
  const links = sameAs(node.name);
  return links ? { ...node, sameAs: links } : node;
}

/**
 * Map `withSameAs` over an Article's `about` array (the common case): every
 * Person/Organization/Corporation whose name is registered gains its `sameAs`
 * links; plain `Thing` references and unregistered entities pass through
 * untouched. `undefined` values never reach the output JSON (JSON.stringify
 * drops them), so attaching nothing is a no-op.
 */
export function aboutGraph<T extends { name?: string }>(items: T[]): T[] {
  return items.map(withSameAs);
}
