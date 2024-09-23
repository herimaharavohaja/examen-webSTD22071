import { persons, types } from "../mock/data";

function Filter({ setStartDate, setEndDate }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow-md">
      <div className="flex flex-row items-center justify-start gap-2 mb-4">
        <label htmlFor="patrimoine" className="font-semibold">Patrimoine</label>
        <select 
          name="patrimoine" 
          id="patrimoine" 
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 w-1/2 border border-gray-300 rounded-md transition duration-200 ease-in-out"
        >
          {persons.map(p => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200 ease-in-out">Tous</button>
      </div>
      <div className="flex flex-row gap-2 mb-4">
        {types.map((t, i) => (
          <div key={i} className="flex items-center">
            <input type="checkbox" id={`type-${i}`} className="mt-2" />
            <label htmlFor={`type-${i}`} className="ml-2">{t}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row gap-3 items-center">
          <label htmlFor="de">De</label>
          <input
            type="date"
            name="de"
            id="de"
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <label htmlFor="a">À</label>
          <input
            type="date"
            name="a"
            id="a"
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md transition duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
