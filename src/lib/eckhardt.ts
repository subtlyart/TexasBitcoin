// Sarah Eckhardt and Bitcoin — the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Senate Journal for the roll call, the enrolled text of
// SB 21 for what the office she is in line to hold controls, the Texas
// Senate and Legislative Reference Library for who she is, the Fort Worth
// Star-Telegram questionnaire (body re-read) for her own words on state
// crypto investment, the Secretary of State unofficial returns for the
// November 3, 2026 totals, and The Texan for the election-night call.
// Eckhardt is not a silent legislator: she has a sourced sentence and a
// named vote. She is also not yet the comptroller. The honest
// counterweight is the tension, not a hedge — yea on the reserve as a
// senator, then a voter-guide answer that treats crypto as a high-risk
// speculative asset for state funds. Do not write "won" unless the SOS
// page says the canvass is official.
//
// Verified November 22, 2026. Re-verify when the canvass is official,
// when she takes the oath, and when she first speaks as comptroller
// about the reserve or the custody award.

export const ECKHARDT_LAST_VERIFIED = "November 22, 2026";

export interface EckhardtSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate Journal and the statute, then the
// Senate and LRL for the bio, then the questionnaire, then SOS totals,
// then the Texas press call.
export const eckhardtSources: EckhardtSource[] = [
  {
    id: 1,
    label:
      "Texas Senate Journal — 89th Legislature, Regular Session, 14th Day (March 6, 2025), p. 423: CSSB 21 passed on third reading, Yeas 25, Nays 5. Yeas include Eckhardt; nays Creighton, Gutierrez, Hall, Hancock, Nichols; Miles absent-excused",
    url: "https://journals.senate.texas.gov/sjrnl/89r/pdf/89RSJ03-06-F.PDF",
  },
  {
    id: 2,
    label:
      "Texas Legislature Online — SB 21 (89R), enrolled text: § 403.703 (the comptroller has custody of and shall administer and manage the Texas Strategic Bitcoin Reserve, a special fund outside the state treasury); § 403.707 (the comptroller is one of five members of the reserve advisory committee); § 403.708 (biennial report due by December 31 of each even-numbered year)",
    url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm",
  },
  {
    id: 3,
    label:
      "Texas Legislature Online — SB 21 (89R) bill history: passed the Senate March 6, 2025; signed by the Governor June 20, 2025, effective immediately",
    url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21",
  },
  {
    id: 4,
    label:
      "Texas Senate — Senator Sarah Eckhardt, District 14: Democrat; hometown Austin; Senate member 2020–present; LBJ School MPA and UT law degree, 1998; Assistant Travis County Attorney; Travis County Commissioner 2006–2013; Travis County Judge 2015–2020",
    url: "https://senate.texas.gov/member.php?d=14",
  },
  {
    id: 5,
    label:
      "Legislative Reference Library — member display, Sarah Eckhardt: Senate District 14, sworn July 31, 2020, succeeding Kirk Watson; Democrat; Austin / Travis",
    url: "https://lrl.texas.gov/legeLeaders/members/memberdisplay.cfm?memberID=5858",
  },
  {
    id: 6,
    label:
      "Fort Worth Star-Telegram — Q&A: Democrats running in the Texas comptroller primary (Eleanor Dearman, February 14, 2026). Under the heading Sarah Eckhardt, asked whether Texas should be investing in cryptocurrency: \"Texas must prioritize stability and the long-term security of our state funds. While innovation is vital, our primary focus should be on traditional infrastructure and human capital—investments that provide guaranteed returns for the public good rather than high-risk speculative assets.\" Body re-read from the February 14, 2026 Wayback snapshot of this URL; neighboring candidates' answers on the same questionnaire are not hers",
    url: "https://www.star-telegram.com/news/politics-government/election/voter-guide/article314639509.html",
  },
  {
    id: 7,
    label:
      "Texas Secretary of State — November 3, 2026 general election, unofficial returns at 100% of polling locations reporting (November 4, 2026, 4:59 p.m.): COMPTROLLER OF PUBLIC ACCOUNTS — Sarah Eckhardt (D) 5,014,496; Don Huffines (R) 4,511,185; V. Alonzo Echavarria-Garza (L) 185,187; Shehla Faizi (G) 63,817. Not certified",
    url: "https://electionresults.sos.state.tx.us/results.html",
  },
  {
    id: 8,
    label:
      "The Texan — Eckhardt Defeats Huffines in Texas Comptroller Race (Stephan Kapustka): unofficial results around 1 a.m. had Eckhardt at 51 percent and Huffines at 46 percent; \"Eckhardt will be sworn in as comptroller in January 2027.\" The wire is the call; the totals on this page come from the Secretary of State table",
    url: "https://thetexan.news/elections/2026/eckhardt-defeats-huffines-in-texas-comptroller-race/article_bfa2314f-d7a2-4ebd-83ca-7a5650869656.html",
  },
  {
    id: 9,
    label:
      "Texas Secretary of State — Important 2026 election dates: November 3, 2026 uniform election",
    url: "https://www.sos.texas.gov/elections/voter/important-election-dates.shtml",
  },
];

export type EckhardtTimelineKind = "path" | "vote" | "words" | "watch";

export interface EckhardtEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: EckhardtTimelineKind;
  sourceIds: number[];
}

export const eckhardtTimeline: EckhardtEvent[] = [
  {
    date: "2020-07-31",
    dateLabel: "July 31, 2020",
    title: "Sworn in for Senate District 14",
    detail:
      "Sarah Eckhardt, a Democrat from Austin, takes the oath for Texas Senate District 14, succeeding Kirk Watson. The Senate's own page records a Travis County attorney, commissioner (2006–2013), and county judge (2015–2020) behind that seat.",
    kind: "path",
    sourceIds: [4, 5],
  },
  {
    date: "2025-03-06",
    dateLabel: "March 6, 2025",
    title: "Yea on CSSB 21",
    detail:
      "On third reading the Senate passes CSSB 21, the Texas Strategic Bitcoin Reserve, Yeas 25, Nays 5. Eckhardt is in the yeas, with Alvarado, Johnson, Menéndez, West, and Zaffirini among the Democrats who voted with the majority. The five nays are Creighton, Gutierrez, Hall, Hancock, and Nichols.",
    kind: "vote",
    sourceIds: [1],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "The reserve becomes law",
    detail:
      "Governor Abbott signs SB 21, effective immediately. The enrolled text places the reserve outside the treasury and gives the comptroller custody of it, a seat on its five-member advisory committee, and a biennial report due by December 31 of each even-numbered year.",
    kind: "vote",
    sourceIds: [2, 3],
  },
  {
    date: "2026-02-14",
    dateLabel: "February 14, 2026",
    title: "The questionnaire",
    detail:
      "Running in the Democratic primary for comptroller, Eckhardt answers a Star-Telegram voter-guide question — \"Should Texas be investing in cryptocurrency?\" — in her own name: state funds should go to \"traditional infrastructure and human capital,\" not \"high-risk speculative assets.\" The neighboring candidates on that page gave different answers; hers is the infrastructure sentence.",
    kind: "words",
    sourceIds: [6],
  },
  {
    date: "2026-11-03",
    dateLabel: "November 3, 2026",
    title: "The general — unofficial",
    detail:
      "Unofficial Secretary of State returns at 100% of polling locations reporting (November 4, 4:59 p.m.): Sarah Eckhardt (D) 5,014,496 (51.30%); Don Huffines (R) 4,511,185 (46.15%); V. Alonzo Echavarria-Garza (L) 185,187 (1.89%); Shehla Faizi (G) 63,817 (0.65%). The Texan called the race election night. The returns are not certified. Huffines remains comptroller by appointment until the January 2027 term.",
    kind: "watch",
    sourceIds: [7, 8, 9],
  },
  {
    date: "2027-01-01",
    dateLabel: "January 2027",
    title: "The oath — the next entry",
    detail:
      "The Texan writes that Eckhardt will be sworn in as comptroller in January 2027. Under SB 21, custody of the reserve and the comptroller's committee seat pass with the office. This page does not treat that handover as done. The first entry after the oath is whatever she says, or does not say, about the reserve.",
    kind: "watch",
    sourceIds: [2, 8],
  },
];
