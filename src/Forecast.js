import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row mt-3">
      <div className="col weekly-card">
        <div className="temp mt-2">23°C</div>
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#224D5A"
            size={64}
            animate={true}
          />
        </div>
        <p className="weekday">Sun</p>
      </div>

      <div className="col weekly-card">
        <div className="temp mt-2">23°C</div>
        <div>
          <ReactAnimatedWeather
            icon="WIND"
            color="#224D5A"
            size={64}
            animate={true}
          />
        </div>
        <p>Mon</p>
      </div>

      <div className="col weekly-card">
        <div className="temp mt-2">23°C</div>
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_NIGHT"
            color="#224D5A"
            size={64}
            animate={true}
          />
        </div>
        <p>Tue</p>
      </div>

      <div className="col weekly-card">
        <div className="temp mt-2">23°C</div>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#224D5A"
            size={64}
            animate={true}
          />
        </div>
        <p>Wed</p>
      </div>

      <div className="col weekly-card">
        <div className="temp mt-2">23°C</div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#224D5A"
            size={64}
            animate={true}
          />
        </div>
        <p>Thur</p>
      </div>
    </div>
  );
}
