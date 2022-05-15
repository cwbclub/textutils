import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       // border:'0.5px solid white'
  //     });
  //     setBtnText("Enable Light mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  }

  return (
    <div style={myStyle} className='my-4'>
      <div className=" container p-4" style={myStyle}  >
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <h2 style={myStyle}>About us</h2>
          </a>
        </header>
        <main style={myStyle}    >
          <h3>Get started</h3>
          <p >
            Quickly and easily get started with TextUtils, Text Utils is a text
            formatter websitw which helps to change youe text in uppercase,
            lowercase, wordcount, remove extra spaces which will be useful to
            peoples and many other features will be added soon.
          </p>

          <h4>Analyze your text</h4>
          <p>
            TextUtils gives you a way to analyze your texts quickly and
            efficiently
          </p>

          <h4>Free to use</h4>
          <p>
            TextUtil is a free charcter counter tool that provides instant
            character count and word count statics for a giveb text. TextUtils
            reports the number of words and characters. Thus it is suitable for
            writting text with word/character limit.{" "}
          </p>

          <h4>Browser Compatible</h4>
          <p>
            This word counter software works in any web browser sucha as Chrome,
            Firefox, Brave, Edge, Opera, etc.It suits to count characters in
            facebook, blog,books, excel documents, pdf's, essays, etc.
          </p>
        </main>
      </div>
      <div className="container p-3" style={myStyle}>
        {/* <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-outline-secondary"
        >
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
