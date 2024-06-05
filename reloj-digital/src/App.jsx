/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para actualizar la hora cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', { hour12: false });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="clock-container">
        <h2 className="clock-time">{formattedTime}</h2>
        <p className="clock-footer">Hora local</p>
        <button className="toggle-button" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
