function Flux({ title, children }) {
    return (
      <textarea
        value={`${title}\n${children}`}
        className="mt-2 block w-full h-48 outline-none p-2 border border-gray-300 rounded-md transition duration-200 ease-in-out hover:shadow-lg"
      />
    );
  }
  
  export default Flux;
  