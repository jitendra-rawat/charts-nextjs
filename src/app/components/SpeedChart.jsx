import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const SpeedChart = () => {
  // Function to generate time labels (11:00 AM to 11:25 AM with 1-minute intervals)
  const generateTimeLabels = () => {
    const labels = []
    const startTime = new Date()
    startTime.setHours(11, 0, 0, 0) // Set to 11:00 AM

    for (let i = 0; i < 26; i++) { // 25 minutes from 11:00 AM to 11:25 AM
      const time = new Date(startTime.getTime() + i * 60000) // Add 1 minute (60 * 1000 ms)
      const hours = time.getHours().toString().padStart(2, '0')
      const minutes = time.getMinutes().toString().padStart(2, '0')
      labels.push(`${hours}:${minutes}`) // Format the time as HH:MM
    }
    return labels
  }

  // Function to generate dynamic speed data for the chart
  const generateSpeedData = () => {
    const speeds = []
    for (let i = 0; i < 26; i++) {
      // Generate random speeds between 30 and 120 km/h
      speeds.push(Math.floor(Math.random() * 91) + 30) // Random speed between 30 and 120
    }
    return speeds
  }

  // Data for the chart
  const data = {
    labels: generateTimeLabels(), // Time labels (from 11:00 AM to 11:25 AM)
    datasets: [
      {
        label: 'Speed (km/h)',
        data: generateSpeedData(), // Random dynamic speed data
        borderColor: '#4C9BFE', // Line color
        backgroundColor: 'rgba(76, 155, 254, 0.2)', // Fill color under the line
        fill: true, // Enable fill under the line
        tension: 0.4, // Line smoothing to create a curve
        borderWidth: 2,
      },
    ],
  }

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index', // Enable the index mode (vertical line on hover)
      intersect: false, // Disable intersect to show the line even when hovering above or below the data points
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time', // Label for the x-axis
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 130, // Adjusted maximum speed to 130 km/h
        title: {
          display: true,
          text: 'Speed (km/h)', // Label for the y-axis
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} km/h`; // Show speed value in tooltip
          },
        },
      },
    },
  }

  return (
    <div className="w-full h-[300px]">
      <Line data={data} options={options} />
    </div>
  )
}

export default SpeedChart
