/* These lines of code are importing various components and functions from different files in a
TypeScript React project. Here's a breakdown of each import statement: */
import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import type { MenuItemConfig } from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DashboardHome from "../components/DashboardHome";
import ServiceTable from "../components/ServiceTable";

export type PageKey =
  | "dashboard"
  | "analytics"
  | "traffic"
  | "parking"
  | "waste"
  | "energy"
  | "air"
  | "emergency";

export default function Dashboard() {
  const menu = useMemo<MenuItemConfig[]>(
    () => [
      {
        sectionTitle: "Main",
        items: [
          { key: "dashboard", label: "Dashboard", icon: "home" },
          { key: "analytics", label: "Analytics", icon: "chart" },
        ],
      },
      {
        sectionTitle: "Urban Services",
        items: [
          { key: "traffic", label: "Smart City Traffic Management Team", icon: "traffic" },
          { key: "parking", label: "Smart Parking System Team", icon: "parking" },
          { key: "waste", label: "Waste Management & Recycling Tracking Team", icon: "recycle" },
          { key: "energy", label: "Smart Energy Monitoring System Team", icon: "bolt" },
          { key: "air", label: "Air Quality & Pollution Monitoring Team", icon: "wind" },
          { key: "emergency", label: "Emergency Response & Public Safety System Team", icon: "ambulance" },
        ],
      },
      {
        sectionTitle: "System",
        items: [
          { key: "admin", label: "Admin", icon: "shield", disabled: true },
          { key: "it", label: "IT Experts", icon: "headset", disabled: true },
          { key: "settings", label: "Settings", icon: "cog", disabled: true },
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState<PageKey>("dashboard");

  const activeLabel =
    menu.flatMap((s) => s.items).find((i) => i.key === activeKey)?.label ?? "Dashboard";

  return (
    <div className="app-root">
      <Sidebar menu={menu} activeKey={activeKey} onSelect={(k) => setActiveKey(k as PageKey)} />

      <main className="main-content">
        <TopBar />

        <section id="content-area">
          {activeKey === "dashboard" ? (
            <DashboardHome />
          ) : (
            <ServiceTable title={activeLabel} pageKey={activeKey} />
          )}
        </section>

        <footer className="footer">
          <p>Smart Urban Management System © 2025 | All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}
