import { buildDashboardSummary } from "@atlasops/core";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

const DashboardQuerySchema = z.object({
  tenantId: z.string().optional(),
});

export async function registerDashboardRoutes(app: FastifyInstance) {
  app.get("/v1/dashboard/summary", async (request) => {
    const query = DashboardQuerySchema.parse(request.query);
    return buildDashboardSummary(query.tenantId ?? "atlas-prime");
  });
}
