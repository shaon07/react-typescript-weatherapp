import { memo, useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState<any>("");
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          city ? city : "dhaka"
        }&appid=a8776b9b911c56df73be70716e26f335&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error: any) {
      console.log(error.message, "sja");
      console.log(error.message.cod);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  // console.log(weather);
  return (
    <>
      <Weather weather={weather} setCity={setCity} />
    </>
  );
}

export default memo(App);
