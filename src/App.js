import React from "react";
import "./App.css";

import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="card card-body shadow-sm">
        <div>
          <Search defaultCity="New York" />
        </div>
        <div>
          <Forecast />
        </div>
      </div>
      <div className="footer mt-2">
        <a
          href="https://github.com/Jenia-Bond/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code hosted on GitHub
        </a>{" "}
        by Eugenia Bondarenko
      </div>
    </div>
  );
}
