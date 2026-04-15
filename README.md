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
- `/api/v1/dashboard/summary`: Next.js route handler for dashboard data
- `/api/v1/workspace/snapshot`: Next.js route handler for the full workspace snapshot

## Cheapest deployment path

For this demo, the simplest zero-recurring-cost deployment path is to ship only `apps/web` on Vercel's Hobby plan and let the embedded route handlers serve the demo data.

Why this is the best fit:

- Vercel Hobby is listed as `Free forever`
- Vercel supports monorepos by selecting `apps/web` as the project root directory
- The AtlasOps demo data now ships from Next.js route handlers, so you do not need to keep the separate Fastify API online just to present the product

That means you can publish the product as a single Vercel project connected to GitHub and get automatic deploys on every push.

## Vercel deployment

Use this path if you want AtlasOps online without keeping VS Code open:

1. Import `gguedessantoss-commits/atlasops` into Vercel
2. Keep the package manager as `pnpm`
3. Set the Root Directory to `apps/web`
4. Leave `NEXT_PUBLIC_API_BASE_URL` empty so the demo uses the built-in Next.js route handlers
5. Deploy

What is already prepared in the repo:

- the root `postinstall` script builds `@atlasops/core` and `@atlasops/ui` automatically
- the `@atlasops/web` `prebuild` script rebuilds shared packages before `next build`
- the web app falls back to local demo data when `NEXT_PUBLIC_API_BASE_URL` is not defined

With that setup, Vercel only needs the `web` app to publish the presentation-ready version of AtlasOps.

## Environment files

Create these files if you want to override defaults:

- `apps/web/.env.local`
- `apps/api/.env`

Use the provided examples inside each app as a starting point. For the cheapest Vercel deployment, `apps/web/.env.local` is optional and can be omitted entirely.

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
