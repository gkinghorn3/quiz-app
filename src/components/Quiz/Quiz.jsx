import { useState, useCallback } from "react";

import QUESTIONS from "../../questions";
import quizCompleteImg from "../../assets/quiz-complete.png";

import { Question } from "../";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;

  const quizIsComplete = ActiveQuestionIndex === QUESTIONS.length;

  // handle users answer
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }, []);

  // set answer to null if time runs out with no answer selected
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // if quiz is complete show summary
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={ActiveQuestionIndex}
        index={ActiveQuestionIndex}
        onSelectAnswer={handleSelectAnswer}

        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
