import { useState } from 'react';
import { quizData } from '../utils/quizData';
import { getCorrectAnswers, calculateScore } from '../utils/helpers';
import Header from './Header';
import ProgressBar from './ProgressBar';
import QuestionDisplay from './QuestionDisplay';
import AnswerOptionsContainer from './AnswerOptionsContainer';
import NavigationButtons from './NavigationButtons';
import ScoreDisplay from './ScoreDisplay';

export default function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    Array(quizData.totalQuestions).fill(null)
  );
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.totalQuestions - 1;

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = getCorrectAnswers(quizData.questions);
    const finalScore = calculateScore(userAnswers, correctAnswers);
    setScore(finalScore);
    setIsQuizComplete(true);
  };

  const handleStartAgain = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quizData.totalQuestions).fill(null));
    setIsQuizComplete(false);
    setScore(0);
  };

  if (isQuizComplete) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
          <ScoreDisplay
            score={score}
            totalQuestions={quizData.totalQuestions}
            onStartAgain={handleStartAgain}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <Header
          title="Test Your Knowledge"
          subtitle="Answer all questions to see your results"
        />
        <ProgressBar
          totalQuestions={quizData.totalQuestions}
          currentQuestion={currentQuestionIndex + 1}
        />
        <QuestionDisplay
          questionNumber={currentQuestionIndex + 1}
          question={currentQuestion.question}
        />
        <AnswerOptionsContainer
          options={currentQuestion.options}
          selectedOption={selectedAnswer}
          onOptionSelect={handleOptionSelect}
        />
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          canGoPrevious={currentQuestionIndex > 0}
          canGoNext={selectedAnswer !== null && !isLastQuestion}
          isLastQuestion={isLastQuestion}
          isAnswerSelected={selectedAnswer !== null}
        />
      </div>
    </div>
  );
}