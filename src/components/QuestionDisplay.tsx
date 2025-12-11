import { motion } from 'framer-motion';

interface QuestionDisplayProps {
  questionNumber: number;
  question: string;
}

export default function QuestionDisplay({
  questionNumber,
  question,
}: QuestionDisplayProps) {
  return (
    <motion.div
      key={questionNumber}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-blue-100 rounded-lg p-6 mb-8 text-center"
    >
      <p className="text-blue-900 font-medium text-lg">
        {questionNumber}. {question}
      </p>
    </motion.div>
  );
}