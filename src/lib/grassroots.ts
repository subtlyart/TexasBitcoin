// Texas's grassroots Bitcoin economy, 2013–2015 - the sourced dataset.
//
// PHILOSOPHY: the merchant layer of the record, told before the state had a
// position. Everything here is drawn from contemporaneous local reporting
// (KUT, Silicon Hills News, Community Impact, Techzette), the national press
// that visited (TechCrunch, Forbes, NBC), the crypto trade press of the day
// (Bitcoin Magazine, NewsBTC), and where the record is thin - the pedicab
// - the forum threads and the public ledger itself. The page is explicit
// about the difference between what is documented and what is lore. The
// honest counterweight: the volumes were tiny, and most of this era left no
// record at all.
//
// Verified September 5, 2026. Re-verify if a contemporaneous source surfaces
// on the pedicab (Scott Rose is reachable) or on the Muenster store.

export const GRASSROOTS_LAST_VERIFIED = "September 5, 2026";

export interface GrassrootsSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: local reporting in date order, then national and
// trade press, then the forum threads and the ledger for the pedicab.
export const grassrootsSources: GrassrootsSource[] = [
  { id: 1, label: "KUT - Austin Bitcoiners Bring Online Currency Offline, Into Stores (Andrew Weber, June 6, 2013): Brave New Books the only known Austin vendor; two customers had paid in Bitcoin; owner Harlan Dietrich; UT student Michael Goldstein its only consulting client; Pierre Rochard quoted", url: "https://www.kut.org/austin/2013-06-06/austin-bitcoiners-bring-online-currency-offline-into-stores" },
  { id: 2, label: "Silicon Hills News - The Bitcoin Industry Takes Root in Austin (Laura Lorek, December 26, 2013): Austin Bitcoin and Cryptocurrency Meetup, 189 members, ~40 at the December meeting in the back room of Scholz Garten; Paul Snow; Goldstein's Bitstein Consulting; Brave New Books; CoinTerra; CryptoTrustPoint", url: "http://www.siliconhillsnews.com/2013/12/26/the-bitcoin-industry-takes-root-in-austin/" },
  { id: 3, label: "Techzette - Businesses Accepting Bitcoin in Austin, Texas (Savanna Rose, February 11, 2014): seven visited (Central Texas Gun Works, Little Lucy's Mini Donuts, Art of Tacos, Havi Hair, Brave New Books, The Unconventional Oven, La Canasta Market) and eleven on the map", url: "https://techzette.com/businesses-accepting-bitcoin-in-austin-texas/" },
  { id: 4, label: "Community Impact - Leander, Cedar Park businesses now accept Bitcoin currency as payment (February 17, 2014): Vista Ridge Family Dentistry (Dr. Max Kerr), La Canasta Meat Market, Hill Country Home Improvements (Danny Sessoms); BitPay at 1% vs ~2.5% for cards; Steven Wilkinson of Austin Bitcoin; Bitcoin ~$800", url: "https://communityimpact.com/cedar-park-leander/leander-cedar-park-businesses-now-accept-bitcoin-currency-as-payment-2/" },
  { id: 5, label: "TechCrunch - The First Bitcoin ATM in the US Is Opening in Austin, Texas (February 19, 2014): Robocoin at HandleBar, East 5th Street, switched on February 20", url: "https://techcrunch.com/2014/02/19/the-first-bitcoin-atm-in-the-us-is-opening-in-austin-texas" },
  { id: 6, label: "KUT - What's a Bitcoin ATM Doing in a Downtown Austin Bar? (February 20, 2014)", url: "https://www.kut.org/austin/2014-02-20/whats-a-bitcoin-atm-doing-in-a-downtown-austin-bar" },
  { id: 7, label: "Central Texas Gun Works press release via AmmoLand (January 2014): Bitcoin accepted online from January 27, in-store from January 28, 2014", url: "https://www.ammoland.com/2014/01/central-texas-gun-works-to-accept-bitcoin-currency/" },
  { id: 8, label: "GlobeNewswire - Texas Bitcoin Conference Coming to Austin (February 19, 2014): first-ever Texas Bitcoin Conference, March 5–6, 2014, Circuit of the Americas Technology and Conference Center; three tracks; Bitcoin 2.0 Hackathon", url: "https://www.globenewswire.com/en/news-release/2014/02/19/1061377/0/en/Texas-Bitcoin-Conference-Coming-to-Austin.html" },
  { id: 9, label: "Techzette - Five Days of Using Only Bitcoin in Austin (Kaoru Fujita, July 22, 2014): Art of Tacos on Rainey Street, 0.0485 BTC at $618.55, ~30-second confirmation via Coinbase; owner Les: about one Bitcoin sale a week, over half of all Bitcoin sales during SXSW", url: "https://techzette.com/five-days-of-using-only-bitcoin-in-austin/" },
  { id: 10, label: "Free Press Houston - Bitcoin is Coming to Houston (Kyle Nazario, 2014): 15–17 Houston merchants accepting Bitcoin; Kevin Moore: \"Houston's dragging way behind compared to Austin, Dallas\"; Coin Vault ATM; TABC's Carolyn Beck on acceptance being the establishment's choice", url: "https://freepresshouston.com/bitcoin-is-coming-to-houston/" },
  { id: 11, label: "Bitcoin Magazine - Houston Bitcoin Embassy Opens (March 29, 2015): 6907 Almeda Rd; coworking space from Cryptospaces backed by FinalHash; home of the Texas Coinitiative nonprofit; founded in part because few Houston merchants accepted Bitcoin", url: "https://bitcoinmagazine.com/culture/houston-bitcoin-embassy-opens-1427595744" },
  { id: 12, label: "UNT North Texan class notes - Dave Reiter (December 2014): co-owner of Crossroads Express Stop in Muenster, described as the first convenience store of its type in Texas to accept Bitcoin; helped other businesses open Bitcoin merchant accounts. Single source.", url: "https://northtexan.unt.edu/class-notes/dave-reiter.html" },
  { id: 13, label: "Scott Rose (YouTube, @scotty321) - Meet Carrie, The World's First Bitcoin Pedicab Driver at SXSW 2015 in Austin, Texas (uploaded March 14, 2015). The only primary source on the pedicab.", url: "https://www.youtube.com/watch?v=Ct8uBO6ir3M" },
  { id: 14, label: "CoinDesk - Scott Rose, Current Criticisms of Bitcoin Are at Least 10 Years Too Early (March 9, 2014): the uploader as a 2014 Bitcoin op-ed contributor", url: "https://www.coindesk.com/markets/2014/03/09/current-criticisms-of-bitcoin-are-at-least-10-years-too-early" },
  { id: 15, label: "CCN - Bitcoin To Take Center Stage At SXSW Festival March 16 In Austin, Texas (2015): SXSW's first official day of Bitcoin programming, Hilton Downtown Austin, Salon G; sponsors BitPay, Gyft, LibraTax, ChangeTip, Chain", url: "https://www.ccn.com/bitcoin-take-center-stage-sxsw-festival-march-16-austin-texas" },
  { id: 16, label: "Coin Journal - All Eyes On Bitcoin At SXSW 2015: four official sessions (Silbert, Allaire, Gallippi, Vigna); no dedicated Bitcoin sessions in 2014", url: "https://coinjournal.net/news/eyes-bitcoin-sxsw-2015/" },
  { id: 17, label: "bitcointalk.org - BitcoinGirl325, Meet Carrie, The World's First Bitcoin Pedicab Driver at SXSW 2015 in Austin, TX (March 14, 2015, 9:38 p.m.; topic 990261): the video link and a Bitcoin address", url: "https://bitcointalk.org/index.php?topic=990261.0" },
  { id: 18, label: "bitcointalk.org - LiteCoinGuy, Video: Meet Carrie… (March 15, 2015; topic 990968); reply by asuryan180: \"over a bitcoin in tips so far\"", url: "https://bitcointalk.org/index.php?topic=990968.0" },
  { id: 19, label: "mempool.space - address 15UKsghaHeLAtidySEHmPXBWRjBMM1Tw4u (the address posted in topic 990261): funded once, 0.01 BTC on April 10, 2013; spent once, March 8, 2014, to 1Dorian4RoXcnBv9hnQ4Y2C1an6NJ4UrjX; no 2015 activity", url: "https://mempool.space/address/15UKsghaHeLAtidySEHmPXBWRjBMM1Tw4u" },
  { id: 20, label: "BTC-USD monthly data: January 2014 (high $919.20, close $829.92); March 2015 (average $269.04, close $244.22)", url: "https://www.in2013dollars.com/bitcoin-price" },
];

export type GrassrootsTimelineKind = "shop" | "machine" | "room" | "lore";

// The arc: one bookstore → a map of merchants and two ATMs → the rooms where
// the scene organized → the street-level tail that survives only as lore.
export interface GrassrootsEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: GrassrootsTimelineKind;
  sourceIds: number[];
}

export const grassrootsTimeline: GrassrootsEvent[] = [
  {
    date: "2013-06-06",
    dateLabel: "June 6, 2013",
    title: "One bookstore, two customers",
    detail:
      "KUT finds exactly one Austin vendor taking Bitcoin: Brave New Books, the libertarian bookstore at 1904 Guadalupe across from UT. Two customers have paid in it. Owner Harlan Dietrich: \"People are really holding onto their coins here. That's going to be how Bitcoin lives or dies.\" The store is the only client of UT student Michael Goldstein, who will co-found the Satoshi Nakamoto Institute five months later.",
    kind: "shop",
    sourceIds: [1],
  },
  {
    date: "2013-12-26",
    dateLabel: "December 26, 2013",
    title: "The back room at Scholz Garten",
    detail:
      "Silicon Hills News counts 189 members in the Austin Bitcoin and Cryptocurrency Meetup, about forty of them in the back room of Scholz Garten for the December meeting. Brave New Books is still the anchor merchant; a dentist plans to join in the new year. The scene has a room before it has a market.",
    kind: "room",
    sourceIds: [2],
  },
  {
    date: "2014-01-27",
    dateLabel: "January 27, 2014",
    title: "A gun store goes live",
    detail:
      "Central Texas Gun Works starts taking Bitcoin – online January 27, in-store January 28 – and becomes the era's best-documented merchant: Fox News in two days, a firearm sold for Bitcoin by February 4, Forbes by March. Its story has its own page.",
    kind: "shop",
    sourceIds: [7],
  },
  {
    date: "2014-02-11",
    dateLabel: "February 11, 2014",
    title: "Eleven merchants on a map",
    detail:
      "Techzette walks Austin's Bitcoin economy and publishes it: seven storefronts visited – the gun store, Little Lucy's Mini Donuts and Art of Tacos on Rainey Street, Havi Hair, Brave New Books, The Unconventional Oven pizza truck, La Canasta Market in Leander – and eleven pins on the map, including a coin dealer, an office-furniture shop, and a dentist. The whole city's Bitcoin retail, in one afternoon.",
    kind: "shop",
    sourceIds: [3],
  },
  {
    date: "2014-02-17",
    dateLabel: "February 17, 2014",
    title: "The suburbs: a dentist, a meat market, a contractor",
    detail:
      "Community Impact reports Bitcoin arriving in Leander and Cedar Park via BitPay, set up by Steven Wilkinson of Austin Bitcoin: Vista Ridge Family Dentistry (Dr. Max Kerr: \"It's the freest form of currency\"), La Canasta Meat Market, and Hill Country Home Improvements, whose owner bought beer at La Canasta with Bitcoin in January. The pitch is arithmetic: 1% through BitPay against roughly 2.5% for cards. Bitcoin is around $800.",
    kind: "shop",
    sourceIds: [4, 20],
  },
  {
    date: "2014-02-20",
    dateLabel: "February 20, 2014",
    title: "The first Bitcoin ATM in the United States, in a bar",
    detail:
      "Robocoin switches on its machine at HandleBar on East 5th Street. TechCrunch and KUT are there. Ten days later Central Texas Gun Works unveils a second Robocoin unit on Ben White; for a stretch of March both of the country's Bitcoin ATMs sit inside Austin city limits.",
    kind: "machine",
    sourceIds: [5, 6],
  },
  {
    date: "2014-03-05",
    dateLabel: "March 5–6, 2014",
    title: "The first Texas Bitcoin Conference",
    detail:
      "Circuit of the Americas hosts the inaugural Texas Bitcoin Conference – three speaking tracks, an exhibit hall, and a Bitcoin 2.0 hackathon with Mastercoin, Ethereum, Monetas, and BitAngels among the prize sponsors. Six weeks later, Greg Abbott's gubernatorial campaign begins taking Bitcoin donations. The grassroots have reached the political class.",
    kind: "room",
    sourceIds: [8],
  },
  {
    date: "2014-07-22",
    dateLabel: "July 22, 2014",
    title: "Five days on Bitcoin only: one sale a week",
    detail:
      "Techzette's Kaoru Fujita tries to live on Bitcoin in Austin for five days. At Art of Tacos, 0.0485 BTC at $618.55 buys five tacos and drinks with a 15% tip, confirmed in about thirty seconds through a Coinbase wallet. Owner Les reports roughly one Bitcoin sale a week – and that more than half of all his Bitcoin sales happened during SXSW. The honest volume of the era, from a merchant who liked it.",
    kind: "shop",
    sourceIds: [9],
  },
  {
    date: "2014-11-01",
    dateLabel: "Late 2014",
    title: "Houston, dragging behind",
    detail:
      "Free Press Houston counts 15 to 17 Houston merchants taking Bitcoin and quotes local evangelist Kevin Moore: \"Houston's dragging way behind compared to Austin, Dallas.\" Coin Vault ATM is placing machines. In Muenster, north of Dallas, a UNT alumni note records Dave Reiter's Crossroads Express Stop as the first convenience store of its type in Texas to take Bitcoin – a single source, held as such.",
    kind: "shop",
    sourceIds: [10, 12],
  },
  {
    date: "2015-03-14",
    dateLabel: "March 14, 2015",
    title: "The pedicab",
    detail:
      "During SXSW Interactive – the festival's first year with an official day of Bitcoin programming – Austin Bitcoin advocate Scott Rose films a pedicab driver named Carrie taking Bitcoin for rides and posts it as \"The World's First Bitcoin Pedicab Driver.\" The video reaches the bitcointalk forum that night. It is the only source. Her surname, her company, and the forum's claim of \"over a bitcoin in tips\" are all unverified; the one Bitcoin address in the threads turns out not to be hers.",
    kind: "lore",
    sourceIds: [13, 15, 16, 17, 18, 19],
  },
  {
    date: "2015-03-29",
    dateLabel: "March 29, 2015",
    title: "A Houston embassy, founded to grow the merchant base",
    detail:
      "The Houston Bitcoin Embassy opens at 6907 Almeda Rd – a coworking space from Cryptospaces, backed by FinalHash, and home to the Texas Coinitiative nonprofit. Bitcoin Magazine notes it was founded in part because so few Houston merchants accepted Bitcoin. The grassroots era ends the way it began: a room, trying to make a market.",
    kind: "room",
    sourceIds: [11],
  },
];
