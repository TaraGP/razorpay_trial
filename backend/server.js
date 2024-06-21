//backend\server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import razorpay from "razorpay";
import paymentRoute from './routes/paymentRoutes.js';
import connectDB from "./config/db.js";

const PORT=process.env.PORT || 5000;

// dotenv.config({path:'./.env'});

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
// Middleware to parse requests of content-type - application/json
app.use(express.json());
// Middleware to parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:true }));

// Routes
app.use('/api', paymentRoute);

app.get('/api/getkey', (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

//connect to mongoose server
connectDB();

export const instance=new razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})

   //use routes

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});
