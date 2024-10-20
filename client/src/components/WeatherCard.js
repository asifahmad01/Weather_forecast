import React from 'react';
import { FiThermometer } from 'react-icons/fi';
import './WeatherCard.css';

const WeatherCard = ({ cityWeather, onClick }) => {
  return (
    <div className="weather-card" onClick={onClick}>
      <h2>{cityWeather.city}</h2>
      <p><FiThermometer /> {cityWeather.temp.toFixed(2)}°C</p>
      <p>{cityWeather.main}</p>
    </div>
  );
};

export default WeatherCard;
