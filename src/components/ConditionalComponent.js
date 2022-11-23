import React, { useState } from "react";

const ConditionalComponent = () => {
  var [display, setDisplay] = useState(true);
  let output;
  display
    ? (output = "This is for testing conditional componenet")
    : (output = "Noooooooooooooo");
  const changeState = () => {
    setDisplay((display = !display));
  };
  return (
    <div>
      <h1>{output}</h1>
      <button onClick={changeState}>Change Component</button>
    </div>
  );
};

export default ConditionalComponent;
