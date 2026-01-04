import { useState } from "react";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([
    { name: "Johannesburg", weather: "Cloudy ☁️" },
    { name: "Cape Town", weather: "Rain 🌧️" },
    { name: "Durban", weather: "Sunny ☀️" }
  ]);

  const handleSearch = () => {
    if (!search.trim()) return;

    setCities([
      ...cities,
      { name: search, weather: "Unknown ❓" }
    ]);

    setSearch("");
  };

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>

      <div className="nav">
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="city-list">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <span>{city.name}</span>
            <span>{city.weather}</span>
            <button>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
