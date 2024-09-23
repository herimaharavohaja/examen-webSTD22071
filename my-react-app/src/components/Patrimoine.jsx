import React from 'react';
import Flux from './Flux';

function Patrimoine() {
  return (
    <>
    <form className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Gestion du Patrimoine</h2>
      
      <div className="mb-4">
        <label className="block mb-2">
          <input type="checkbox" name="agregat" className="mr-2" />
          Agregat
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <input type="checkbox" name="tresorerie" className="mr-2" />
          Trésorerie
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <input type="checkbox" name="immobilisations" className="mr-2" />
          Immobilisations
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <input type="checkbox" name="obligation" className="mr-2" />
          Obligations
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Date d'entrée</label>
        <input type="date" className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Date de sortie</label>
        <input type="date" className="w-full p-2 border rounded" />
      </div>

      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
    <Flux/>
    </>
  );
}

export default Patrimoine;
