import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      temp_min: Math.round(response.data.main.temp_min),
      temp_max: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col-6">
              <input type="search" placeholder="Type a city.." />
            </div>

            <div className="col-2">
              <input type="submit" className="submit-city" value="Search" />
            </div>

            <div className="col-4">
              <button type="button" className="btn current-location">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4 City">
            <ul>
              <li className="searchedCity">{weatherData.city}</li>
              <li>
                Updated: <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li className="weather-description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-3 Weather">
            <span className="city-temp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
            <img src={weatherData.icon} alt="Partly Cloudy" width="100px" />
          </div>
          <div className="col-5 WeatherDetails">
            <div className="row">
              <div className="col-4 more-weather">
                <span className="weather-details">{weatherData.temp_max}</span>
                <small>High</small>
              </div>
              <div className="col-4 more-weather">
                <span className="weather-details">
                  <FormattedDate date={weatherData.sunrise} />
                </span>
                <small>Sunrise</small>
              </div>
              <div className="col-4 more-weather">
                <span className="weather-details">{weatherData.wind}</span>
                <small>Wind (km/ph)</small>
              </div>
              <div className="col-4">
                <span className="weather-details">{weatherData.temp_min}</span>
                <small>Low</small>
              </div>
              <div className="col-4">
                <span className="weather-details">
                  <FormattedDate date={weatherData.sunset} />
                </span>
                <small>Sunset</small>
              </div>
              <div className="col-4">
                <span className="weather-details">{weatherData.humidity}%</span>
                <small>Rain</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e318d3f2a9a825ffebe8387cd885ce61";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
