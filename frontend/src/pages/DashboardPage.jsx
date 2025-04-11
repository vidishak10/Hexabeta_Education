import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Required for Pie and Doughnut charts
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Register ArcElement for Pie/Doughnut charts
  Tooltip,
  Legend
);

// Rest of your ProgressDashboard code...

function DashboardPage() {
  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#007BFF', '#FFC107'],
      },
    ],
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Progress</h1>
      <Pie data={data} />
    </div>
  );
}

export default DashboardPage;