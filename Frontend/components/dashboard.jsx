import { useState } from 'react';
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
      setAiDecision({ reason: `Error: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  const resetScenario = () => {
    setAiDecision(null);
    setScenario('initial');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">D-TRAC</h1>
          <p className="text-gray-400">AI-Powered Railway Traffic Control Dashboard</p>
        </header>

        <main className="bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700">
          <MapView scenario={scenario} />
          <div className="text-center mt-8">
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
      {aiDecision && <DecisionModal decision={aiDecision} onClose={resetScenario} />}
    </div>
  );
}