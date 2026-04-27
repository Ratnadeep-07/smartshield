import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="header-container">

      {/* LEFT: Logo + Greeting */}
      <div className="header-left">
        <div className="logo">🛡</div>
        <h3>
          Hello, <span>{userName}</span>
        </h3>
      </div>

      {/* RIGHT: Actions */}
      <div className="header-right">

        {/* Notifications */}
        <div className="icon-btn">
          🔔
          <span className="badge">3</span>
        </div>

        {/* Settings */}
        <div className="icon-btn">⚙️</div>

        {/* Avatar */}
        <div className="avatar">
          {userName.charAt(0).toUpperCase()}
        </div>

        {/* Logout */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Header;