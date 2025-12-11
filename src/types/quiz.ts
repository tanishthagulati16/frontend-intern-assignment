export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  questions: Question[];
  totalQuestions: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  score: number;
  isQuizComplete: boolean;
  selectedAnswer: number | null;
}