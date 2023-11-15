import { useState } from "react";

import QUESTIONS from "../../questions";

export default function Quiz() {

  

  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestionIndex = userAnswers.length;
  const shuffledAnswers = [...QUESTIONS[ActiveQuestionIndex].answers]; 
  // shuffledAnswers.sort(() => Math.random() - 0.5);

  // using Fisher-Yates shuffle algorithm
  const shuffleAnswers = (array) => {
    // Loop over the array from the last element to the first
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      let j = Math.floor (Math.random () * (i + 1));
      // Swap the elements at i and j
      [array [i], array [j]] = [array [j], array [i]];
    }
    // Return the shuffled array
    return array;
  }

  

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }

  return (
    <div id="quiz">
      <div id="question">
      <h2>{QUESTIONS[ActiveQuestionIndex].text}</h2>

      <ul id="answers">
        {shuffleQuestions(shuffledAnswers).map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}
