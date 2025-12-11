interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}

export default function ProgressBar({
  totalQuestions,
  currentQuestion,
}: ProgressBarProps) {
  return (
    <div className="flex gap-2 justify-center mb-10">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <div
          key={index}
          className={`h-1 w-8 transition-all ${
            index < currentQuestion
              ? 'bg-blue-900'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}