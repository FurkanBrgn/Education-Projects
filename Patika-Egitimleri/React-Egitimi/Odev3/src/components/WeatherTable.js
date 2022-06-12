import axios from "axios";
import { useEffect } from "react";

import { useWeather } from "../context/weatherContext";

function WeatherTable() {
  const { weatherData, setWeatherData, currentCity, days } = useWeather();

  useEffect(() => {
    getData();
  }, [currentCity]);

  const getData = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.latitude}&lon=${currentCity.longitude}&exclude={part}&appid=7761e3d7ca2f740754eff64e111cee74`
    );
    setWeatherData(res.data.daily);
  };

  return (
    <div className="daysContainer">
      {weatherData.map((item, index) => {
        return (
          <div className="day" key={index}>
            <div className="dayTitle">
              {days[new Date(item.dt * 1000).getDay()]}
            </div>
            <img
              className="dayImg"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description.toUpperCase()}
              title={item.weather[0].description.toUpperCase()}
            />
            <div className="dayDeg">
              <span className="tmp-high">
                {Math.round(item.temp["max"] - 273.15)}
                &deg;
              </span>
              <span>
                {Math.round(item.temp["min"] - 273.15)}
                &deg;
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherTable;
