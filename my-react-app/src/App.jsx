import { useState } from "react";
import Filter from "./components/Filter";
import Flux from "./components/Flux";
import Graph from "./components/Graph";

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col w-full md:w-1/3 space-y-2">
          <Filter setStartDate={setStartDate} setEndDate={setEndDate} />
          <Flux title="Flux impossible">
            Flux impossible
          </Flux>
          <Flux title="Flux Journalier">
            Flux Journalier
          </Flux>
        </div>
        <div className="flex justify-center">
          <Graph startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
