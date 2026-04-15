import type { WorkspaceSnapshot } from "@atlasops/core";
import { Badge, Card } from "@atlasops/ui";
import Link from "next/link";
import { DashboardNav } from "./dashboard-nav";

type AppShellProps = {
  snapshot: WorkspaceSnapshot;
  children: React.ReactNode;
};

function getStatusVariant(status: string): "critical" | "warning" | "neutral" {
  if (status.toLowerCase() === "guarded") {
    return "warning";
  }

  if (status.toLowerCase() === "escalated") {
    return "critical";
  }

  return "neutral";
}

export function AppShell({ snapshot, children }: AppShellProps) {
  const metrics = snapshot.dashboard.metrics.slice(0, 3);

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link className="app-brand" href="/">
          AtlasOps
        </Link>

        <Card className="workspace-card">
          <div className="workspace-card__header">
            <span className="landing-preview__eyebrow">Active workspace</span>
            <Badge variant={getStatusVariant(snapshot.commandStatus)}>
              {snapshot.commandStatus}
            </Badge>
          </div>

          <strong className="workspace-card__title">
            {snapshot.tenantName}
          </strong>
          <p>{snapshot.commandNarrative}</p>

          <div className="workspace-card__meta">
            <span>{snapshot.sector}</span>
            <span>{snapshot.coverageWindow}</span>
          </div>
        </Card>

        <DashboardNav />

        <Card className="sidebar-callout">
          <span className="landing-preview__eyebrow">Operating principles</span>
          <ul className="sidebar-callout__list">
            {snapshot.operatingPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </Card>
      </aside>

      <div className="app-main">
        <section className="app-topbar">
          <div>
            <p className="app-topbar__eyebrow">Operations command workspace</p>
            <h1>{snapshot.tenantName}</h1>
            <p className="app-topbar__description">
              Multi-tenant command center for incident coordination, service
              health, and executive visibility.
            </p>
          </div>

          <div className="app-topbar__metrics">
            {metrics.map((metric) => (
              <Card className="app-topbar__metric" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <p>{metric.hint}</p>
              </Card>
            ))}
          </div>
        </section>

        {children}
      </div>
    </div>
  );
}
