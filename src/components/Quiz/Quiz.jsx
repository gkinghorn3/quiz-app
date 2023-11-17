import { useState, useCallback } from "react";

import QUESTIONS from "../../questions";
import quizCompleteImg from "../../assets/quiz-complete.png";

import { Question } from "../";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // state used to monitor if user answered correctly or not & also derive logic for setting active question index
  const [answerState, setAnswerState] = useState("");

  // if user has not answered, question index = length of user asnwer array (resulting in incre
  //  menting the index). if user has answered, question index = length of user answer array - 1 which will keep
  // hold the question allowing the styling to be added and seen on the buttons based on the user answer.
  // after two seconds answerState is set to "" which will increment the active question index
  const ActiveQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = ActiveQuestionIndex === QUESTIONS.length;

  // handle users answer
  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");
      setUserAnswers((prev) => [...prev, selectedAnswer]);

      //wait 1 second before setting answer state to correct or wrong
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[ActiveQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        // wait 2 seconds before setting answer state to empty again which will increment the active question index
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

  return (
    <div id="quiz">
     
        <Question 
        key={ActiveQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        answers = {QUESTIONS[ActiveQuestionIndex].answers}
        questionText = {QUESTIONS[ActiveQuestionIndex].text}
        handleSkipAnswer = {handleSkipAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
        />

    </div>
  );
}
