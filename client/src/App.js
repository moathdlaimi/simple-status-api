import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Click the button to check API status.");
  const [loading, setLoading] = useState(false);

  const getStatus = async () => {
    try {
      setLoading(true);
      setMessage("Checking status...");

      const response = await fetch("http://localhost:3000/status");
      const data = await response.json();

      setMessage(data.status);
    } catch (error) {
      console.error("Error calling API:", error);
      setMessage("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        <div className="card">
          <div className="badge">Express + React</div>

          <h1>Simple Status Dashboard</h1>
          <p className="subtitle">
            A starter app to practice how a React frontend connects to an Express backend.
          </p>

          <div className="button-row">
            <button onClick={getStatus} disabled={loading}>
              {loading ? "Loading..." : "Get Status"}
            </button>
          </div>

          <div className="status-box">
            <span className="status-label">Response</span>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;