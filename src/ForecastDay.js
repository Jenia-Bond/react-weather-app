import React from "react";

export default function ForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <img src={icon} alt="weather icon" width="50px" />
      <div className="Forecast-temperatures">
        <span className="Forecast-temp-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="Forecast-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
