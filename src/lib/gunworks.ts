// Central Texas Gun Works and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: the first entry in the grassroots wing of the record - the
// merchants, not the officeholders or the builders. Central Texas Gun Works
// is the best-documented Texas merchant of Bitcoin's 2014 street era: the
// store's own dated press releases (via AmmoLand and its news page), Forbes
// and NBC News on the visit and the background-check question, NewsBTC on the
// BitPay drop, TechCrunch on the Robocoin ATM that preceded the store's. The
// owner's later record (Garland v. Cargill, 2024) is drawn from the Supreme
// Court's opinion. The honest counterweight: the Brady Campaign's critique of
// Texas private-sale law, and BitPay acting within its published terms.
//
// Verified September 5, 2026. Re-verify if the store stops accepting Bitcoin
// or a contemporaneous source surfaces on the ATM sequencing.

export const GUNWORKS_LAST_VERIFIED = "September 5, 2026";

export interface GunworksSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the store's own releases, then the national press
// that visited, then the trade press, then the court record.
export const gunworksSources: GunworksSource[] = [
  { id: 1, label: "Central Texas Gun Works press release via AmmoLand - Central Texas Gun Works Is the First Firearms Retailer in Texas to Accept Bitcoin Currency (January 2014): online from Monday, January 27; in-store for firearms, ammunition, accessories, and class registrations from Wednesday, January 28; BitPay as processor; Cargill quote on new customers and visibility", url: "https://www.ammoland.com/2014/01/central-texas-gun-works-to-accept-bitcoin-currency/" },
  { id: 2, label: "Central Texas Gun Works - Central Texas Gun Works Receives Its First Firearms Transaction with Bitcoin Currency (February 4, 2014): first legal online firearm sale by Bitcoin in the United States; buyer found the store through a syndicated newsfeed, had never visited, paid from a personal wallet", url: "https://centraltexasgunworks.com/latest-news/bitcoin-purchase" },
  { id: 3, label: "Central Texas Gun Works - Michael Cargill Talks About Accepting Bitcoin on FOX News (January 29, 2014)", url: "https://centraltexasgunworks.com/latest-news/bitcoin-fox" },
  { id: 4, label: "Andy Greenberg, Forbes - Inside America's First Bitcoin-Friendly Gun Store (Video) (March 9, 2014): \"the first legal Bitcoin-friendly firearm retail business in the country, if not the world\"; the same paperwork and background check as any buyer", url: "https://www.forbes.com/sites/andygreenberg/2014/03/09/inside-americas-first-bitcoin-friendly-gun-store-video/" },
  { id: 5, label: "NewsBTC - BitPay Drops Texas Firearm Dealer From Service (Updated) (March 12, 2014): account frozen without warning or explanation; BitPay's terms list firearms as prohibited; Cargill says BitPay knew the business model at sign-up", url: "https://newsbtc.com/2014/03/12/bitpay-drops-texas-firearm-dealer-service" },
  { id: 6, label: "NBC News - Texas Gun Dealers Draw Tech Crowd With Bitcoin (March 30, 2014): Cargill on BitPay's \"no-firearms policy\" and the move to Coinvoice; TrackingPoint's Oren Schauble; both dealers run background checks on every sale; Brian Malte of the Brady Campaign on private-sale law", url: "https://www.nbcnews.com/tech/innovation/texas-gun-dealers-draw-tech-crowd-bitcoin-n65596" },
  { id: 7, label: "Central Texas Gun Works press release - Central Texas Gun Works Unveils Bitcoin ATM at Texas Independence Day Fundraiser Benefiting Capital Area Food Bank of Texas (February 28, 2014): Sunday, March 2, 2014, 2–6 p.m., 321 W. Ben White Blvd Suite 203; Robocoin machine via CoinVault ATM; State Rep. Larry Gonzales; Cargill: \"Austin is quickly becoming a hub for new technology\"", url: "https://centraltexasgunworks.com/latest-news/bitcoin-atm" },
  { id: 8, label: "TechCrunch - The First Bitcoin ATM in the US Is Opening in Austin, Texas (February 19, 2014): Robocoin at HandleBar, East 5th Street, switched on February 20, 2014", url: "https://techcrunch.com/2014/02/19/the-first-bitcoin-atm-in-the-us-is-opening-in-austin-texas" },
  { id: 9, label: "KUT - What's a Bitcoin ATM Doing in a Downtown Austin Bar? (February 20, 2014)", url: "https://www.kut.org/austin/2014-02-20/whats-a-bitcoin-atm-doing-in-a-downtown-austin-bar" },
  { id: 10, label: "Texas Bitcoin Conference - inaugural conference, March 5–6, 2014, Circuit of the Americas, Austin", url: "https://www.cbinsights.com/company/texas-bitcoin-conference" },
  { id: 11, label: "Supreme Court of the United States - Garland v. Cargill, 602 U.S. 406 (2024), decided June 14, 2024: 6–3, the ATF exceeded its authority in classifying bump stocks as machine guns", url: "https://www.supremecourt.gov/opinions/23pdf/22-976_e29g.pdf" },
  { id: 12, label: "Wikipedia - Michael Cargill: twelve years in the U.S. Army; Central Texas Gun Works founded 2011; 2014 Texas House campaign; the 2015 suit against Austin's City Hall gun-free zone", url: "https://en.wikipedia.org/wiki/Michael_Cargill" },
  { id: 13, label: "Central Texas Gun Works - Pay with Bitcoin and other Cryptocurrencies (current store page)", url: "https://centraltexasgunworks.com/cryptocurrencies" },
  { id: 14, label: "BTC-USD, January 2014 (early-January high $919.20; January 31 close $829.92)", url: "https://www.in2013dollars.com/bitcoin-price-in-2014" },
];

export type GunworksTimelineKind = "store" | "rail" | "city" | "court";

// The arc: the store goes live → the rails fail and get rebuilt → the city
// around it → where the owner went next.
export interface GunworksEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: GunworksTimelineKind;
  sourceIds: number[];
}

export const gunworksTimeline: GunworksEvent[] = [
  {
    date: "2014-01-27",
    dateLabel: "January 27–28, 2014",
    title: "Bitcoin goes live at a South Austin gun store",
    detail:
      "Central Texas Gun Works starts taking Bitcoin for online orders on Monday, January 27 and for every in-store sale – firearms, ammunition, accessories, and concealed-handgun classes – on Wednesday, January 28, through BitPay. The first licensed firearms dealer in Texas to do it. Bitcoin trades between roughly $800 and $920 that month.",
    kind: "store",
    sourceIds: [1, 14],
  },
  {
    date: "2014-01-29",
    dateLabel: "January 29, 2014",
    title: "Fox News, two days in",
    detail:
      "Owner Michael Cargill is on national television explaining why a gun store takes Bitcoin. The visibility he named as a goal in the announcement arrives in forty-eight hours.",
    kind: "city",
    sourceIds: [3],
  },
  {
    date: "2014-02-04",
    dateLabel: "February 4, 2014",
    title: "The first legal Bitcoin firearm sale in the United States",
    detail:
      "A buyer who found the store through a syndicated newsfeed, and had never set foot in it, pays for a firearm from a personal Bitcoin wallet. The gun still transfers through a licensed dealer with a federal background check. Bitcoin changed how the money moved, not how the firearm did.",
    kind: "store",
    sourceIds: [2],
  },
  {
    date: "2014-02-20",
    dateLabel: "February 20, 2014",
    title: "Robocoin switches on America's first Bitcoin ATM – at an Austin bar",
    detail:
      "Ten days before the gun store's machine, Robocoin turns on the first Bitcoin ATM in the United States at HandleBar on East 5th Street. TechCrunch and KUT cover the unveiling. Austin now has one Bitcoin ATM; within two weeks it will have both of the country's.",
    kind: "city",
    sourceIds: [8, 9],
  },
  {
    date: "2014-03-02",
    dateLabel: "March 2, 2014",
    title: "Texas Independence Day: a Robocoin ATM in the front room",
    detail:
      "At a fundraiser for the Capital Area Food Bank – State Rep. Larry Gonzales, live music, free shirts for the first hundred – the store unveils a Robocoin Bitcoin ATM installed with CoinVault ATM at 321 W. Ben White Blvd. \"Austin is quickly becoming a hub for new technology and innovative products,\" Cargill says. The Texas Bitcoin Conference opens three days later at Circuit of the Americas.",
    kind: "city",
    sourceIds: [7, 10],
  },
  {
    date: "2014-03-09",
    dateLabel: "March 9, 2014",
    title: "Forbes visits",
    detail:
      "Andy Greenberg's video report calls the store \"the first legal Bitcoin-friendly firearm retail business in the country, if not the world\" and records Cargill's point that a Bitcoin buyer fills out the same paperwork and clears the same background check as anyone else.",
    kind: "city",
    sourceIds: [4],
  },
  {
    date: "2014-03-12",
    dateLabel: "March 12, 2014",
    title: "BitPay freezes the account",
    detail:
      "Six weeks in, BitPay drops the store under terms of service that prohibit firearms. Cargill says there was no warning and that BitPay knew his business at sign-up. He tries several processors before settling on Coinvoice. The lesson of the era, learned early: the network never refused a payment – an intermediary did.",
    kind: "rail",
    sourceIds: [5, 6],
  },
  {
    date: "2014-03-30",
    dateLabel: "March 30, 2014",
    title: "NBC News: two Texas gun dealers, one payment rail",
    detail:
      "NBC pairs Cargill with TrackingPoint's Oren Schauble, whose Austin precision-rifle company also takes Bitcoin (\"a big part of our consumer base is tech-oriented, entrepreneurial guys\"). Both run background checks on every sale. The Brady Campaign's Brian Malte supplies the counterweight: the payment method is irrelevant; the gap is Texas's lack of a private-sale check.",
    kind: "rail",
    sourceIds: [6],
  },
  {
    date: "2024-06-14",
    dateLabel: "June 14, 2024",
    title: "Garland v. Cargill",
    detail:
      "The store's owner is the named respondent in the Supreme Court's 6–3 decision holding that the ATF exceeded its authority when it classified bump stocks as machine guns. The man who put Bitcoin in a gun store in January 2014 wins one of the decade's defining Second Amendment cases a decade later.",
    kind: "court",
    sourceIds: [11, 12],
  },
];
