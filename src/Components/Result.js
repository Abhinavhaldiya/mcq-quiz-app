// Result.js
import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Your Quiz Result</h2>
      <p>
        You scored {score} out of {totalQuestions} questions.
      </p>
    </div>
  );
};

export default Result;
