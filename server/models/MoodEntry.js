import mongoose from "mongoose";

const moodEntrySchema = new mongoose.Schema({
    mood: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
}, {
    timestamps: true,
});

const MoodEntry = mongoose.model("MoodEntry", moodEntrySchema);

export default MoodEntry;
