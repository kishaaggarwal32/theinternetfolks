// src/components/Heading.js
import React from "react";
import Button from "./Button"; // Assuming you have a Button component

const Heading = ({ text, punchline, showButton, onButtonClick }) => {
  return (
    <div className="heading">
      <h1>{text}</h1>
      {punchline && <p className="punchline">{punchline}</p>}
      {showButton && <Button text="Get Started" onClick={onButtonClick} />}
    </div>
  );
};

export default Heading;
