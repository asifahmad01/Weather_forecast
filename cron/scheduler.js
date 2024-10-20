import cron from 'node-cron';
import WeatherService from '../services/WeatherService.js';
import { connectDB } from '../config/db.js';

const weatherService = new WeatherService(process.env.OPENWEATHER_API_KEY);

async function initializeScheduler() {
  await connectDB();

  cron.schedule("*/5 * * * *", async () => {
    try {
      console.log('Fetching weather data for cities...');
      await weatherService.processCities();
    } catch (error) {
      console.error('Error processing cities:', error);
    }
  });

  cron.schedule("0 0 * * *", async () => {
    try {
      console.log('Calculating daily weather summary...');
      await weatherService.calculateDailySummary();
    } catch (error) {
      console.error('Error calculating daily summary:', error);
    }
  });
}

export default initializeScheduler;
