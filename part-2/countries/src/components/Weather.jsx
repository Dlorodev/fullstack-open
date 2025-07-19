import { useEffect, useState } from 'react';
import countrieService from '../services/countrieService';

// eslint-disable-next-line react/prop-types
const Weather = ({ lat, long, capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countrieService.getWeather(lat, long).then((res) => {
      console.log(res.data);
      setWeather(res.data);
    });
  }, [lat, long]);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weather.main.temp} celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p>Wind: {weather.wind.speed} m/s</p>
    </>
  );
};

export default Weather;
