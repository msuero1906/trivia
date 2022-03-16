import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

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
      {
        data[questionNumber].question.choices[
          data[questionNumber].question.correct_choice_index
        ]
      }
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
