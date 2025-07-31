import express from "express";
import MoodEntry from "../models/MoodEntry.js";

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { mood, note } = req.body;

        const newMood = new MoodEntry({ mood, note });
        await newMood.save();

        res.json({ message: "Mood entry saved!", data: newMood });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const moods = await MoodEntry.find();
        res.json(moods);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

export default router;
