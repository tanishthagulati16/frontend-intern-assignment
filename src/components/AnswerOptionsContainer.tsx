import AnswerOption from './AnswerOption';

interface AnswerOptionsContainerProps {
  options: string[];
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
}

export default function AnswerOptionsContainer({
  options,
  selectedOption,
  onOptionSelect,
}: AnswerOptionsContainerProps) {
  return (
    <div className="space-y-3 mb-10">
      {options.map((option, index) => (
        <AnswerOption
          key={index}
          text={option}
          isSelected={selectedOption === index}
          onClick={() => onOptionSelect(index)}
        />
      ))}
    </div>
  );
}