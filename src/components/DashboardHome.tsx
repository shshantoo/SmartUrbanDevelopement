    import { useEffect, useState } from "react";
    import { FaChartPie } from "react-icons/fa";

    type Bar = { label: string; height: number; className: string };

    export default function DashboardHome() {
    const bars: Bar[] = [
    { label: "Energy Usage", height: 75, className: "bar-primary" },
    { label: "Waste Recycling", height: 55, className: "bar-secondary" },
    { label: "Water Conservation", height: 65, className: "bar-warning" },
    { label: "Air Quality Feedback", height: 40, className: "bar-error" },
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
    // trigger animation on mount
    const t = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(t);
    }, []);

    return (
    <div className="dashboard-grid" id="dashboard">
        <div className="card">
        <div className="card-header">
            <h2 className="card-title">Citizens Home Feature Analytics</h2>
            <FaChartPie />
        </div>

        <div className="chart-container" aria-label="Bar chart">
            {bars.map((b) => (
            <div
                key={b.label}
                className={`chart-bar ${b.className} ${animate ? "animate" : ""}`}
                style={{ "--barHeight": `${b.height}%` } as React.CSSProperties}
            >
                <div className="chart-label">{b.label}</div>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
    }
