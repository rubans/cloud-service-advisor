import React, { useState } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import ResultView from './components/ResultView';
import decisionData from './data/decisionTree.json';

function App() {
  const [currentNodeId, setCurrentNodeId] = useState(decisionData.startNodeId);
  const [history, setHistory] = useState([]);

  const currentNode = decisionData.nodes[currentNodeId];

  const handleOptionSelect = (option) => {
    // Save current step to history
    setHistory([
      ...history,
      {
        questionText: currentNode.text,
        selectedOptionLabel: option.label,
        nodeId: currentNodeId
      }
    ]);

    // Move to next node
    setCurrentNodeId(option.nextId);
  };

  const handleReset = () => {
    setCurrentNodeId(decisionData.startNodeId);
    setHistory([]);
  };

  const handleBack = () => {
    if (history.length === 0) return;

    const newHistory = [...history];
    const lastStep = newHistory.pop();

    setHistory(newHistory);
    // Determine where to go back to (the previous question)
    // Actually we should just restore the ID from the last step or just use the history state.
    // The history stores the nodeId of the question asked. 
    // So to going back means going to history[last].nodeId

    // However, if we pop the last step, we want to go back to the node that generated that step.
    setCurrentNodeId(lastStep.nodeId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="w-full">
          {currentNode.type === 'question' ? (
            <QuestionCard
              question={currentNode}
              onOptionSelect={handleOptionSelect}
              onBack={handleBack}
              canGoBack={history.length > 0}
            />
          ) : (
            <ResultView
              result={currentNode}
              history={history}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cloud Service Advisor. Not affiliated with Google.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
