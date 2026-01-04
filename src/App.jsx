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
    <div className="min-h-screen bg-[#FFD9C9]">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          onSearch={handleSearch}
        />

        <div className="grid grid-cols=1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {weatherData.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
