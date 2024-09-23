import { Line } from 'react-chartjs-2';
import { patrimoines } from '../mock/data';

function Chart({ checkedTypes }) {
  const datasets = checkedTypes.map((type, index) => {
    const data = patrimoines.patrimoines.map(p => ({
      x: p.montants.map(m => m.date).flat(),
      y: p.montants.map(m => m.montant).flat(),
    }));

    return {
      label: type,
      data: data,
      fill: false,
      borderColor: `hsl(${index * 60}, 100%, 50%)`, // Different colors for each type
    };
  });

  const chartData = {
    labels: datasets.length ? datasets[0].data.map(d => d.x) : [],
    datasets: datasets,
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
