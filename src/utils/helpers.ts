import type { Question } from '../types/quiz';

export const calculateScore = (
  userAnswers: (number | null)[],
  correctAnswers: number[]
): number => {
  let correct = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      correct++;
    }
  });
  return correct;
};

export const getScorePercentage = (score: number, total: number): number => {
  return Math.round((score / total) * 100);
};

export const getCorrectAnswers = (questions: Question[]): number[] => {
  return questions.map(q => q.correctAnswer);
};