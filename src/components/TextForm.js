import React, {useState} from "react";
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase button was clicked"+text)
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("OnChange")
        setText( event.target.value);
    }

    const [text, setText] = useState('');
    // setText('new text'); to change text variable
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading} </h2>  
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            placeholder="Enter your text hear..."
            defaultValue={""}
          />
        </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008* text.split(" ").length}Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'textarea'
}
