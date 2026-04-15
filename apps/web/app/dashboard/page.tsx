import { DashboardShell } from "../../components/dashboard-shell";
import { getWorkspaceSnapshot } from "../../lib/api";

export default async function DashboardPage() {
  const snapshot = await getWorkspaceSnapshot();
  return (
    <DashboardShell
      operatingPrinciples={snapshot.operatingPrinciples}
      summary={snapshot.dashboard}
      workstreams={snapshot.workstreams}
    />
  );
}
