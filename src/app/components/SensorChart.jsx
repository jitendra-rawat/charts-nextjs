"use client"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const SensorChart = () => {
  
  const chartRef = useRef(null);

  useEffect(() => {
  
    const sensorData = {
      labels: [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12",
        "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24"
      ],
      datasets: [
        {
          label: "Sensor A1 (AVG)",
          data: [3, 51, 0, 0, 87, 125, 38, 38, 5781, 74, 265, 11463, 116, 3, 15, 1172, 13874, 13258, 12463, 12466, 1340, 171, 152, 692], // AVG values for each sensor
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.1,
        },
        {
          label: "Sensor A2 (AVG)",
          data: [3, 51, 0, 0, 87, 125, 38, 38, 5781, 74, 265, 11463, 116, 3, 15, 1172, 13874, 13258, 12463, 12466, 1340, 171, 152, 692],
          fill: false,
          borderColor: "rgba(153, 102, 255, 1)",
          tension: 0.1,
        },
        // Add more sensors here
      ],
    };

    new Chart(chartRef.current, {
      type: "line",
      data: sensorData,
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: "Sensor Data - Average Values" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Sensor Value (AVG)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Sensors (A1 to A24)',
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
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Sensor Data Line Graph</h1>
      <div className="bg-white max-w-5xl mx-auto shadow-lg rounded-lg p-6">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SensorChart;
