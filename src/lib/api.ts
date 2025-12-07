export type DashboardMetric = {
  metric_key: string;
  metric_label: string;
  value_percent: number;
};

export async function getDashboardHomeAnalytics() {
  const r = await fetch("/api/dashboard/home-analytics", { cache: "no-store" });
  if (!r.ok) throw new Error("Failed to load dashboard analytics");
  return r.json();
}
