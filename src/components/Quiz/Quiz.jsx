import { useState } from "react";

import QUESTIONS from "../../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }

  return (
    <div id="quiz">
      <div id="question">
      <h2>{QUESTIONS[ActiveQuestionIndex].text}</h2>

      <ul id="answers">
        {QUESTIONS[ActiveQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}
