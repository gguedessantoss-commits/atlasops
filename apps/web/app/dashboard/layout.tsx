import { AppShell } from "../../components/app-shell";
import { getWorkspaceSnapshot } from "../../lib/api";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const snapshot = await getWorkspaceSnapshot();

  return (
    <main className="dashboard-page">
      <AppShell snapshot={snapshot}>{children}</AppShell>
    </main>
  );
}
