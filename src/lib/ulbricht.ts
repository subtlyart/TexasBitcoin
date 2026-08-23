// Ross Ulbricht, Silk Road, and Bitcoin's first use case — the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. The criminal record is
// drawn from the government's own words (DOJ / FBI / ICE press releases, the
// Second Circuit opinion, the Supreme Court docket) and the sentence, seizures,
// and pardon from primary filings or reputable journalism. The bullish reading
// of Silk Road's place in Bitcoin history is kept honest: it was an illegal
// drug marketplace, and it was also Bitcoin's first application at scale. Both
// are true. The murder-for-hire allegations are stated with precision — alleged,
// never charged in the trial that convicted him, never proven, no one killed.
//
// Verified August 2026. Live figures (the fiat value of seized coins) move;
// re-verify with the quarterly cornerstone pass.

export const ULBRICHT_LAST_VERIFIED = "August 23, 2026";

export interface UlbrichtSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the government record and the courts, then the
// reputable journalism, then reference and trade press, then the primary video.
export const ulbrichtSources: UlbrichtSource[] = [
  {
    id: 1,
    label:
      "U.S. Department of Justice, SDNY — Ross Ulbricht, a/k/a 'Dread Pirate Roberts,' sentenced in Manhattan federal court to life in prison (May 29, 2015): the seven counts of conviction, the $183,961,921 forfeiture, and Silk Road's scale",
    url: "https://www.justice.gov/usao-sdny/pr/ross-ulbricht-aka-dread-pirate-roberts-sentenced-manhattan-federal-court-life-prison",
  },
  {
    id: 2,
    label:
      "U.S. Department of Justice, SDNY — Ross Ulbricht, the creator and owner of the 'Silk Road' website, found guilty in Manhattan federal court on all counts (Feb 4, 2015)",
    url: "https://www.justice.gov/usao-sdny/pr/ross-ulbricht-creator-and-owner-silk-road-website-found-guilty-manhattan-federal-court",
  },
  {
    id: 3,
    label:
      "U.S. Department of Justice, SDNY — Manhattan U.S. Attorney announces the indictment of Ross Ulbricht, the creator and owner of the 'Silk Road' website (Feb 2014)",
    url: "https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-indictment-ross-ulbricht-creator-and-owner-silk-road",
  },
  {
    id: 4,
    label:
      "United States v. Ulbricht — U.S. Court of Appeals for the Second Circuit opinion affirming the conviction and sentence (2017), via FindLaw: verdict on all seven counts before Judge Katherine B. Forrest",
    url: "https://caselaw.findlaw.com/court/us-2nd-circuit/1862572.html",
  },
  {
    id: 5,
    label:
      "Supreme Court of the United States — Ulbricht v. United States, docket No. 17-950: certiorari denied June 28, 2018, ending his appeals",
    url: "https://www.supremecourt.gov/docket/docketfiles/html/public/17-950.html",
  },
  {
    id: 6,
    label:
      "U.S. Department of Justice, SDNY — Acting Manhattan U.S. Attorney announces forfeiture of $48 million from the sale of Silk Road bitcoins (the U.S. Marshals auctions)",
    url: "https://www.justice.gov/usao-sdny/pr/acting-manhattan-us-attorney-announces-forfeiture-48-million-sale-silk-road-bitcoins",
  },
  {
    id: 7,
    label:
      "U.S. Department of Justice, NDCA — United States files a civil action to forfeit cryptocurrency valued at over one billion dollars (Nov 2020): 69,370 BTC seized from 'Individual X,' who had hacked it from Silk Road",
    url: "https://www.justice.gov/usao-ndca/pr/united-states-files-civil-action-forfeit-cryptocurrency-valued-over-one-billion-us",
  },
  {
    id: 8,
    label:
      "Federal Bureau of Investigation — artifact record for Ross William Ulbricht's laptop, seized at his arrest (≈144,000 bitcoin recovered)",
    url: "https://www.fbi.gov/history/artifacts/ross-william-ulbrichts-laptop",
  },
  {
    id: 9,
    label:
      "The White House — Fact Sheet: President Donald J. Trump establishes the Strategic Bitcoin Reserve and U.S. Digital Asset Stockpile (Mar 6, 2025): seized bitcoin to be held, not sold",
    url: "https://www.whitehouse.gov/fact-sheets/2025/03/fact-sheet-president-donald-j-trump-establishes-the-strategic-bitcoin-reserve-and-u-s-digital-asset-stockpile/",
  },
  {
    id: 10,
    label:
      "Federal Register — Establishment of the Strategic Bitcoin Reserve and United States Digital Asset Stockpile (EO 14233, published Mar 11, 2025)",
    url: "https://www.federalregister.gov/documents/2025/03/11/2025-03992/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile",
  },
  {
    id: 11,
    label:
      "NPR — Trump pardons Ross Ulbricht, creator of the Silk Road dark web marketplace (Jan 21, 2025)",
    url: "https://www.npr.org/2025/01/21/nx-s1-5270051/trump-pardons-dark-web-marketplace-creator-ross-ulbricht",
  },
  {
    id: 12,
    label:
      "CNBC — Trump pardons Silk Road creator Ross Ulbricht; a full and unconditional pardon announced on Truth Social (Jan 21, 2025)",
    url: "https://www.cnbc.com/2025/01/21/trump-pardons-silk-road-ross-ulbricht-.html",
  },
  {
    id: 13,
    label:
      "CNBC — $1 billion worth of bitcoin linked to the Silk Road is seized by the U.S. (Nov 5, 2020)",
    url: "https://www.cnbc.com/2020/11/05/1-billion-worth-of-bitcoin-linked-to-the-silk-road-seized-by-the-us.html",
  },
  {
    id: 14,
    label:
      "Fortune — A federal court clears the government to sell its Silk Road bitcoin, then valued near $6.5 billion (Jan 2025)",
    url: "https://fortune.com/crypto/2025/01/09/federal-government-allowed-sell-bitcoin-silk-road-courts/",
  },
  {
    id: 15,
    label:
      "Reason — Ross Ulbricht's murder-for-hire charges dropped: prosecutors move to dismiss the separate Maryland indictment with prejudice (Jul 25, 2018)",
    url: "https://reason.com/2018/07/25/ross-ulbrichts-murder-for-hire-charges-d/",
  },
  {
    id: 16,
    label:
      "Reason — At the Libertarian National Convention, Trump promises to commute Ross Ulbricht's sentence to time served on day one (May 26, 2024)",
    url: "https://reason.com/2024/05/26/trump-who-wants-to-execute-drug-dealers-promises-to-free-ross-ulbricht/",
  },
  {
    id: 17,
    label:
      "CoinDesk — U.S. Marshals: one auction bidder (venture capitalist Tim Draper) claimed all ~30,000 Silk Road bitcoins in the first auction, June 27, 2014",
    url: "https://www.coindesk.com/markets/2014/07/01/us-marshals-one-auction-bidder-claimed-all-30000-silk-road-bitcoins",
  },
  {
    id: 18,
    label:
      "CoinDesk — Silk Road founder Ross Ulbricht to Bitcoiners: 'Freedom is worth the struggle' (Bitcoin 2025, May 29, 2025)",
    url: "https://www.coindesk.com/policy/2025/05/29/silk-road-founder-ross-ulbricht-to-bitcoiners-freedom-is-worth-the-struggle",
  },
  {
    id: 19,
    label:
      "Decrypt — Ross Ulbricht speaks at Bitcoin 2025: 'You didn't forget me' (May 29, 2025)",
    url: "https://decrypt.co/322898/ross-ulbricht-speaks-at-bitcoin-2025-you-didnt-forget-me",
  },
  {
    id: 20,
    label:
      "SFGate — Alleged online drug kingpin arrested at San Francisco library; laptop seized while logged in (Oct 2, 2013)",
    url: "https://www.sfgate.com/news/article/alleged-online-drug-kingpin-arrested-at-sf-library-4863306.php",
  },
  {
    id: 21,
    label:
      "Wikipedia — Ross Ulbricht: biography (born March 27, 1984, Austin, Texas; UT Dallas physics, 2006; Penn State materials science, 2009), with cited primary sources",
    url: "https://en.wikipedia.org/wiki/Ross_Ulbricht",
  },
  {
    id: 22,
    label:
      "Bitcoin Magazine — The long and winding story of Silk Road, Bitcoin's earliest major application",
    url: "https://bitcoinmagazine.com/culture/the-long-and-winding-story-of-silk-road-bitcoins-earliest-major-application",
  },
  {
    id: 23,
    label:
      "Chainalysis — The DOJ's November 2020 seizure of $1 billion in Silk Road bitcoin, and how the funds were traced",
    url: "https://www.chainalysis.com/blog/silk-road-doj-seizure-november-2020/",
  },
  {
    id: 24,
    label:
      "FreeRoss.org — the clemency campaign led by Lyn Ulbricht, Ross's mother",
    url: "https://freeross.org/meet-ross/",
  },
  {
    id: 25,
    label:
      "Change.org — Clemency for Ross Ulbricht: the petition that gathered roughly 607,000 signatures",
    url: "https://www.change.org/p/clemency-for-ross-ulbricht-condemned-to-die-in-prison-for-an-e-commerce-website",
  },
  {
    id: 26,
    label:
      "Bitcoin Magazine (YouTube) — Bitcoin 2019: Lyn Ulbricht, CEO of Free Ross Ulbricht (his mother's advocacy)",
    url: "https://www.youtube.com/watch?v=1gxaCU1ndLM",
  },
  {
    id: 27,
    label:
      "CCN — Who donated $31 million in bitcoin to Ross Ulbricht? On-chain analyst ZachXBT traces the ~300 BTC to a flagged, AlphaBay-linked source (June 2025)",
    url: "https://www.ccn.com/education/crypto/ross-ulbricht-31m-bitcoin-donation-alphabay-explained/",
  },
  {
    id: 28,
    label:
      "Bitcoin Magazine (YouTube) — Ross Ulbricht: Freedom, Decentralization, Unity at Bitcoin 2025, his first public speech after the pardon (full 28-minute keynote)",
    url: "https://www.youtube.com/watch?v=8ZZGRA-8ZMU",
  },
];

export type TimelineKind = "origin" | "rise" | "fall" | "seizure" | "freedom";

export interface TimelineEntry {
  date: string;
  dateLabel: string;
  title: string;
  detail: string;
  kind: TimelineKind;
  sourceIds: number[];
}

// The arc, in order — from an Austin childhood to the main stage of Bitcoin
// 2025. Rendered as the timeline. Every date and figure is sourced above.
export const ulbrichtTimeline: TimelineEntry[] = [
  {
    date: "1984-03-27",
    dateLabel: "Mar 27, 1984",
    title: "Born in Austin",
    detail:
      "Ross William Ulbricht is born in Austin, Texas. He grows up in the Westlake suburbs, makes Eagle Scout, then earns a physics degree at the University of Texas at Dallas in 2006 and a materials-science master's at Penn State in 2009.",
    kind: "origin",
    sourceIds: [21],
  },
  {
    date: "2011-02-01",
    dateLabel: "Early 2011",
    title: "Silk Road goes live",
    detail:
      "Ulbricht launches Silk Road under the alias 'Dread Pirate Roberts,' pairing the Tor network with Bitcoin to build the first anonymous online marketplace at scale - most of its trade in illegal drugs. It becomes Bitcoin's first real use case.",
    kind: "rise",
    sourceIds: [3, 22],
  },
  {
    date: "2013-10-01",
    dateLabel: "Oct 1, 2013",
    title: "Arrested in a San Francisco library",
    detail:
      "FBI agents arrest Ulbricht at the Glen Park branch library while he is logged in as Dread Pirate Roberts, seizing his open laptop. It holds roughly 144,000 bitcoin and the evidence that will convict him.",
    kind: "fall",
    sourceIds: [8, 20],
  },
  {
    date: "2015-02-04",
    dateLabel: "Feb 4, 2015",
    title: "Convicted on all seven counts",
    detail:
      "A Manhattan federal jury finds Ulbricht guilty on all seven counts, including the 'kingpin' continuing-criminal-enterprise charge, narcotics distribution, computer-hacking conspiracy, and money-laundering conspiracy.",
    kind: "fall",
    sourceIds: [2, 4],
  },
  {
    date: "2015-05-29",
    dateLabel: "May 29, 2015",
    title: "Two life terms plus 40 years",
    detail:
      "Judge Katherine Forrest sentences Ulbricht to two life terms plus 40 years, without the possibility of parole, and orders $183,961,921 forfeited. He is a first-time offender; the counts of conviction carried no violence.",
    kind: "fall",
    sourceIds: [1],
  },
  {
    date: "2018-06-28",
    dateLabel: "Jun 28, 2018",
    title: "The Supreme Court declines",
    detail:
      "After the Second Circuit affirms the conviction, the Supreme Court denies certiorari, ending Ulbricht's appeals and leaving the double-life sentence final. Clemency is now the only road out.",
    kind: "fall",
    sourceIds: [5],
  },
  {
    date: "2020-11-03",
    dateLabel: "Nov 3, 2020",
    title: "A $1 billion seizure",
    detail:
      "The government seizes 69,370 bitcoin that a hacker had stolen from Silk Road years earlier - worth about $1 billion, the largest cryptocurrency seizure in Justice Department history at the time. The coins are separate from Ulbricht's own.",
    kind: "seizure",
    sourceIds: [7, 13, 23],
  },
  {
    date: "2025-01-21",
    dateLabel: "Jan 21, 2025",
    title: "A full and unconditional pardon",
    detail:
      "President Trump grants Ulbricht a full and unconditional pardon - broader than the commutation he had promised libertarians in 2024 - announcing it on Truth Social after calling Ross's mother. Ulbricht walks free after more than 11 years.",
    kind: "freedom",
    sourceIds: [11, 12, 16],
  },
  {
    date: "2025-05-29",
    dateLabel: "May 29, 2025",
    title: "From prison to the main stage",
    detail:
      "Ten years to the day after his sentencing, Ulbricht gives his first public speech at Bitcoin 2025 in Las Vegas - on freedom, decentralization, and unity - telling the crowd, 'You didn't abandon me. You didn't forget me.'",
    kind: "freedom",
    sourceIds: [18, 19, 28],
  },
];
