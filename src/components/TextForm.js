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

    const [text, setText] = useState('Enter text hear...');
    // setText('new text'); to change text variable
  return (
    <>
        <h1>{props.heading} </h1>  
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            defaultValue={""}
          />
        </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'textarea'
}
