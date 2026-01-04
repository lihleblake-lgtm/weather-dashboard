import { useState } from "react";
import Navbar from "./components/Navbar";
import CityCard from "./components/CityCard";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import { saCities } from "./data/saCities";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF1E6]">
      <Navbar />

      <main className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">
          Blake24 Weather
        </h1>
        <p className="text-center text-sm text-gray-600">
          Daily Weather
        </p>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => fetchWeather(city)}
        />

        <div className="grid grid-cols-3 gap-4 mt-6">
          {saCities.slice(0, 3).map((c) => (
            <CityCard
              key={c}
              city={c}
              onClick={() => fetchWeather(c)}
            />
          ))}
        </div>

        <div className="bg-white mt-6 p-6 rounded-2xl shadow text-center">
          <p className="font-medium">
            Welcome to Blake24 Weather
          </p>
          <p className="text-sm mt-2">
            We provide 99% accurate weather conditions across South Africa.
          </p>
        </div>

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}

        <WeatherDisplay weather={weather} />
      </main>
    </div>
  );
}

export default App;
