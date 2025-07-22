import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../components/Header";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MoodGraph = () => {
  const fullData = [3, 2, 4, 5, 2, 3, 1];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [visibleData, setVisibleData] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step < fullData.length) {
        setVisibleData((prev) => [...prev, fullData[step]]);
        setStep((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [step]);

  const data = {
    labels: labels.slice(0, visibleData.length),
    datasets: [
      {
        label: "Mood Level",
        data: visibleData,
        fill: false,
        borderColor: "#60A5FA",
        tension: 0.4,
        pointBackgroundColor: "#2563EB",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 600,
      easing: "easeOutQuart",
    },
    scales: {
      y: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Mood Trends (Time Series)</h1>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MoodGraph;
