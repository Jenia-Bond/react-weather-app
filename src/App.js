import React from "react";
import "./App.css";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="card card-body shadow-sm">
        <div>
          <Search />
        </div>
        <div className="row">
          <City />
          <Weather />
          <WeatherDetails />
        </div>
        <div>
          <Forecast />
        </div>
      </div>
      <div className="footer mt-2">
        <a href="https://github.com/Jenia-Bond/react-weather-app">
          Open-source code
        </a>{" "}
        by Eugenia Bondarenko
      </div>
    </div>
  );
}
