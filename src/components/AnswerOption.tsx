interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  showFeedback?: boolean;
  isCorrect?: boolean;
}

export default function AnswerOption({
  text,
  isSelected,
  onClick,
  showFeedback = false,
  isCorrect = false,
}: AnswerOptionProps) {
  return (
    <button
      onClick={onClick}
      disabled={showFeedback}
      className={`w-full p-4 rounded-md border transition-all text-center font-medium ${
        showFeedback && isSelected && isCorrect
          ? 'bg-green-100 border-green-400 text-green-900 shake'
          : showFeedback && isSelected && !isCorrect
          ? 'bg-red-100 border-red-400 text-red-900 shake'
          : isSelected
          ? 'bg-blue-200 border-blue-400 text-blue-900'
          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'
      }`}
    >
      {text}
      {showFeedback && isSelected && isCorrect && ' ✓'}
      {showFeedback && isSelected && !isCorrect && ' ✗'}
    </button>
  );
}