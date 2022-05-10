import PropTypes from "prop-types";
import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="flexSwitchCheckDefalult" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefalult">
                Enable DarkMode
              </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "AboutUs",
};
