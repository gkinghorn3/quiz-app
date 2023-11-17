import { useState, useCallback } from "react";

import { shuffleAnswers } from "../../utils";
import QUESTIONS from "../../questions";
import quizCompleteImg from "../../assets/quiz-complete.png";

import { Timer } from "../";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // state used to monitor if user answered correctly or not 
  const [answerState, setAnswerState] = useState("");

  const ActiveQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = ActiveQuestionIndex === QUESTIONS.length;

  // handle users answer
  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");

      setUserAnswers((prev) => [...prev, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[ActiveQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [ActiveQuestionIndex]
  );

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

  //create new array of answers to be shuffed (leaving the intial one untouched to indentify the correct answer)
  const shuffledAnswers = [...QUESTIONS[ActiveQuestionIndex].answers];

  return (
    <div id="quiz">
      <div id="question">
        <Timer
          key={ActiveQuestionIndex}
          timeOut={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[ActiveQuestionIndex].text}</h2>

        <ul id="answers">

          // take shuffled answer and map them to buttons with styling dependant on answerState 
          {shuffleAnswers(shuffledAnswers).map((answer) => {
            let cssClasses = "";  
            const isSelected = userAnswers[userAnswers.length - 1] === answer;

            // if user has answered, and isSelected is true set className to selected
            if (answerState === 'answered' && isSelected) {
              cssClasses = "selected";
            }

            // if user has answered, answer state is correct or wrong and is selectet, set className to correct or wrong
            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
              cssClasses = answerState;
            }


            return (
              <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>
                {answer}
              </button>
            </li>)

            
            })}
        </ul>
      </div>
    </div>
  );
}
