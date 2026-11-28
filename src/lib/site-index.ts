export interface SiteIndexEntry {
  title: string;
  href: string;
  wing: string;
  keywords?: string;
}

// Curated navigation index for the Cmd+K command palette.
// Intentionally excludes unlisted routes such as /the-seam (see SEAM.md).
export const siteIndex: SiteIndexEntry[] = [
  // History & places
  { title: "History of Bitcoin in Texas", href: "/history-of-bitcoin-in-texas", wing: "History & places", keywords: "cornerstone timeline" },
  { title: "Texas Crypto Archive", href: "/texas-crypto-archive", wing: "History & places" },
  { title: "Early Bitcoin Merchants in Texas", href: "/early-bitcoin-merchants-texas", wing: "History & places" },
  { title: "Central Texas Gun Works & Bitcoin", href: "/central-texas-gun-works-bitcoin", wing: "History & places" },
  { title: "Rockdale, Texas & Bitcoin Mining", href: "/rockdale-texas-bitcoin", wing: "History & places", keywords: "whinstone riot alcoa" },
  { title: "Fort Worth & Bitcoin", href: "/fort-worth-bitcoin", wing: "History & places", keywords: "city hall mining" },
  { title: "Ross Ulbricht & Silk Road", href: "/ross-ulbricht-silk-road-bitcoin", wing: "History & places" },

  // Law & policy
  { title: "What Texas Law Says About Bitcoin", href: "/what-texas-law-says-about-bitcoin", wing: "Law & policy", keywords: "ucc property" },
  { title: "Texas Bitcoin Law Timeline", href: "/texas-bitcoin-law-timeline", wing: "Law & policy", keywords: "memo 1037 sb 21 hb 1056" },
  { title: "Texas Strategic Bitcoin Reserve", href: "/texas-strategic-bitcoin-reserve", wing: "Law & policy", keywords: "sb 21 comptroller" },
  { title: "Texas Bitcoin Reserve Game Theory", href: "/texas-bitcoin-reserve-game-theory", wing: "Law & policy" },
  { title: "Who Holds the Texas Bitcoin Reserve?", href: "/who-holds-the-texas-bitcoin-reserve", wing: "Law & policy", keywords: "custody rfp" },
  { title: "Texas Bitcoin Reserve Report", href: "/texas-bitcoin-reserve-report", wing: "Law & policy" },
  { title: "Texas Gold vs. Bitcoin", href: "/texas-gold-vs-bitcoin", wing: "Law & policy", keywords: "hb 1056 depository" },
  { title: "Texas Bitcoin Bills That Died", href: "/texas-bitcoin-bills-that-died", wing: "Law & policy" },
  { title: "Texas Bitcoin Bills (2027 Session)", href: "/texas-bitcoin-bills-2027", wing: "Law & policy" },
  { title: "Bitcoin Estate Planning in Texas", href: "/bitcoin-estate-planning-texas", wing: "Law & policy" },

  // Enforcement
  { title: "Texas Bitcoin Case Tracker", href: "/texas-bitcoin-case-tracker", wing: "Enforcement", keywords: "1960 federal prosecutions" },
  { title: "Texas Crypto Enforcement Report", href: "/texas-crypto-enforcement-report", wing: "Enforcement" },
  { title: "Texas Crypto Kiosk Scams", href: "/texas-crypto-kiosk-scams", wing: "Enforcement", keywords: "atm fraud" },

  // The grid
  { title: "Bitcoin Mining & ERCOT", href: "/bitcoin-mining-ercot", wing: "The grid", keywords: "demand response grid" },
  { title: "Texas Bitcoin Mining Map", href: "/bitcoin-mining-map-texas", wing: "The grid" },
  { title: "Texas Bitcoin Mining Calculator", href: "/bitcoin-mining-calculator-texas", wing: "The grid" },
  { title: "Texas Bitcoin Miners & the AI Pivot", href: "/texas-bitcoin-miners-ai-pivot", wing: "The grid", keywords: "hpc" },
  { title: "Elon Musk, Bitcoin & Energy", href: "/elon-musk-bitcoin-energy", wing: "The grid" },
  { title: "Did Bitcoin Mining Cause the 2021 Blackout?", href: "/did-bitcoin-mining-cause-the-2021-blackout", wing: "The grid", keywords: "uri" },
  { title: "Rented Hashrate & Cloud Mining", href: "/rented-hashrate-cloud-mining", wing: "The grid" },
  { title: "Bitcoin Energy Engineering in Texas", href: "/bitcoin-energy-engineering-texas", wing: "The grid" },

  // Base layer & frontier
  { title: "Run a Bitcoin Node in Texas", href: "/run-a-bitcoin-node-texas", wing: "Base layer & frontier" },
  { title: "Bitcoin Frontier Stack in Texas", href: "/bitcoin-frontier-stack-texas", wing: "Base layer & frontier", keywords: "lightning taproot" },

  // People — office
  { title: "Greg Abbott & Bitcoin", href: "/greg-abbott-bitcoin", wing: "People — office", keywords: "governor" },
  { title: "Dan Patrick & Bitcoin", href: "/dan-patrick-bitcoin", wing: "People — office", keywords: "lt governor senate" },
  { title: "Ted Cruz & Bitcoin", href: "/ted-cruz-bitcoin", wing: "People — office", keywords: "senator" },
  { title: "Kelly Hancock & Bitcoin", href: "/kelly-hancock-bitcoin", wing: "People — office", keywords: "acting comptroller" },
  { title: "Don Huffines & Bitcoin", href: "/don-huffines-bitcoin", wing: "People — office", keywords: "comptroller candidate" },
  { title: "Sarah Eckhardt & Bitcoin", href: "/sarah-eckhardt-bitcoin", wing: "People — office", keywords: "comptroller elect" },
  { title: "Glenn Hegar & Bitcoin", href: "/glenn-hegar-bitcoin", wing: "People — office", keywords: "former comptroller" },

  // People — Legislature
  { title: "Charles Schwertner & Bitcoin", href: "/charles-schwertner-bitcoin", wing: "People — Legislature", keywords: "sb 21 senate" },
  { title: "Angela Paxton & Bitcoin", href: "/angela-paxton-bitcoin", wing: "People — Legislature" },
  { title: "Giovanni Capriglione & Bitcoin", href: "/giovanni-capriglione-bitcoin", wing: "People — Legislature", keywords: "hb 1598" },
  { title: "Ken King & Bitcoin", href: "/ken-king-bitcoin", wing: "People — Legislature" },
  { title: "Phil King & Bitcoin", href: "/phil-king-bitcoin", wing: "People — Legislature" },
  { title: "Lois Kolkhorst & Bitcoin", href: "/lois-kolkhorst-bitcoin", wing: "People — Legislature" },
  { title: "Mayes Middleton & Bitcoin", href: "/mayes-middleton-bitcoin", wing: "People — Legislature" },
  { title: "Nathan Johnson & Bitcoin", href: "/nathan-johnson-bitcoin", wing: "People — Legislature", keywords: "ag elect" },
  { title: "Tan Parker & Bitcoin", href: "/tan-parker-bitcoin", wing: "People — Legislature" },

  // Institutions & companies
  { title: "ERCOT & Bitcoin", href: "/ercot-bitcoin", wing: "Institutions" },
  { title: "Texas Comptroller & Bitcoin", href: "/texas-comptroller-bitcoin", wing: "Institutions" },
  { title: "Texas Attorney General & Bitcoin", href: "/texas-attorney-general-bitcoin", wing: "Institutions" },
  { title: "Texas Department of Banking", href: "/texas-department-of-banking-bitcoin", wing: "Institutions" },
  { title: "Texas State Securities Board", href: "/texas-state-securities-board-bitcoin", wing: "Institutions" },
  { title: "Texas Public Utility Commission", href: "/texas-public-utility-commission-bitcoin", wing: "Institutions" },
  { title: "Texas Blockchain Council", href: "/texas-blockchain-council", wing: "Institutions" },
  { title: "Riot Platforms", href: "/riot-platforms-bitcoin", wing: "Institutions" },
  { title: "MARA Holdings", href: "/mara-holdings-bitcoin", wing: "Institutions" },
  { title: "Core Scientific", href: "/core-scientific-bitcoin", wing: "Institutions" },
  { title: "Cipher Mining", href: "/cipher-mining-bitcoin", wing: "Institutions" },
  { title: "Bitdeer", href: "/bitdeer-bitcoin", wing: "Institutions" },
  { title: "Lancium", href: "/lancium-bitcoin", wing: "Institutions" },
  { title: "Galaxy Digital", href: "/galaxy-digital-bitcoin", wing: "Institutions" },
  { title: "Hut 8", href: "/hut-8-bitcoin", wing: "Institutions" },

  // Builders & culture
  { title: "Jimmy Song & Bitcoin", href: "/jimmy-song-bitcoin", wing: "Builders & culture" },
  { title: "Lee Bratcher & Bitcoin", href: "/lee-bratcher-bitcoin", wing: "Builders & culture" },
  { title: "Parker Lewis & Bitcoin", href: "/parker-lewis-bitcoin", wing: "Builders & culture" },
  { title: "Pierre Rochard & Bitcoin", href: "/pierre-rochard-bitcoin", wing: "Builders & culture" },
  { title: "Karin Kusano & Bitcoin", href: "/karin-kusano-bitcoin", wing: "Builders & culture" },
  { title: "Satoshi Nakamoto Institute", href: "/satoshi-nakamoto-institute", wing: "Builders & culture" },
  { title: "Doctor Bitcoin", href: "/doctor-bitcoin", wing: "Builders & culture" },
  { title: "Doctor Bitcoin Interviews", href: "/doctor-bitcoin-interviews", wing: "Builders & culture" },
  { title: "Events", href: "/events", wing: "Builders & culture" },
  { title: "Invest in Texas Bitcoin", href: "/invest-in-texas-bitcoin", wing: "Builders & culture" },
  { title: "Texas Bitcoin Resources", href: "/texas-bitcoin-resources", wing: "Builders & culture" },

  // Reference
  { title: "Start Here", href: "/start-here", wing: "Reference" },
  { title: "Buy and Hold Bitcoin in Texas", href: "/buy-and-hold-bitcoin-texas", wing: "Reference", keywords: "dca self-custody not advice" },
  { title: "Texas Bitcoin Glossary", href: "/texas-bitcoin-glossary", wing: "Reference" },
  { title: "About & Editorial Standards", href: "/about", wing: "Reference" },
  { title: "Disclaimer", href: "/disclaimer", wing: "Reference" },
];
