import { useState, useCallback } from "react";

import { shuffleAnswers } from '../../utils';
import QUESTIONS from "../../questions";
import quizCompleteImg from "../../assets/quiz-complete.png";

import { Timer } from '../';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;

  const quizIsComplete = ActiveQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };

  // const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[ActiveQuestionIndex].answers];

  return (
    <div id="quiz">
      <div id="question">
      <Timer timeOut={10000}  />
        <h2>{QUESTIONS[ActiveQuestionIndex].text}</h2>
        
        <ul id="answers">
          {shuffleAnswers(shuffledAnswers).map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
