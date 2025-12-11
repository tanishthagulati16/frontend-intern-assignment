import { motion } from 'framer-motion';

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
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          canGoPrevious
            ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        ← Previous
      </motion.button>

      {isLastQuestion ? (
        <motion.button
          onClick={onSubmit}
          disabled={!isAnswerSelected}
          whileHover={isAnswerSelected ? { scale: 1.05 } : {}}
          whileTap={isAnswerSelected ? { scale: 0.95 } : {}}
          className={`px-6 py-2 rounded-md font-medium transition-all ${
            isAnswerSelected
              ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </motion.button>
      ) : (
        <motion.button
          onClick={onNext}
          disabled={!canGoNext}
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            canGoNext
              ? 'bg-blue-200 text-blue-900 hover:bg-blue-300 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next →
        </motion.button>
      )}
    </div>
  );
}