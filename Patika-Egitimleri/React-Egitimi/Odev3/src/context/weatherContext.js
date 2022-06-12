import { useContext,createContext, useState } from "react";
import cities from './cities.json';

const WeatherContext = createContext();

const WeatherProvider = ({children})=>{
  const [currentCity,setCurrentCity]=useState(cities.find(item => item.id === 38));
  const [weatherData,setWeatherData]=useState([]);
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        currentCity,
        setCurrentCity,
        days,
        cities
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather(){
  return useContext(WeatherContext);
}

export {useWeather,WeatherProvider};