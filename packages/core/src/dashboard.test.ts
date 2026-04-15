import { describe, expect, it } from "vitest";
import { buildDashboardSummary, DashboardSummarySchema } from "./dashboard";

describe("buildDashboardSummary", () => {
  it("returns a schema-safe dashboard payload", () => {
    const summary = buildDashboardSummary("atlas-prime");

    expect(() => DashboardSummarySchema.parse(summary)).not.toThrow();
    expect(summary.metrics).toHaveLength(4);
    expect(summary.incidents[0]?.severity).toBe("critical");
  });
});
