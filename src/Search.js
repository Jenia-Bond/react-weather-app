import React from "react";

import "./Search.css";

export default function Search() {
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
    </div>
  );
}
