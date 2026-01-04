const weatherIcons = {
  Clear: "/icons/sunny.png",
  Clouds: "/icons/cloudy.png",
  Rain: "/icons/rainy.png",
  Drizzle: "/icons/drizzle.png",
};

const WeatherCard = ({ weather }) => {
  const condition = weather.weather[0].main;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>

      <img
        src={weatherIcons[condition]}
        alt={condition}
        className="w-20 mx-auto my-4"
      />

      <p className="text-2xl font-bold">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
