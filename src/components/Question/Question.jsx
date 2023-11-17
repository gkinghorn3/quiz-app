import { Timer, Answers } from "../";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState, 
  onSkipAnswer

}) {
  return (
    <div id="question">
      <Timer
        
        timeOut={10000}
        onTimeOut={onSkipAnswer}
      />
      <h2>{questionText}</h2>

      <Answers
        
        answers={answers}
        onSelect={onSelectAnswer}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}
