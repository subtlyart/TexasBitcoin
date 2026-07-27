// Texas Bitcoin resources directory.
//
// PHILOSOPHY: Same as the events directory and the mining map — verified
// entries only, linked straight to the source. This page is a reference
// shelf, not a launchpad: we list tools that help you *find and understand*
// Bitcoin in Texas. We do not list exchanges, brokers, P2P trading desks,
// wallet referrals, or anything that reads as "buy here" — see
// `site.positioning`. A directory of what exists is reference; a transaction
// funnel is a different publication.
//
// Every entry must survive three questions before it goes on the shelf:
//   1. Does it help someone locate or understand Bitcoin *in Texas*?
//   2. Is it free to use without an account?
//   3. Is it likely to still be here next year?
//
// Question 3 is not hypothetical. Bitnodes.io crawled the network
// continuously from 2013 until its domain quietly expired on May 3, 2026,
// taking NewHedge's node counter and SatoshiDashboard down with it. Prefer
// resources with institutional backing or an obvious successor; where we
// link a stopgap, say so in `caveat`.
//
// Seed verified July 2026. Re-verify links quarterly and prune dead entries.

export const RESOURCES_LAST_VERIFIED = "July 27, 2026";

export type ResourceCategory = "wild" | "network" | "grid" | "policy";

// Display order for category sections.
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "wild",
  "network",
  "grid",
  "policy",
];

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  wild: "In the wild",
  network: "The network itself",
  grid: "The grid underneath",
  policy: "Policy & industry",
};

export const CATEGORY_BLURBS: Record<ResourceCategory, string> = {
  wild: "Where Bitcoin touches ground — merchants, communities, and machines you can walk up to.",
  network:
    "The protocol as running infrastructure: the nodes and the software actually enforcing the rules.",
  grid: "The power system every Texas miner answers to, in public data.",
  policy:
    "Where the rules get argued over before they reach the statute books.",
};

export interface Resource {
  name: string;
  url: string;
  category: ResourceCategory;
  // What it is, and why it earns a place on a Texas shelf specifically.
  blurb: string;
  // Honest limitation — shown in muted type. Omit when there isn't one;
  // do not invent caveats for the sake of symmetry.
  caveat?: string;
}

export const resources: Resource[] = [
  {
    name: "BTC Map",
    url: "https://btcmap.org/",
    category: "wild",
    blurb:
      "Open, community-maintained map of businesses that accept Bitcoin — and of local Bitcoin communities — worldwide. Zoom to any Texas metro and you can see what's near you, contributed and corrected by the people who actually spend there.",
    caveat:
      "Coverage is only as current as its last volunteer edit. Call ahead before you plan a purchase around it.",
  },
  {
    name: "Bitnod.es",
    url: "https://bitnod.es/",
    category: "network",
    blurb:
      "BitMEX Research's crawler of the reachable Bitcoin network — node counts broken out by client software and version, with a peer explorer carrying city-level location for each node found. The closest thing the network currently has to a public census.",
    caveat:
      "Built as a replacement after Bitnodes.io went dark in May 2026, and BitMEX Research describes it as a rudimentary stand-in for the original. Crawler-based counts see only listening nodes, so they run well below estimates that include unreachable ones.",
  },
  {
    name: "ERCOT",
    url: "https://www.ercot.com/",
    category: "grid",
    blurb:
      "The grid operator for roughly 90% of Texas load, and the reason the mining industry came here at all. Its public dashboards carry real-time demand, pricing, and reserve margins — the same numbers that decide when a mine curtails and sells its power back instead of hashing.",
  },
  {
    name: "Texas Blockchain Council",
    url: "https://texasblockchaincouncil.org/",
    category: "policy",
    blurb:
      "The industry association that has done more than any other body to shape Texas digital-asset policy, from grid-interconnection fights to the legislation behind the state's Strategic Bitcoin Reserve. Its positions are advocacy, not neutral analysis — read them as such, and read them, because they arrive in the Capitol before the bills do.",
  },
];
