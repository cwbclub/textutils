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

    const handleLoClick = () =>{
      console.log("LowerCase button was clicked"+text)
      let newText = text.toLowerCase();
      setText(newText)
    }

      const handleClearClick = () =>{
      console.log("Clear"+text)
      let newText = '';
      setText(newText)
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
            placeholder="Enter your text here..."
            defaultValue={""}
          />
        </div>
            <button className="btn btn-outline-dark mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-dark mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-dark mx-2" onClick={handleClearClick}>Clear Text</button>
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
