// backend/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    console.log('Mongo URI:', mongoUri); // Added for debugging
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }
    const conn = await mongoose.connect(mongoUri, { });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
