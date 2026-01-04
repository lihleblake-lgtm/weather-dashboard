const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const weatherIcons = {
    Clear: "/sunny.png",
    Clouds: "/cloudy.png",
    Rain: "/rainy.png",
    Drizzle: "/drizzle.png",
  };

  const condition = weather.weather[0].main;

  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow text-center">
      <h2 className="text-xl font-bold">{weather.name}</h2>

      <img
        src={weatherIcons[condition] || "/cloudy.png"}
        alt={condition}
        className="w-24 mx-auto my-4"
      />

      <p className="text-lg">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
