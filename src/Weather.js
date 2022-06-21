import React from "react";
import "./Weather.css";

export default function Weather() {
  let details = {
    temperature: 25,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="col-3 Weather">
      <span className="city-temp">{details.temperature}</span>
      <span className="units">
        <a href="/">°C</a> |<a href="/">°F</a>
      </span>
      <img src={details.imgUrl} alt="Partly Cloudy" width="100px" />
    </div>
  );
}
