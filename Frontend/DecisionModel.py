export default function DecisionModal({ decision, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border border-cyan-500 rounded-lg shadow-2xl p-6 max-w-md w-full animate-fade-in">
        <h2 className="text-xl font-bold text-cyan-400 mb-2">AI Recommendation</h2>
        <p className="text-gray-300 mb-6">{decision.reason}</p>
        <button
          onClick={onClose}
          className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Reset Scenario
        </button>
      </div>
    </div>
  );
}