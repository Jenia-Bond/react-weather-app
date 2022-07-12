import React from "react";
import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="card card-body shadow-sm">
        <div>
          <Search defaultCity="New York" />
        </div>
      </div>
      <div className="footer mt-2">
        This project was coded by Eugenia Bondarenko and is{" "}
        <a
          href="https://github.com/Jenia-Bond/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://app.netlify.com/teams/jenia-bond/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
