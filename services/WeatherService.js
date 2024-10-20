import fetch from 'node-fetch';
import { getDB } from '../config/db.js';

class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];
  }

  async fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data for ${city}: ${response.statusText}`);
      }
      const data = await response.json();
      return {
        city,
        main: data.weather[0].main,
        temp: data.main.temp - 273.15, // Kelvin to Celsius
        feels_like: data.main.feels_like - 273.15,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
        dt: new Date(data.dt * 1000), // Convert Unix timestamp to Date object
      };
    } catch (error) {
      console.error(`Error fetching data for ${city}:`, error);
      return null;
    }
  }

  async saveWeatherData(weatherData) {
    try {
      const db = getDB();
      const collection = db.collection("weatherData");
      await collection.insertOne(weatherData);
      console.log(`Weather data for ${weatherData.city} saved.`);
    } catch (error) {
      console.error("Error saving weather data:", error);
    }
  }

  async getWeatherData() {
    try {
      const db = getDB();
      const collection = db.collection("weatherData");
      const data = await collection.find({}).toArray();
      return data;
    } catch (error) {
      console.error("Error retrieving weather data from database:", error);
      throw new Error("Error retrieving weather data");
    }
  }

  async processCities() {
    for (let city of this.cities) {
      const weatherData = await this.fetchWeather(city);
      if (weatherData) {
        await this.saveWeatherData(weatherData);
      }
    }
  }
}

export default WeatherService;
