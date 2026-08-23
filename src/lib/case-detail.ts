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
// Search indexing is a separate decision — see isCaseIndexable() below.
export type Posture = { label: string; adjudicated: boolean };

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

  if (SENTENCED_RE.test(hay)) return { label: "Sentenced", adjudicated: true };
  if (CONVICTED_RE.test(hay)) return { label: "Convicted", adjudicated: true };
  if (PLEA_RE.test(hay)) return { label: "Guilty plea", adjudicated: true };
  if (CHARGED_RE.test(hay)) return { label: "Charged", adjudicated: false };
  return { label: "Announced", adjudicated: false };
}

// A small curated set of "Announced"-posture DOJ releases that are nonetheless
// genuine crypto enforcement actions worth indexing: real seizures that carry
// no case-level forfeiture figure (e.g. a domain seizure), which no automatic
// signal can safely tell apart from a strategy memo that merely *mentions* a
// seizure. Mirrors EXCLUDED_DOJ_URLS in case-tracker — an explicit, auditable
// editorial override at the site layer. Re-verify against the DOJ release
// before adding.
const INDEXED_ANNOUNCEMENT_DOJ_URLS = new Set<string>([
  // Domains seized to dismantle the LummaC2 information-stealing malware
  // operation: two infrastructure seizures, no dollar forfeiture attributed.
  "https://www.justice.gov/opa/pr/justice-department-seizes-domains-behind-major-information-stealing-malware-operation",
]);

// Search-index decision for a case page — used by both the robots directive and
// the sitemap. Adjudicated and charge-only cases are always indexed. A
// fallthrough "Announced" release is indexed only when it is a genuine asset
// action: a case-level forfeiture amount or cited statutes, or an allowlisted
// seizure. Non-case announcements (PSAs, awareness days, personnel notices,
// strategy memos) stay out — even one whose text recaps other cases' dollar
// figures, since those are never attributed to the announcement's own case.
export function isCaseIndexable(c: TrackedCase, detail: CaseDetail): boolean {
  if (casePosture(detail).label !== "Announced") return true;
  return (
    c.forfeiture_usd > 0 ||
    c.statutes.length > 0 ||
    INDEXED_ANNOUNCEMENT_DOJ_URLS.has(c.doj_url)
  );
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

// Case pages that are search-indexed, for the sitemap: every real case, keyed
// off isCaseIndexable. Only non-case announcements are excluded.
export function indexedCasePages(): { slug: string; date: string | null }[] {
  return trackedCasesWithSlug
    .filter((c) => isCaseIndexable(c, detailById[c.id] ?? EMPTY_DETAIL))
    .map((c) => ({ slug: c.slug, date: c.date }));
}
