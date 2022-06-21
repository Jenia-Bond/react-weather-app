import React from "react";
import "./City.css";

export default function City() {
  let cityData = {
    city: "New York",
    time: "12:00",
    description: "Partly Cloudy",
  };
  return (
    <div className="col-4 City">
      <ul>
        <li className="searchedCity">{cityData.city}</li>
        <li>Updated: {cityData.time}</li>
        <li className="weather-description">{cityData.description}</li>
      </ul>
    </div>
  );
}
