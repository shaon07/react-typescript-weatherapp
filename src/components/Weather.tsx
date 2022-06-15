import { memo, useState } from "react";

type weatherType = {
  weather: undefined | any;
  setCity: (data: string) => void;
};

type handleChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

type handleSearchTypeFunc = () => void;

const Weather = ({ weather, setCity }: weatherType) => {
  const [inputData, setInputData] = useState<string>("");

  const handleChange: handleChangeFunc = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputData(e.target.value);
  };

  const handleSearch: handleSearchTypeFunc = () => {
    setCity(inputData || "dhaka");
    console.log(inputData);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
      <div>
        <div>
          <div className="mainBody">
            <div className="containerWrapper">
              <div className="textBox">
                <input
                  type="text"
                  className="inputbox"
                  placeholder="search city name"
                  value={inputData}
                  onDoubleClick={() => setInputData("")}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />{" "}
                <button className="inputBtn" onClick={handleSearch}>
                  Search
                </button>
                {!weather ? (
                  <h2>Please Enter a valid City Name</h2>
                ) : weather.cod === "404" ? (
                  <>
                    <h2>Please Enter a valid City Name</h2>
                  </>
                ) : (
                  <>
                    <h4 className="mb-0">
                      {weather.name ? weather.name : "dhaka"},{" "}
                      {weather.sys.country}
                    </h4>
                    <h6>
                      <span>min temp : {weather.main.temp_min}°C</span> | max
                      temp : {weather.main.temp_max}°C
                    </h6>
                    <h6>
                      <span>humidity : {weather.main.humidity}</span> | pressure
                      : {weather.main.pressure}
                    </h6>
                    <p className="display-2 my-3">{weather.main.temp}°C</p>
                    <h6 className="mb-2">
                      <span>
                        Feels Like: <b>{weather.main.feels_like} °C</b>
                      </span>{" "}
                      | Wind:{" "}
                      <strong>
                        {weather.wind.deg}° and Speed {weather.wind.speed}
                      </strong>
                    </h6>
                    <h5>{weather.weather[0].main}</h5>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Weather);
