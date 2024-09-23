import React from 'react';
import { Line } from 'react-chartjs-2';

function Chart() {
  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Trésorerie',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Immobilisations',
        data: [],
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Graphique de Patrimoine</h2>
      {chartData.labels.length === 0 ? (
        <div className="text-center text-gray-500">Aucune donnée disponible.</div>
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
}

export default Chart;
