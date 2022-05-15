import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);

  };

  const handleLoClick = () => {
    console.log("LowerCase button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowerercase", "success")
  };

  // This binary is not working on whole , need to be fixed
  const handleBinaryClick = () => {
    console.log("Binary was clicked" + text);

    for (var i = 0; i < text.length; i++) {
      let newText = text[i].charCodeAt(0).toString(2) + " ";
      setText(newText);
    }
    props.showAlert("Converted to Binary", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success")
  };

  const handleClearClick = () => {
    console.log("Clear" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")
  };

  const [text, setText] = useState("");
  // setText('new text'); to change text variable
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mt-5 mb-3 pt-40">{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#00192c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows={8}
            placeholder="Enter your text here..."
            defaultValue={""}
          />
        </div>
        <button className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-dark mx-2 my-1"
          onClick={handleBinaryClick}
        >
          Convert to Binary
        </button>

        <button
          className="btn btn-dark mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button
          className="btn btn-outline-danger mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-2 my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}Minutes to read</p>
        <h3>Preview</h3>
        <p className="border p-4">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview!"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "textarea",
};
