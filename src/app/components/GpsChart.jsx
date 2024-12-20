"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const GpsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const gpsData = {
      labels: ['2024-10-31 00:00', '2024-10-31 01:00', '2024-10-31 02:00', '2024-10-31 03:00'],
      datasets: [
        {
          label: 'GPS Signal Strength',
          data: [10, 20, 15, 30], // Signal strength data
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
        },
        // You can add more datasets here if needed
      ],
    };

    new Chart(chartRef.current, {
      type: "line",
      data: gpsData,
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: "GPS Signal Strength Over Time" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Signal Strength (dBm)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Time (Hourly)',
            },
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      Chart.getChart(chartRef.current)?.destroy();
    };
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">GPS Signal Strength Line Graph</h1>
      <div className="bg-white max-w-5xl mx-auto shadow-lg rounded-lg p-6">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default GpsChart;
