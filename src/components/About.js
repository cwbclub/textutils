import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        // border:'0.5px solid white'
      });
      setBtnText("Enable Light mode");
    }
  };

  return (
    <div style={myStyle}>
      <div className=" container p-4" style={myStyle}>
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <h2 style={myStyle}>About us</h2>
          </a>
        </header>
        <main>
          <h3>Get started</h3>
          <p className="fs-5 col-md-8">
            Quickly and easily get started with TextUtils, Text Utils is a text
            formatter websitw which helps to change youe text in uppercase,
            lowercase, wordcount, remove extra spaces which will be useful to
            peoples and many other features will be added soon.
          </p>

          <h3>Analyze your text</h3>
          <p>
            TextUtils gives you a way to analyze your texts quickly and
            efficiently
          </p>

          <h3>Free to use</h3>
          <p>
            TextUtil is a free charcter counter tool that provides instant
            character count and word count statics for a giveb text. TextUtils
            reports the number of words and characters. Thus it is suitable for
            writting text with word/character limit.{" "}
          </p>

          <h3>Browser Compatible</h3>
          <p>
            This word counter software works in any web browser sucha as Chrome,
            Firefox, Brave, Edge, Opera, etc.It suits to count characters in
            facebook, blog,books, excel documents, pdf's, essays, etc.
          </p>
        </main>
      </div>
      <div className="container p-3" style={myStyle}>
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-outline-secondary"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
