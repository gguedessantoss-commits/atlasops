import { describe, expect, it } from "vitest";
import { buildWorkspaceSnapshot, WorkspaceSnapshotSchema } from "./workspace";

describe("buildWorkspaceSnapshot", () => {
  it("returns a schema-safe workspace payload", () => {
    const snapshot = buildWorkspaceSnapshot("atlas-prime");

    expect(() => WorkspaceSnapshotSchema.parse(snapshot)).not.toThrow();
    expect(snapshot.incidents.length).toBeGreaterThan(0);
    expect(snapshot.team.length).toBeGreaterThan(0);
    expect(snapshot.auditTrail.length).toBeGreaterThan(0);
  });
});
