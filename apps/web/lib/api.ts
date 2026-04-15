import {
  buildWorkspaceSnapshot,
  type DashboardSummary,
  DashboardSummarySchema,
  type WorkspaceSnapshot,
  WorkspaceSnapshotSchema,
} from "@atlasops/core";
import { cache } from "react";

export const getWorkspaceSnapshot = cache(
  async (): Promise<WorkspaceSnapshot> => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) {
      return buildWorkspaceSnapshot("atlas-prime");
    }

    try {
      const response = await fetch(`${apiBaseUrl}/v1/workspace/snapshot`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Workspace request failed with ${response.status}`);
      }

      const payload = await response.json();
      return WorkspaceSnapshotSchema.parse(payload);
    } catch {
      return buildWorkspaceSnapshot("atlas-prime");
    }
  },
);

export const getDashboardSummary = cache(
  async (): Promise<DashboardSummary> => {
    const snapshot = await getWorkspaceSnapshot();
    return DashboardSummarySchema.parse(snapshot.dashboard);
  },
);
