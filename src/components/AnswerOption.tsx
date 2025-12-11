interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function AnswerOption({
  text,
  isSelected,
  onClick,
}: AnswerOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-md border transition-all text-center font-medium ${
        isSelected
          ? 'bg-blue-200 border-blue-400 text-blue-900'
          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'
      }`}
    >
      {text}
    </button>
  );
}