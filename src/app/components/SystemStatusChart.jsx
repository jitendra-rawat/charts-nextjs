"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const SystemStatusChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const systemStatusData = {
      labels: ['2024-10-31 00:00', '2024-10-31 01:00', '2024-10-31 02:00', '2024-10-31 03:00'],
      datasets: [
        {
          label: 'System Active (1 = Active, 0 = Inactive)',
          data: [1, 1, 0, 1], 
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1,
        },
      ],
    };

    new Chart(chartRef.current, {
      type: "line",
      data: systemStatusData,
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: "System Status (Active/Inactive)" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'System Status (1 = Active, 0 = Inactive)',
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
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">System Status Line Graph</h1>
      <div className="bg-white max-w-5xl mx-auto shadow-lg rounded-lg p-6">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SystemStatusChart;
