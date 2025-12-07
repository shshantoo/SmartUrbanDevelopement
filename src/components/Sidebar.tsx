import {
  FaAmbulance,
  FaBolt,
  FaChartBar,
  FaCity,
  FaCog,
  FaHeadset,
  FaHome,
  FaParking,
  FaRecycle,
  FaShieldAlt,
  FaTrafficLight,
  FaWind,
} from "react-icons/fa";

export type SidebarIconKey =
  | "home"
  | "chart"
  | "traffic"
  | "parking"
  | "recycle"
  | "bolt"
  | "wind"
  | "ambulance"
  | "shield"
  | "headset"
  | "cog";

export type MenuItem = {
  key: string;
  label: string;
  icon: SidebarIconKey;
  disabled?: boolean;
};

export type MenuItemConfig = {
  sectionTitle: string;
  items: MenuItem[];
};

function Icon({ name }: { name: SidebarIconKey }) {
  switch (name) {
    case "home":
      return <FaHome />;
    case "chart":
      return <FaChartBar />;
    case "traffic":
      return <FaTrafficLight />;
    case "parking":
      return <FaParking />;
    case "recycle":
      return <FaRecycle />;
    case "bolt":
      return <FaBolt />;
    case "wind":
      return <FaWind />;
    case "ambulance":
      return <FaAmbulance />;
    case "shield":
      return <FaShieldAlt />;
    case "headset":
      return <FaHeadset />;
    case "cog":
      return <FaCog />;
    default:
      return <FaHome />;
  }
}

export default function Sidebar({
  menu,
  activeKey,
  onSelect,
}: {
  menu: MenuItemConfig[];
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <FaCity />
        </div>
        <div className="logo-text">Smart Urban</div>
      </div>

      <nav className="sidebar-menu">
        {menu.map((section) => (
          <div className="menu-section" key={section.sectionTitle}>
            <div className="section-title">{section.sectionTitle}</div>

            {section.items.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <button
                  key={item.key}
                  className={`menu-item ${isActive ? "active" : ""}`}
                  onClick={() => !item.disabled && onSelect(item.key)}
                  disabled={item.disabled}
                  type="button"
                  title={item.label}
                >
                  <span className="menu-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span className="menu-text">{item.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
