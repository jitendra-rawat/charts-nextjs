import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const EventBarChart = () => {
  // Event data (static example)
  const eventData = [
    { time: '11:00', engineRunning: 1, trip: 1, vehicleMoving: 0 },
    { time: '11:05', engineRunning: 1, trip: 1, vehicleMoving: 1 },
    { time: '11:10', engineRunning: 1, trip: 2, vehicleMoving: 2 },
    { time: '11:15', engineRunning: 1, trip: 3, vehicleMoving: 3 },
    { time: '11:20', engineRunning: 1, trip: 4, vehicleMoving: 2 },
    { time: '11:25', engineRunning: 1, trip: 5, vehicleMoving: 4 },
  ]

  // Function to extract the labels (x-axis)
  const timeLabels = eventData.map((data) => data.time)

  // Function to extract event data for each category (y-axis)
  const engineRunningData = eventData.map((data) => data.engineRunning)
  const tripData = eventData.map((data) => data.trip)
  const vehicleMovingData = eventData.map((data) => data.vehicleMoving)

  // Data for the bar chart
  const data = {
    labels: timeLabels, // Time labels (x-axis)
    datasets: [
      {
        label: 'Engine Running', // Dataset for "Engine Running" (constant)
        data: engineRunningData, // Values for Engine Running
        backgroundColor: 'rgba(76, 155, 254, 0.8)', // Bar color for Engine Running
        borderColor: '#4C9BFE',
        borderWidth: 1,
        barThickness: 20, // Adjust bar thickness
        stack: 'stack1',
      },
      {
        label: 'Trip', // Dataset for "Trip" (constant)
        data: tripData, // Values for Trip
        backgroundColor: 'rgba(76, 255, 51, 0.8)', // Bar color for Trip
        borderColor: '#4CFF33',
        borderWidth: 1,
        barThickness: 20,
        stack: 'stack2',
      },
      {
        label: 'Vehicle Moving', 
        data: vehicleMovingData, 
        backgroundColor: 'rgba(255, 87, 51, 0.8)', 
        borderColor: '#FF5733',
        borderWidth: 1,
        barThickness: 12, 
        stack: 'stack3',
      },
    ],
  }

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time', 
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: 'Event Type', 
        },
  
        ticks: {
          callback: function(value) {
            switch(value) {
              case 0: return 'Engine Running';
              case 1: return 'Trip';
              case 2: return 'Vehicle Moving';
              default: return '';
            }
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
        
            return `${context.dataset.label}: ${context.raw} events`;
          },
        },
      },
    },
  }

  return (
    <div className="w-full h-[300px]">
      <Bar data={data} options={options} />
    </div>
  )
}

export default EventBarChart
