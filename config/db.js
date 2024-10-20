import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db;

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected!");
  }
  return db;
};
