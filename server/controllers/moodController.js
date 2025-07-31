import MoodEntry from "../models/MoodEntry.js";

export const getMoods = async (req, res) => {
    try {
        const moods = await MoodEntry.find({ userId: req.params.userId });
        res.json(moods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addMood = async (req, res) => {
    const moodEntry = new MoodEntry(req.body);
    try {
        const savedEntry = await moodEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateMood = async (req, res) => {
    try {
        const updatedEntry = await MoodEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteMood = async (req, res) => {
    try {
        await MoodEntry.findByIdAndDelete(req.params.id);
        res.json({ message: "Mood Entry Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
