import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  let details = {
    hightemp: 25,
    lowtemp: 18,
    sunrise: "5:00",
    sunset: "20:00",
    wind: 5,
    rain: "50%",
  };
  return (
    <div className="col-5 WeatherDetails">
      <div className="row">
        <div className="col-4 more-weather">
          <span className="weather-details">{details.hightemp}</span>
          <small>High</small>
        </div>
        <div className="col-4 more-weather">
          <span className="weather-details">{details.sunrise}</span>
          <small>Sunrise</small>
        </div>
        <div className="col-4 more-weather">
          <span className="weather-details">{details.wind}</span>
          <small>Wind (k/ph)</small>
        </div>
        <div className="col-4">
          <span className="weather-details">{details.lowtemp}</span>
          <small>Low</small>
        </div>
        <div className="col-4">
          <span className="weather-details">{details.sunset}</span>
          <small>Sunset</small>
        </div>
        <div className="col-4">
          <span className="weather-details">{details.rain}</span>
          <small>Rain</small>
        </div>
      </div>
    </div>
  );
}
