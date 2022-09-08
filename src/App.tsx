import { useEffect, useState } from "react";
import { getCityWeather } from "./services/getCityWeather";
import { WeatherProps } from "./types";

function App() {
  const [data, setData] = useState<WeatherProps>();
  const API_KEY = "06afbf87f802f5efd7bc86b162816d04";

  useEffect(() => {
    getCityWeather
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
      )
      .then((resp) => {
        setData(resp.data);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Sky App</h1>
      <p>{data && data.name}</p>

      <button>hello</button>
    </div>
  );
}

export default App;
