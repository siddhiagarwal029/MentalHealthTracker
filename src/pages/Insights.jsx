import React from "react";
import Header from "../components/Header";

function Insights() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Your Insights </h1>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Weekly Summary</h2>
          <p className="text-gray-600">
            You felt mostly anxious this week, especially around Sunday night.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Mood Pattern</h2>
          <p className="text-gray-600">
            Mondays and Fridays seem to have the highest mood swings.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">AI Tip</h2>
          <p className="text-gray-600">
            Try a 5-minute breathing session whenever you feel overwhelmed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
