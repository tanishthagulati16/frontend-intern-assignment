interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  isAnswerSelected: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  onSubmit,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  isAnswerSelected,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-10">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          canGoPrevious
            ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        ← Previous
      </button>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          disabled={!isAnswerSelected}
          className={`px-6 py-2 rounded-md font-medium transition-all ${
            isAnswerSelected
              ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            canGoNext
              ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next →
        </button>
      )}
    </div>
  );
}