import { useState } from "react";

import QUESTIONS from "../../questions";
import quizCompleteImg from "../../assets/quiz-complete.png";

import { Timer } from '../';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;

  console.log(ActiveQuestionIndex)

  const quizIsComplete = ActiveQuestionIndex === QUESTIONS.length;

  // using Fisher-Yates shuffle algorithm
  const shuffleAnswers = (array) => {
    // Loop over the array from the last element to the first
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };

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
      <Timer timeOut={10000} onTimeOut={() => handleSelectAnswer(null)} />
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
