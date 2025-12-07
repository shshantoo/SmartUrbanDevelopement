import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="page-title">
          <h1>Urban Management Dashboard</h1>
          <p>Monitor and manage all urban services in one place</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Citizens Home Feature Analytics</h2>
            <i className="fas fa-chart-pie"></i>
          </div>
          <div className="chart-container">
            <div className="chart-bar" style={{ height: "75%", background: "var(--primary)" }}>
              <div className="chart-label">Energy Usage</div>
            </div>
            <div className="chart-bar" style={{ height: "55%", background: "var(--secondary)" }}>
              <div className="chart-label">Waste Recycling</div>
            </div>
            <div className="chart-bar" style={{ height: "65%", background: "var(--warning)" }}>
              <div className="chart-label">Water Conservation</div>
            </div>
            <div className="chart-bar" style={{ height: "40%", background: "var(--error)" }}>
              <div className="chart-label">Air Quality Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
