import { useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

// Mood → Emoji & Label map
const moodMap = {
  1: { emoji: "😢", label: "Sad" },
  2: { emoji: "😐", label: "Neutral" },
  3: { emoji: "🙂", label: "Content" },
  4: { emoji: "😊", label: "Happy" },
  5: { emoji: "😄", label: "Joyful" },
};

const moodColorMap = {
  Sad: "from-blue-200 via-blue-300 to-blue-400",
  Neutral: "from-gray-200 via-gray-300 to-gray-400",
  Content: "from-teal-100 via-teal-200 to-teal-300",
  Happy: "from-yellow-100 via-yellow-200 to-yellow-300",
  Joyful: "from-pink-200 via-pink-300 to-yellow-200",
};


function Dashboard() {
  const { user } = useAuth();
  const [moodValue, setMoodValue] = useState(3); // Default to Neutral
  const [moodHistory, setMoodHistory] = useState([]);

  // Dynamically compute the current mood's label
  const currentMood = useMemo(() => {
    if (moodHistory.length === 0) return "Neutral";
    const latestMood = moodHistory[0].mood?.trim();
    return Object.keys(moodColorMap).includes(latestMood)
      ? latestMood
      : "Neutral";
  }, [moodHistory]);

  const gradient = moodColorMap[currentMood];

  // Emoji row renderer
  const renderMoodRow = (selectedLabel) => {
    return Object.entries(moodMap).map(([value, mood]) => (
      <span
        key={value}
        className={`text-2xl mx-1 transition-transform duration-200 ${
          mood.label === selectedLabel
            ? "scale-125 font-bold text-white"
            : "opacity-40"
        }`}
      >
        {mood.emoji}
      </span>
    ));
  };

  // Form submit
  const handleMoodSubmit = (e) => {
    e.preventDefault();
    const selectedMood = moodMap[moodValue];

    const entry = {
      mood: selectedMood.label.trim(),
      emoji: selectedMood.emoji,
      timestamp: new Date().toLocaleString(),
    };

    setMoodHistory([entry, ...moodHistory]);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradient} text-gray-900 transition-all duration-700 ease-in-out`}>

      <Header />

      <div className="p-6">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            Welcome, {user?.username || "Friend"} 👋
          </h1>

          {/* Mood Slider Form */}
          <form onSubmit={handleMoodSubmit} className="mb-6">
            <label className="block mb-4 text-white text-lg">
              How are you feeling today?
            </label>

            <div className="flex flex-col items-center gap-4">
              <span className="text-6xl">{moodMap[moodValue].emoji}</span>

              <input
                type="range"
                min="1"
                max="5"
                value={moodValue}
                onChange={(e) => setMoodValue(Number(e.target.value))}
                className="w-full accent-white"
              />

              <span className="text-white/80 font-semibold">
                {moodMap[moodValue].label}
              </span>
            </div>

            <button
              type="submit"
              className="mt-6 bg-white/30 hover:bg-white/40 px-6 py-2 rounded-lg font-semibold"
            >
              Submit Mood
            </button>
          </form>

          {/* Mood History */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Mood History 📅</h2>

            {moodHistory.length === 0 ? (
              <p className="text-white/70">
                No mood entries yet. Log your first one!
              </p>
            ) : (
              <ul className="space-y-2">
                {moodHistory.map((entry, idx) => (
                  <li
                    key={idx}
                    className="bg-white/20 rounded-lg p-3 flex justify-between items-center"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        {renderMoodRow(entry.mood)}
                      </div>
                      <span className="text-white/90 font-semibold mt-1">
                        {entry.mood}
                      </span>
                    </div>
                    <span className="text-sm text-white/80">
                      {entry.timestamp}
                    </span>
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
