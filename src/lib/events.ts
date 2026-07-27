// Texas Bitcoin events directory.
//
// PHILOSOPHY: We are an open aggregator, not a walled garden. We curate and
// link straight to each organizer's page (the source of truth for the next
// date) rather than duplicating volatile dates we can't keep fresh. Every
// entry has a real, working link. We do not publish specific dates/times we
// can't guarantee — cadence is qualitative; "next date" lives at the link.
//
// Seed verified July 2026. Re-verify links periodically and prune dead groups.

export const LAST_VERIFIED = "July 2026";

export type Metro = "Austin" | "Houston" | "Dallas–Fort Worth" | "San Antonio";

// Display order for metro sections.
export const METROS: Metro[] = [
  "Austin",
  "Dallas–Fort Worth",
  "Houston",
  "San Antonio",
];

export interface Meetup {
  name: string;
  metro: Metro;
  cadence: string; // qualitative — e.g. "Monthly"
  url: string;
  platform: "Meetup" | "X" | "Web";
  focus: string;
  bitcoinOnly?: boolean;
}

export interface Conference {
  name: string;
  location: string;
  cadence: string;
  url: string;
  blurb: string;
}

// NOTE: The resources shelf moved to `src/lib/resources.ts` and its own page
// at /texas-bitcoin-resources — it was never event data, and it had outgrown
// a footnote on this page.

export const meetups: Meetup[] = [
  // Austin metro
  {
    name: "Bitcoin Park Austin",
    metro: "Austin",
    cadence: "Monthly",
    url: "https://www.meetup.com/bitcoin-park-austin/",
    platform: "Meetup",
    focus: "Austin's Bitcoin hub — regular socials, talks, and BitDevs-style sessions.",
    bitcoinOnly: true,
  },
  {
    name: "Austin Bitcoin Club",
    metro: "Austin",
    cadence: "Recurring",
    url: "https://www.austinbitcoinclub.com/",
    platform: "Web",
    focus: "Meetups, education, and events for Bitcoiners in Austin.",
    bitcoinOnly: true,
  },
  {
    name: "Bitcoin Builders Club",
    metro: "Austin",
    cadence: "Monthly",
    url: "https://capitalfactory.com/event/bitcoin-builders-club-meetup/",
    platform: "Web",
    focus: "For devs, hackers, and founders building on Bitcoin — at Capital Factory.",
    bitcoinOnly: true,
  },
  {
    name: "Round Rock Bitcoiners",
    metro: "Austin",
    cadence: "Recurring",
    url: "https://roundrockbitcoiners.com/round-rock-bitcoin-meetup/",
    platform: "Web",
    focus: "Bitcoin meetup serving the Round Rock / north Austin area.",
    bitcoinOnly: true,
  },
  // Dallas–Fort Worth
  {
    name: "Dallas Bitcoiners",
    metro: "Dallas–Fort Worth",
    cadence: "Monthly",
    url: "https://www.meetup.com/dallas-bitcoin-meetup-group/",
    platform: "Meetup",
    focus: "Bitcoin-only — no altcoins or web3. Learning and networking.",
    bitcoinOnly: true,
  },
  {
    name: "Fort Bitcoin",
    metro: "Dallas–Fort Worth",
    cadence: "Recurring",
    url: "https://www.meetup.com/fortbitcoin/",
    platform: "Meetup",
    focus: "Fort Worth-area residents and businesses learning and discussing Bitcoin.",
    bitcoinOnly: true,
  },
  {
    name: "DTX Bitcoin Meetup",
    metro: "Dallas–Fort Worth",
    cadence: "Recurring",
    url: "https://x.com/dtxbitcoiners",
    platform: "X",
    focus: "Meetups across Dallas & Fort Worth for Bitcoiners.",
    bitcoinOnly: true,
  },
  {
    name: "Frisco Bitcoin (Orange-Pill Group)",
    metro: "Dallas–Fort Worth",
    cadence: "Weekly",
    url: "https://www.meetup.com/frisco-bitcoin-orange-pill-group/",
    platform: "Meetup",
    focus: "Weekly Bitcoin lunch at Steak 'n Shake on Preston Rd, Frisco — learn and network over a meal.",
    bitcoinOnly: true,
  },
  // Houston
  {
    name: "Houston Bitcoin Meetup Group",
    metro: "Houston",
    cadence: "Recurring",
    url: "https://www.meetup.com/houston-bitcoin-meetup-group/",
    platform: "Meetup",
    focus: "From the newly curious to hardcore maximalists — learn and discuss.",
    bitcoinOnly: true,
  },
  // San Antonio
  {
    name: "San Antonio Bitcoin Developers",
    metro: "San Antonio",
    cadence: "Recurring",
    url: "https://www.meetup.com/san-antonio-crypto-currency-meetup-group/",
    platform: "Meetup",
    focus: "Open Socratic, Bitcoin-centric technical discussion.",
    bitcoinOnly: true,
  },
  {
    name: "San Antonio Bitcoin Club",
    metro: "San Antonio",
    cadence: "Recurring",
    url: "https://www.meetup.com/sanantoniobitcoinclub/",
    platform: "Meetup",
    focus: "Bitcoin-only — building, learning, and the Lightning Network.",
    bitcoinOnly: true,
  },
];

export const conferences: Conference[] = [
  {
    name: "BitBlockBoom",
    location: "Fort Worth, TX",
    cadence: "Annual",
    url: "https://bitblockboom.com/",
    blurb:
      "One of Texas's longest-running Bitcoin-only conferences — workshops, speakers, and socials. See the site for the current edition's dates.",
  },
  {
    name: "North American Blockchain Summit (NABS)",
    location: "Texas",
    cadence: "Annual",
    url: "https://www.northamericanblockchainsummit.com/",
    blurb:
      "The Texas Blockchain Council's policy summit — C-suite leaders, policymakers, and innovators on Bitcoin, mining, and digital-asset policy.",
  },
  {
    name: "Texas Blockchain Summit",
    location: "Austin, TX",
    cadence: "Annual",
    url: "https://www.txbitcoinfoundation.org/event-details/texas-blockchain-summit",
    blurb:
      "Austin gathering that has featured U.S. senators and Texas legislators on Bitcoin and digital-asset policy. Check the site for dates.",
  },
];

