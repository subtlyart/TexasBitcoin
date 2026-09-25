// The Public Utility Commission of Texas and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: the fourth institutional page. The subject is the
// commission - the five governor-appointed regulators who oversee ERCOT
// and write the rules the Legislature's grid statutes require - and what
// it has done with the mines and the loads that now dwarf them. The
// record is drawn from the commission's own rules, projects, and staff
// decks, ERCOT's notices and reports, the Governor's directive letters,
// the Texas Register, the legislative witness lists, and the Texas
// Tribune, Utility Dive, and Straight Arrow News. The commission and the
// grid operator are kept distinct throughout: ERCOT ran the 2022 interim
// process and the curtailment programs; the commission approves ERCOT's
// rules, writes its own, and answers to the Legislature and the Governor.
// The thesis is the list: seventeen months to write the mining registry
// SB 1929 required, a lawsuit against the Attorney General to keep it
// secret, and then, in 2026, a request to the Legislature for mandatory
// registration of every data center and an audit that sweeps in every
// crypto site over 25 megawatts. The honest counterweight is the
// commission's own staff report naming crypto mines as loads that avoid
// transmission costs "without commensurate system cost reductions," the
// interconnection rule still unadopted in September 2026, and the queue
// that grew seven-fold while the rules were written.
//
// Verified September 25, 2026. Re-verify when the 58481 interconnection
// rule is adopted, when the 12CP decision issues (December 2026), when
// PUC v. Paxton produces a ruling, and after the Batch Zero audit filing
// (ERCOT targets December 10, 2026).

export const PUC_LAST_VERIFIED = "September 25, 2026";

export interface PucSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the commission's and ERCOT's own documents,
// the Governor, the Legislature, then the trade and Texas press.
export const pucSources: PucSource[] = [
  { id: 1, label: "Houston Chronicle - Texas PUC grows from three commissioners to five (2021): SB 2154 (87R), signed June 2021; Texas residency; a one-year lobbying ban", url: "https://www.houstonchronicle.com/business/energy/article/puc-texas-commissioners-three-18610633.php" },
  { id: 2, label: "Texas Tribune - Texas power grid regulator chair Peter Lake to resign (June 2, 2023): appointed April 12, 2021; \"our grid is more reliable than ever\"", url: "https://www.texastribune.org/2023/06/02/texas-power-grid-public-utility-commission/" },
  { id: 3, label: "Office of the Governor - Governor Abbott appoints and names Gleeson chair of the Public Utility Commission of Texas (January 19, 2024): executive director since December 2020; term to September 1, 2029", url: "https://gov.texas.gov/news/post/governor-abbott-appoints-and-names-gleeson-chair-of-public-utility-commission-of-texas" },
  { id: 4, label: "ERCOT - Market notice W-A032522-01 (March 25, 2022): the interim large-load interconnection process - standalone loads of 75 MW or more, co-located loads of 20 MW or more, effective immediately", url: "https://www.ercot.com/services/comm/mkt_notices/W-A032522-01" },
  { id: 5, label: "ERCOT - Large Flexible Load Task Force (inactive): first meeting April 14, 2022; charter approved May 25, 2022; succeeded by the Large Load Working Group", url: "https://www.ercot.com/committees/inactive/lfltf" },
  { id: 6, label: "ERCOT - ERCOT creates voluntary curtailment program for large flexible loads (December 6, 2022): \"large flexible customers, such as bitcoin mining facilities\"; temporary until permanent rules", url: "https://www.ercot.com/news/release/2022-12-06-ercot-creates-voluntary" },
  { id: 7, label: "ERCOT - December 2022 cold-weather operations public report (March 27, 2023): large flexible loads curtailed from 1,530 MW to 130 MW, a 91.5% reduction, during Winter Storm Elliott's peak", url: "https://www.ercot.com/files/docs/2023/03/27/December-2022-Cold-Weather-Operations-Public-Report.pdf" },
  { id: 8, label: "Riot Platforms - Form 8-K exhibit (September 6, 2023): August 2023 - about $7.4 million in ERCOT ancillary services and $24.2 million in power credits under the TXU contract, $31.7 million total", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837023015517/riot-20230906xex99d1.htm" },
  { id: 9, label: "Texas Legislature Online - SB 1929 (88R) enrolled bill analysis: virtual-currency mining facilities over 75 MW register with the commission within one business day; five-year demand forecast; effective September 1, 2023", url: "https://capitol.texas.gov/tlodocs/88R/analysis/html/SB01929F.htm" },
  { id: 10, label: "Texas Legislature Online - SB 1751 (88R) Senate witness list, March 28, 2023: Thomas Gleeson, PUC executive director, registered \"On\" as a resource; Riot and US Bitcoin against; Sierra Club and Public Citizen for", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/SB01751S.htm" },
  { id: 11, label: "Public Utility Commission of Texas - Project 56962, proposal for publication of 16 TAC § 25.114, registration of virtual-currency mining facilities (September 2024, PDF)", url: "https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.114/56962pub.pdf" },
  { id: 12, label: "Texas Tribune - Texas will require cryptocurrency miners to register with the state's grid regulator (November 25, 2024): adopted November 21, 2024; register by February 1, 2025; up to $25,000 per violation per day; about 2,600 MW of mining load with as much again approved", url: "https://www.texastribune.org/2024/11/25/texas-cryptocurrency-mining-registration-public-utility-commission-er/" },
  { id: 13, label: "Utility Dive - Texas requires bitcoin miners to register with grid operator ERCOT (November 2024): Gleeson - \"the PUCT and ERCOT need to know the location and power needs of virtual currency miners\"; Bratcher - \"appropriate and far less invasive than what the Federal Government attempted\"", url: "https://www.utilitydive.com/news/texas-requires-bitcoin-miners-to-register-with-electric-grid-operator-ERCOT/733848/" },
  { id: 14, label: "U.S. Energy Information Administration - Today in Energy: Texas cryptocurrency mining consumed about 54 billion kWh in 2025, roughly 10% of ERCOT consumption", url: "https://www.eia.gov/todayinenergy/detail.php?id=63344" },
  { id: 15, label: "Straight Arrow News - SAN reporter's inquiry into Texas bitcoin mines triggers lawsuit (August 7, 2025): the records requests; the Attorney General's May 15, 2025 ruling; the commission's June 27 suit", url: "https://san.com/cc/exclusive-san-reporters-inquiry-into-texas-bitcoin-mines-triggers-lawsuit/" },
  { id: 16, label: "Texas Tribune - Texas utility regulators sue attorney general to keep crypto-mining power data secret (August 11, 2025): \"In the wrong hands, this information could be used by terrorists to plan attacks on Texas's energy grid\"", url: "https://www.texastribune.org/2025/08/11/texas-public-utility-commission-cryptocurrency-mining-power-lawsuit/" },
  { id: 17, label: "Straight Arrow News - Texas utility commission spent $56K blocking public-records release (November 10, 2025): about $13,000 on the crypto case; still pending", url: "https://san.com/cc/texas-utility-commission-spent-56k-blocking-public-records-release/" },
  { id: 18, label: "Utility Dive - Texas law gives grid operator power to disconnect data centers during crisis (June 25, 2025): SB 6 signed June 20; the 75 MW threshold, the $100,000 study fee, curtailment for loads after December 31, 2025, the 4CP review by December 31, 2026; Bratcher on the \"phantom load\"", url: "https://www.utilitydive.com/news/texas-law-gives-grid-operator-power-to-disconnect-data-centers-during-crisi/751587/" },
  { id: 19, label: "Public Utility Commission of Texas via NASEO - SB 6 implementation staff deck (October 17, 2025, PDF): Projects 58480 forecasting, 58481 interconnection, 58479 net metering, 58482 demand management, 58484 4CP; queue 189 GW, 69% data centers; \"Diverse types of large loads may warrant different treatment\"", url: "https://www.naseo.org/Data/Sites/1/media/tknaseo/sb6-puct-17-oct-2025.pdf" },
  { id: 20, label: "ERCOT - Large Load Update, House State Affairs hearing (April 9, 2026, PDF): about 410 GW tracked, about 87% data centers; § 25.370 forecasting rule effective March 1, 2026; batch studies every six months", url: "https://www.ercot.com/files/docs/2026/04/09/ERCOTLargeLoadUpdate-April9HouseStateAffairsHearing.pdf" },
  { id: 21, label: "Public Utility Commission of Texas - Project 58481, proposal for publication of 16 TAC § 25.194, large-load interconnection standards (March 12, 2026, PDF): $50,000 per MW security, $100,000 to $300,000 study fees, site control, 80% forfeiture on withdrawal", url: "https://interchange.puc.texas.gov/Documents/58481_122_1600475.PDF" },
  { id: 22, label: "Perkins Coie - SB 6 implementation: shaping the data-center future in Texas (2026): § 25.205 co-location rule adopted March 26, 2026 - ERCOT 120-day study, commission 60-day decision; 58482 demand-management service pending", url: "https://www.ashurstperkinscoie.com/en/insights/sb-6-implementation-shaping-data-center-future-in-texas/" },
  { id: 23, label: "Utility Dive - Texas approves AI data center co-location next to wind farm, with curtailment (July 24, 2026): the first § 25.205 case, Crusoe at Hutto - full curtailment within 30 minutes on ERCOT's direction, breaker disconnection authorized", url: "https://www.utilitydive.com/news/texas-approves-ai-data-center-co-location-next-to-wind-farm-with-curtailme/826617/" },
  { id: 24, label: "K&L Gates - Request for comments on the PUCT draft report on transmission cost recovery in ERCOT (March 30, 2026): staff names \"crypto mines and certain types of data centers\" as flexible loads that cut peak demand \"without commensurate system cost reductions\"", url: "https://www.klgates.com/thought-leadership/Request-for-Comments-on-Texas-PUCT-Draft-Report-Regarding-Transmission-Cost-Recovery-in-the-ERCOT-Region-3-30-2026" },
  { id: 25, label: "Public Utility Commission of Texas - Project 58000, staff proposal on transmission cost allocation (June 2026, PDF): 12CP on 30-minute intervals, minimum billing demand, ERCOT access to large-load meter data; residential share modeled down 3.1 points", url: "https://interchange.puc.texas.gov/Documents/58000_3_1655786.PDF" },
  { id: 26, label: "Texas Energy & Power - The regulator's test for real load (June 10, 2026): Gleeson - \"A Bitcoin miner is different from a hyperscaler, is different from a steel mill or a chemical plant\"; \"The megawatt we don't use is just as important as the megawatt that we generate\"", url: "https://www.texasenergyandpower.com/p/the-regulators-test-for-real-load" },
  { id: 27, label: "Inside Climate News - The chairman of Texas' Public Utility Commission has a to-do list (May 20, 2025): Gleeson - \"We want this economic development here, but it needs to be done in a managed way that we are sure is not going to impair reliability\"", url: "https://insideclimatenews.org/news/20052025/the-chairman-of-texas-public-utility-commission-has-a-to-do-list/" },
  { id: 28, label: "ERCOT - PUCT approves ERCOT's new large-load interconnection process (June 18, 2026): NPRR1325 and PGRR145, Batch Zero; queue 438 GW, 89% data centers; Vegas - \"a fundamental shift\"", url: "https://www.ercot.com/news/release/06182026-puct-approves-ercots" },
  { id: 29, label: "Office of the Governor - Directive letter to Chairman Gleeson and CEO Vegas (June 10, 2026, PDF): data centers to pay \"all of their electric infrastructure costs\" and interconnections to \"result in reduced residential electrical bills\"", url: "https://gov.texas.gov/uploads/files/press/Thomas_Gleeson_Pablo_Vegas_Data_Centers_Directive_Letter_to_PUC_ERCOT_FINAL.pdf" },
  { id: 30, label: "Office of the Governor - Directive letter to Gleeson and Vegas (August 3, 2026, PDF): \"approximately 474 gigawatts ... more than five times Texas' record peak\"; \"comprehensive verification and audit of all data centers advancing through ERCOT's interconnection process before any additional data centers are approved\"", url: "https://gov.texas.gov/uploads/files/press/Thomas_Gleeson_Pablo_Vegas_Data_Centers_Directive_Letter_to_PUCT_ERCOT_August_2026_.pdf" },
  { id: 31, label: "Texas Tribune - Texas grid regulators ask lawmakers for more control over data centers (July 29, 2026): the July 17 joint memo - emergency communication, mandatory registration of data centers and large loads; Gleeson - \"Texas should welcome responsible economic development, but it must do so in a manner that prioritizes affordability, reliability, and the interests of the residents who depend on the grid\"", url: "https://www.texastribune.org/2026/07/29/texas-ercot-puct-power-grid-data-centers/" },
  { id: 32, label: "Utility Dive - ERCOT, Texas PUC launch data center audit (August 21, 2026): Project 59142 good-cause request granted August 20; roughly 250 to 300 projects; crypto facilities of 25 MW or more included; Gleeson - \"more certainty and confidence in the Batch Zero process\"", url: "https://www.utilitydive.com/news/ercot-texas-puc-data-center-audit/828472/" },
  { id: 33, label: "Utility Dive - Texas PUC approves ride-through rules for data centers (July 13, 2026): NOGRR282, unanimous; 28 large-load trips of 100 MW or more since 2023; the Texas Blockchain Council opposed battery mitigation at \"more than $1.6 million per MW\"", url: "https://www.utilitydive.com/news/texas-puc-approves-ride-through-rules-data-centers/825051/" },
  { id: 34, label: "Texas Tribune - Texas approves first 765-kV transmission lines despite opposition (August 28, 2026): the Permian Basin plan's Oncor lines, unanimous; Hjaltman - \"They're about your land\"; the 43-lawmaker amicus", url: "https://www.texastribune.org/2026/08/28/transmission-lines-texas-energy/" },
  { id: 35, label: "Utility Dive - ERCOT's large-load queue jumped almost 300% last year (January 6, 2026): 63 GW at the end of 2024 to 233 GW; Kristi Hobbs - \"We have outgrown the process\"", url: "https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/" },
  { id: 36, label: "Texas Monthly - Texas crypto miners and the grid (February 28, 2024): Commissioner Jimmy Glotfelty's grass-fire analogy - the newspaper \"called us heroes – without mentioning it was our fireworks that started the fire in the first place\"; Riot's $71.2 million in 2023 credits", url: "https://www.texasmonthly.com/news-politics/texas-crypto-miners-lawsuit/" },
];

export type PucTimelineKind = "agency" | "mines" | "list" | "load" | "watch";

// The arc: the post-Uri commission → the mines → the list → the load →
// the audit.
export interface PucEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: PucTimelineKind;
  sourceIds: number[];
}

export const pucTimeline: PucEvent[] = [
  {
    date: "2021-06-01",
    dateLabel: "April → June 2021",
    title: "Three seats become five, and a new chair after the storm",
    detail:
      "Winter Storm Uri empties the commission; Governor Abbott names Peter Lake chair on April 12, 2021, and in June signs SB 2154, expanding the commission from three members to five, requiring them to live in Texas, and barring them from lobbying for a year after leaving. Its executive director since December 2020 is Thomas Gleeson, fifteen years at the agency. The commission that will meet the mines is the one Uri made.",
    kind: "agency",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2022-03-25",
    dateLabel: "March → December 2022",
    title: "ERCOT meets the mines: the interim process, the task force, the program",
    detail:
      "The grid operator, not the commission, moves first. On March 25, 2022 ERCOT issues an interim interconnection process for loads of 75 megawatts or more - effective immediately, no crypto in the text, crypto the plain occasion. A Large Flexible Load Task Force meets from April 14; on December 6 ERCOT opens a voluntary curtailment program for \"large flexible customers, such as bitcoin mining facilities,\" temporary until permanent rules that never come. In Winter Storm Elliott that month the mines cut from 1,530 to 130 megawatts at the peak.",
    kind: "mines",
    sourceIds: [4, 5, 6, 7],
  },
  {
    date: "2023-03-28",
    dateLabel: "March → September 2023",
    title: "The Legislature writes the registry; the commission registers \"on\"",
    detail:
      "At the March 28, 2023 hearing on Kolkhorst's SB 1751 and Johnson's SB 1929, Gleeson registers \"on\" - a resource, not a position - while Riot and US Bitcoin testify against the brake and the Sierra Club for it. The brake dies in the House; the registry passes and takes effect September 1: any mining facility over 75 megawatts registers with the commission within one business day of its power deal, with a five-year forecast. That August Riot collects $31.7 million for standing down - $7.4 million of it from ERCOT's ancillary services, the rest from its power contract.",
    kind: "mines",
    sourceIds: [10, 9, 8],
  },
  {
    date: "2024-11-21",
    dateLabel: "September 2023 → November 21, 2024",
    title: "Seventeen months to a rule: 16 TAC § 25.114",
    detail:
      "The commission adopts the registration rule on November 21, 2024, fourteen months after the statute took effect and heavier than the bill: location, owners, business form, demand, a five-year peak forecast, prior-year consumption, annual renewal, existing sites registered by February 1, 2025, penalties up to $25,000 per violation per day, and the data collected in a tool the public cannot see. Gleeson: \"the PUCT and ERCOT need to know the location and power needs of virtual currency miners.\" Bratcher, for the industry: \"appropriate and far less invasive than what the Federal Government attempted.\" Roughly 2,600 megawatts of mining is on the grid, with as much again approved. That February, Commissioner Glotfelty compares the miners' grid-hero story to teenagers praised for fighting a grass fire their own fireworks started.",
    kind: "list",
    sourceIds: [11, 12, 13, 36],
  },
  {
    date: "2025-06-27",
    dateLabel: "February → June 2025",
    title: "The list, requested, ordered released, and defended in court",
    detail:
      "Reporters for Straight Arrow News and the Texas Tribune ask for the registrations. The commission refuses under the critical-infrastructure exception. On May 15, 2025 the Attorney General's office rules the commission \"failed to demonstrate\" the data identifies particular vulnerabilities and orders it released. On June 27 the commission sues the Attorney General: \"In the wrong hands, this information could be used by terrorists to plan attacks on Texas's energy grid and critical infrastructure.\" By November it has spent about $13,000 on the case; no ruling has been reported. How many sites registered has never been disclosed.",
    kind: "list",
    sourceIds: [15, 16, 17],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "SB 6 hands the commission the load",
    detail:
      "The large-load law takes effect: a 75-megawatt threshold the commission may lower, a $100,000 minimum study fee, site control and disclosure of backup generation, mandatory curtailment for loads interconnecting after December 31, 2025, ERCOT's emergency authority, and an order to the commission to re-examine how transmission costs are allocated - the 4CP method the mines have learned to play - by December 31, 2026. Staff maps it into five projects: 58480 forecasting, 58481 interconnection, 58479 co-location, 58482 demand management, 58484 the 4CP study. The queue in the October deck: 189 gigawatts, 69% data centers.",
    kind: "load",
    sourceIds: [18, 19],
  },
  {
    date: "2026-03-26",
    dateLabel: "March 2026",
    title: "Two rules adopted, one proposed, and a staff report that names the mines",
    detail:
      "The forecasting rule, § 25.370, takes effect March 1. The co-location rule, § 25.205, is adopted March 26: no net-metering arrangement behind an existing plant without commission approval after ERCOT's 120-day study and a 60-day decision. The interconnection standards, § 25.194, are proposed March 12 - $50,000 per megawatt in security, $100,000 to $300,000 study fees, 80% forfeiture on withdrawal - and remain unadopted in September. And staff's draft 4CP report names \"crypto mines and certain types of data centers\" as loads that avoid transmission costs \"without commensurate system cost reductions.\" ERCOT counts 410 gigawatts in the queue on April 9, 87% of it data centers.",
    kind: "load",
    sourceIds: [20, 22, 21, 24],
  },
  {
    date: "2026-07-09",
    dateLabel: "June → July 2026",
    title: "Batch Zero, the Governor's letter, and 12CP",
    detail:
      "On June 10 the Governor orders the commission to make data centers pay their full infrastructure costs and lower residential bills. On June 18 it approves ERCOT's batch study process - every six months, all requests studied together, 438 gigawatts in the queue. On July 9 it publishes staff's replacement for 4CP: twelve coincident peaks on thirty-minute intervals, a minimum billing demand, and ERCOT access to large-load meters, with staff modeling the residential share of transmission cost down three points; decision due in December. On July 17 the commission and ERCOT ask the Legislature for emergency communication with data centers and mandatory registration of all of them. Gleeson: \"A Bitcoin miner is different from a hyperscaler, is different from a steel mill or a chemical plant.\"",
    kind: "load",
    sourceIds: [29, 28, 25, 31, 26],
  },
  {
    date: "2026-08-28",
    dateLabel: "August 2026",
    title: "The audit, the ride-through rule, the 765-kV vote",
    detail:
      "On August 3 the Governor cites \"approximately 474 gigawatts ... more than five times Texas' record peak\" and orders an audit of every data center in the queue before any more are approved. On August 20 the commission grants ERCOT's request to pause Batch Zero classification; the audit covers 250 to 300 projects and every crypto facility of 25 megawatts or more. In July it had adopted, unanimously, a ride-through rule requiring large computational loads to stay connected through grid disturbances - 28 trips of 100 megawatts or more since 2023 - over the Blockchain Council's objection to battery costs. On August 28 it approves the first 765-kV lines of the Permian plan, unanimously, over 43 legislators' amicus and Ken King's letter. Hjaltman, to the landowners: \"They're about your land.\"",
    kind: "watch",
    sourceIds: [30, 32, 33, 34],
  },
];
