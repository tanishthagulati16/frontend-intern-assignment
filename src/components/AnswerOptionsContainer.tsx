import AnswerOption from './AnswerOption';

interface AnswerOptionsContainerProps {
  options: string[];
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
  correctAnswer?: number;
  showFeedback?: boolean;
}

export default function AnswerOptionsContainer({
  options,
  selectedOption,
  onOptionSelect,
  correctAnswer,
  showFeedback = false,
}: AnswerOptionsContainerProps) {
  return (
    <div className="space-y-3 mb-10">
      {options.map((option, index) => (
        <AnswerOption
          key={index}
          text={option}
          isSelected={selectedOption === index}
          onClick={() => {
            if (!showFeedback) {
              onOptionSelect(index);
            }
          }}
          showFeedback={showFeedback}
          isCorrect={correctAnswer === index}
        />
      ))}
    </div>
  );
}