import React, { useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Answer from "./Answer";

function App() {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className="app">
      <h2> Trivia! </h2>
      <Question
        question={data[questionNumber].question.text}
        choices={data[questionNumber].question.choices}
      />
      <button onClick={() => setAnswerDisplayed(true)}>
        Click for the correct answer
      </button>
      <br />
      {answerDisplayed === true &&
        data[questionNumber].question.choices[
          data[questionNumber].question.correct_choice_index
        ]}
      <br />
      <NextQuestion
        setQuestionNumber={setQuestionNumber}
        setAnswerDisplayed={setAnswerDisplayed}
      />
    </div>
  );
}

function Question(props) {
  return (
    <div>
      {props.question}
      {props.choices.map(function (currentAnswer) {
        return <Answer answer={currentAnswer} />;
      })}
    </div>
  );
}

function NextQuestion(props) {
  function handleNextQuestionClick() {
    props.setQuestionNumber((questionNumber) => questionNumber + 1);
    props.setAnswerDisplayed(false);
  }
  return <button onClick={handleNextQuestionClick}>Next Question</button>;
}

export default App;
