"use client";

import { usePathname } from "next/navigation";

const navigationItems = [
  {
    href: "/dashboard",
    label: "Overview",
    description: "Executive pulse and service posture",
  },
  {
    href: "/dashboard/incidents",
    label: "Incidents",
    description: "Operational queue, impact, and SLA focus",
  },
  {
    href: "/dashboard/audit",
    label: "Audit trail",
    description: "Actions, approvals, and escalation history",
  },
  {
    href: "/dashboard/team",
    label: "Command team",
    description: "Roles, ownership, and active response capacity",
  },
] as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="dashboard-nav" aria-label="Dashboard navigation">
      {navigationItems.map((item) => {
        const active = isActiveRoute(pathname, item.href);

        return (
          <a
            aria-current={active ? "page" : undefined}
            className={`dashboard-nav__link${active ? " dashboard-nav__link--active" : ""}`}
            href={item.href}
            key={item.href}
          >
            <strong>{item.label}</strong>
            <span>{item.description}</span>
          </a>
        );
      })}
    </nav>
  );
}
