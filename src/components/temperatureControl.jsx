import React, { useState } from "react";
import "./temperatureStyles.css";

function TemperatureApp() {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("hot");

  function handleIncrement() {
    const newTemperature = temperatureValue + 1;
    if (newTemperature <= 20) {
      setTemperatureValue(newTemperature);
    }
    UpdateColor(newTemperature);
  }
  function handleDecrement() {
    const newTemperature = temperatureValue - 1;
    if (newTemperature >= 0) {
      setTemperatureValue(newTemperature);
    }
    UpdateColor(newTemperature);
  }

  function UpdateColor(temp) {
    if (temp > 15) setTemperatureColor("hot");
    else if (temp < 15) setTemperatureColor("cold");
    else setTemperatureColor("neutral");
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button
          className="button-temp"
          onClick={() => {
            handleIncrement();
          }}
        >
          +
        </button>
        <button
          className="button-temp"
          onClick={() => {
            handleDecrement();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default TemperatureApp;
