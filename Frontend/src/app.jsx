import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiDecision, setAiDecision] = useState(null);
  const [scenario, setScenario] = useState('initial');

  const handleEngageAi = async () => {
    setIsLoading(true);
    setAiDecision(null);
    try {
      await new Promise(res => setTimeout(res, 1000));
      const response = await fetch('http://127.0.0.1:8000/api/get_decision', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAiDecision(data);
      setScenario('optimized');
    } catch (error) {
      console.error("Failed to fetch AI decision:", error);
      setAiDecision({ reason: 'Error: Could not connect to AI engine.' });
    } finally {
      setIsLoading(false);
    }
  };

  const resetScenario = () => {
    setAiDecision(null);
    setScenario('initial');
  }

  const freightTrainStyle = scenario === 'initial'
    ? { top: '50%', left: '20%' }
    : { top: '20%', left: '50%' };
  
  const expressTrainStyle = scenario === 'initial'
    ? { top: '50%', left: '5%' }
    : { top: '50%', left: '80%' };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">D-TRAC</h1>
          <p className="text-gray-400">AI-Powered Railway Traffic Control Dashboard</p>
        </header>

        <main className="bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700">
          <div className="relative w-full h-48 mb-8">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-600 rounded"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full">
              <div className="w-full h-[calc(50%-2px)] border-l-2 border-r-2 border-t-2 border-gray-500 border-dashed rounded-t-full"></div>
            </div>

            <div 
              className="absolute text-3xl transition-all duration-1000 ease-in-out"
              style={freightTrainStyle}
            >
              🚂
              <span className="text-xs absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gray-700 px-1 rounded">Freight</span>
            </div>
            
            <div 
              className="absolute text-3xl transition-all duration-2000 ease-in-out"
              style={expressTrainStyle}
            >
              🚄
              <span className="text-xs absolute -bottom-5 left-1/2 -translate-x-1/2 bg-yellow-700 px-1 rounded">Express</span>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleEngageAi}
              disabled={isLoading || scenario === 'optimized'}
              className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
            >
              {isLoading ? 'ANALYZING...' : 'ENGAGE AI CONTROLLER'}
            </button>
          </div>
        </main>
      </div>
      
      {aiDecision && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-cyan-500 rounded-lg shadow-2xl p-6 max-w-md w-full animate-fade-in">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">AI Recommendation</h2>
            <p className="text-gray-300 mb-6">{aiDecision.reason}</p>
            <button 
              onClick={resetScenario}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              Reset Scenario
            </button>
          </div>
        </div>
      )}
    </div>
  );
}