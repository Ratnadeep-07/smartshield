import { FaSearch } from "react-icons/fa";

function ScanSection({ inputText, setInputText, setResult }) {

  const handleScan = () => {
    if (!inputText) {
      setResult({ status: "error", message: "Please enter something" });
      return;
    }

    // Simple detection logic (you can upgrade later)
    if (
      inputText.includes("http") ||
      inputText.toLowerCase().includes("otp") ||
      inputText.toLowerCase().includes("urgent")
    ) {
      setResult({
        status: "danger",
        message: "⚠️ Suspicious content detected!",
      });
    } else {
      setResult({
        status: "safe",
        message: "✅ This looks safe",
      });
    }
  };

  return (
    <div className="card glow">
      <h3>Scan Anything</h3>

      <textarea
        placeholder="Paste message or link..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="scan-actions">
        <button className="primary" onClick={handleScan}>
          <FaSearch /> Scan Now
        </button>
      </div>
    </div>
  );
}

export default ScanSection;