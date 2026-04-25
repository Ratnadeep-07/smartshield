import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ScanSection from "./components/ScanSection";
import ResultSection from "./components/ResultSection";
import ProtectionCards from "./components/ProtectionCards";
import BottomSection from "./components/BottomSection";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="top-grid">
          <ScanSection 
            inputText={inputText}
            setInputText={setInputText}
            setResult={setResult}
          />

          <ResultSection result={result} />
        </div>

        <ProtectionCards />
        <BottomSection />
      </div>
    </div>
  );
}

export default App;