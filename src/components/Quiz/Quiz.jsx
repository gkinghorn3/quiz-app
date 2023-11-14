import { useState } from "react";

import QUESTIONS from "../../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <h2>{QUESTION[ActiveQuestionIndex].text}</h2>

      <ul>
        {QUESTIONS[ActiveQuestionIndex].answers.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
    </div>
  );
}
