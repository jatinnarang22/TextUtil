import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const colorred = () => {
    if (
      props.col === "black" ||
      props.col === "#949163" ||
      props.col === "#b66fbf" ||
      props.col === "#5d7f80"
    ) {
      props.setcol("#bf8c94");
      props.backcol("red");
    } else {
      props.setcol("black");
      props.backcol("black");
    }
  };
  const coloryellow = () => {
    if (
      props.col === "black" ||
      props.col === "#bf8c94" ||
      props.col === "#b66fbf" ||
      props.col === "#5d7f80"
    ) {
      props.setcol("#949163");
      props.backcol("yellow");
    } else {
      props.setcol("black");
      props.backcol("black");
    }
  };
  const colorgreen = () => {
    if (
      props.col === "black" ||
      props.col === "#949163" ||
      props.col === "#bf8c94" ||
      props.col === "#5d7f80"
    ) {
      props.setcol("#b66fbf");
      props.backcol("green");
    } else {
      props.setcol("black");
      props.backcol("black");
    }
  };
  const colorblue = () => {
    if (
      props.col === "black" ||
      props.col === "#949163" ||
      props.col === "#b66fbf" ||
      props.col === "#bf8c94"
    ) {
      props.setcol("#5d7f80");
      props.backcol("blue");
    } else {
      props.setcol("black");
      props.backcol("black");
    }
  };

  return (
    <div>
      <nav
        className={"navbar navbar-expand-lg navbar-dark "}
        style={{ backgroundColor: props.col }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          {/* <a className="navbar-brand" href="/">
            {props.title}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
                {/* <a className="nav-link" href="/about">
                  {props.about}
                </a> */}
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            <button
              onClick={colorred}
              style={{
                backgroundColor: "red",
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            />
            <button
              onClick={coloryellow}
              style={{
                backgroundColor: "yellow",
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            />
            <button
              onClick={colorgreen}
              style={{
                backgroundColor: "#e005fc",
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            />
            <button
              onClick={colorblue}
              style={{
                backgroundColor: "blue",
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  about: "About",
};
