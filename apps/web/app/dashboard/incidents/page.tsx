import type { IncidentRecord } from "@atlasops/core";
import { Badge, Card } from "@atlasops/ui";
import { ViewHeader } from "../../../components/view-header";
import { getWorkspaceSnapshot } from "../../../lib/api";

function getSeverityVariant(
  severity: IncidentRecord["severity"],
): "critical" | "warning" | "neutral" {
  if (severity === "critical") {
    return "critical";
  }

  if (severity === "high") {
    return "warning";
  }

  return "neutral";
}

export default async function IncidentsPage() {
  const snapshot = await getWorkspaceSnapshot();
  const escalatedCount = snapshot.incidents.filter(
    (incident) => incident.escalated,
  ).length;

  return (
    <section className="dashboard-view">
      <ViewHeader
        eyebrow="Incident command"
        title="Operational queue with business impact and next action."
        description="AtlasOps ranks incidents by severity, ownership, customer impact, and remaining SLA runway so response stays coordinated under pressure."
      />

      <section className="view-metric-grid">
        <Card className="view-metric">
          <span>Active incidents</span>
          <strong>{snapshot.incidents.length}</strong>
          <p>Open issues currently tracked inside the command workspace.</p>
        </Card>
        <Card className="view-metric">
          <span>Escalated</span>
          <strong>{escalatedCount}</strong>
          <p>
            Incidents with leadership visibility or cross-team coordination
            active.
          </p>
        </Card>
        <Card className="view-metric">
          <span>Tightest SLA</span>
          <strong>
            {Math.min(
              ...snapshot.incidents.map(
                (incident) => incident.slaMinutesRemaining,
              ),
            )}
            m
          </strong>
          <p>
            Shortest remaining runway before the next meaningful breach risk.
          </p>
        </Card>
      </section>

      <div className="record-grid">
        {snapshot.incidents.map((incident) => (
          <Card className="record-card" key={incident.id}>
            <div className="record-card__header">
              <div>
                <span className="record-card__eyebrow">
                  {incident.service} • {incident.region}
                </span>
                <h3>{incident.title}</h3>
              </div>

              <div className="record-card__badges">
                <Badge variant={getSeverityVariant(incident.severity)}>
                  {incident.severity}
                </Badge>
                <Badge variant="neutral">{incident.status}</Badge>
              </div>
            </div>

            <p>{incident.impact}</p>

            <div className="record-card__details">
              <div>
                <span>Customer impact</span>
                <strong>{incident.customerImpact}</strong>
              </div>
              <div>
                <span>Owner</span>
                <strong>{incident.owner}</strong>
              </div>
              <div>
                <span>Next action</span>
                <strong>{incident.nextAction}</strong>
              </div>
              <div>
                <span>SLA remaining</span>
                <strong>{incident.slaMinutesRemaining} minutes</strong>
              </div>
            </div>

            <div className="tag-list">
              {incident.tags.map((tag) => (
                <span className="tag-list__item" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
