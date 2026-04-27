import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import ScanSection from "./ScanSection";
import ResultSection from "./ResultSection";
import ProtectionCards from "./ProtectionCards";
import BottomSection from "./BottomSection";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Header />

        {/* 🔥 Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>⚠ Threats Detected</h3>
            <p>128</p>
          </div>
          <div className="stat-card">
            <h3>🔒 Protected Links</h3>
            <p>542</p>
          </div>
          <div className="stat-card">
            <h3>📩 Messages Scanned</h3>
            <p>1,204</p>
          </div>
          <div className="stat-card">
            <h3>🎭 Deepfakes Found</h3>
            <p>37</p>
          </div>
        </div>

        {/* 🧠 Main Grid */}
        <div className="main-grid">
          <div className="left-panel">
            <ScanSection
              inputText={inputText}
              setInputText={setInputText}
              setResult={setResult}
            />
            <ResultSection result={result} />
          </div>

          {/* 📊 Right Panel */}
          <div className="right-panel">
            <div className="insight-card">
              <h3>🧠 AI Threat Insights</h3>
              <p>Most attacks today are phishing-based.</p>
              <p>⚠ 67% increase in scam links detected.</p>
            </div>

            <div className="insight-card">
              <h3>📊 Risk Level</h3>
              <div className="risk-bar">
                <div className="risk-fill"></div>
              </div>
              <p>Medium Risk</p>
            </div>
          </div>
        </div>

        <ProtectionCards />
        <BottomSection />
      </div>
    </div>
  );
};

export default Dashboard;