import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const AccelerationChart = () => {

  const generateTimeLabels = () => {
    const labels = []
    const startTime = new Date()
    startTime.setHours(11, 0, 0, 0) 

    for (let i = 0; i < 26; i++) { 
      const time = new Date(startTime.getTime() + i * 60000) 
      const hours = time.getHours().toString().padStart(2, '0')
      const minutes = time.getMinutes().toString().padStart(2, '0')
      labels.push(`${hours}:${minutes}`) 
    }
    return labels
  }

 
  const accelerationData = [
    0.5, 1.2, 1.5, 2.0, 2.5, 1.8, 1.0, 1.3, 1.4, 1.7, 2.0, 2.3, 2.5, 2.0, 1.8,
    1.6, 1.2, 1.0, 0.8, 1.1, 1.4, 1.7, 2.0, 2.1, 2.3, 1.9, 1.4, 1.0,
  ]


  const data = {
    labels: generateTimeLabels(), 
    datasets: [
      {
        label: 'Acceleration (m/s²)',
        data: accelerationData, 
        borderColor: '#FF5733', 
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true, 
        tension: 0.4, 
        borderWidth: 2,
      },
    ],
  }

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index', 
      intersect: false, 
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 3, 
        title: {
          display: true,
          text: 'Acceleration (m/s²)', 
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} m/s²`; 
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

export default AccelerationChart
