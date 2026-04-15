import { z } from "zod";
import {
  buildDashboardSummary,
  type DashboardIncident,
  DashboardIncidentSchema,
  type DashboardSummary,
  DashboardSummarySchema,
} from "./dashboard.js";

const memberStatusLevels = ["on-call", "active", "supporting"] as const;
const auditSeverityLevels = ["critical", "warning", "neutral"] as const;
const workstreamStatusLevels = ["at-risk", "watch", "stable"] as const;

export const IncidentRecordSchema = DashboardIncidentSchema.extend({
  region: z.string(),
  customerImpact: z.string(),
  tags: z.array(z.string()),
  nextAction: z.string(),
  escalated: z.boolean(),
});

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  squad: z.string(),
  location: z.string(),
  timezone: z.string(),
  status: z.enum(memberStatusLevels),
  activeIncidents: z.number(),
  focus: z.string(),
});

export const AuditEventSchema = z.object({
  id: z.string(),
  at: z.string(),
  actor: z.string(),
  action: z.string(),
  target: z.string(),
  result: z.string(),
  channel: z.string(),
  severity: z.enum(auditSeverityLevels),
});

export const WorkstreamSchema = z.object({
  id: z.string(),
  name: z.string(),
  owner: z.string(),
  status: z.enum(workstreamStatusLevels),
  summary: z.string(),
  milestone: z.string(),
});

export const WorkspaceSnapshotSchema = z.object({
  tenantId: z.string(),
  tenantName: z.string(),
  sector: z.string(),
  coverageWindow: z.string(),
  commandStatus: z.string(),
  commandNarrative: z.string(),
  dashboard: DashboardSummarySchema,
  incidents: z.array(IncidentRecordSchema),
  team: z.array(TeamMemberSchema),
  auditTrail: z.array(AuditEventSchema),
  workstreams: z.array(WorkstreamSchema),
  operatingPrinciples: z.array(z.string()),
});

export type IncidentRecord = z.infer<typeof IncidentRecordSchema>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type AuditEvent = z.infer<typeof AuditEventSchema>;
export type Workstream = z.infer<typeof WorkstreamSchema>;
export type WorkspaceSnapshot = z.infer<typeof WorkspaceSnapshotSchema>;

const incidentDetailMap: Record<
  string,
  Omit<IncidentRecord, keyof DashboardIncident>
> = {
  "inc-104": {
    region: "East freight corridor",
    customerImpact:
      "Partners are receiving stale shipment states for 11% of active orders.",
    tags: ["partner-api", "fulfillment", "critical"],
    nextAction:
      "Throttle retries, drain the backlog, and verify downstream acknowledgement rate.",
    escalated: true,
  },
  "inc-097": {
    region: "Regional hubs",
    customerImpact:
      "Routing recommendations are delayed during the highest morning throughput window.",
    tags: ["capacity", "routing", "watch"],
    nextAction:
      "Keep the orchestration patch under observation and compare east-region recovery against baseline.",
    escalated: false,
  },
  "inc-089": {
    region: "Back office",
    customerImpact:
      "Large audit exports are slow for enterprise operations managers and compliance teams.",
    tags: ["reporting", "audit", "degraded"],
    nextAction:
      "Ship the pagination hotfix and validate export performance above 25k rows.",
    escalated: false,
  },
};

const teamSeed: TeamMember[] = [
  {
    id: "tm-01",
    name: "Lina Costa",
    role: "Incident commander",
    squad: "Ops command",
    location: "Sao Paulo",
    timezone: "BRT",
    status: "on-call",
    activeIncidents: 2,
    focus: "Coordinating cross-team response and executive comms.",
  },
  {
    id: "tm-02",
    name: "Marcus Bell",
    role: "Platform lead",
    squad: "Core services",
    location: "Austin",
    timezone: "CDT",
    status: "active",
    activeIncidents: 1,
    focus:
      "Stabilizing workflow latency and validating service rollback options.",
  },
  {
    id: "tm-03",
    name: "Sofia Almeida",
    role: "Support operations lead",
    squad: "Customer ops",
    location: "Lisbon",
    timezone: "WEST",
    status: "supporting",
    activeIncidents: 1,
    focus: "Maintaining customer impact briefings and escalation routing.",
  },
  {
    id: "tm-04",
    name: "Diego Ramos",
    role: "Fulfillment analyst",
    squad: "Logistics control",
    location: "Campinas",
    timezone: "BRT",
    status: "active",
    activeIncidents: 1,
    focus: "Watching warehouse throughput anomalies and capacity shifts.",
  },
];

const auditTrailSeed: AuditEvent[] = [
  {
    id: "audit-01",
    at: "09:24",
    actor: "Lina Costa",
    action: "Escalation playbook triggered",
    target: "Partner Gateway / inc-104",
    result:
      "Critical incident broadcast sent to leadership and partner operations.",
    channel: "Command center",
    severity: "critical",
  },
  {
    id: "audit-02",
    at: "09:08",
    actor: "Marcus Bell",
    action: "Rate-limit policy adjusted",
    target: "Gateway retry controller",
    result: "Burst ceiling reduced to stabilize queue growth during replay.",
    channel: "Platform ops",
    severity: "warning",
  },
  {
    id: "audit-03",
    at: "08:52",
    actor: "System",
    action: "Executive digest published",
    target: "Morning operational brief",
    result: "Fresh SLA pressure snapshot shared with regional directors.",
    channel: "Automated digest",
    severity: "neutral",
  },
  {
    id: "audit-04",
    at: "08:20",
    actor: "Sofia Almeida",
    action: "Customer comms workflow approved",
    target: "High-risk partner accounts",
    result:
      "Impact statement and response cadence aligned with support leadership.",
    channel: "Support operations",
    severity: "warning",
  },
];

const workstreamSeed: Workstream[] = [
  {
    id: "ws-01",
    name: "Gateway recovery",
    owner: "Marcus Bell",
    status: "at-risk",
    summary:
      "Stabilize partner retries and recover shipment state synchronization without backlog growth.",
    milestone: "Target: error rate below 1% by end of shift",
  },
  {
    id: "ws-02",
    name: "Fulfillment throughput",
    owner: "Diego Ramos",
    status: "watch",
    summary:
      "Track east-region capacity against the morning baseline and maintain decision latency under threshold.",
    milestone: "Target: routing response back under 95ms",
  },
  {
    id: "ws-03",
    name: "Leadership visibility",
    owner: "Lina Costa",
    status: "stable",
    summary:
      "Keep the executive operating brief current with SLA pressure, impact notes, and incident ownership.",
    milestone: "Target: refresh digest every 30 minutes during active response",
  },
];

const workspaceMetadata: Record<
  string,
  Pick<
    WorkspaceSnapshot,
    | "tenantId"
    | "tenantName"
    | "sector"
    | "coverageWindow"
    | "commandStatus"
    | "commandNarrative"
    | "operatingPrinciples"
  >
> = {
  "atlas-prime": {
    tenantId: "atlas-prime",
    tenantName: "AtlasOps / Prime Manufacturing",
    sector: "Logistics and distributed fulfillment",
    coverageWindow:
      "24/7 command coverage across Sao Paulo, Lisbon, and Austin",
    commandStatus: "Guarded",
    commandNarrative:
      "One critical integration issue is under active control, with clear ownership and leadership updates already in motion.",
    operatingPrinciples: [
      "Every incident has an owner, a clock, and a business impact statement.",
      "Leadership should see operational pressure without reading internal chat noise.",
      "Command workflows must be auditable even when the response is moving fast.",
    ],
  },
  "north-star": {
    tenantId: "north-star",
    tenantName: "AtlasOps / North Star Logistics",
    sector: "Regional carrier operations",
    coverageWindow: "Shift-based command coverage across east and central hubs",
    commandStatus: "Stable",
    commandNarrative:
      "Operational posture is healthy, with no immediate breach risk and one watch-listed routing issue.",
    operatingPrinciples: [
      "Prioritize incidents by delivery impact, not just alert volume.",
      "Surface SLA risk before escalations become customer-facing failures.",
      "Preserve an operational trail that connects human actions and system decisions.",
    ],
  },
};

function buildIncidentRecords(summary: DashboardSummary): IncidentRecord[] {
  return summary.incidents.map((incident) => {
    const details = incidentDetailMap[incident.id];

    if (!details) {
      throw new Error(`Missing incident detail seed for ${incident.id}`);
    }

    return IncidentRecordSchema.parse({
      ...incident,
      ...details,
    });
  });
}

export function buildWorkspaceSnapshot(
  tenantId = "atlas-prime",
): WorkspaceSnapshot {
  const dashboard = buildDashboardSummary(tenantId);
  const metadata =
    workspaceMetadata[tenantId] ?? workspaceMetadata["atlas-prime"];

  return WorkspaceSnapshotSchema.parse({
    ...metadata,
    dashboard,
    incidents: buildIncidentRecords(dashboard),
    team: teamSeed,
    auditTrail: auditTrailSeed,
    workstreams: workstreamSeed,
  });
}
