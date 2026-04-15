import type { AuditEvent } from "@atlasops/core";
import { Badge, Card } from "@atlasops/ui";
import { ViewHeader } from "../../../components/view-header";
import { getWorkspaceSnapshot } from "../../../lib/api";

function getAuditVariant(
  severity: AuditEvent["severity"],
): "critical" | "warning" | "neutral" {
  if (severity === "critical") {
    return "critical";
  }

  if (severity === "warning") {
    return "warning";
  }

  return "neutral";
}

export default async function AuditPage() {
  const snapshot = await getWorkspaceSnapshot();

  return (
    <section className="dashboard-view">
      <ViewHeader
        eyebrow="Audit and governance"
        title="A readable trail of operational decisions, escalations, and approvals."
        description="AtlasOps captures the human and system actions that shape incident response, making the operating model easier to trust and easier to explain."
      />

      <div className="split-view">
        <Card className="audit-summary-card">
          <span className="landing-preview__eyebrow">Governance posture</span>
          <h3>Why this matters in a real operation</h3>
          <ul className="sidebar-callout__list">
            <li>
              Leadership can see the exact moment a response path changed.
            </li>
            <li>
              Support and operations leaders share the same event narrative.
            </li>
            <li>Important decisions stay attached to the incident timeline.</li>
          </ul>
        </Card>

        <div className="audit-list">
          {snapshot.auditTrail.map((event) => (
            <Card className="audit-card" key={event.id}>
              <div className="audit-card__header">
                <div>
                  <span className="record-card__eyebrow">{event.at}</span>
                  <h3>{event.action}</h3>
                </div>
                <Badge variant={getAuditVariant(event.severity)}>
                  {event.severity}
                </Badge>
              </div>

              <div className="audit-card__meta">
                <span>{event.actor}</span>
                <span>{event.channel}</span>
              </div>

              <div className="audit-card__details">
                <div>
                  <span>Target</span>
                  <strong>{event.target}</strong>
                </div>
                <div>
                  <span>Outcome</span>
                  <strong>{event.result}</strong>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
