import {useEffect, useState} from 'react'

 // get weather 
export default function GetWeather() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  // get location
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,rain,showers,weather_code,is_day&models=bom_access_global`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log(data);
        // save to local storage
        const storedUserData = {
          weather : {data.hourly.apparent_temperature}
        }
        localStorage.setItem('user', JSON.stringify(storedUserData))
      })
      .catch(error => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div>
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <p>Temperature: {weather.hourly.apparent_temperature}</p>
        </div>
      ) : null}
    </div>
  );
}