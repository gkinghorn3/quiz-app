import { useState, useCallback } from "react";

import QUESTIONS from "../../questions.js";

import { Timer, Answers } from "../";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = useCallback(
    (answer) => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: null,
      });

      setTimeout(() => {
        setAnswer({
          selectedAnswer: answer,
          isCorrect: QUESTIONS[index].answers[0] === answer,
        });

        setTimeout(() => {
          onSelectAnswer(answer);
        }, 2000);
      }, 1000);
    },
    [onSelectAnswer]
  );

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <Timer
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>

      <Answers
        answers={QUESTIONS[index].answers}
        onSelect={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
}
