import React from 'react';
import { Line } from 'react-chartjs-2';

const DailySummary = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.dt).toLocaleDateString()),
    datasets: [
      {
        label: 'Average Temperature (°C)',
        data: data.map(entry => entry.temp),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DailySummary;
