import "./index.css";

function App() {
  const cities = [
    { name: "Johannesburg", weather: "Cloudy ☁️" },
    { name: "Cape Town", weather: "Rain 🌧️" },
    { name: "Durban", weather: "Sunny ☀️" }
  ];

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>

      <div className="nav">
        <button>Home</button>
        <button>Contact</button>
        <button>Search</button>
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
