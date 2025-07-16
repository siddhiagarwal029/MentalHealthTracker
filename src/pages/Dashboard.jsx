import { useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

const moodMap = {
  1: { emoji: "😢", label: "Sad" },
  2: { emoji: "😐", label: "Neutral" },
  3: { emoji: "🙂", label: "Content" },
  4: { emoji: "😊", label: "Happy" },
  5: { emoji: "😄", label: "Joyful" },
};

function Dashboard() {
  const { user } = useAuth();
  const [moodValue, setMoodValue] = useState(3);
  const [moodHistory, setMoodHistory] = useState([]);
  const [journalText, setJournalText] = useState("");

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    const selectedMood = moodMap[moodValue];
    const entry = {
      mood: selectedMood.label,
      emoji: selectedMood.emoji,
      journal: journalText,
      timestamp: new Date().toLocaleString(),
    };
    setMoodHistory([entry, ...moodHistory]);
    setJournalText(""); // Clear journal after submit
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-3xl border border-gray-200 backdrop-blur-lg">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.username || "Friend"} 👋</h1>
          <p className="text-gray-500 mb-6">How are you feeling today?</p>

          {/* Mood Slider */}
          <form onSubmit={handleMoodSubmit}>
            <div className="flex flex-col items-center mb-6">
              <span className="text-6xl">{moodMap[moodValue].emoji}</span>
              <input
                type="range"
                min="1"
                max="5"
                value={moodValue}
                onChange={(e) => setMoodValue(Number(e.target.value))}
                className="w-full mt-4"
              />
              <span className="mt-2 font-medium text-gray-600">
                {moodMap[moodValue].label}
              </span>
            </div>

            {/* Journal Input */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Write your thoughts 📝
            </label>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              rows={4}
              placeholder="Today I feel..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />

            <button
              type="submit"
              className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Submit Mood
            </button>
          </form>

          {/* Mood History */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Mood History 📅</h2>
            {moodHistory.length === 0 ? (
              <p className="text-gray-500">No mood entries yet. Log your first one!</p>
            ) : (
              <ul className="space-y-3">
                {moodHistory.map((entry, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center text-lg">
                        <span>{entry.emoji}</span>
                        <span className="font-medium">{entry.mood}</span>
                      </div>
                      <span className="text-sm text-gray-400">{entry.timestamp}</span>
                    </div>
                    {entry.journal && (
                      <p className="mt-2 text-gray-700">{entry.journal}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
