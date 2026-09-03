// Jimmy Song and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster, applied to
// a builder rather than an officeholder. The record is drawn from Song's
// own site and published work, the GitHub record for the code, O'Reilly
// and the publishers for the books, UT Austin's McCombs School for the
// course, and CoinDesk / Decrypt / Bitcoin Magazine for the career and the
// bets. Song is the first entry in the builders wing of the people cluster:
// Abbott, Patrick, Schwertner, Hancock, and Huffines shaped what the State
// of Texas does with Bitcoin - Song, from Austin, shaped who can build on
// it. His influence on the network is pedagogical, not protocol design,
// and the page says so. The honest counterweight: the maximalism, the bets,
// and the gap between the "Core developer" label and the commit log.
//
// Verified September 1, 2026. Re-verify on a new book, a new UT course, or
// if the Lubin wager is ever formally settled.

export const SONG_LAST_VERIFIED = "September 1, 2026";

export interface SongSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: Song's own site and writing, the GitHub record,
// the publishers and UT Austin, then trade press.
export const songSources: SongSource[] = [
  { id: 1, label: "jimmysong.org - About: Bitcoin developer, educator, and author; programming since 1998, Bitcoin since 2011, open-source contributions since 2013; Armory, Paxos, Blockchain Capital; Bitcoin Fixes This podcast and Bitcoin Tech Talk newsletter", url: "https://jimmysong.org/about/" },
  { id: 2, label: "AAE Speakers Bureau - Jimmy Song: travels from Austin, TX; B.S. Mathematics, University of Michigan (1998); Armory VP of Engineering, Monetas (2014), Paxos Principal Architect, Blockchain Capital Venture Partner (January 2018)", url: "https://www.aaespeakers.com/keynote-speakers/jimmy-song" },
  { id: 3, label: "Decrypt - Jimmy Song: The making of a Bitcoin maximalist (October 3, 2019): born in Korea, to the U.S. at seven, found Bitcoin in 2011, Human Rights Foundation work", url: "https://decrypt.co/9913/jimmy-song-bitcoin-maximalist-human-rights" },
  { id: 4, label: "GitHub - bitcoin/bitcoin commits authored by jimmysong: a run of unit-test and RPC-test commits merged April–June 2017", url: "https://github.com/bitcoin/bitcoin/commits?author=jimmysong" },
  { id: 5, label: "GitHub - jimmysong/programmingbitcoin: the book's code repository, created December 17, 2017 (~1,900 stars, ~700 forks as of 2026)", url: "https://github.com/jimmysong/programmingbitcoin" },
  { id: 6, label: "O'Reilly Media - Programming Bitcoin: Learn How to Program Bitcoin from Scratch (published March 26, 2019)", url: "https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" },
  { id: 7, label: "UT Austin McCombs School of Business - Blockchain Initiative teaching: \"Programming Blockchain,\" taught by Jimmy Song for the M.S. in Information, Risk, and Operations Management programs", url: "https://www.mccombs.utexas.edu/centers-initiatives/blockchain-initiative/teaching/" },
  { id: 8, label: "Jimmy Song on X (March 2019): \"Just finished a 7-week class for the graduate students (business and computer science) at the University of Texas in Austin!\"", url: "https://twitter.com/jimmysong/status/1103105623967834113" },
  { id: 9, label: "Jimmy Song, Medium - Why I Was Wrong About Segwit And Big Blocks (August 24, 2017): the pinned January 1 prediction, \"2/3 wrong\"", url: "https://jimmysong.medium.com/why-i-was-wrong-about-segwit-and-big-blocks-405b0860dacb" },
  { id: 10, label: "Jimmy Song, Medium - Segwit2x Post Mortem: Divorce of Crypto-Austrians and Crypto-Keynesians (November 2017)", url: "https://jimmysong.medium.com/segwit2x-post-mortem-divorce-of-crypto-austrians-and-crypto-keynesians-87960b11ce4c" },
  { id: 11, label: "Jimmy Song, Medium - Lessons Learned from Teaching Over 500 Developers, or: Why You Should Level Up", url: "https://jimmysong.medium.com/lessons-learned-from-teaching-over-500-developers-or-why-you-should-level-up-ad0e48bce067" },
  { id: 12, label: "CoinDesk - Bitcoin Dev Jimmy Song Is Now at Blockchain Capital (January 25, 2018)", url: "https://www.coindesk.com/markets/2018/01/25/bitcoin-dev-jimmy-song-is-now-at-blockchain-capital" },
  { id: 13, label: "CoinDesk - Joe Lubin, Jimmy Song Strike $500K Crypto Bet on Ethereum's Future (May 14, 2019): 810.8 ETH against 69.74 BTC; five dapps at 10,000 daily / 100,000 monthly users for six months before May 23, 2023", url: "https://www.coindesk.com/markets/2019/05/14/joe-lubin-jimmy-song-strike-500k-crypto-bet-on-ethereums-future" },
  { id: 14, label: "CoinDesk - 5 Years After the $500K Ethereum Wager Between Joe Lubin and Jimmy Song, Who Won? (May 31, 2023): two data firms count five qualifying dapps - the bare minimum - with the definitions disputed", url: "https://www.coindesk.com/tech/2023/05/31/5-years-after-the-500000-ethereum-wager-between-joe-lubin-and-jimmy-song-who-won" },
  { id: 15, label: "CoinDesk - Author Jimmy Song Talks About 'The Little Bitcoin Book' (August 28, 2019): eight co-authors, written in days", url: "https://www.coindesk.com/markets/2019/08/28/author-jimmy-song-talks-about-the-little-bitcoin-book" },
  { id: 16, label: "Thank God for Bitcoin: The Creation, Corruption and Redemption of Money - Song with Gabe Higgins, Derek Waltchack, Robert Breedlove, J.M. Bush and others (November 26, 2020)", url: "https://www.booksamillion.com/p/Thank-God-Bitcoin/Jimmy-Song/9781641991216" },
  { id: 17, label: "Bitcoin and the American Dream: The New Monetary Technology Transcending Our Political Divide - Bitcoin Policy Group, with Song (December 2021), written for policymakers", url: "https://www.amazon.com/Bitcoin-American-Dream-Technology-Transcending/dp/B09NYXBG18" },
  { id: 18, label: "Bitcoin Magazine Books - Fiat Ruins Everything: How Our Financial System Is Rigged and How Bitcoin Fixes It, by Jimmy Song (September 2023)", url: "https://bitcoinmagazine.com/bitcoin-books/bitcoin-magazine-books-releases-fiat-ruins-everything" },
  { id: 19, label: "Market Realist - Jimmy Song at the Texas Blockchain Summit (October 2021): onstage with Senator Ted Cruz; identified as a University of Texas at Austin programming instructor", url: "https://marketrealist.com/p/jimmy-song-net-worth-bitcoin/" },
  { id: 20, label: "Jimmy Song, Bitcoin Tech Talk #295 (June 6, 2022): Consensus comes to Austin - \"altcoin scammer central for a week\"", url: "https://jimmysong.substack.com/p/bitcoin-tech-talk-295" },
];

export type SongTimelineKind = "path" | "code" | "teach" | "fight";

// The arc: the programmer → the code → the classroom → the arguments.
export interface SongEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: SongTimelineKind;
  sourceIds: number[];
}

export const songTimeline: SongEvent[] = [
  {
    date: "2011-01-01",
    dateLabel: "2011",
    title: "The programmer finds the protocol",
    detail:
      "Born in Korea and raised in the United States from age seven, a University of Michigan mathematician who had been writing software since 1998 discovers Bitcoin in 2011 - by his own account, out of fear of missing out - and by 2013 is contributing to its open-source tooling.",
    kind: "path",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2014-01-01",
    dateLabel: "2014–2017",
    title: "Wallets, integrations, institutions",
    detail:
      "Song leads Bitcoin integration at Monetas (2014), runs engineering at Armory - the early cold-storage wallet - as VP of Engineering, and serves as Principal Architect at Paxos, building blockchain plumbing for institutions. The résumé is infrastructure, not tokens.",
    kind: "path",
    sourceIds: [1, 2],
  },
  {
    date: "2017-04-17",
    dateLabel: "April–June 2017",
    title: "The commits: Bitcoin Core's test suite",
    detail:
      "Fourteen commits authored by Song merge into Bitcoin Core over ten weeks - unit tests for addrman and amount handling, RPC tests for getnetworkhashps, getdifficulty, gettxout, getchaintxstats and more. Modest in scope, real in the log: the \"Core contributor\" line on every conference bio traces to this spring.",
    kind: "code",
    sourceIds: [4],
  },
  {
    date: "2017-08-24",
    dateLabel: "August 24, 2017",
    title: "The block-size war - and \"Why I Was Wrong\"",
    detail:
      "Through the year of UASF and Segwit2x, Song's Medium essays on game theory and block weight become required reading on the small-block side. The day SegWit activates he publishes a post-mortem on his own pinned January 1 prediction, grading it \"2/3 wrong\" - an honesty that becomes part of the brand.",
    kind: "fight",
    sourceIds: [9, 10],
  },
  {
    date: "2017-12-17",
    dateLabel: "December 17, 2017",
    title: "The textbook begins",
    detail:
      "The code repository for Programming Bitcoin is created - the from-scratch Python library that becomes the book's spine: finite fields, elliptic curves, transactions, Script, blocks, proof-of-work, the network. It grows to roughly 1,900 stars and 700 forks.",
    kind: "teach",
    sourceIds: [5],
  },
  {
    date: "2018-01-25",
    dateLabel: "January 25, 2018",
    title: "Venture partner at Blockchain Capital",
    detail:
      "Song joins Blockchain Capital as a venture partner - a Bitcoin-only voice inside a fund that invests across the industry. The seat lasts into 2019.",
    kind: "path",
    sourceIds: [12, 2],
  },
  {
    date: "2018-05-16",
    dateLabel: "May 2018 → May 2019",
    title: "The Lubin wager",
    detail:
      "Onstage at Consensus 2018, Song bets ConsenSys founder Joe Lubin that decentralized apps will not find real users. Terms take a year to finalize: 810.8 ETH from Song against 69.74 BTC from Lubin, decided by whether five dapps hold 10,000 daily and 100,000 monthly users for six months before May 23, 2023.",
    kind: "fight",
    sourceIds: [13],
  },
  {
    date: "2019-01-14",
    dateLabel: "January–March 2019",
    title: "The University of Texas classroom",
    detail:
      "Song teaches \"Programming Blockchain\" as a seven-week graduate course at UT Austin's McCombs School of Business for business and computer-science master's students - his first university lectureship, in the city he works from.",
    kind: "teach",
    sourceIds: [7, 8, 19],
  },
  {
    date: "2019-03-26",
    dateLabel: "March 26, 2019",
    title: "Programming Bitcoin, O'Reilly",
    detail:
      "O'Reilly publishes Programming Bitcoin: Learn How to Program Bitcoin from Scratch. It becomes the standard textbook for engineers who want to understand the protocol by building it, and the written form of the two-day seminar Song had by then taught to more than 500 developers.",
    kind: "teach",
    sourceIds: [6, 11],
  },
  {
    date: "2019-08-28",
    dateLabel: "August 2019 → September 2023",
    title: "Four more books",
    detail:
      "The Little Bitcoin Book (August 2019, eight co-authors, written in days), Thank God for Bitcoin (November 2020, the Christian case for sound money), Bitcoin and the American Dream (December 2021, written for policymakers with the Bitcoin Policy Group), and Fiat Ruins Everything (September 2023, Bitcoin Magazine Books).",
    kind: "teach",
    sourceIds: [15, 16, 17, 18],
  },
  {
    date: "2021-10-01",
    dateLabel: "October 2021",
    title: "Texas Blockchain Summit: the teacher interviews the senator",
    detail:
      "At the Texas Blockchain Summit in Austin, Song shares the stage with Senator Ted Cruz and asks him when Peter Thiel first told him about Bitcoin - the same season Texas's mining boom and its first digital-asset statutes made the state the industry's center of gravity.",
    kind: "path",
    sourceIds: [19],
  },
  {
    date: "2022-06-06",
    dateLabel: "June 6, 2022",
    title: "Consensus comes to Austin",
    detail:
      "As the industry's largest conference relocates to his city, Song's newsletter greets it: \"Austin is turning into altcoin scammer central for a week, so I'm here to help by helping you navigate the place.\" The Bitcoin-only line, drawn on home turf.",
    kind: "fight",
    sourceIds: [20],
  },
  {
    date: "2023-05-23",
    dateLabel: "May 23, 2023",
    title: "The wager's deadline - disputed",
    detail:
      "Five years on, two blockchain-data firms count exactly five dapps that met the usage bar - the bare minimum for Lubin - while whether those five qualify as \"decentralized\" under the terms is contested. No public settlement follows. The bet ends the way the argument did: each side certain it won.",
    kind: "fight",
    sourceIds: [14],
  },
];
