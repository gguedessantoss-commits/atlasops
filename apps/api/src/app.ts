import cors from "@fastify/cors";
import Fastify from "fastify";
import { env } from "./env.js";
import { registerDashboardRoutes } from "./routes/dashboard.js";
import { registerHealthRoutes } from "./routes/health.js";
import { registerWorkspaceRoutes } from "./routes/workspace.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(cors, {
    origin: env.CORS_ORIGIN,
  });

  app.register(registerHealthRoutes);
  app.register(registerDashboardRoutes);
  app.register(registerWorkspaceRoutes);

  return app;
}
