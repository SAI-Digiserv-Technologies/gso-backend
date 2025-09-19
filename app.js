import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import dailyReflectionRoutes from "./routes/dailyReflectionRoutes.js";
import meetingRoutes from './routes/meetingRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/daily-reflections", dailyReflectionRoutes);
app.use("/api", meetingRoutes);

app.use("/api", contactRoutes);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
