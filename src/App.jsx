import { useState } from "react";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([
    { name: "Johannesburg", weather: "Cloudy ☁️" },
    { name: "Cape Town", weather: "Rain 🌧️" },
    { name: "Durban", weather: "Sunny ☀️" }
  ]);

  const handleSearch = () => {
    if (!search.trim()) return;

    setCities([...cities, { name: search, weather: "Unknown ❓" }]);
    setSearch("");
  };

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>

      <div className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("contact")}>Contact</button>

        {page === "home" && (
          <>
            <input
              type="text"
              placeholder="Search city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </>
        )}
      </div>

      {page === "home" && (
        <div className="city-list">
          {cities.map((city, index) => (
            <div key={index} className="city-card">
              <span>{city.name}</span>
              <span>{city.weather}</span>
              <button>Details</button>
            </div>
          ))}
        </div>
      )}

      {page === "contact" && (
        <div className="city-list">
          <h2>Contact Us</h2>
          <p>Email: weather@dashboard.com</p>
          <p>Phone: +27 123 456 789</p>
        </div>
      )}
    </div>
  );
}

export default App;
