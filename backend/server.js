import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Netflix Clone Backend is Running!");
});

// Movie routes
app.use("/api/movies", movieRoutes);

async function startServer() {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected");
    }

    const PORT = process.env.PORT || 5173;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}

startServer();