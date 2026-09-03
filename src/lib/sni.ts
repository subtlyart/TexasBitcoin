// The Satoshi Nakamoto Institute - the sourced dataset.
//
// PHILOSOPHY: the people-cluster standard applied to an institution. The
// record is drawn from the Institute's own site (About, the author pages
// and their essay dates, the Mempool, the Complete Satoshi, the Library,
// the newsletter archive), the founders' own accounts (Goldstein on TFTC,
// Krawisz on Epicenter and later in the BSV press), the funder (OpenSats),
// and the IRS record via ProPublica. SNI belongs in the builders wing
// because it is the Austin room where the Bitcoin-only canon was written:
// "hyperbitcoinization," "speculative attack," "everyone's a scammer" are
// University of Texas reading-group essays. The honest counterweight: the
// co-founder who left for Bitcoin SV and says the Institute "betrayed" him,
// the long dormancy, and the fact that the canon predicted voluntary
// adoption and got, in Texas, a state reserve.
//
// Verified September 1, 2026. Re-verify on new newsletter milestones
// (news.nakamotoinstitute.org/archive), new 990 filings, and new Mempool
// essays.

export const SNI_LAST_VERIFIED = "September 1, 2026";

export interface SniSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Institute's own record, the founders in
// their own words, the funder and the IRS record, then trade press.
export const sniSources: SniSource[] = [
  { id: 1, label: "Satoshi Nakamoto Institute - About: founded November 2013 \"to advance and preserve knowledge of Bitcoin's history, economics, and technology\"; a Texas nonprofit corporation, 501(c)(3) public charity", url: "https://nakamotoinstitute.org/about/" },
  { id: 2, label: "Epicenter podcast - Daniel Krawisz, Director of Research at the Satoshi Nakamoto Institute: \"co-founded that organization last year with Michael Goldstein and Pierre Rochard\" (December 8, 2014)", url: "https://podcasts.apple.com/us/podcast/daniel-krawisz-nakamoto-institute-bitcoin-libertarianism/id792338939?i=1000437367033" },
  { id: 3, label: "TFTC - Sustaining Bitcoin For Generations, with Michael Goldstein (May 22, 2024): the University of Texas economics reading group, the name that began as a joke, the 2024 revitalization", url: "https://www.tftc.io/tftc-sustaining-bitcoin-michael-goldstein-nakamoto-institute/" },
  { id: 4, label: "The Mises Circle - Please join us at the Satoshi Nakamoto Institute (May 5, 2014): the reading group's own invitation to its successor", url: "https://themisescircle.org/blog/2014/05/05/please-join-us-at-the-satoshi-nakamoto-institute/" },
  { id: 5, label: "SNI - Pierre Rochard, author page: Working and Saving are Revolutionary Acts (December 24, 2012) through Speculative Attack (July 4, 2014), Bitcoin Governance (2018), and Speculative Attack, Season 2 with Allen Farrington (July 4, 2024)", url: "https://nakamotoinstitute.org/authors/pierre-rochard/" },
  { id: 6, label: "SNI - Daniel Krawisz, author page: thirty essays from The Proof-of-Work Concept (June 24, 2013) and Hyperbitcoinization (March 29, 2014) to Crashes and Hyperinflation (January 8, 2017)", url: "https://nakamotoinstitute.org/authors/daniel-krawisz/" },
  { id: 7, label: "SNI - Michael Goldstein, author page: Everyone's a Scammer (September 11, 2014), Meditations on Cypherpunk Nightmares (December 24, 2014), Toward a Node World Order (November 27, 2022), Everyone's a Speculator (January 23, 2023)", url: "https://nakamotoinstitute.org/authors/michael-goldstein/" },
  { id: 8, label: "SNI - The Memory Pool: the essay archive, from Rochard's December 2012 pieces through Parker Lewis (2020), Gigi's Bitcoin is Time (January 14, 2021), and Goldstein (2022–2023)", url: "https://nakamotoinstitute.org/mempool/" },
  { id: 9, label: "SNI - The Complete Satoshi: the whitepaper, emails, forum posts, code, and quotes of the pseudonymous author, 2008–2012, with the PGP key, under CC BY-SA 4.0", url: "https://satoshi.nakamotoinstitute.org/" },
  { id: 10, label: "SNI - Library: \"Bitcoin was not forged in a vacuum\" - Chaum (1982), May (1988), Hughes (1993), Szabo (1994–2005), Dai (1998), Back (2002), Finney (2004), alongside Mises, Hayek, and Rothbard", url: "https://nakamotoinstitute.org/library/" },
  { id: 11, label: "SNI - Podcasts: The Crypto-Mises Podcast (Goldstein and Krawisz, defunct) and The Reorg", url: "https://nakamotoinstitute.org/podcasts/" },
  { id: 12, label: "Bitcoin.com News - Nakamoto Institute's Daniel Krawisz: \"I Don't Like Altcoins, but I Like Forks\" (August 22, 2017)", url: "https://news.bitcoin.com/daniel-krawisz-i-dont-like-altcoins-but-i-like-forks/" },
  { id: 13, label: "CoinGeek - Daniel Krawisz: Everything is falling into the Bitcoin SV black hole (April 20, 2020): \"BTC betrayed me\"; \"I lost the allies with whom I started the Satoshi Nakamoto Institute\"", url: "https://coingeek.com/daniel-krawisz-everything-is-falling-into-the-bitcoin-sv-black-hole/" },
  { id: 14, label: "SNI newsletter archive - SNI: Going Institutional (March 4, 2024); Redesign Fundraiser Completed, 21m sats (May 27, 2024); The New SNI: Gradually, Then Suddenly (July 26, 2024); Join Us for the SNI Annual Dinner (January 24, 2026)", url: "https://news.nakamotoinstitute.org/archive" },
  { id: 15, label: "SNI newsletter - Introducing The Reorg (February 12, 2025): Goldstein re-reads the archive, first episode with Pierre Rochard", url: "https://news.nakamotoinstitute.org/p/introducing-the-reorg" },
  { id: 16, label: "OpenSats - Satoshi Nakamoto Institute: Education Initiative grant (July 5, 2024); 213,072,004 sats in total support; rebuilding the archive to Library of Congress preservation standards", url: "https://opensats.org/projects/satoshinakamotoinstitute" },
  { id: 17, label: "ProPublica Nonprofit Explorer - Satoshi Nakamoto Institute, EIN 38-4296073, Austin, TX: IRS ruling 2024; fiscal 2024 revenue ~$138K", url: "https://projects.propublica.org/nonprofits/organizations/384296073/202533189349205578/full" },
  { id: 18, label: "CoinDesk - Pierre Rochard, the Bitcoin Maximalist OG, on Mining, Markets and Modern Finance (April 7, 2025): Kraken, Riot Platforms VP of Research, The Bitcoin Bond Company", url: "https://www.coindesk.com/consensus-toronto-2025-coverage/2025/04/07/pierre-rochard-the-bitcoin-maximalist-og-on-mining-markets-and-modern-finance" },
  { id: 19, label: "Presidio Bitcoin - 21 in 21: Pierre Rochard: BBA and Master in Professional Accounting, University of Texas at Austin", url: "https://presidiobitcoin.substack.com/p/21-in-21-pierre-rochard" },
  { id: 20, label: "BitBlockBoom - Michael Goldstein: Bitcoin developer and educator, Austin; founder and president of the Satoshi Nakamoto Institute", url: "https://bitblockboom.com/michael-goldstein/" },
];

export type SniTimelineKind = "circle" | "canon" | "schism" | "institution";

// The arc: the reading group → the canon → the split → the institution.
export interface SniEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: SniTimelineKind;
  sourceIds: number[];
}

export const sniTimeline: SniEvent[] = [
  {
    date: "2012-12-24",
    dateLabel: "December 24, 2012",
    title: "The reading group starts writing",
    detail:
      "Pierre Rochard - a University of Texas accounting student - publishes \"Working and Saving are Revolutionary Acts,\" the earliest essay in what becomes the Institute's archive, for the Mises Circle: an Austrian-economics reading group Michael Goldstein ran at UT Austin. Two more Rochard essays follow that winter; Daniel Krawisz's four-part \"Crypto-Anarchy and Libertarian Entrepreneurship\" lands in May–June 2013.",
    kind: "circle",
    sourceIds: [5, 6, 3, 4],
  },
  {
    date: "2013-11-01",
    dateLabel: "November 2013",
    title: "The Institute is founded - from a joke",
    detail:
      "Goldstein, Krawisz, and Rochard launch the Satoshi Nakamoto Institute \"to advance and preserve knowledge of Bitcoin's history, economics, and technology.\" Goldstein later recalls the name beginning as a passing joke about \"a Nakamoto Institute for Bitcoin\" that stuck. Goldstein is president; Krawisz, director of research.",
    kind: "circle",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2014-01-01",
    dateLabel: "2013–2014",
    title: "The archive and the canon",
    detail:
      "Two reference works are assembled that outlast every argument: The Complete Satoshi - the whitepaper, every email and forum post, the code, the quotes, and the PGP key of the pseudonymous author, 2008–2012 - and the Library, a curated lineage from Chaum's blind signatures and May's crypto-anarchist manifesto through Szabo, Dai, Back, and Finney to Mises, Hayek, and Rothbard. Its one-line thesis: \"Bitcoin was not forged in a vacuum.\"",
    kind: "canon",
    sourceIds: [9, 10],
  },
  {
    date: "2014-03-29",
    dateLabel: "March 29, 2014",
    title: "\"Hyperbitcoinization\"",
    detail:
      "Krawisz coins the word in a Mempool essay: a voluntary transition from an inferior currency to a superior one, carried out as \"a series of individual acts of entrepreneurship rather than a single monopolist that games the system.\" It becomes the standard term for the end state the Bitcoin-only worldview argues toward - and, in the same spring, \"Appcoins Are Snake Oil\" and \"The Coming Demise of the Altcoins\" set the anti-altcoin line.",
    kind: "canon",
    sourceIds: [6, 8],
  },
  {
    date: "2014-07-04",
    dateLabel: "July 4, 2014",
    title: "\"Speculative Attack\"",
    detail:
      "Rochard argues Bitcoin will overtake weak currencies \"through speculative attacks and currency crises, not through the careful evaluation of tech journalists and 'mainstream consumers'\" - borrowed debt, spent on a harder money. Six days later Krawisz publishes \"The Legacy of the Dread Pirate Roberts,\" the Institute's reading of the Silk Road case.",
    kind: "canon",
    sourceIds: [5, 6],
  },
  {
    date: "2014-09-11",
    dateLabel: "September 11, 2014",
    title: "\"Everyone's a Scammer\"",
    detail:
      "Goldstein's essay supplies the ethic in a sentence: \"There is a war going on for your bitcoins, and willpower is your only defense.\" With \"Meditations on Cypherpunk Nightmares\" that December, it completes the trio - hyperbitcoinization, speculative attack, everyone's a scammer - that a decade of Bitcoin writing keeps quoting.",
    kind: "canon",
    sourceIds: [7, 8],
  },
  {
    date: "2017-01-08",
    dateLabel: "January 8, 2017 → August 22, 2017",
    title: "The director of research goes quiet, then goes the other way",
    detail:
      "\"Crashes and Hyperinflation\" is Krawisz's thirtieth and last Institute essay. Seven months later, as Bitcoin Cash forks off, he tells Bitcoin.com: \"I don't like altcoins, but I like forks\" - forks put investors, not developers, in control. The Institute's most prolific author is on the other side of the block-size war from the Institute.",
    kind: "schism",
    sourceIds: [6, 12],
  },
  {
    date: "2020-04-20",
    dateLabel: "April 20, 2020",
    title: "\"BTC betrayed me\"",
    detail:
      "Now a Bitcoin SV advocate, Krawisz tells CoinGeek: \"I lost the allies with whom I started the Satoshi Nakamoto Institute because they bought into 'core' ideas,\" and \"it was a mistake to make a think tank that was not also a mining pool.\" The Institute keeps every one of his thirty essays online.",
    kind: "schism",
    sourceIds: [13, 6],
  },
  {
    date: "2020-05-01",
    dateLabel: "2020–2021",
    title: "The next generation publishes on the shelf",
    detail:
      "Through the quiet years the Mempool stays the place serious essays go: Parker Lewis's \"Bitcoin is Common Sense,\" \"Bitcoin is One for All,\" and \"Bitcoin is the Great Definancialization\" (2020), Gigi's \"Bitcoin is Time\" (January 14, 2021), then Goldstein's own return with \"Toward a Node World Order\" (2022) and \"Everyone's a Speculator\" (2023).",
    kind: "canon",
    sourceIds: [8, 7],
  },
  {
    date: "2022-01-01",
    dateLabel: "2022",
    title: "A co-founder goes to the mines",
    detail:
      "Rochard - after three years running Bitcoin and Lightning product at Kraken - becomes Vice President of Research at Riot Platforms, the company that owns the Rockdale mine. The Institute's speculative-attack theorist now works for the largest hashrate in Texas; he later founds The Bitcoin Bond Company.",
    kind: "circle",
    sourceIds: [18, 19],
  },
  {
    date: "2024-03-04",
    dateLabel: "March 4, 2024",
    title: "\"Going Institutional\"",
    detail:
      "The Institute becomes a Texas 501(c)(3) public charity - \"SNI is now a tax exempt public charity\" - with an IRS ruling the same year. A website-redesign fundraiser follows in April, a translation community launches in fifteen-plus languages on April 30, and the redesign fund closes at 21 million sats on May 27.",
    kind: "institution",
    sourceIds: [14, 17, 3],
  },
  {
    date: "2024-07-05",
    dateLabel: "July 5 → July 26, 2024",
    title: "OpenSats - and the new SNI",
    detail:
      "OpenSats funds the Institute under its Education Initiative - 213 million sats in total support - to rebuild the archive \"using the same preservation standards that govern the Library of Congress.\" Three weeks later the redesigned site ships under a title borrowed from Parker Lewis: \"The New SNI: Gradually, Then Suddenly.\" Missing P2P Research list emails are added in August.",
    kind: "institution",
    sourceIds: [16, 14],
  },
  {
    date: "2025-02-12",
    dateLabel: "February 12, 2025",
    title: "The Reorg",
    detail:
      "Goldstein launches a podcast that re-reads the archive against a decade of proof-of-work - \"what predictions proved correct and which ideas have been revised or invalidated\" - opening with Rochard on his 2013 argument that Bitcoin competes with fiat. Fiscal 2024 revenue: about $138,000. The first annual dinner is announced for early 2026.",
    kind: "institution",
    sourceIds: [15, 17, 14],
  },
];
