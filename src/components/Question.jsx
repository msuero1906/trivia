import React from "react";
import Answer from "./Answer";
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
export default Question;
