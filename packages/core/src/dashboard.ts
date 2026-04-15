import { z } from "zod";

const severityLevels = ["critical", "high", "medium", "low"] as const;
const statusLevels = ["triage", "monitoring", "contained", "resolved"] as const;
const metricTones = ["up", "down", "steady"] as const;

export const DashboardMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  delta: z.string(),
  hint: z.string(),
  tone: z.enum(metricTones),
});

export const DashboardIncidentSchema = z.object({
  id: z.string(),
  title: z.string(),
  service: z.string(),
  severity: z.enum(severityLevels),
  status: z.enum(statusLevels),
  owner: z.string(),
  impact: z.string(),
  slaMinutesRemaining: z.number(),
  startedAt: z.string(),
});

export const DashboardServiceHealthSchema = z.object({
  name: z.string(),
  uptime: z.number(),
  latencyMs: z.number(),
  errorRate: z.number(),
});

export const DashboardActivitySchema = z.object({
  id: z.string(),
  at: z.string(),
  title: z.string(),
  detail: z.string(),
});

export const DashboardSummarySchema = z.object({
  tenantName: z.string(),
  periodLabel: z.string(),
  generatedAtLabel: z.string(),
  metrics: z.array(DashboardMetricSchema),
  incidents: z.array(DashboardIncidentSchema),
  serviceHealth: z.array(DashboardServiceHealthSchema),
  activity: z.array(DashboardActivitySchema),
  highlights: z.array(z.string()),
});

export type DashboardMetric = z.infer<typeof DashboardMetricSchema>;
export type DashboardIncident = z.infer<typeof DashboardIncidentSchema>;
export type DashboardServiceHealth = z.infer<
  typeof DashboardServiceHealthSchema
>;
export type DashboardActivity = z.infer<typeof DashboardActivitySchema>;
export type DashboardSummary = z.infer<typeof DashboardSummarySchema>;

const severityRank: Record<DashboardIncident["severity"], number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const tenantNames: Record<string, string> = {
  "atlas-prime": "AtlasOps / Prime Manufacturing",
  "north-star": "AtlasOps / North Star Logistics",
};

const incidentSeed: DashboardIncident[] = [
  {
    id: "inc-104",
    title: "Shipment sync lag on partner webhook retries",
    service: "Partner Gateway",
    severity: "critical",
    status: "triage",
    owner: "Ops squad",
    impact: "Retries are stacking and delaying downstream fulfillment updates.",
    slaMinutesRemaining: 11,
    startedAt: "08:14",
  },
  {
    id: "inc-097",
    title: "Warehouse throughput dipped below morning baseline",
    service: "Capacity Orchestrator",
    severity: "high",
    status: "monitoring",
    owner: "Fulfillment pod",
    impact:
      "Routing decisions are slower than target during east-region bursts.",
    slaMinutesRemaining: 24,
    startedAt: "07:48",
  },
  {
    id: "inc-089",
    title: "Client-facing audit export timing out above 25k rows",
    service: "Reporting API",
    severity: "medium",
    status: "contained",
    owner: "Platform squad",
    impact:
      "Exports are partially degraded while a pagination patch is staged.",
    slaMinutesRemaining: 73,
    startedAt: "06:31",
  },
];

const serviceSeed: DashboardServiceHealth[] = [
  { name: "Command API", uptime: 99.98, latencyMs: 84, errorRate: 0.3 },
  { name: "Partner Gateway", uptime: 99.42, latencyMs: 167, errorRate: 3.9 },
  { name: "Reporting API", uptime: 99.87, latencyMs: 108, errorRate: 0.6 },
  { name: "Workflow Engine", uptime: 99.95, latencyMs: 76, errorRate: 0.2 },
];

const activitySeed: DashboardActivity[] = [
  {
    id: "evt-1",
    at: "09:24",
    title: "Critical playbook initiated",
    detail: "Ops squad engaged retry suppression and customer comms workflow.",
  },
  {
    id: "evt-2",
    at: "09:08",
    title: "Rate limit tuned for partner bridge",
    detail:
      "Gateway burst ceiling reduced to stabilize queue depth under load.",
  },
  {
    id: "evt-3",
    at: "08:52",
    title: "Executive digest published",
    detail:
      "Leadership summary refreshed with the latest SLA pressure snapshot.",
  },
  {
    id: "evt-4",
    at: "08:20",
    title: "Audit stream checkpoint completed",
    detail:
      "Timeline integrity verified across user actions and system retries.",
  },
];

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

function getCoverageMetric(services: DashboardServiceHealth[]) {
  return (
    services.reduce((total, service) => total + service.uptime, 0) /
    services.length
  );
}

function getAverageLatency(services: DashboardServiceHealth[]) {
  return Math.round(
    services.reduce((total, service) => total + service.latencyMs, 0) /
      services.length,
  );
}

export function buildDashboardSummary(
  tenantId = "atlas-prime",
): DashboardSummary {
  const incidents = [...incidentSeed].sort((left, right) => {
    const severityDelta =
      severityRank[left.severity] - severityRank[right.severity];

    if (severityDelta !== 0) {
      return severityDelta;
    }

    return left.slaMinutesRemaining - right.slaMinutesRemaining;
  });

  const criticalIncidents = incidents.filter(
    (incident) => incident.severity === "critical",
  );
  const serviceCoverage = getCoverageMetric(serviceSeed);
  const averageLatency = getAverageLatency(serviceSeed);

  const metrics: DashboardMetric[] = [
    {
      label: "Open pressure",
      value: `${incidents.length} active`,
      delta: "+2.1%",
      hint: "Three active incidents, one in immediate triage.",
      tone: "down",
    },
    {
      label: "SLA runway",
      value: `${Math.min(...incidents.map((incident) => incident.slaMinutesRemaining))}m`,
      delta: "-8m",
      hint: "Closest breach window across the command queue.",
      tone: "down",
    },
    {
      label: "Service coverage",
      value: formatPercent(serviceCoverage),
      delta: "+0.12%",
      hint: "Mean uptime posture across the most visible operating surfaces.",
      tone: "up",
    },
    {
      label: "Latency contour",
      value: `${averageLatency}ms`,
      delta: "steady",
      hint: `${criticalIncidents.length} critical route under active mitigation.`,
      tone: "steady",
    },
  ];

  return DashboardSummarySchema.parse({
    tenantName: tenantNames[tenantId] ?? "AtlasOps / Demo Workspace",
    periodLabel: "Wednesday morning pulse",
    generatedAtLabel: "09:30 local",
    metrics,
    incidents,
    serviceHealth: serviceSeed,
    activity: activitySeed,
    highlights: [
      "Shared Zod contracts keep the API payload and UI assumptions aligned.",
      "The dashboard favors operational storytelling over template-heavy widgets.",
      "The monorepo already has clean seams for RBAC, Prisma, queues, and audit logs.",
    ],
  });
}
