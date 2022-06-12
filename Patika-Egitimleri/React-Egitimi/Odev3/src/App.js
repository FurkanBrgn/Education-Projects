import "./App.css";
import SelectCity from "./components/SelectCity";
import WeatherTable from "./components/WeatherTable";

import {WeatherProvider} from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <SelectCity/>
        <WeatherTable/>
      </div>
    </WeatherProvider>
  );
}

export default App;