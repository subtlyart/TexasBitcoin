import detailData from "@/data/texas-cases-detail.json";
import {
  caseIdForSlug,
  trackedCases,
  trackedCasesWithSlug,
  type TrackedCase,
} from "@/lib/case-tracker";

// Per-case deep data emitted by the project1960 exporter (texas_cases_detail.json),
// keyed by internal case id. Imported only by the per-case route, so the large
// detail payload never reaches the index page's bundle.

export type Participant = {
  name: string | null;
  role: string | null;
  title: string | null;
  organization: string | null;
  location: string | null;
  age: number | null;
  nationality: string | null;
  status: string | null;
};

export type Agency = {
  agency_name: string | null;
  abbreviation: string | null;
  role: string | null;
  office_location: string | null;
  agents_mentioned: string | null;
  contribution: string | null;
};

export type Charge = {
  charge_description: string | null;
  statute: string | null;
  severity: string | null;
  max_penalty: string | null;
  fine_amount: string | null;
  defendant: string | null;
  status: string | null;
};

export type FinancialAction = {
  action_type: string | null;
  amount: string | null;
  currency: string | null;
  description: string | null;
  asset_type: string | null;
  defendant: string | null;
  status: string | null;
};

export type Quote = {
  quote_text: string | null;
  speaker_name: string | null;
  speaker_title: string | null;
  speaker_organization: string | null;
  quote_type: string | null;
  context: string | null;
  significance: string | null;
};

export type CaseMetadata = {
  district_office: string | null;
  usa_name: string | null;
  event_type: string | null;
  judge_name: string | null;
  judge_title: string | null;
  case_number: string | null;
  max_penalty_text: string | null;
  sentence_summary: string | null;
  crypto_assets: string | null;
} | null;

export type CaseDetail = {
  metadata: CaseMetadata;
  participants: Participant[];
  agencies: Agency[];
  charges: Charge[];
  financial_actions: FinancialAction[];
  quotes: Quote[];
};

const EMPTY_DETAIL: CaseDetail = {
  metadata: null,
  participants: [],
  agencies: [],
  charges: [],
  financial_actions: [],
  quotes: [],
};

const detailById = (detailData as unknown as { cases: Record<string, CaseDetail> })
  .cases;

export function getCaseBySlug(
  slug: string,
): { case: TrackedCase; detail: CaseDetail } | null {
  const id = caseIdForSlug(slug);
  if (!id) return null;
  const c = trackedCases.find((x) => x.id === id);
  if (!c) return null;
  return { case: c, detail: detailById[id] ?? EMPTY_DETAIL };
}

// --- Editorial posture -------------------------------------------------------
// `adjudicated` drives the on-page framing: a plea/conviction/sentence is stated
// as settled fact, while a charge-only case is framed as an unproven allegation.
// `indexable` drives robots + sitemap inclusion and is deliberately DECOUPLED
// from adjudication — charged cases are real prosecutions worth surfacing in
// search, so they are indexed while still carrying the presumption-of-innocence
// framing. Only the fallthrough "Announced" bucket (no charge, plea, conviction,
// or sentence language — in practice non-case items like PSAs, awareness days,
// and personnel notices) is held out of the search index.
export type Posture = { label: string; adjudicated: boolean; indexable: boolean };

const SENTENCED_RE = /sentenc/i;
const CONVICTED_RE = /convict|found guilty|jury (?:verdict|convict)/i;
const PLEA_RE = /pleaded guilty|guilty plea|plea agreement|pled guilty|admits/i;
const CHARGED_RE = /charg|indict|arrest|complaint|accus|alleg/i;

export function casePosture(detail: CaseDetail): Posture {
  const hay = [
    ...detail.participants.map((p) => p.status),
    ...detail.charges.map((c) => c.status),
    detail.metadata?.event_type,
    detail.metadata?.sentence_summary,
  ]
    .filter(Boolean)
    .join(" ; ");

  if (SENTENCED_RE.test(hay))
    return { label: "Sentenced", adjudicated: true, indexable: true };
  if (CONVICTED_RE.test(hay))
    return { label: "Convicted", adjudicated: true, indexable: true };
  if (PLEA_RE.test(hay))
    return { label: "Guilty plea", adjudicated: true, indexable: true };
  if (CHARGED_RE.test(hay))
    return { label: "Charged", adjudicated: false, indexable: true };
  return { label: "Announced", adjudicated: false, indexable: false };
}

// Defendants only, in a stable order, for the page's "who" section.
export function defendants(detail: CaseDetail): Participant[] {
  return detail.participants.filter(
    (p) => p.role && /defendant/i.test(p.role),
  );
}

// Non-defendant participants (prosecutors, agents, judges) for an "officials" line.
export function officials(detail: CaseDetail): Participant[] {
  return detail.participants.filter(
    (p) => !p.role || !/defendant/i.test(p.role),
  );
}

// Case pages that are search-indexed — every real case (adjudicated and
// charge-only alike), for the sitemap. Only the non-case "Announced" bucket is
// excluded; see casePosture above.
export function indexedCasePages(): { slug: string; date: string | null }[] {
  return trackedCasesWithSlug
    .filter((c) => casePosture(detailById[c.id] ?? EMPTY_DETAIL).indexable)
    .map((c) => ({ slug: c.slug, date: c.date }));
}
