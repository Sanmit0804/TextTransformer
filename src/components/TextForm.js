import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
  };
  const handleResetClick = () => {
    console.log("Lowercase was clicked");
    setText("");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter the Text
          </label>
          <textarea
            placeholder="Your text..."
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="m-2" onClick={handleUpClick}>Conver to UpperCase</button>
        <button className="m-2" onClick={handleLowClick}>Conver to LowerCase</button>
        <button className="m-2" onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
}
