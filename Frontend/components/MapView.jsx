export default function MapView({ scenario }) {
  const freightTrainStyle = scenario === 'initial'
    ? { top: '50%', left: '20%', transition: 'all 2s ease-in-out' }
    : { top: '20%', left: '50%', transition: 'all 2s ease-in-out' };
  
  const expressTrainStyle = scenario === 'initial'
    ? { top: '50%', left: '5%', transition: 'all 3s ease-in-out 0.5s' }
    : { top: '50%', left: '80%', transition: 'all 3s ease-in-out 0.5s' };

  return (
    <div className="relative w-full h-48">
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-600 rounded"></div>
      <div className="absolute top-[20%] left-[35%] w-[30%] h-[30%] border-2 border-gray-500 border-b-0 rounded-t-full"></div>
      
      <div className="absolute text-3xl" style={freightTrainStyle}>
        🚂<span className="text-xs absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gray-700 px-1 rounded">Freight</span>
      </div>
      
      <div className="absolute text-3xl" style={expressTrainStyle}>
        🚄<span className="text-xs absolute -bottom-5 left-1/2 -translate-x-1/2 bg-yellow-700 px-1 rounded">Express</span>
      </div>
    </div>
  );
}