import { useRef } from "react";

import { shuffleAnswers } from "../../utils";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    //create new array of answers to be shuffed (leaving the intial one untouched to indentify the correct answer)
    const newQuestionAnswerArray = [...answers];
    // shuffle the answers using the shuffleAnswers function that has been imported from .utils
    shuffledAnswers.current = shuffleAnswers(newQuestionAnswerArray);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClasses = "";
        const isSelected = selectedAnswer === answer;

        // if user has answered, and isSelected is true set className to selected
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        // if user has answered, answer state is correct or wrong and is selectet, set className to correct or wrong
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
