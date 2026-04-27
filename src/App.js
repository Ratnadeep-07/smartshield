import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Home */}
        <Route path="/" element={<HomePage />} />

        {/* 🔐 Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🧠 Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;