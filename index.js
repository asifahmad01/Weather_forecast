import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import WeatherService from './services/WeatherService.js';
import { connectDB } from './config/db.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const weatherService = new WeatherService(process.env.OPENWEATHER_API_KEY);

// Route to fetch weather data from MongoDB
app.get('/api/weather', async (req, res) => {
  try {
    console.log("Received request for weather data...");
    const weatherData = await weatherService.getWeatherData();
    res.json(weatherData);
  } catch (error) {
    console.error("Error retrieving weather data:", error);
    res.status(500).json({ error: 'Failed to retrieve weather data' });
  }
});

// Schedule the data fetching process
app.listen(PORT, async () => {
  await connectDB();
  await weatherService.processCities(); // Fetch and store weather data initially
  console.log(`Server running on port ${PORT}`);
});
