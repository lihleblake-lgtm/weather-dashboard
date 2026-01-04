import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { saCities } from "./data/saCities";
import { fetchWeather } from "./services/weatherApi";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    saCities.forEach(loadCityWeather);
  }, []);

  const loadCityWeather = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    if (search) {
      loadCityWeather(search);
      setSearch("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFE5D0] text-gray-800">
      <Header />

      <main className="p-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          onSearch={handleSearch}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weatherData.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
