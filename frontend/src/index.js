import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// get today's date 

function GetDate(){
  let date = new Date().toJSON();
  console.log(date)
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate)
  return currentDate
}

// get weather 
function WeatherApp() {
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
          <p>Day: {weather.hourly.is_day}</p>
        </div>
      ) : null}
    </div>
  );
}

// page elements 

function Header() {
  return <header className="header"> whether </header>
}

function NavigationBar() {
  return  <nav> navigation bar </nav>
}

function MainContent() {
    return(
    <>
      <GetDate />
      <WeatherApp />
    </>
    )
}

function Footer() {
  return <footer className="footer"> footer </footer>
}

function Page() {
  return (
    <>
      <Header />
      <NavigationBar />
      <MainContent />
      <Footer/>
    </>
          )
}
root.render(
  <div>
    <Page />
  </div> 
);


