import { useState } from 'react';
import { Zap, Cpu } from 'lucide-react';
import MapView from './MapView';
import DecisionModal from './DecisionModal';
import { fetchAiDecision } from '../services/api';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiDecision, setAiDecision] = useState(null);
  const [scenario, setScenario] = useState('initial');

  const handleEngageAi = async () => {
    setIsLoading(true);
    setAiDecision(null);
    try {
      const data = await fetchAiDecision();
      setAiDecision(data);
      setScenario('optimized');
    } catch (error) {
      setAiDecision({ reason: `Error: ${error.message}. Is the backend running?` });
    } finally {
      setIsLoading(false);
    }
  };

  const resetScenario = () => {
    setAiDecision(null);
    setScenario('initial');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-cyan-400 flex items-center justify-center gap-3">
            <Zap /> RailFlux
          </h1>
          <p className="text-gray-400">AI Co-Pilot for Railway Traffic Control</p>
        </header>

        <main className="bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700">
          <MapView scenario={scenario} />
          <div className="text-center mt-6">
            <button
              onClick={handleEngageAi}
              disabled={isLoading || scenario === 'optimized'}
              className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <Cpu size={18} />
              {isLoading ? 'ANALYZING...' : 'ENGAGE AI CONTROLLER'}
            </button>
            <button
              onClick={resetScenario}
              className="ml-4 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Reset Scenario
            </button>
          </div>
        </main>
      </div>

      {aiDecision && <DecisionModal decision={aiDecision} onClose={resetScenario} />}
    </div>
  );
}
