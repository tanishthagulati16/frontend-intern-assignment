interface QuestionDisplayProps {
  questionNumber: number;
  question: string;
}

export default function QuestionDisplay({
  questionNumber,
  question,
}: QuestionDisplayProps) {
  return (
    <div className="bg-blue-100 rounded-lg p-6 mb-8 text-center">
      <p className="text-blue-900 font-medium text-lg">
        {questionNumber}. {question}
      </p>
    </div>
  );
}