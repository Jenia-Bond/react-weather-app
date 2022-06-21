import "./App.css";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";

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
      </div>
    </div>
  );
}
