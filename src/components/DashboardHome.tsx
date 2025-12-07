import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { FaChartPie } from "react-icons/fa";
import { getDashboardHomeAnalytics } from "../lib/api"; // ✅ correct path

type DashboardMetric = {
  metric_key: string;
  metric_label: string;
  value_percent: number;
};

type Bar = { label: string; height: number; className: string };

export default function DashboardHome() {
  const [animate, setAnimate] = useState(false);
  const [metrics, setMetrics] = useState<DashboardMetric[] | null>(null);
  const [loading, setLoading] = useState(false);

  const bars: Bar[] = useMemo(() => {
    const fallback: Bar[] = [
      { label: "Energy Usage", height: 75, className: "bar-primary" },
      { label: "Waste Recycling", height: 55, className: "bar-secondary" },
      { label: "Water Conservation", height: 65, className: "bar-warning" },
      { label: "Air Quality Feedback", height: 40, className: "bar-error" },
    ];

    if (!metrics) return fallback;

    const colorMap: Record<string, string> = {
      energy: "bar-primary",
      waste: "bar-secondary",
      water: "bar-warning",
      air: "bar-error",
    };

    return metrics.map((m) => ({
      label: m.metric_label,
      height: Math.max(0, Math.min(100, Number(m.value_percent) || 0)),
      className: colorMap[m.metric_key] || "bar-primary",
    }));
  }, [metrics]);

  async function refresh() {
    setLoading(true);
    try {
      const data = await getDashboardHomeAnalytics();
      setMetrics(data);
    } catch {
      // If API fails, keep fallback chart visible
      setMetrics(null);
    } finally {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 120);
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="dashboard-grid" id="dashboard">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Citizens Home Feature Analytics</h2>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              type="button"
              onClick={refresh}
              style={{ padding: "6px 10px", cursor: "pointer" }}
              disabled={loading}
              title="Reload from database"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
            <FaChartPie />
          </div>
        </div>

        <div className="chart-container" aria-label="Bar chart">
          {bars.map((b) => {
            const barStyle = { "--barHeight": `${b.height}%` } as CSSProperties;
            return (
              <div
                key={b.label}
                className={`chart-bar ${b.className} ${animate ? "animate" : ""}`}
                style={barStyle}
              >
                <div className="chart-label">{b.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
