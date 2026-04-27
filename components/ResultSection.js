import { FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

function ResultSection({ result }) {
  return (
    <div className="card glow">
      <h3>Scan Result</h3>

      {!result ? (
        <div className="result-box">
          <p>No scan yet</p>
        </div>
      ) : (
        <div className={`result-box ${result.status}`}>
          {result.status === "safe" ? (
            <FaShieldAlt size={40} />
          ) : (
            <FaExclamationTriangle size={40} />
          )}

          <p>{result.message}</p>
        </div>
      )}

      <ul className="result-list">
        <li>✔ AI analysis</li>
        <li>✔ Threat detection</li>
        <li>✔ Smart suggestions</li>
      </ul>
    </div>
  );
}

export default ResultSection;