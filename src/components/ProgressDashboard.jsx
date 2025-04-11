import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

// Mock Progress Data (This can be replaced with an API call)
const mockProgress = {
  languages: [
    { name: 'JavaScript', completedTasks: 15, totalTasks: 20 },
    { name: 'Python', completedTasks: 8, totalTasks: 10 },
    { name: 'Java', completedTasks: 5, totalTasks: 10 },
    { name: 'C#', completedTasks: 3, totalTasks: 5 },
  ],
  overall: {
    completedTasks: 31,
    totalTasks: 45,
  },
};

function ProgressDashboard() {
  const [progress, setProgress] = useState(null);

  // Simulate fetching progress data from an API
  useEffect(() => {
    // Replace this with an actual API call if needed
    setTimeout(() => {
      setProgress(mockProgress);
    }, 1000); // Simulating a delay
  }, []);

  if (!progress) {
    return <p style={{ padding: '2rem' }}>Loading progress data...</p>;
  }

  // Prepare data for the pie chart
  const pieChartData = {
    labels: progress.languages.map((lang) => lang.name),
    datasets: [
      {
        label: 'Language Progress',
        data: progress.languages.map((lang) => lang.completedTasks),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Prepare data for the bar chart
  const barChartData = {
    labels: progress.languages.map((lang) => lang.name),
    datasets: [
      {
        label: 'Completed Tasks',
        data: progress.languages.map((lang) => lang.completedTasks),
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Total Tasks',
        data: progress.languages.map((lang) => lang.totalTasks),
        backgroundColor: '#FF6384',
      },
    ],
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Progress Dashboard</h1>
      <p>Track your learning journey here:</p>

      {/* Overall Progress */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Overall Progress</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '200px', height: '200px' }}>
            <Pie data={pieChartData} />
          </div>
          <div style={{ marginLeft: '2rem' }}>
            <p>
              <strong>Completed Tasks:</strong> {progress.overall.completedTasks}/{progress.overall.totalTasks}
            </p>
            <p>
              <strong>Completion Rate:</strong> {Math.round((progress.overall.completedTasks / progress.overall.totalTasks) * 100)}%
            </p>
          </div>
        </div>
      </div>

      {/* Language-Specific Progress */}
      <div>
        <h2>Language-Specific Progress</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;