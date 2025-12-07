import { FaBell, FaEnvelope } from "react-icons/fa";

export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="page-title">
        <h1>Urban Management Dashboard</h1>
        <p>Monitor and manage all urban services in one place</p>
      </div>

      <div className="user-actions">
        <button className="icon-btn" type="button" aria-label="Notifications">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <button className="icon-btn" type="button" aria-label="Messages">
          <FaEnvelope />
          <span className="badge">7</span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">AD</div>
          <div>
            <div>Admin User</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
}
