import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearText = () => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text Copied..!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleRemoveExtraSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className={`container text-${props.mode=== 'light'?'dark': 'light'}`}>
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
        <button className="mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="mx-1 my-1" onClick={handleCopy}>
          Copy to ClipBoard
        </button>
        <button className="mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="mx-1 my-1" onClick={handleRemoveExtraSpace}>
          Remove Extra Spaces
        </button>
        <div className="container">
          <h3 className="my-3">Your Text Summary</h3>
          <p>
            {text.split(".").length-1} Sentence, {text.split(" ").length===1 ? 0:text.split(" ").length} Words and {text.length} Characters
          </p>
        </div>
      </div>
    </>
  );
}
