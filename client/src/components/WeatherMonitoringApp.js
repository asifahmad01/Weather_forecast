import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import WeatherCard from './WeatherCard';

const WeatherMonitoringApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:5000/api/weather');
      console.log("Weather Data:", response.data); // Debugging line
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data from server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleCityClick = (cityWeather) => {
    setSelectedCity(cityWeather);
  };

  const handleBackClick = () => {
    setSelectedCity(null);
  };

  return (
    <div className="weather-monitoring-app">
      <div className="header">
        <h1>The Weather Forecasting</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : selectedCity ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <div>
            <h2>{selectedCity.city}</h2>
            <p>Temperature: {selectedCity.temp.toFixed(2)}°C</p>
            <p>Feels Like: {selectedCity.feels_like.toFixed(2)}°C</p>
            <p>Wind Speed: {selectedCity.wind_speed} m/s</p>
            <p>Humidity: {selectedCity.humidity}%</p>
          </div>
        </div>
      ) : (
        <div className="weather-container">
          {weatherData.map((cityWeather) => (
            <WeatherCard key={cityWeather.city} cityWeather={cityWeather} onClick={() => handleCityClick(cityWeather)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherMonitoringApp;
