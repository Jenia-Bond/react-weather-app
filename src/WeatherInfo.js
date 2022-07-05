import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="row WeatherInfo">
      <div className="col-4 City">
        <ul>
          <li className="searchedCity">{props.data.city}</li>
          <li>
            Updated: <FormattedDate date={props.data.date} />{" "}
          </li>
          <li className="weather-description">{props.data.description}</li>
        </ul>
      </div>

      <div className="col-3">
        <TemperatureConversion celsius={props.data.temperature} />
        <img src={props.data.icon} alt={props.data.description} width="100px" />
      </div>

      <div className="col-5 WeatherDetails">
        <div className="row">
          <div className="col-4 more-weather">
            <span className="weather-details">{props.data.temp_max}</span>
            <small>High</small>
          </div>
          <div className="col-4 more-weather">
            <span className="weather-details">
              <FormattedDate date={props.data.sunrise} />
            </span>
            <small>Sunrise</small>
          </div>
          <div className="col-4 more-weather">
            <span className="weather-details">{props.data.wind}</span>
            <small>Wind (km/ph)</small>
          </div>
          <div className="col-4">
            <span className="weather-details">{props.data.temp_min}</span>
            <small>Low</small>
          </div>
          <div className="col-4">
            <span className="weather-details">
              <FormattedDate date={props.data.sunset} />
            </span>
            <small>Sunset</small>
          </div>
          <div className="col-4">
            <span className="weather-details">{props.data.humidity}%</span>
            <small>Rain</small>
          </div>
        </div>
      </div>
    </div>
  );
}
