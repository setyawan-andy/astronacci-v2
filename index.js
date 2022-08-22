import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieSession from "cookie-session";

import articlesRoute from "./routes/articles.js";
import authRoute from "./routes/auth.js";
import videosRoute from "./routes/videos.js";

const app = express();
dotenv.config();

// connect to mongodb
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// middlewares
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// routes
app.use("/articles", articlesRoute);
app.use("/auth", authRoute);
app.use("/videos", videosRoute);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Server started on port ${PORT}`);
});
