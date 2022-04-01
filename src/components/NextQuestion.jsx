import React from "react";
function NextQuestion(props) {
  function handleNextQuestionClick() {
    props.setQuestionNumber((questionNumber) => questionNumber + 1);
    props.setAnswerDisplayed(false);
  }
  return <button onClick={handleNextQuestionClick}>Next Question</button>;
}
export default NextQuestion;
