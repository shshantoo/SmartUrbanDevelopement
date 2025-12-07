import React from "react";

interface SidebarProps {
  setPage: (page: string) => void;
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setPage, activePage }) => {
  const menuItems = [
    { name: "Dashboard", page: "dashboard", icon: "fa-home" },
    { name: "Smart City Traffic", page: "traffic", icon: "fa-traffic-light" },
    { name: "Smart Parking", page: "parking", icon: "fa-parking" },
    { name: "Waste Management", page: "waste", icon: "fa-recycle" },
    { name: "Energy Monitoring", page: "energy", icon: "fa-bolt" },
    { name: "Air Quality", page: "air", icon: "fa-wind" },
    { name: "Emergency Response", page: "emergency", icon: "fa-ambulance" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo"><i className="fas fa-city"></i></div>
        <div className="logo-text">Smart Urban</div>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.page}
            className={`menu-item ${activePage === item.page ? "active" : ""}`}
            onClick={() => setPage(item.page)}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
