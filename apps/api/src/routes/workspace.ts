import { buildWorkspaceSnapshot } from "@atlasops/core";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

const WorkspaceQuerySchema = z.object({
  tenantId: z.string().optional(),
});

export async function registerWorkspaceRoutes(app: FastifyInstance) {
  app.get("/v1/workspace/snapshot", async (request) => {
    const query = WorkspaceQuerySchema.parse(request.query);
    return buildWorkspaceSnapshot(query.tenantId ?? "atlas-prime");
  });
}
