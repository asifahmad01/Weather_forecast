import React from 'react';
import { FiThermometer, FiWind, FiCloud, FiDroplet, FiSun } from 'react-icons/fi';

const WeatherDetails = ({ cityData, onBack }) => {
  return (
    <div className="weather-details">
      <button onClick={onBack} className="back-button">Back</button>
      <div className="weather-info">
        <h2>{cityData.city}</h2>
        <p className="temperature"><FiThermometer /> {cityData.temp.toFixed(2)}°C</p>
        <p className="feels-like"><FiSun /> Feels Like: {cityData.feels_like.toFixed(2)}°C</p>
        <p className="condition"><FiCloud /> Condition: {cityData.main}</p>
        <p className="wind"><FiWind /> Wind Speed: {cityData.wind_speed} m/s</p>
        <p className="humidity"><FiDroplet /> Humidity: {cityData.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
