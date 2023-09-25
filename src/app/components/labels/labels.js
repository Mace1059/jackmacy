import React from "react";
import Label from "./label";

const Labels = (props) => {
  const shuffled = props.labels.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="label-list">
      {shuffled.map((label) => (
        <Label key={label.name} text={label.text} color={label.color}></Label>
      ))}
    </div>
  );
};

export default Labels;
