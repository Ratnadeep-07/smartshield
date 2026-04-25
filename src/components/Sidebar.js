function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">🛡 SmartShield</h2>

      <ul>
        <li className="active">🏠 Dashboard</li>
        <li>🔍 Scan</li>
        <li>🕘 History</li>
        <li>📊 Scam Trends</li>
        <li>📘 Resources</li>
        <li>⚙ Settings</li>
      </ul>

      <div className="sidebar-box">
        <p>Your safety is our priority.</p>
      </div>
    </div>
  );
}

export default Sidebar;