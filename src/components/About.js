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

          {/* <hr className="col-3 col-md-2 mb-5" /> */}
          <div className="row g-4">
            <div className="col-md-6">
              <h3>Starter projects</h3>
              <p>
                Ready to beyond the starter template? Check out these open
                source projects that you can quickly duplicate to a new GitHub
                repository.
              </p>
              <ul className="icon-list">
                <li>
                  <a
                    href="https://github.com/twbs/bootstrap-npm-starter"
                    rel="noopener"
                    target="_blank"
                  >
                    Bootstrap npm starter
                  </a>
                </li>
                <li className="text-muted">
                  Bootstrap Parcel starter (coming soon!)
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Guides</h3>
              <p>Read more detailed instructions and documentation on.</p>
              <ul className="icon-list">
                <li>
                  <a href="/docs/5.1/getting-started/introduction/">
                    Bootstrap quick start guide
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/">
                    W3Schools Online Web Tutorials
                  </a>
                </li>
                <li>
                  <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
                </li>
                <li>
                  <a href="/docs/5.1/getting-started/contribute/">
                    Contributing to Bootstrap
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
