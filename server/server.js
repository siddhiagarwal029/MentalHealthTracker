import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import moodRoutes from "./routes/moodRoutes.js";
import testRoutes from "./routes/test.js";  // <-- Import here at top

dotenv.config();

const app = express();  // <-- Initialize here

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/moods", moodRoutes);
app.use("/api/test", testRoutes);  // <-- Use AFTER app initialized

app.get("/", (req, res) => res.send("MindMate API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
