import { buildDashboardSummary } from "@atlasops/core";

export async function GET() {
  return Response.json(buildDashboardSummary("atlas-prime"));
}
