// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Router,
} from "react-router-dom";
//import from raect router

// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
function App(props) {
  //where dark mode in enable or no

  //state
  const [mode, setmode] = useState(localStorage.getItem("mode") || "dark");
  const [navback, setnavback] = useState(
    localStorage.getItem("navback") || "white"
  );
  const [col, setcol] = useState(localStorage.getItem("col") || "black"); // use to change the color of background

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("navback", navback);
    localStorage.setItem("col", col);
  }, [mode, navback, col]);

  const [alert, setAlert] = useState(null); // for showing the alert`s
  //state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  if (mode === "light") {
    document.body.style.backgroundColor = "white";
    //  showAlert("Light mode has been enable","Success");
  } else {
    document.body.style.backgroundColor = "#04394f";
    // showAlert("Dark mode has been enable","Success");
  }

  //-------------------------------------------------background color-----------------------------------------//
  const backcol = (color) => {
    if (color === "red") {
      //red
      setnavback("#660c07");
      setmode("light");
    }
    if (color === "yellow") {
      //yellow
      setnavback("#665e07");
      setmode("light");
    }
    if (color === "green") {
      //green
      setnavback("#52055c");
      setmode("light");
    }
    if (color === "blue") {
      //blue
      setnavback("#072466");
      setmode("light");
    }
    if (color === "black") {
      setnavback("white");
      setmode("dark");
    }
  };
  document.body.style.backgroundColor = navback;
  // ----------------------------------------------background color-----------------------------------------//

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <Navbar title="TextUtils" about="about us" />\ */}
        <Navbar title="TextUtils" col={col} setcol={setcol} backcol={backcol} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Textform
                  heading="Enter the text type"
                  col={col}
                  setcol={setcol}
                  showAlert={showAlert}
                  mode={mode}
                  setmode={setmode}
                />
              }
            ></Route>
            <Route
              path="about"
              element={<About mode={mode} setmode={setmode} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
