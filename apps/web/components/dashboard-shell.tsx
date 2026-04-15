import type {
  DashboardIncident,
  DashboardServiceHealth,
  DashboardSummary,
  Workstream,
} from "@atlasops/core";
import { Badge, Card } from "@atlasops/ui";
import { MetricCard } from "./metric-card";
import { SectionTitle } from "./section-title";
import { ViewHeader } from "./view-header";

type DashboardShellProps = {
  operatingPrinciples: string[];
  summary: DashboardSummary;
  workstreams: Workstream[];
};

function formatLatencyBar(service: DashboardServiceHealth) {
  const ratio = Math.max(
    8,
    Math.min(100, Math.round(100 - service.errorRate * 8)),
  );
  return `${ratio}%`;
}

function formatSeverityVariant(
  severity: DashboardIncident["severity"],
): "critical" | "warning" | "neutral" {
  if (severity === "critical") {
    return "critical";
  }

  if (severity === "high") {
    return "warning";
  }

  return "neutral";
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

export function DashboardShell({
  operatingPrinciples,
  summary,
  workstreams,
}: DashboardShellProps) {
  return (
    <section className="dashboard-view">
      <ViewHeader
        eyebrow="Overview"
        title="Live operational posture across incidents, services, and leadership signals."
        description="The overview condenses what the command team needs to act on now while still giving stakeholders enough context to understand the business risk."
      />

      <section className="dashboard-hero">
        <div>
          <p className="dashboard-hero__eyebrow">Live executive view</p>
          <h1>{summary.tenantName}</h1>
          <p className="dashboard-hero__lede">
            Operational posture, service health, and incident pressure in one
            command surface.
          </p>
        </div>

        <Card className="hero-panel">
          <span className="hero-panel__label">Snapshot</span>
          <strong>{summary.periodLabel}</strong>
          <p>
            Generated at <span>{summary.generatedAtLabel}</span> with the same
            contract consumed by the API.
          </p>
        </Card>
      </section>

      <section className="metric-grid">
        {summary.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="dashboard-main-grid">
        <Card className="dashboard-panel dashboard-panel--incidents">
          <SectionTitle
            eyebrow="Priority board"
            title="Incident pressure"
            description="Critical work is ranked by severity and remaining SLA runway."
          />

          <div className="incident-list">
            {summary.incidents.map((incident) => (
              <article className="incident-row" key={incident.id}>
                <div className="incident-row__heading">
                  <div>
                    <p className="incident-row__service">{incident.service}</p>
                    <h3>{incident.title}</h3>
                  </div>
                  <Badge variant={formatSeverityVariant(incident.severity)}>
                    {incident.severity}
                  </Badge>
                </div>

                <p className="incident-row__impact">{incident.impact}</p>

                <div className="incident-row__meta">
                  <span>{incident.status}</span>
                  <span>{incident.owner}</span>
                  <span>{incident.slaMinutesRemaining}m SLA left</span>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <Card className="dashboard-panel dashboard-panel--services">
          <SectionTitle
            eyebrow="Service mesh"
            title="Reliability contour"
            description="Shared typed data lets the UI and API speak the same operational language."
          />

          <div className="service-list">
            {summary.serviceHealth.map((service) => (
              <div className="service-row" key={service.name}>
                <div className="service-row__header">
                  <strong>{service.name}</strong>
                  <span>{service.uptime}% uptime</span>
                </div>

                <div className="service-row__track">
                  <div
                    className="service-row__fill"
                    style={{ width: formatLatencyBar(service) }}
                  />
                </div>

                <div className="service-row__meta">
                  <span>{service.latencyMs}ms p95</span>
                  <span>{service.errorRate}% error</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="dashboard-lower-grid">
        <Card className="dashboard-panel">
          <SectionTitle
            eyebrow="Program status"
            title="Workstream watch"
            description="Operational response stays aligned because key initiatives are tracked beside incident pressure."
          />

          <div className="workstream-list">
            {workstreams.map((workstream) => (
              <div className="workstream-list__item" key={workstream.id}>
                <div className="workstream-list__header">
                  <strong>{workstream.name}</strong>
                  <Badge variant={getWorkstreamVariant(workstream.status)}>
                    {workstream.status}
                  </Badge>
                </div>
                <p>{workstream.summary}</p>
                <div className="workstream-list__meta">
                  <span>{workstream.owner}</span>
                  <span>{workstream.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="dashboard-panel">
          <SectionTitle
            eyebrow="Timeline"
            title="Recent operating events"
            description="A compact activity feed built from the same domain package as the summary metrics."
          />

          <div className="activity-list">
            {summary.activity.map((event) => (
              <div className="activity-item" key={event.id}>
                <span className="activity-item__time">{event.at}</span>
                <div>
                  <strong>{event.title}</strong>
                  <p>{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="dashboard-panel dashboard-panel--principles">
        <SectionTitle
          eyebrow="Operating model"
          title="Principles behind the command workflow"
          description="These are the product-level rules that make AtlasOps feel like a disciplined operating platform."
        />

        <ul className="highlight-list">
          {operatingPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
