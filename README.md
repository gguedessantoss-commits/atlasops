# AtlasOps

AtlasOps is a presentation-ready TypeScript monorepo for a multi-tenant operations command platform. It is positioned as a B2B SaaS for incident management, SLA coordination, auditability, and executive visibility across distributed operations such as logistics, fulfillment, support, and platform environments.

## Stack

- `Next.js` for the product-facing web experience
- `Fastify` for the API layer
- `pnpm` workspaces + `Turborepo` for the monorepo
- `Zod` for runtime-safe contracts
- `Biome` for formatting and linting
- `Vitest` for focused domain tests

## Workspace layout

- `apps/web`: marketing entrypoint and executive dashboard
- `apps/api`: HTTP API for health checks and dashboard data
- `packages/core`: shared domain models, schemas, and dashboard builders
- `packages/ui`: shared React primitives for cards and badges

## Prerequisites

- `Git`
- `Node.js 24+`
- `pnpm 10+`

## First run

```bash
pnpm install
pnpm dev
```

Open:

- Web: `http://localhost:3000`
- API: `http://localhost:4000/health`

## Demo routes

- `/`: product-facing landing page that explains the AtlasOps positioning
- `/dashboard`: executive overview with incident pressure and service posture
- `/dashboard/incidents`: detailed incident board with business impact and next action
- `/dashboard/audit`: governance-focused activity and escalation trail
- `/dashboard/team`: command team and workstream ownership view

## Environment files

Create these files if you want to override defaults:

- `apps/web/.env.local`
- `apps/api/.env`

Use the provided examples inside each app as a starting point.

## Quality commands

```bash
pnpm typecheck
pnpm test
pnpm lint
```

## Next steps

The current slice is intentionally optimized for presentation:

- polished landing page with a clear SaaS product narrative
- internal app shell with overview, incidents, audit, and team views
- executive dashboard and workspace snapshot fed by typed API routes
- shared contracts across `web`, `api`, and domain packages
- isolated package boundaries that can scale into auth, Prisma, RBAC, audit trails, and background jobs
