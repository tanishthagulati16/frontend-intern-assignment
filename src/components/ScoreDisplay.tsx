interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onStartAgain: () => void;
}

export default function ScoreDisplay({
  score,
  totalQuestions,
  onStartAgain,
}: ScoreDisplayProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center">
      <p className="text-gray-600 mb-4">Keep Learning!</p>
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Your Final score is
      </h2>
      <div className="text-8xl font-bold text-blue-900 italic mb-8 inline-block border-4 border-pink-500 px-6 py-4 rounded">
        {percentage}%
      </div>
      <div className="mt-8">
        <button
          onClick={onStartAgain}
          className="px-6 py-3 bg-blue-200 text-blue-900 rounded-md font-medium hover:bg-blue-300 transition-all"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}