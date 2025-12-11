import { motion } from 'framer-motion';

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
  const isPerfect = percentage === 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-4"
      >
        Keep Learning!
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-blue-900 mb-4"
      >
        Your Final score is
      </motion.h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        className={`text-8xl font-bold text-blue-900 italic mb-8 inline-block border-4 rounded px-6 py-4 ${
          isPerfect ? 'border-green-500 bg-green-50' : 'border-pink-500 bg-white'
        }`}
      >
        {percentage}%
      </motion.div>

      {isPerfect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl mb-6"
        >
          🎉 Perfect Score! 🎉
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <button
          onClick={onStartAgain}
          className="px-6 py-3 bg-blue-200 text-blue-900 rounded-md font-medium hover:bg-blue-300 transition-all"
        >
          Start Again
        </button>
      </motion.div>
    </motion.div>
  );
}