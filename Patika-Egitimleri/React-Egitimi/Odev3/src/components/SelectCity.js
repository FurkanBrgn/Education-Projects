import { useWeather } from "../context/weatherContext";

function SelectCity() {
  const { currentCity, setCurrentCity, cities } = useWeather();

  const changeCity = (e) => {
    cities.filter((item) => {
      if (item.name === e.target.value) {
        setCurrentCity(item);
      }
    });
  };

  return (
    <div className="selectCity">
      <select
        name="cities"
        id="cities"
        value={currentCity.name}
        onChange={changeCity}
      >
        {cities.map((item) => {
          return (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectCity;
