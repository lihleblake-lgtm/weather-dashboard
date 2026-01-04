const API_KEY = "bb10c5d6885130f79276d0dce89fe5fc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};
