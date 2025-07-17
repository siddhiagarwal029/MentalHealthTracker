import React from "react";
import Header from "../components/Header";

const moodData = [
  { date: "2025-07-14", mood: "happy" },
  { date: "2025-07-15", mood: "anxious" },
  { date: "2025-07-16", mood: "anxious" },
  { date: "2025-07-17", mood: "neutral" },
  { date: "2025-07-18", mood: "sad" },
  { date: "2025-07-19", mood: "sad" },
  { date: "2025-07-20", mood: "happy" },
];

function Insights() {
  const moodCounts = moodData.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const mostFrequentMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Your Insights</h1>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Weekly Summary</h2>
          <p className="text-gray-600">
            You felt mostly <span className="font-semibold">{mostFrequentMood}</span> this week.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Mood Pattern</h2>
          <p className="text-gray-600">
            Mood changes were noticeable mid-week. Keep an eye on your triggers.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">AI Tip</h2>
          <p className="text-gray-600">
            Try journaling more on days you feel {mostFrequentMood}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
