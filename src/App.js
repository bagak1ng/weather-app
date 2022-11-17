import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [weather,setWeather] = useState([])
  const APIKEY = '73c164b7c0395abc6a349d3f388f0339'

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      setWeather({
        data: apiData, 
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67) + '°F',
        temperatureC: Math.round(apiData.main.temp - 273.15) + '°C',
        temperatureR: apiData.main.temp,
        humidity: apiData.main.humidity,
        wind: apiData.wind.speed,
        error:""
      }
      )
  }

  const [temp, setTemp] = useState(weather.temperatureR);

  function handleClick() {
    setTemp(Math.round(weather.temperatureR - 273.15) + '°C')
  }

  let changeTemp;

  const handleToggle = () => {
    if (!temp) {
      changeTemp = Math.round(weather.temperatureR - 273.15) + '°C';
    }
    else if (temp) {
      changeTemp = Math.round(weather.temperatureR * 9/5 - 459.67) + '°F';
    } 
    setTemp(changeTemp && !temp);
    console.log(temp);
    console.log(changeTemp);
  }

  // const handleFilter = () => {
  //   let filtered = weather.filter((city) => {
  //     return Math.round(city.temperature - 273.15)
  //   })
  //   setWeather(filtered);
  // }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      description={weather.description}
      temperature={weather.temperature}
      temperatureC={weather.temperatureC}
      humidity={weather.humidity}
      wind={weather.wind}
      error={weather.error}
      // handleFilter={handleFilter}
      handleClick={handleClick}
      handleToggle={handleToggle}
      temp={temp}
      temperatureR={weather.temperatureR}
      changeTemp={changeTemp}
      />
      {/* {console.log(weather.data)} */}
    </div>
  );
}

export default App;
