// Karin Kusano and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the builders wing, applied
// honestly to a self-custody educator rather than a protocol teacher or an
// essayist. Where Song teaches engineers to build and Lewis wrote the case
// for why it is money, Kusano - "Cryptomommi" - works the human end: teaching
// self-custody and cold storage to people, often women and survivors, who
// were locked out of conventional finance. The Bitcoin-relevant spine is
// self-custody and financial sovereignty, the base-layer principles this site
// is built on; her broader digital-asset, DeFi, and AI work sits outside the
// site's thesis and is named as such, not laundered into it.
//
// SOURCING NOTE (read before citing): the speaking record is now
// independently confirmed - a National Cryptocurrency Association press
// release (source 8) names her on its SXSW 2026 panel in Austin, March 12,
// and the Eve Wealth Summit lists her in Phoenix, April 21 (source 7). What
// remains self-reported, with no primary record located: the "first female
// retail crypto trader honored at NASDAQ" line, the U.S. Congress outreach,
// and the Texas Chapter President title at the Association for Women in
// Cryptocurrency (whose own site names neither a Texas chapter nor her). The
// page attributes those as her account and the counterweight says so plainly.
// Note also that the confirmed stages - NCA (a Ripple-funded, XRP-world
// education nonprofit) and a women-in-crypto summit - are generic-crypto, not
// Bitcoin; the Bitcoin thread kept here is her self-custody message, not the
// venues.
//
// Verified October 4, 2026. Re-verify on a primary-record confirmation of the
// NASDAQ or Congress claims, a new book or platform, or a Texas-specific
// Bitcoin engagement with a firm date.

export const KUSANO_LAST_VERIFIED = "October 4, 2026";

export interface KusanoSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, her own properties first (the primary record of what she claims),
// then the organization she names, then the one independently dated listing.
export const kusanoSources: KusanoSource[] = [
  { id: 1, label: "karinkusano.com - Karin Kusano, Digital Asset Strategist: \"Texas Chapter President Association Women in Cryptocurrency & Sostento Crypto Advisory Board\"; \"NASDAQ First female retail crypto trader honored\"; \"U.S. CONGRESS - Sharing with lawmakers how crypto and blockchain changes lives\"; \"Financial sovereignty is a human right\"; self-custody, cold storage, survivor advocacy (self-reported)", url: "https://www.karinkusano.com/" },
  { id: 2, label: "Cryptomommi.com - Kusano's education platform: \"where Karin turns complex crypto, blockchain, and self-custody concepts into practical and actionable financial concepts\" (self-reported)", url: "https://cryptomommi.com/" },
  { id: 3, label: "Karin Kusano - LinkedIn: Digital Asset Strategist, advisor and speaker, Dallas-Fort Worth (self-reported professional record)", url: "https://www.linkedin.com/in/karinkusano/" },
  { id: 4, label: "Cryptomommi - YouTube channel: self-custody and digital-asset literacy videos", url: "https://www.youtube.com/@cryptomommi" },
  { id: 5, label: "Karin Kusano - Substack: her writing on digital assets and financial sovereignty", url: "https://substack.com/@karinkusano" },
  { id: 6, label: "Association for Women in Cryptocurrency - About: a global education, networking, and advocacy platform founded by Amanda Wick, grown to 750+ members across 22 countries; the org's own page lists regional ambassadors, not state chapters, and does not name Kusano", url: "https://www.womenincrypto.org/about" },
  { id: 7, label: "Eve Wealth Annual Summit 2026 (Luma) - Phoenix, April 20-22, 2026: Kusano speaks April 21 in \"Crypto Changed Everything,\" billed \"Karin Kusano - Crypto Market Strategist, Cryptomommi\"", url: "https://luma.com/evewealthsummit2026" },
  { id: 8, label: "National Cryptocurrency Association - \"Returns to SXSW to Demystify Crypto for the Masses\" (BusinessWire, March 4, 2026): names \"crypto market strategist Karin Kusano\" on the Crypto Convergence panel alongside NCA VP of External Affairs Ali Tager and PayPal's Smitha Purohit; mentor sessions March 12 at the Hilton Austin (Room 400-402), SXSW March 12-15, 2026. The NCA is a 501(c)(4) crypto-education nonprofit", url: "https://www.businesswire.com/news/home/20260304249469/en/National-Cryptocurrency-Association-Returns-to-SXSW-to-Demystify-Crypto-for-the-Masses" },
  { id: 9, label: "The Block - \"The NCA, founded with a $50 million grant from Ripple, launches education platform\" (2025): context on the National Cryptocurrency Association as a Ripple-funded, XRP-world consumer-education effort - generic crypto, not Bitcoin", url: "https://www.theblock.co/post/344699/the-nca-founded-with-a-50-million-grant-from-ripple-launches-education-platform-to-amplify-cryptos-untold-stories" },
];

export type KusanoTimelineKind = "path" | "teach" | "advocacy" | "claim";

// The arc: the lockout → self-custody → the platform → the stages → the
// claims the record cannot yet confirm.
export interface KusanoEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: KusanoTimelineKind;
  sourceIds: number[];
}

export const kusanoTimeline: KusanoEvent[] = [
  {
    date: "2016-01-01",
    dateLabel: "Her account",
    title: "Locked out of conventional finance, she finds self-custody",
    detail:
      "By her own account, Kusano lost access to conventional banking and turned to the one asset no one could freeze or withhold: cryptocurrency held in self-custody. The through-line of everything she teaches afterward is that key - that holding your own keys is a form of safety a bank account is not. The date is not on the record; the framing is hers.",
    kind: "path",
    sourceIds: [1],
  },
  {
    date: "2020-01-01",
    dateLabel: "The platform",
    title: "Cryptomommi: self-custody for people, not traders",
    detail:
      "She builds Cryptomommi - a site, a YouTube channel, and a Substack - to turn \"complex crypto, blockchain, and self-custody concepts into practical and actionable financial concepts,\" aimed at everyday people rather than markets. The register is survivor advocacy and literacy: cold storage, seed-phrase hygiene, and the claim that \"financial sovereignty is a human right.\"",
    kind: "teach",
    sourceIds: [1, 2, 4, 5],
  },
  {
    date: "2023-01-01",
    dateLabel: "Advocacy",
    title: "Texas chapter, Association for Women in Cryptocurrency",
    detail:
      "Kusano describes herself as Texas Chapter President of the Association for Women in Cryptocurrency - the global advocacy and education group founded by former federal prosecutor Amanda Wick - and sits on the Sostento crypto advisory board. The association's own page lists regional ambassadors rather than state chapters and does not name her, so the title rests on her account.",
    kind: "advocacy",
    sourceIds: [1, 6],
  },
  {
    date: "2026-03-12",
    dateLabel: "March–April 2026",
    title: "The stages: SXSW in Austin, then the Eve Wealth Summit",
    detail:
      "The engagements the record confirms are both in 2026. On March 12 she appears on the National Cryptocurrency Association's \"Crypto Convergence\" panel at SXSW in Austin, billed \"crypto market strategist Karin Kusano\" beside NCA's Ali Tager and PayPal's Smitha Purohit; on April 21 she speaks at the Eve Wealth Annual Summit in Phoenix. Both are generic-crypto education rooms - the NCA is a Ripple-funded nonprofit - not Bitcoin stages; her site adds Money 20/20, BTC Vegas, and Fast Company without dates.",
    kind: "advocacy",
    sourceIds: [8, 7, 1],
  },
  {
    date: "2026-10-04",
    dateLabel: "By her account",
    title: "The claims the record cannot yet confirm",
    detail:
      "Two lines recur on her site and in her introductions: that she was \"the first female retail crypto trader honored\" at NASDAQ, and that she has shared with U.S. lawmakers \"how crypto and blockchain changes lives.\" Neither is tied to a primary record here - the Congress line reads as advocacy outreach, not testimony - so this site carries them as her account, not as established fact.",
    kind: "claim",
    sourceIds: [1],
  },
];
