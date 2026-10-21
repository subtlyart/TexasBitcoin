// Plain-English glossary of Bitcoin-in-Texas terms.
//
// PHILOSOPHY: This page lowers the wall on every other page. Each definition is
// written to be understood cold by someone on their first day — one idea, plain
// words, no jargon used to define jargon. Where a term has a deep page, we point
// there with `related` rather than restating the sourced detail; the datable
// claims (and their citations) live on those pages, not here.
//
// Grouped by the site's editorial spine so the list teaches the stack, not just
// the vocabulary. Seed written October 2026.

export const GLOSSARY_LAST_UPDATED = "October 2026";

export type GlossaryCategory =
  | "basics"
  | "grid"
  | "law"
  | "frontier";

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "basics",
  "grid",
  "law",
  "frontier",
];

export const CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  basics: "The basics",
  grid: "Mining & the grid",
  law: "The money law",
  frontier: "The frontier",
};

export const CATEGORY_BLURBS: Record<GlossaryCategory, string> = {
  basics: "What Bitcoin is, and the words you'll hear in the first five minutes.",
  grid: "How Texas power turned into the mining capital of the world.",
  law: "The Texas statutes and the federal line that decide what's allowed.",
  frontier: "The newer tools being built on top of the base layer.",
};

export interface Term {
  term: string;
  category: GlossaryCategory;
  // One or two plain sentences. Define the idea, not the dictionary word.
  definition: string;
  // Optional deeper read on this site, with descriptive anchor text.
  related?: { href: string; label: string };
  // Canonical external identity for the concept (Wikipedia, official site), for
  // schema.org DefinedTerm `sameAs`. Only set where a term maps to one
  // unambiguous public entity — Texas-statute terms (SM 1037, SB 21, HB 1056,
  // § 1960, the reserve) have no such external entity and are left unset; they
  // are disambiguated by their `related` deep page instead.
  sameAs?: string[];
}

// Ordered within each category from most foundational to most specific.
export const terms: Term[] = [
  // ── The basics ──────────────────────────────────────────────────────────
  {
    term: "Bitcoin",
    sameAs: ["https://en.wikipedia.org/wiki/Bitcoin"],
    category: "basics",
    definition:
      "A form of money you can hold and send yourself, over the internet, without a bank or company in the middle. There will only ever be 21 million of it, and no one can change that rule.",
    related: {
      href: "/history-of-bitcoin-in-texas",
      label: "how Bitcoin came to Texas",
    },
  },
  {
    term: "Blockchain",
    sameAs: ["https://en.wikipedia.org/wiki/Blockchain"],
    category: "basics",
    definition:
      "The shared public record of every Bitcoin transaction, copied across thousands of computers so no single one can quietly rewrite it. Think of it as a ledger everyone keeps a copy of at once.",
  },
  {
    term: "Satoshi (sat)",
    category: "basics",
    definition:
      "The smallest piece of a bitcoin — one hundred-millionth of one. Small amounts are counted in sats, the way dollars are counted in cents. Named for Bitcoin's pseudonymous inventor, Satoshi Nakamoto.",
    related: {
      href: "/satoshi-nakamoto-institute",
      label: "the Satoshi Nakamoto Institute, founded in Austin",
    },
  },
  {
    term: "Self-custody",
    category: "basics",
    definition:
      "Holding your own Bitcoin directly, so no bank or exchange can freeze it or lose it for you. It's the difference between cash in your pocket and money in someone else's account — freedom and full responsibility at once.",
    related: {
      href: "/karin-kusano-bitcoin",
      label: "self-custody taught as financial sovereignty",
    },
  },
  {
    term: "Private key",
    category: "basics",
    definition:
      "The secret code that proves a batch of Bitcoin is yours and lets you spend it. Whoever has the key controls the coins — which is why protecting it is the whole game.",
  },
  {
    term: "Cold storage",
    category: "basics",
    definition:
      "Keeping your private key on a device that never touches the internet, so it can't be hacked remotely. The offline equivalent of a safe rather than a wallet in your back pocket.",
  },
  {
    term: "Node",
    category: "basics",
    definition:
      "A computer running Bitcoin's software that keeps its own full copy of the ledger and checks that every transaction follows the rules. The more independent nodes there are, the harder the network is to cheat or capture.",
  },
  {
    term: "Proof-of-work",
    sameAs: ["https://en.wikipedia.org/wiki/Proof_of_work"],
    category: "basics",
    definition:
      "The method Bitcoin uses to agree on its record without a referee: computers compete to solve a hard math puzzle, and the winner adds the next page to the ledger. The work costs real electricity, which is what makes cheating expensive — and ties Bitcoin to the power grid.",
    related: {
      href: "/bitcoin-mining-ercot",
      label: "proof-of-work on the Texas grid",
    },
  },
  {
    term: "Mining",
    category: "basics",
    definition:
      "Running specialized computers that do the proof-of-work puzzle, confirm transactions, and earn newly issued bitcoin in return. It's how new coins enter circulation and how the network stays secure.",
    related: {
      href: "/bitcoin-mining-map-texas",
      label: "the map of Texas mines",
    },
  },
  {
    term: "Hashrate",
    category: "basics",
    definition:
      "A measure of how much computing power is pointed at mining Bitcoin worldwide. Higher hashrate means a more secure network — and Texas is home to a large share of it.",
  },

  // ── Mining & the grid ───────────────────────────────────────────────────
  {
    term: "ERCOT",
    sameAs: ["https://en.wikipedia.org/wiki/Electric_Reliability_Council_of_Texas", "https://www.ercot.com"],
    category: "grid",
    definition:
      "The Electric Reliability Council of Texas — the nonprofit that runs the state's standalone power grid, which covers most of Texas. Bitcoin miners plug into this grid, and ERCOT's rules shape where and when they run.",
    related: {
      href: "/ercot-bitcoin",
      label: "ERCOT and Bitcoin",
    },
  },
  {
    term: "Demand response",
    sameAs: ["https://en.wikipedia.org/wiki/Demand_response"],
    category: "grid",
    definition:
      "Programs that pay large power users to switch off quickly when the grid is strained. Bitcoin miners can power down in seconds, so they get paid to act as a shock absorber during heat waves and cold snaps.",
    related: {
      href: "/bitcoin-mining-ercot",
      label: "how miners earn by powering down",
    },
  },
  {
    term: "Curtailment",
    category: "grid",
    definition:
      "When a miner (or other big load) is told to cut its power use — either voluntarily for payment, or by order during an emergency. It's the lever that lets Texas add huge electricity users without destabilizing the grid.",
  },
  {
    term: "Flared / stranded gas",
    sameAs: ["https://en.wikipedia.org/wiki/Gas_flaring"],
    category: "grid",
    definition:
      "Natural gas that oil wells produce with no pipeline to sell it, so it's burned off and wasted. Some Texas miners set up on-site to turn that otherwise-wasted gas into electricity and hashrate.",
  },
  {
    term: "Large load",
    category: "grid",
    definition:
      "Grid shorthand for a single customer that draws an enormous amount of power — a big mine or data center. Texas law now has special registration and curtailment rules for loads above 75 megawatts.",
    related: {
      href: "/texas-bitcoin-law-timeline",
      label: "the large-load law (SB 6)",
    },
  },

  // ── The money law ───────────────────────────────────────────────────────
  {
    term: "Supervisory Memorandum 1037",
    category: "law",
    definition:
      "A 2014 Texas banking ruling that said Bitcoin isn't legal “money,” which — perhaps surprisingly — meant you don't need a state money-transmitter license just to buy or sell your own. It set the permissive tone for everything after.",
    related: {
      href: "/what-texas-law-says-about-bitcoin",
      label: "what Texas law actually says",
    },
  },
  {
    term: "Senate Bill 21 (SB 21)",
    category: "law",
    definition:
      "The 2025 law that created the Texas Strategic Bitcoin Reserve — a state-held stash of Bitcoin, funded by the legislature and managed by the comptroller. It made Texas one of the first states to put Bitcoin on its own books.",
    related: {
      href: "/texas-strategic-bitcoin-reserve",
      label: "the Strategic Bitcoin Reserve",
    },
  },
  {
    term: "Strategic Bitcoin Reserve",
    category: "law",
    definition:
      "Texas's own holding of Bitcoin, created by SB 21 and kept outside the regular treasury. It's funded with public money by the legislature — there's no citizen share, token, or bond tied to it.",
    related: {
      href: "/who-holds-the-texas-bitcoin-reserve",
      label: "who holds it and how",
    },
  },
  {
    term: "Reserve asset vs. legal tender",
    category: "law",
    definition:
      "Two very different things. A reserve asset is something the state owns as savings (like gold, or now Bitcoin). Legal tender is money you must be able to pay taxes and debts with. Texas holds Bitcoin as a reserve asset — it has not made it legal tender.",
  },
  {
    term: "HB 1056 (gold-backed currency)",
    category: "law",
    definition:
      "A 2025 Texas law setting up a state-issued digital currency backed by gold held in the Texas Bullion Depository. It sits alongside the Bitcoin reserve as a separate hard-money experiment.",
    related: {
      href: "/texas-gold-vs-bitcoin",
      label: "Texas gold vs. Bitcoin",
    },
  },
  {
    term: "Section 1960 (money transmitting)",
    category: "law",
    definition:
      "A federal law that makes running an unlicensed money-transmitting business a crime. It's the main charge behind most Texas Bitcoin prosecutions — usually aimed at unlicensed sellers and scams, not ordinary users.",
    related: {
      href: "/texas-bitcoin-case-tracker",
      label: "the case tracker",
    },
  },

  // ── The frontier ────────────────────────────────────────────────────────
  {
    term: "Lightning Network",
    sameAs: ["https://en.wikipedia.org/wiki/Lightning_Network"],
    category: "frontier",
    definition:
      "A faster layer built on top of Bitcoin that settles tiny payments instantly and for almost no fee — think buying a coffee rather than wiring money. It clears back down to the main Bitcoin ledger underneath.",
    related: {
      href: "/texas-bitcoin-resources",
      label: "the tools worth knowing",
    },
  },
  {
    term: "Taproot",
    category: "frontier",
    definition:
      "A 2021 upgrade to Bitcoin that made transactions more private and made it easier to build more complex features without bloating the network. It's the groundwork much of the frontier is built on.",
  },
  {
    term: "Stablecoin",
    sameAs: ["https://en.wikipedia.org/wiki/Stablecoin"],
    category: "frontier",
    definition:
      "A digital token designed to hold steady at a fixed value, usually one U.S. dollar. We cover stablecoins only where they settle onto Bitcoin's base layer — not as a doorway to the wider “crypto” world.",
  },
  {
    term: "Custody",
    category: "frontier",
    definition:
      "Who actually holds the keys to a batch of Bitcoin. “Self-custody” means you do; “custodial” means a company does it for you. The Texas reserve's move from an ETF to directly held coin is a custody question.",
    related: {
      href: "/who-holds-the-texas-bitcoin-reserve",
      label: "the reserve's custody watch",
    },
  },
];
