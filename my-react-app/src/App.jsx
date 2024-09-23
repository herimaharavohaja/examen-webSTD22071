import React from 'react';
import Chart from './components/Chart';
import Patrimoine from './components/Patrimoine';
import './index.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto p-4 space-y-4 md:space-y-0">
      <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Graphique de Patrimoine</h2>
          <Patrimoine />
      </div>
      <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Formulaire de Patrimoine</h2>
           <Chart />
      </div>
    </div>
  );
}

export default App;
