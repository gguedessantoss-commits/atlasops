import type { TeamMember, Workstream } from "@atlasops/core";
import { Badge, Card } from "@atlasops/ui";
import { ViewHeader } from "../../../components/view-header";
import { getWorkspaceSnapshot } from "../../../lib/api";

function getTeamVariant(
  status: TeamMember["status"],
): "critical" | "warning" | "neutral" {
  if (status === "on-call") {
    return "warning";
  }

  if (status === "active") {
    return "neutral";
  }

  return "critical";
}

function getWorkstreamVariant(
  status: Workstream["status"],
): "critical" | "warning" | "neutral" {
  if (status === "at-risk") {
    return "critical";
  }

  if (status === "watch") {
    return "warning";
  }

  return "neutral";
}

export default async function TeamPage() {
  const snapshot = await getWorkspaceSnapshot();

  return (
    <section className="dashboard-view">
      <ViewHeader
        eyebrow="Command team"
        title="The people, ownership model, and workstreams behind the response."
        description="AtlasOps makes the operating team visible, not just the incident queue. That helps the demo feel like a real product with roles, accountability, and managed execution."
      />

      <section className="team-grid">
        {snapshot.team.map((member) => (
          <Card className="team-card" key={member.id}>
            <div className="team-card__header">
              <div>
                <span className="record-card__eyebrow">{member.squad}</span>
                <h3>{member.name}</h3>
              </div>
              <Badge variant={getTeamVariant(member.status)}>
                {member.status}
              </Badge>
            </div>

            <div className="team-card__meta">
              <span>{member.role}</span>
              <span>
                {member.location} • {member.timezone}
              </span>
            </div>

            <p>{member.focus}</p>

            <div className="team-card__footer">
              <div>
                <span>Active incidents</span>
                <strong>{member.activeIncidents}</strong>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="workstream-section">
        <ViewHeader
          eyebrow="Workstreams"
          title="Program-level execution that sits alongside the incident board."
          description="This is where AtlasOps starts to look like a serious operating platform instead of only a monitoring dashboard."
        />

        <div className="workstream-grid">
          {snapshot.workstreams.map((workstream) => (
            <Card className="workstream-card" key={workstream.id}>
              <div className="workstream-card__header">
                <h3>{workstream.name}</h3>
                <Badge variant={getWorkstreamVariant(workstream.status)}>
                  {workstream.status}
                </Badge>
              </div>
              <p>{workstream.summary}</p>
              <div className="workstream-card__meta">
                <span>{workstream.owner}</span>
                <strong>{workstream.milestone}</strong>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
