import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNumber = 0;
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  return (
    <div className="app">
      <h2> Trivia! </h2>
      <Question
        question={data[questionNumber].question.text}
        choices={data[questionNumber].question.choices}
      />
      <button>Click for the correct answer</button>
      <br />
      <NextQuestion />
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
      button
    </div>
  );
}

function NextQuestion() {
  return <button>Next Question</button>;
}

function Answer(props) {
  return <div> {props.answer} </div>;
}

export default App;
