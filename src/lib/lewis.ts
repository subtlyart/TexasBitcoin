// Parker Lewis and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster, applied to
// the essayist. Song teaches engineers to build the protocol; Lewis wrote
// the seventeen essays that teach everyone else why it is money, from an
// Austin lender's blog, and then built the room - the Bitcoin Commons and
// the Bitcoin Takeover - where the city's builders meet. The record is
// drawn from the essays themselves (Unchained and the Satoshi Nakamoto
// Institute carry them with dates), Lewis's own site, Zaprite's and
// Unchained's announcements, CNBC for the Commons, and the open letter for
// the one time he wrote to the Legislature. The honest counterweight: the
// definancialization thesis was written on a lender's payroll, the
// "inevitable" register is a claim not a proof, and the "Texas hedge" is a
// concentrated position dressed as a virtue.
//
// Verified September 11, 2026. Re-verify on a new book, a change of
// employer, or a new Takeover edition.

export const LEWIS_LAST_VERIFIED = "September 11, 2026";

export interface LewisSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the essays, Lewis's own site, the employers'
// announcements, then press.
export const lewisSources: LewisSource[] = [
  { id: 1, label: "Satoshi Nakamoto Institute - Parker Lewis, author page: the seventeen Gradually, Then Suddenly essays with dates, July 26, 2019 to December 19, 2020, plus the 2023 book edition", url: "https://nakamotoinstitute.org/authors/parker-lewis/" },
  { id: 2, label: "Unchained - Gradually, Then Suddenly (July 26, 2019): the first essay; \"Bitcoin exists as a solution to the money problem that is global QE\"", url: "https://www.unchained.com/blog/dollar-crisis-to-bitcoin" },
  { id: 3, label: "graduallythensuddenly.xyz - About this site: the 2016 rabbit hole, \"set out to work on bitcoin in 2017,\" seventeen essays in eighteen months, the series relaunched independently December 2022", url: "https://graduallythensuddenly.xyz/about/" },
  { id: 4, label: "Parker Lewis - LinkedIn: Analyst, Deutsche Bank (2006–2009); FTI Consulting; Associate, Hayman Capital Management (2013–2017); Head of Business Development, Unchained Capital (September 2018–November 2022); Zaprite", url: "https://www.linkedin.com/in/parker-lewis-ab904669/" },
  { id: 5, label: "Unchained - Texas hedged (November 18, 2022): stepping back from day-to-day management; \"We don't hedge when we're right in Texas. We double-down, son.\"", url: "https://www.unchained.com/blog/texas-hedged" },
  { id: 6, label: "Unchained - Bitcoin is the Great Definancialization (December 19, 2020): the closing essay of the series", url: "https://www.unchained.com/blog/bitcoin-is-the-great-definancialization" },
  { id: 7, label: "Saifedean Ammous on LinkedIn (November 2023): The Saif House releases Gradually, Then Suddenly in hardcover", url: "https://www.linkedin.com/posts/saifedean_we-have-just-released-the-brilliant-new-book-activity-7133471668542279680-7FII" },
  { id: 8, label: "The Saif House - Gradually, Then Suddenly, hardcover: \"a framework for understanding bitcoin as money\"", url: "https://academy.saifedean.com/product/gradually-then-suddenly-hardcover/" },
  { id: 9, label: "Gradually, Then Suddenly - An Open Letter to Texas Senator Lois Kolkhorst (April 7, 2023): Parker A. Lewis and Will C. Cole on SB 1751 - \"misinformed, discriminatory, anti-competitive, harmful to grid stability, bad for consumers and a strategic setback for Texas\"", url: "https://graduallythensuddenly.xyz/open-letter-to-texas-senator/" },
  { id: 10, label: "Zaprite - Zaprite Welcomes Parker Lewis and Will Cole to the Team (August 17, 2023): Head of Business Development; a non-custodial bitcoin payments platform, Austin", url: "https://blog.zaprite.com/zaprite-welcomes-parker-lewis-and-will-cole-to-the-team/" },
  { id: 11, label: "Gradually, Then Suddenly - Joining Zaprite (August 17, 2023)", url: "https://graduallythensuddenly.xyz/joining-zaprite/" },
  { id: 12, label: "Parker Lewis at Old Parkland, Dallas - Bitcoin is Not a Hedge (October 18, 2023), video", url: "https://www.youtube.com/watch?v=Z6qzEYxBYcQ" },
  { id: 13, label: "CNBC, MacKenzie Sigalos - Inside Austin's bitcoin underground (March 24, 2024): the Bitcoin Commons on the second floor of the Littlefield Building at Congress and Sixth; Lewis as steward; BitDevs, hackathons, the Bitcoin Takeover during SXSW", url: "https://www.cnbc.com/2024/03/24/inside-austins-bitcoin-underground.html" },
  { id: 14, label: "Parker Lewis on X (February 2024): the Bitcoin Takeover, Friday March 15, off-SXSW, at the Bitcoin Commons", url: "https://x.com/parkeralewis/status/1758564674931437752" },
  { id: 15, label: "Bitcoin News - Bitcoin Takeover: A Five-Day Bitcoin Revolution Takes Austin by Storm (March 2025): March 11–15, 2025, Bitcoin Commons and Bitcoin Park, main event at the Littlefield; Lewis on SXSW and \"a sound money standard\"", url: "https://bitcoinnews.com/p/bitcoin-takeover-takes-austin-by-storm" },
  { id: 16, label: "Bitcoin Park - Bitcoin Takeover 2026, Power of Payments (March 12–13, 2026, Austin): about 200 entrepreneurs, developers, policymakers, and allocators; supported by Zaprite, Block, ZBD, and Unchained", url: "https://bitcoinpark.com/takeover/" },
  { id: 17, label: "Gradually, Then Suddenly - Center of Hash: A TFTC Podcast (July 29, 2025): bitcoin, energy, and mining, with TFTC and Marty Bent", url: "https://graduallythensuddenly.xyz/author/parker/" },
  { id: 18, label: "Gradually, Then Suddenly - Bitcoin is the Greatest Asymmetry (January 8, 2026): the Old Parkland presentation of December 10, 2025", url: "https://graduallythensuddenly.xyz/bitcoin-is-the-greatest-asymmetry/" },
  { id: 19, label: "Nasdaq / Unchained - Unchained Surpasses $1 Billion in Bitcoin-Backed Loan Originations (July 9, 2025)", url: "https://www.nasdaq.com/articles/unchained-surpasses-1-billion-bitcoin-backed-loan-originations" },
  { id: 20, label: "Myles Snider - Definancialization / Hyperfinancialization: bitcoin definancializes savings while crypto hyperfinancializes everything else - the tension in the thesis, from a sympathetic reader", url: "https://blog.mylessnider.com/articles/definancialization-hyperfinancialization" },
];

export type LewisTimelineKind = "path" | "essay" | "room" | "fight";

// The arc: the analyst → the essays → the room → the arguments.
export interface LewisEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: LewisTimelineKind;
  sourceIds: number[];
}

export const lewisTimeline: LewisEvent[] = [
  {
    date: "2006-05-01",
    dateLabel: "2006–2017",
    title: "Wall Street in the crisis, then a Dallas hedge fund",
    detail:
      "A Deutsche Bank analyst from 2006 through the crash of 2008, then restructuring work at FTI Consulting, then four years as an associate at Kyle Bass's Hayman Capital in Dallas. The résumé is the fiat system's plumbing, seen from inside during its worst decade - the raw material for everything he wrote afterward.",
    kind: "path",
    sourceIds: [4],
  },
  {
    date: "2016-01-01",
    dateLabel: "2016–2017",
    title: "The rabbit hole, and the decision to work on it",
    detail:
      "By his own account he fell down the bitcoin rabbit hole in 2016, while still at Hayman, and \"set out to work on bitcoin in 2017.\" The conclusion he reached - that bitcoin would become the world's reserve currency - is the premise of every essay that followed.",
    kind: "path",
    sourceIds: [3, 5],
  },
  {
    date: "2018-09-01",
    dateLabel: "September 2018",
    title: "Head of Business Development, Unchained Capital",
    detail:
      "He joins the Austin lender and collaborative-custody firm, whose business is bitcoin-secured loans to holders who will not sell. The job comes with a blog, and the blog is about to matter more than the job.",
    kind: "path",
    sourceIds: [4],
  },
  {
    date: "2019-07-26",
    dateLabel: "July 26, 2019",
    title: "\"Gradually, Then Suddenly\" - the first essay",
    detail:
      "Published on Unchained's blog to support the sales role, the first essay frames bitcoin as \"a solution to the money problem that is global QE.\" It is followed at a weekly cadence through the summer: Bitcoin Can't Be Copied, Is Not Too Volatile, Does Not Waste Energy, Is Not Too Slow, Fixes This, Bitcoin Not Blockchain.",
    kind: "essay",
    sourceIds: [1, 2],
  },
  {
    date: "2020-12-19",
    dateLabel: "December 19, 2020",
    title: "Seventeen essays in eighteen months",
    detail:
      "The series closes with Bitcoin is the Great Definancialization: savings are money, investment is savings put at risk, and bitcoin will unblur the two. Seventeen essays, every one a rebuttal or a first principle, written from a lender's office in Austin - the most widely circulated plain-language case for bitcoin of its era.",
    kind: "essay",
    sourceIds: [1, 3, 6],
  },
  {
    date: "2022-11-18",
    dateLabel: "November 18, 2022",
    title: "\"Texas hedged\": stepping back from Unchained",
    detail:
      "A farewell-to-management essay that names the position: a Texas hedge is no hedge at all but \"the act of doubling down when you know you are right,\" and he is doubled down - bitcoin and Unchained stock. The independent Gradually, Then Suddenly site follows in December.",
    kind: "path",
    sourceIds: [3, 5],
  },
  {
    date: "2023-04-07",
    dateLabel: "April 7, 2023",
    title: "The open letter to Senator Kolkhorst",
    detail:
      "Two days after SB 1751 clears Senate Business & Commerce, Lewis and Will Cole publish an open letter as private Texans representing no company or lobby: the bill is \"misinformed, discriminatory, anti-competitive, harmful to grid stability, bad for consumers and a strategic setback for Texas.\" It closes with Sam Houston - govern wisely and as little as possible.",
    kind: "fight",
    sourceIds: [9],
  },
  {
    date: "2023-08-17",
    dateLabel: "August 17, 2023",
    title: "Zaprite: from custody to payments",
    detail:
      "Lewis and Cole join Zaprite, the Austin non-custodial bitcoin payments platform, as Head of Business Development and Head of Product. The argument moves from why to hold bitcoin to how to spend it.",
    kind: "path",
    sourceIds: [10, 11],
  },
  {
    date: "2023-10-18",
    dateLabel: "October–November 2023",
    title: "Old Parkland, and the book",
    detail:
      "\"Bitcoin is Not a Hedge,\" delivered at Dallas's Old Parkland campus on October 18, becomes the standard answer to a bad year. In November The Saif House publishes the essays as a hardcover, Gradually, Then Suddenly, with the Satoshi Nakamoto Institute carrying the web edition.",
    kind: "essay",
    sourceIds: [1, 7, 8, 12],
  },
  {
    date: "2024-03-15",
    dateLabel: "March 2024",
    title: "The Bitcoin Commons and the Bitcoin Takeover",
    detail:
      "CNBC finds him a steward of the Bitcoin Commons, second floor of the Littlefield Building at Congress and Sixth - coworking by day, BitDevs and hackathons by night, developer funding underneath. On Friday March 15 the Commons hosts the Bitcoin Takeover, the off-SXSW counter-programming that becomes an annual fixture.",
    kind: "room",
    sourceIds: [13, 14],
  },
  {
    date: "2025-07-29",
    dateLabel: "2025–2026",
    title: "Five days, then two; energy; asymmetry",
    detail:
      "The Takeover runs five days in March 2025 across the Commons and Bitcoin Park, then returns March 12–13, 2026 as \"Power of Payments\" with Bitcoin Park and about 200 invited builders. In July 2025 he launches Center of Hash, a podcast on bitcoin, energy, and mining with TFTC; on December 10, 2025 he returns to Old Parkland with \"Bitcoin is the Greatest Asymmetry.\"",
    kind: "room",
    sourceIds: [15, 16, 17, 18],
  },
];
