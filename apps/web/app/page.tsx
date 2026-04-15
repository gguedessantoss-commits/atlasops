import { Card } from "@atlasops/ui";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    href: "#problem",
    label: "Problem",
  },
  {
    href: "#solution",
    label: "Solution",
  },
  {
    href: "#in-action",
    label: "In action",
  },
  {
    href: "#playbooks",
    label: "Playbooks",
  },
  {
    href: "#capabilities",
    label: "Capabilities",
  },
];

const heroStats = [
  {
    value: "1 command center",
    label: "Centralized operations",
    description:
      "Incidents, service health, ownership, and SLA pressure live in one shared surface.",
  },
  {
    value: "B2B SaaS",
    label: "Multi-tenant by design",
    description:
      "Built for companies with distributed teams, multiple workspaces, and operational governance needs.",
  },
  {
    value: "Live visibility",
    label: "Leadership-ready",
    description:
      "Operations leaders can see what is critical now, who owns the response, and where risk is growing.",
  },
];

const productSignals = [
  "Centralizes incidents, SLA risk, and service health in one workflow",
  "Built for logistics, fulfillment, support operations, and platform teams",
  "Combines operational coordination, auditability, and executive visibility",
];

const painPoints = [
  {
    title: "Context is scattered",
    description:
      "Incidents, alerts, spreadsheets, and Slack threads live in different places, so teams waste time stitching together what is happening.",
  },
  {
    title: "Ownership gets fuzzy",
    description:
      "When priority, severity, and responsibility are unclear, resolution slows down and escalations become reactive instead of coordinated.",
  },
  {
    title: "Leadership flies blind",
    description:
      "Executives and operations managers often lack a live view of SLA risk, operational posture, and the impact of active incidents.",
  },
];

const workflow = [
  {
    title: "Detect and centralize",
    description:
      "AtlasOps consolidates operational incidents, service health signals, and business-critical events into a single command surface.",
  },
  {
    title: "Prioritize by business risk",
    description:
      "Each item is ranked by severity, status, and remaining SLA runway so teams know what must move first.",
  },
  {
    title: "Coordinate response",
    description:
      "Incidents gain clear owners, timeline context, and operational commentary so the response feels structured, not improvised.",
  },
  {
    title: "Audit and report",
    description:
      "Leadership gets a compact operational view while the team retains a searchable trail of important actions and decisions.",
  },
];

const audiences = [
  {
    title: "Operations managers",
    description:
      "Need a live command view of incidents, throughput risk, and response ownership across distributed teams.",
    fit: "Best for logistics, fulfillment, and service operations.",
  },
  {
    title: "Support leaders",
    description:
      "Need escalations organized by severity and SLA so customer-impacting issues do not disappear into ticket noise.",
    fit: "Best for support centers and customer operations.",
  },
  {
    title: "NOC and command center teams",
    description:
      "Need a shared operational board with strong priority cues, system health, and clear coordination during active incidents.",
    fit: "Best for reliability and command workflows.",
  },
  {
    title: "Platform and digital ops",
    description:
      "Need to connect service degradation with business impact and give stakeholders a readable operational narrative.",
    fit: "Best for SaaS and platform-heavy businesses.",
  },
];

const capabilities = [
  {
    title: "Incident command board",
    description:
      "A queue of incidents ranked by severity, operational impact, and time remaining before SLA breach.",
  },
  {
    title: "Executive dashboard",
    description:
      "Leadership-friendly metrics that turn operational noise into a clear summary of pressure, health, and risk.",
  },
  {
    title: "SLA and priority visibility",
    description:
      "Teams can quickly see what is close to breaching, what is contained, and where escalation pressure is rising.",
  },
  {
    title: "Timeline and auditability",
    description:
      "Every important event can be captured as a timeline entry so the product supports governance, not just monitoring.",
  },
  {
    title: "Multi-tenant workspaces",
    description:
      "Different clients, regions, or business units can operate inside their own controlled workspace context.",
  },
  {
    title: "Automation-ready architecture",
    description:
      "The product foundation is ready for role-based access, Prisma, notifications, and background job workflows.",
  },
];

const useCases = [
  "Coordinating fulfillment or logistics disruptions across multiple hubs",
  "Managing high-priority support escalations with clear SLA ownership",
  "Running a command center for platform incidents and degraded services",
  "Giving executives a trustworthy real-time view of operational risk",
];

const demoGallery = [
  {
    eyebrow: "Executive overview",
    title: "The command center surfaces risk in one place.",
    description:
      "Leadership and frontline teams can see open pressure, SLA runway, service posture, and incident context without stitching together multiple tools.",
    image: "/images/landing/atlasops-overview.png",
    href: "/dashboard",
    cta: "Open overview",
  },
  {
    eyebrow: "Alert-driven incident board",
    title: "Critical alerts become managed response workflows.",
    description:
      "High-severity operational alerts can immediately turn into incidents with owner, customer impact, next action, and visible time remaining before the next breach.",
    image: "/images/landing/atlasops-incidents.png",
    href: "/dashboard/incidents",
    cta: "Open incidents",
  },
  {
    eyebrow: "Audit and governance",
    title: "Every escalation leaves a readable operational trail.",
    description:
      "Playbooks, approvals, automated digests, and response changes stay attached to a timeline that leadership and operators can trust.",
    image: "/images/landing/atlasops-audit.png",
    href: "/dashboard/audit",
    cta: "Open audit trail",
  },
  {
    eyebrow: "Command team and workstreams",
    title: "The platform shows who is running the response.",
    description:
      "AtlasOps is not only about monitoring. It also shows squads, owners, active capacity, and workstreams that carry the response forward.",
    image: "/images/landing/atlasops-team.png",
    href: "/dashboard/team",
    cta: "Open team view",
  },
] as const;

const alertExamples = [
  {
    tone: "critical",
    label: "Critical alert",
    title: "Webhook sync lag on partner retries",
    trigger:
      "Trigger when partner retries keep climbing for 8 minutes and order-state acknowledgements fall below the safe threshold.",
    response:
      "Create a critical incident, assign the incident commander, notify leadership, and attach an impact statement for partner operations.",
  },
  {
    tone: "warning",
    label: "Watch alert",
    title: "Regional throughput dipped below baseline",
    trigger:
      "Trigger when a regional hub drops below the expected morning throughput curve or routing latency drifts toward SLA risk.",
    response:
      "Open a watch-listed incident, route it to logistics control, and create a workstream to track recovery against baseline.",
  },
  {
    tone: "neutral",
    label: "Automated digest",
    title: "Executive pulse during active response",
    trigger:
      "Trigger every 30 minutes while a critical incident is open or when a response path changes materially.",
    response:
      "Generate a short digest with incident owners, remaining SLA runway, current workstreams, and any customer-facing impact.",
  },
] as const;

const playbookIdeas = [
  {
    title: "Critical incident routing",
    description:
      "Build rules that convert raw alerts into incidents with severity, ownership, SLA countdown, and required next action.",
  },
  {
    title: "Approval and comms workflows",
    description:
      "Require support or operations approval before customer comms, public status updates, or escalation branches go live.",
  },
  {
    title: "Leadership operating digests",
    description:
      "Publish recurring updates that summarize business impact, response ownership, and workstream status without exposing chat noise.",
  },
  {
    title: "Workspace-specific command surfaces",
    description:
      "Create separate operational environments by client, region, or business unit while keeping auditability and team ownership intact.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <Link className="brand" href="/">
          AtlasOps
        </Link>

        <nav className="site-nav" aria-label="AtlasOps sections">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link className="button button--ghost" href="/dashboard">
          View live demo
        </Link>
      </header>

      <section className="landing-hero">
        <div className="landing-hero__content">
          <span className="landing-pill">
            Operational command for distributed teams
          </span>
          <h1>
            Keep incidents, ownership, and SLA risk in one command surface.
          </h1>
          <p>
            AtlasOps is a multi-tenant SaaS for companies that need to detect,
            prioritize, coordinate, and audit operational incidents across
            logistics, fulfillment, support, and platform environments.
          </p>

          <div className="hero-checklist">
            <span>Incident management</span>
            <span>Service health visibility</span>
            <span>SLA coordination</span>
            <span>Audit trail</span>
          </div>

          <div className="landing-actions">
            <Link className="button button--primary" href="/dashboard">
              Open dashboard
            </Link>
            <a className="button button--ghost" href="#solution">
              Understand the product
            </a>
          </div>
        </div>

        <Card className="landing-preview">
          <span className="landing-preview__eyebrow">Product definition</span>
          <strong>What AtlasOps is</strong>
          <p>
            A B2B platform for command centers and operations leaders who need
            one trustworthy place to manage incidents and monitor business risk.
          </p>
          <ul>
            {productSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="hero-stat-grid">
        {heroStats.map((stat) => (
          <Card className="hero-stat" key={stat.label}>
            <span className="hero-stat__label">{stat.label}</span>
            <strong className="hero-stat__value">{stat.value}</strong>
            <p>{stat.description}</p>
          </Card>
        ))}
      </section>

      <section className="section-shell" id="problem">
        <div className="section-heading">
          <span className="section-title__eyebrow">The problem</span>
          <h2>
            Operations break when critical context is spread across too many
            tools.
          </h2>
          <p>
            AtlasOps exists for teams that cannot afford fragmented response
            workflows. The product creates one operational truth for what is
            happening, who owns it, and how much business risk is on the table.
          </p>
        </div>

        <div className="problem-grid">
          {painPoints.map((item, index) => (
            <Card className="problem-card" key={item.title}>
              <span className="problem-card__index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="solution">
        <div className="section-heading">
          <span className="section-title__eyebrow">The solution</span>
          <h2>
            AtlasOps gives teams a repeatable operating model for incident
            response.
          </h2>
          <p>
            Instead of treating operations as scattered status updates, AtlasOps
            turns response into a structured flow that is visible to both the
            frontline team and leadership.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <Card className="workflow-step" key={step.title}>
              <span className="workflow-step__number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="in-action">
        <div className="section-heading">
          <span className="section-title__eyebrow">In action</span>
          <h2>
            Real product views make the workflow easy to understand at a glance.
          </h2>
          <p>
            These screens show how AtlasOps can present executive posture,
            alert-driven incidents, audit history, and the command team behind
            the response.
          </p>
        </div>

        <div className="demo-gallery">
          {demoGallery.map((item) => (
            <Card className="demo-gallery__card" key={item.title}>
              <div className="demo-gallery__image">
                <Image
                  alt={item.title}
                  className="demo-gallery__image-asset"
                  height={1200}
                  src={item.image}
                  width={1600}
                />
              </div>

              <div className="demo-gallery__content">
                <span className="landing-preview__eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="demo-gallery__link" href={item.href}>
                  {item.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="audience">
        <div className="section-heading">
          <span className="section-title__eyebrow">Audience</span>
          <h2>
            Built for teams that run real-world operations under pressure.
          </h2>
          <p>
            AtlasOps is not a generic dashboard. It is positioned for
            operational environments where SLA, service stability, and response
            ownership directly affect the business.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <Card className="audience-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
              <span>{audience.fit}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell" id="playbooks">
        <div className="section-heading">
          <span className="section-title__eyebrow">Playbooks and alerts</span>
          <h2>
            AtlasOps can orchestrate more than dashboards. It can drive the
            operating model itself.
          </h2>
          <p>
            The platform is designed to support alert ingestion, structured
            playbooks, automated digests, and workspace-specific rules that feel
            credible in real operations.
          </p>
        </div>

        <div className="playbook-layout">
          <Card className="alert-board">
            <span className="landing-preview__eyebrow">Example alerts</span>
            <h3>What the system can detect and trigger</h3>

            <div className="alert-stack">
              {alertExamples.map((alert) => (
                <article
                  className={`alert-card alert-card--${alert.tone}`}
                  key={alert.title}
                >
                  <span className="alert-card__label">{alert.label}</span>
                  <h4>{alert.title}</h4>
                  <p>
                    <strong>Trigger:</strong> {alert.trigger}
                  </p>
                  <p>
                    <strong>Response:</strong> {alert.response}
                  </p>
                </article>
              ))}
            </div>
          </Card>

          <div className="playbook-grid">
            {playbookIdeas.map((idea) => (
              <Card className="playbook-card" key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="capabilities">
        <div className="section-heading">
          <span className="section-title__eyebrow">Capabilities</span>
          <h2>
            Everything revolves around operational clarity and controlled
            execution.
          </h2>
          <p>
            The product surface is designed to help teams see, decide, assign,
            and communicate quickly without losing auditability or context.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <Card className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell section-shell--split" id="use-cases">
        <div className="section-heading">
          <span className="section-title__eyebrow">Where it fits</span>
          <h2>
            AtlasOps works best where business operations are distributed and
            time-sensitive.
          </h2>
          <p>
            The product is especially credible in environments where command
            discipline matters more than ticket volume alone.
          </p>
        </div>

        <div className="use-case-layout">
          <Card className="use-case-card">
            <span className="landing-preview__eyebrow">Common scenarios</span>
            <ul className="use-case-list">
              {useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </Card>

          <Card className="cta-section">
            <span className="landing-preview__eyebrow">Live demo</span>
            <h2>
              Open the dashboard and see the product from inside an active
              workspace.
            </h2>
            <p>
              The dashboard view shows how AtlasOps presents incidents, service
              health, operating signals, and executive context in one place.
            </p>

            <div className="landing-actions">
              <Link className="button button--primary" href="/dashboard">
                Open dashboard
              </Link>
              <Link
                className="button button--ghost"
                href="/api/v1/workspace/snapshot"
              >
                Inspect live workspace API
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
