import { buildWorkspaceSnapshot } from "@atlasops/core";

export async function GET() {
  return Response.json(buildWorkspaceSnapshot("atlas-prime"));
}
