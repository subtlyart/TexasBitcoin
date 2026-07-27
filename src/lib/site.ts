export const site = {
  name: "TexasBitcoin",
  domain: "texasbitcoin.com",
  url: "https://texasbitcoin.com",
  tagline: "Where Bitcoin meets the physical world — and the financial future.",
  description:
    "The authority on Bitcoin in Texas: the energy and mining base layer, the money law, and the programmable-money frontier being built on top.",
  // Editorial positioning — used across trust-layer pages.
  positioning:
    "A research and reference publication. Not financial, investment, legal, or tax advice. We do not custody, transmit, or facilitate transactions in any digital asset.",
};

// Header nav carries content only; trust pages (About, Disclosures) live in
// the footer so they stay one scroll away without competing for attention.
//
// The mining and law verticals are deliberately absent from this nav (see
// SEAM.md): they stay fully indexed and reachable from body copy, but they
// do not claim a structural "section of the site" slot in the chrome.
export const nav = [
  { label: "History", href: "/history-of-bitcoin-in-texas" },
  { label: "Events", href: "/events" },
];
