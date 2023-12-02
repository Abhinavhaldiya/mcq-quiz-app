// Quiz.js
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Result from './Result';
const questions = [
  // Your questions and correct answers go here
  // Example: { question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      // You can navigate to a result page or display the result component here
      console.log('End of quiz. Your score:', score);
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
